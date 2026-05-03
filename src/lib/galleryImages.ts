/**
 * Auto-discovered gallery images.
 *
 * Drop a new file into `src/assets/images/` named `glitter-{N}.jpg` or
 * `bride-room-{N}.jpg` and it will appear in the matching gallery on the next
 * dev reload / build. No code edits required.
 *
 * Files are ordered by the numeric suffix, so `glitter-10.jpg` comes after
 * `glitter-9.jpg` (not after `glitter-1.jpg`).
 */

export type GalleryImage = {
  src: string;
  alt: string;
  category?: string;
  index: number;
};

const glitterModules = import.meta.glob(
  '../assets/images/glitter-*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

const brideRoomModules = import.meta.glob(
  '../assets/images/bride-room-*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

function extractNumber(path: string): number {
  const match = path.match(/-(\d+)\.[a-zA-Z0-9]+$/);
  return match ? parseInt(match[1], 10) : 0;
}

function buildList(
  modules: Record<string, string>,
  altPrefix: string
): GalleryImage[] {
  return Object.entries(modules)
    .map(([path, src]) => ({ path, src, num: extractNumber(path) }))
    .sort((a, b) => a.num - b.num)
    .map(({ src, num }, idx) => ({
      src,
      alt: `${altPrefix} ${num} by Ruby Arts`,
      index: idx,
    }));
}

export const glitterImages: GalleryImage[] = buildList(
  glitterModules,
  'Glitter art'
);

export const brideRoomImages: GalleryImage[] = buildList(
  brideRoomModules,
  'Bride room decoration'
);

export const heroFloatingImages: string[] = [
  ...glitterImages.slice(0, 5).map((i) => i.src),
  ...brideRoomImages.slice(0, 5).map((i) => i.src),
].filter(Boolean);

const allImages = [...glitterImages, ...brideRoomImages];

export function pickHeroImage(serviceId: 'glitter' | 'bride-room'): string {
  if (serviceId === 'glitter') return glitterImages[0]?.src ?? '';
  return brideRoomImages[0]?.src ?? '';
}

export function totalImageCount(): number {
  return allImages.length;
}
