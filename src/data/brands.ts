export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  color: string;
  items: number;
};

export const BRANDS: Brand[] = [
  {
    slug: "sunset-toys",
    name: "Sunset Toys",
    tagline: "Warm-toned collectibles with hand-painted finishes.",
    color: "#F4845F",
    items: 24,
  },
  {
    slug: "greenleaf",
    name: "Greenleaf Studio",
    tagline: "Eco resin figurines cast in small batches.",
    color: "#6BBF7A",
    items: 18,
  },
  {
    slug: "bubblegum",
    name: "Bubblegum Lab",
    tagline: "Playful pastel characters for shelf-front display.",
    color: "#E882B4",
    items: 31,
  },
  {
    slug: "skyline",
    name: "Skyline Works",
    tagline: "Sharp, sculpted heroes in cool blue palettes.",
    color: "#6EB5FF",
    items: 27,
  },
  {
    slug: "nightowl",
    name: "Night Owl Craft",
    tagline: "Limited midnight editions, numbered and signed.",
    color: "#7C6BE8",
    items: 12,
  },
  {
    slug: "goldpin",
    name: "Goldpin Collective",
    tagline: "Premium metallic accents on classic silhouettes.",
    color: "#E8B85C",
    items: 9,
  },
];
