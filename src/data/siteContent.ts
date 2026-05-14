import {
  glitterImages,
  brideRoomImages,
  heroFloatingImages,
  pickHeroImage,
} from '../lib/galleryImages';

export const siteContent = {
  brandDetails: {
    name: "Ruby Arts",
    whatsappUrl: "https://wa.me/962796283478",
    instagramUrl: "https://instagram.com/rubymo02",
    emailAddress: "rubabeirta@gmail.com",
    emailUrl: "mailto:rubabeirta@gmail.com",
  },
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Glitter", href: "#glitter-gallery" },
    { label: "Bride Room", href: "#bride-gallery" },
    { label: "Styles", href: "#styles" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    badge: "EVENT ART & DECORATION",
    headline: "Make Every Moment\nShine Beautifully",
    description:
      "From sparkling glitter art to elegant bride room decoration, Ruby Arts creates photo-ready details for weddings, birthdays, festivals, private events, and unforgettable celebrations.",
    primaryCta: "Book Your Moment",
    secondaryCta: "Explore Services",
  },
  heroFloatingImages,
  signatureServices: [
    {
      id: "glitter",
      title: "Glitter Art",
      badge: "FACE & BODY ART",
      description: "Sparkling face and body glitter looks for birthdays, kids parties, festivals, private events, and brand activations.",
      image: pickHeroImage('glitter'),
      cta: "View Glitter Gallery",
      target: "#glitter-gallery"
    },
    {
      id: "bride-room",
      title: "Bride Room Decoration",
      badge: "BRIDAL ROOM STYLING",
      description: "Elegant bride room setups with balloons, Bride lettering, soft colors, and photo-ready wedding morning details.",
      image: pickHeroImage('bride-room'),
      cta: "View Bride Room Gallery",
      target: "#bride-gallery"
    }
  ],
  glitterGalleryImages: glitterImages,
  brideRoomGalleryImages: brideRoomImages,
  glitterServices: {
    title: "Glitter Art for Events",
    description:
      "Face and body glitter designs made for birthdays, kids parties, festivals, private events, brand activations, and moments that deserve to sparkle.",
    items: [
      {
        title: "Face Glitter",
        description: "Custom glitter looks for cheeks, eyes, and face details.",
      },
      {
        title: "Body Glitter",
        description: "Sparkling body details for bold event photos.",
      },
      {
        title: "Kids Parties",
        description: "Fun and colorful glitter designs for children’s celebrations.",
      },
      {
        title: "Festivals",
        description: "Bright glitter looks that shine under lights.",
      },
      {
        title: "Brand Activations",
        description: "Glitter booths and branded sparkle moments.",
      },
      {
        title: "Private Events",
        description: "Custom glitter looks for personal celebrations.",
      },
    ],
  },
  brideRoomServices: {
    title: "Bride Room Decoration",
    description:
      "Elegant bridal room styling with balloons, Bride lettering, soft colors, glowing details, and photo-ready wedding morning setups.",
    items: [
      {
        title: "Bride Balloon Setup",
        description: "Elegant balloon arrangements designed around the bride’s room.",
      },
      {
        title: "Bride Lettering",
        description: "Beautiful Bride lettering as a main photo-ready detail.",
      },
      {
        title: "Wedding Morning Styling",
        description: "Soft setup details for the morning of the wedding.",
      },
      {
        title: "Photo Corner Setup",
        description: "A clean and elegant corner made for photos and memories.",
      },
      {
        title: "Soft Color Themes",
        description: "Blush, pearl, champagne, gold, and custom color palettes.",
      },
      {
        title: "Custom Bridal Details",
        description: "Personal touches that make the room feel special.",
      },
    ],
  },
  stats: [
    { value: "2", label: "Signature Services" },
    { value: "50+", label: "Events Styled" },
    { value: "500+", label: "Sparkling Moments" },
    { value: "100%", label: "Photo-Ready Details" },
  ],
  eventStyles: {
    title: "Choose Your Event Style",
    description:
      "Pick a sparkle look or a bridal setup mood — Ruby Arts turns it into a photo-ready moment.",
    items: [
      {
        title: "Fairy Sparkle",
        description: "Soft pink glitter with stars, gems, and magical highlights.",
        service: "Glitter Art"
      },
      {
        title: "Festival Glow",
        description: "Bold neon glitter made to shine under event lights.",
        service: "Glitter Art"
      },
      {
        title: "Birthday Magic",
        description: "Colorful kid-friendly glitter designs for happy celebrations.",
        service: "Glitter Art"
      },
      {
        title: "Blush Bride Room",
        description: "Soft blush and pearl bridal room styling with elegant balloon details.",
        service: "Bride Room Decoration"
      },
      {
        title: "Golden Bride Setup",
        description: "Champagne gold and warm glowing details for a wedding morning room.",
        service: "Bride Room Decoration"
      },
      {
        title: "Bride Lettering Moment",
        description: "A photo-ready Bride lettering setup with balloons and soft decorative details.",
        service: "Bride Room Decoration"
      },
    ],
  },
  whyBook: {
    title: "Why Clients Love Ruby Arts",
    points: [
      "Two creative services in one brand",
      "Glitter looks and bridal setups",
      "Photo-ready details",
      "Custom styling for every moment",
      "Perfect for weddings, birthdays, and events",
      "Easy booking through WhatsApp or Instagram"
    ],
  },
  finalCta: {
    headline: "Ready to Style Your Next Moment?",
    description:
      "Book Ruby Arts for glitter art, bride room decoration, birthdays, festivals, wedding mornings, private events, and brand activations.",
  },
};
