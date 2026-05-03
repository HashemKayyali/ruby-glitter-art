/**
 * One-shot script: compress + resize gallery images in place.
 *
 *   node scripts/optimize-images.mjs
 *
 * Targets every `glitter-*` and `bride-room-*` file in src/assets/images.
 * Re-runs are safe — already-small files are skipped.
 */
import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, extname, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, '..', 'src', 'assets', 'images');

const MAX_WIDTH = 1400;
const JPEG_QUALITY = 78;
// Skip files already at or below this size — they're fine.
const SKIP_BELOW_BYTES = 220 * 1024;

const PATTERN = /^(glitter|bride-room)-\d+\.(jpe?g|png|webp)$/i;

async function processFile(file) {
  const inPath = join(IMAGES_DIR, file);
  const stats = await stat(inPath);

  if (stats.size < SKIP_BELOW_BYTES) {
    console.log(`skip   ${file} (${(stats.size / 1024).toFixed(0)} KB)`);
    return;
  }

  const tmpPath = inPath + '.tmp';
  const before = stats.size;

  const ext = extname(file).toLowerCase();
  let pipeline = sharp(inPath, { failOn: 'truncated' }).rotate(); // honor EXIF
  pipeline = pipeline.resize({
    width: MAX_WIDTH,
    withoutEnlargement: true,
    fit: 'inside',
  });

  if (ext === '.png') {
    // Keep PNG as PNG with palette compression
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: JPEG_QUALITY });
  } else {
    pipeline = pipeline.jpeg({
      quality: JPEG_QUALITY,
      progressive: true,
      mozjpeg: true,
    });
  }

  await pipeline.toFile(tmpPath);
  const after = (await stat(tmpPath)).size;

  if (after >= before) {
    // Optimized version is bigger — bail out
    await unlink(tmpPath);
    console.log(`keep   ${file} (already smaller than re-encode)`);
    return;
  }

  await unlink(inPath);
  await rename(tmpPath, inPath);
  const pct = ((1 - after / before) * 100).toFixed(0);
  console.log(
    `✓ ${file}  ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB  (-${pct}%)`
  );
}

async function main() {
  const files = (await readdir(IMAGES_DIR)).filter((f) => PATTERN.test(f));
  files.sort();
  console.log(`Found ${files.length} files in ${IMAGES_DIR}`);
  for (const file of files) {
    try {
      await processFile(file);
    } catch (err) {
      console.error(`  ✗ ${file}:`, err.message);
    }
  }
}

await main();
