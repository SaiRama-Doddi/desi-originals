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
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763202709/egg-12.1_tgqvp0.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763202710/egg-12.2_psoefx.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763202709/egg-12_jarlpg.jpg",
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
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763132588/egg-30_pfl3r6.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763132588/egg-302_me6sse.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763132589/egg-30.3_qbbote.jpg",

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
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763132588/mutton1_q8vtrx.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763133246/mutton3_mn1g3y.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763132588/mutton2_rkvcvd.jpg"
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
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763132589/mutton-boneless1_itp5rq.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763132589/mutton-boneless2_xekmtv.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763132588/mutton-boneless3_dfw9xw.jpg"
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
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763132590/natukodi3_bq5fr7.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763132590/natukodi1_mxqynk.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763132589/natukodi2_sbooyn.jpg"
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
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763133374/chicken-boneless2_fslpsh.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763134505/broiler-2_xstwud.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763134506/broiler-3_wej6sf.jpg"
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
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763132590/chicken-boneless3_vlsebq.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763133374/chicken-boneless2_fslpsh.jpg",
      "https://res.cloudinary.com/ddzvprhdw/image/upload/v1763133442/chicken-boneless4_howquq.jpg"
    ],
  },
];
