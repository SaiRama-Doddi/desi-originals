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
      "https://sekulum.no/wp-content/uploads/2021/01/AdobeStock_331283773-1024x1024.jpeg",
      "https://tse3.mm.bing.net/th/id/OIP.BG3qqKMZF4HaPF9NEsVEpwHaFm?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.MzFmwwO9qF5Q6l3hxL7U0gHaEw?pid=Api&P=0&h=180",
    ],
  },
  {
    id: "eggs-02",
    title: "Desi Brown Eggs - Pack of 30",
    category: "eggs",
    price: 360,
    description:
      "Bulk pack of 30 desi brown eggs — perfect for families, bakeries, or meal prep lovers.",
    highlights: ["High protein", "Farm fresh", "Rich yellow yolks"],
    images: [
      "https://www.jayabhushanagroindustries.com/wp-content/uploads/2024/01/30_eggs.jpg",
      "https://tse3.mm.bing.net/th/id/OIP.PCrjbtQheV43KjGRpywaUQHaFj?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.ZVuuqnrC7sMsXQo3q3GjRAHaHa?pid=Api&P=0&h=180",

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
      "https://crispynest.com/wp-content/uploads/2025/03/Mutton_Soup_Bones-1-1.jpg",
      "https://www.thespruceeats.com/thmb/MHeFc2YtrXB-INB4I-LrNwC4fbs=/3008x2000/filters:no_upscale():max_bytes(150000):strip_icc()/JMTalbott-466838246c734494b30bcf47b633e116.jpg",
      "https://mls.om/cdn/shop/products/fresh-indian-mutton-indian-mutton-bone-in-cubes-box-5kg-indian-mutton-bone-in-cubes-box-5kg-online-in-oman-29948910927981_1024x1024.jpg?v=1679400993"
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
      "https://udaipurmeathouse.com/wp-content/uploads/2022/02/boneless-mutton-102.jpg",
      "https://thekukkad.com/wp-content/uploads/2025/02/mutton-boneless-halal786.in_.jpg",
      "https://tse3.mm.bing.net/th/id/OIP.4UFx3U1lUkPZbQNix9ygKQHaFj?pid=Api&P=0&h=180"
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
      "https://5.imimg.com/data5/ANDROID/Default/2022/7/GF/YH/IA/133346180/product-jpeg-500x500.jpg",
      "https://lenaturelmeat.com/cdn/shop/files/DSC00229.jpg?v=1686733246&width=1445",
      "https://i.ytimg.com/vi/ai5qcxv08gg/maxresdefault.jpg"
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
      "https://ghbasket.com/wp-content/uploads/2022/09/Chicken-thigh.jpeg",
      "https://images.deliveryhero.io/image/darkstores-bd/perishable/7530001.jpg?height=480",
      "https://www.tokopoint.com/cdn/shop/products/6f4b89a4c5714d9d_ed6ee045-fd47-4f7e-a508-791e0735f87d.jpg?v=1686160320"
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
      "https://yummycuts.in/wp-content/uploads/2023/12/Blue-Minimalist-Electronic-Amazone-Product-Image-7.png",
      "https://i.chaldn.com/_mpimage/broiler-chicken-breast-boneless-50-gm-1-kg?src=https:%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D74660&q=best&v=1&m=1600",
      "https://admin.freshtoday.com.bd/media/64f31e901722d.jpeg"
    ],
  },
];
