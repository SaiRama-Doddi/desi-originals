export type Product = {
  id: string;
  title: string;
  category: "eggs" | "chicken" | "mutton";
  description: string;
  price: number;
  highlights: string[];
  images: string[];
  unit?: string; // ✅ Add this line
};
// src/data/type-products.ts (or wherever your product data lives)

export const PRODUCTS: Product[] = [
  {
    id: "eggs-01",
    title: "Desi Brown Eggs - Pack of 12",
    category: "eggs",
    price: 199,
    description:
      "Farm-fresh desi brown eggs from free-range hens — naturally nutritious and full of flavor.",
    highlights: ["Free-range hens", "No antibiotics", "Locally sourced"],
    images: [
      "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg",
      "https://cdn.pixabay.com/photo/2015/07/06/19/03/egg-833631_1280.jpg",
      "https://images.pexels.com/photos/3971483/pexels-photo-3971483.jpeg",
    ],
  },
  {
    id: "eggs-02",
    title: "Desi Brown Eggs - Pack of 30",
    category: "eggs",
    price: 399,
    description:
      "Bulk pack of 30 desi brown eggs — perfect for families, bakeries, or meal prep lovers.",
    highlights: ["High protein", "Farm fresh", "Rich yellow yolks"],
    images: [
      "https://static.vecteezy.com/system/resources/thumbnails/028/699/991/small_2x/fresh-brown-eggs-food-generate-ai-photo.jpg",
      "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg",
    ],
  },
  {
    id: "mutton-01",
    title: "Desi Mutton (1kg)",
    category: "mutton",
    price: 1099,
    description:
      "Tender, flavorful desi mutton sourced from free-range goats — ideal for curries, gravies, and biryanis.",
    highlights: ["Freshly cut", "No preservatives", "Locally sourced"],
    images: [
      "https://tse2.mm.bing.net/th/id/OIP.vTt1ek8LrAepWxaEDOMncwHaEK?pid=Api&P=0&h=180",
      "https://www.thedailymeal.com/img/gallery/is-it-safe-to-eat-meat-thats-been-frozen-for-2-years/l-intro-1688653255.jpg",
    ],
  },
  {
    id: "mutton-02",
    title: "Desi Mutton Boneless (1kg)",
    category: "mutton",
    price: 1299,
    description:
      "Premium boneless mutton — hand-trimmed cuts for easy cooking and exceptional tenderness.",
    highlights: ["Boneless", "Grass-fed", "Perfect for grills and curries"],
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.K5IaziRu3XUeuM5M3d46ZAHaEK?pid=Api&P=0&h=180",
      "https://pngimg.com/uploads/beef/beef_PNG101.png",
    ],
  },
  {
    id: "chicken-01",
    title: "Naatu Kodi (Desi Chicken) - 1kg",
    category: "chicken",
    price: 699,
    description:
      "Authentic Naatu Kodi raised naturally in village farms — flavorful and rich in texture, perfect for traditional recipes.",
    highlights: ["Free-range", "No hormones", "Natural feed"],
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.Sg7A1hH1u2o5ec0Mg0MOPwHaE8?pid=Api&P=0&h=180",
      "https://images.pexels.com/photos/5945801/pexels-photo-5945801.jpeg",
    ],
  },
  {
    id: "chicken-02",
    title: "Desi Broiler Chicken - 1kg",
    category: "chicken",
    price: 400,
    description:
      "Freshly sourced Desi Broiler Chicken — tender meat with balanced flavor, ideal for everyday dishes.",
    highlights: ["Juicy cuts", "Farm fresh", "Cleaned and packed"],
    images: [
      "https://images.pexels.com/photos/4110254/pexels-photo-4110254.jpeg",
      "https://tse4.mm.bing.net/th/id/OIP.rPAAU4hJcW8vTk9_XHwJKgHaEK?pid=Api&P=0&h=180",
    ],
  },
  {
    id: "chicken-03",
    title: "Desi Broiler Chicken Boneless - 1kg",
    category: "chicken",
    price: 650,
    description:
      "Clean, boneless Desi Broiler Chicken — perfect for roasts, stir-fries, and health-conscious recipes.",
    highlights: ["Boneless", "High protein", "Tender texture"],
    images: [
      "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg",
      "https://tse2.mm.bing.net/th/id/OIP.4T6SPSm1iuhEGV8hZ_JiYQHaE8?pid=Api&P=0&h=180",
    ],
  },
];
