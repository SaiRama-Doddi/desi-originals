export type Product = {
  id: string;
  title: string;
  category: "eggs" | "meat" | "fish";
  description: string;
  price: number;
  highlights: string[];
  images: string[];
  unit?: string; // ✅ Add this line
};

// Sample static products (use your own images in public/images)
export const PRODUCTS: Product[] = [
{
id: 'egg-01',
title: 'Farm Fresh Desi Eggs - Pack of 12',
category: 'eggs',
price: 120,
description: 'Organic, free-range desi eggs produced by local farms — rich yolks, natural feed.' ,
highlights: ['Free-range', 'No antibiotics', 'Locally sourced'],
images: [
'https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg',
'https://tse2.mm.bing.net/th/id/OIP.6RasdM21jcApKkiztyQtUQHaE8?pid=Api&P=0&h=180',
'https://images.pexels.com/photos/3971483/pexels-photo-3971483.jpeg?cs=srgb&dl=pexels-cottonbro-3971483.jpg&fm=jpg',
'https://cdn.pixabay.com/photo/2015/07/06/19/03/egg-833631_1280.jpg',
'https://static.vecteezy.com/system/resources/thumbnails/028/699/991/small_2x/fresh-brown-eggs-food-generate-ai-photo.jpg'
]
},
{
id: 'meat-01',
title: 'Desi Mutton - Fresh Cut (500g)',
category: 'meat',
price: 420,
description: 'Premium desi mutton from grass-fed sheep — ideal for curries and biryanis.',
highlights: ['Fresh cut', 'No preservatives', 'Hand-trimmed'],
images: [
'https://tse2.mm.bing.net/th/id/OIP.vTt1ek8LrAepWxaEDOMncwHaEK?pid=Api&P=0&h=180',
'https://pngimg.com/uploads/beef/beef_PNG101.png',
'https://tse2.mm.bing.net/th/id/OIP.DdGK2ypLau-OtQrJ4G1QnQHaEK?pid=Api&P=0&h=180',
'https://www.thedailymeal.com/img/gallery/is-it-safe-to-eat-meat-thats-been-frozen-for-2-years/l-intro-1688653255.jpg',
'https://tse1.mm.bing.net/th/id/OIP.K5IaziRu3XUeuM5M3d46ZAHaEK?pid=Api&P=0&h=180'
]
},
{
id: 'fish-01',
title: 'River Fresh Rohu (1kg)',
category: 'fish',
price: 260,
description: 'Freshly caught Rohu, cleaned and ready to cook.',
highlights: ['Cleaned', 'Sourced daily', 'Iced on transport'],
images: [
'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
'/images/fish/fish2.jpg',
'/images/fish/fish3.jpg',
'/images/fish/fish4.jpg',
'/images/fish/fish5.jpg'
]
}
]