

type Item = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  pricePrimary: string;
  priceSecondary?: string;
  imageSrc: string;
  badge?: string;
};

const items: Item[] = [
  {
    id: "desi-chicken",
    title: "Naatu Kodi (Desi Chicken)",
    description:
      "Our Naatu Kodi is raised in a natural environment, ensuring tender and flavorful meat, perfect for traditional recipes.",
    pricePrimary: "₹699/kg",
    imageSrc: "/1.png",
  },
  {
    id: "desi-broiler",
    title: "Desi Broiler Chicken",
    description:
      "Our Desi Broiler Chicken offers a juicy and tender option, ideal for various culinary delights.",
    pricePrimary: "₹400/kg",
    priceSecondary: "₹650/kg Boneless",
    imageSrc: "/2.png",
  },
  {
    id: "desi-mutton",
    title: "Desi Mutton",
    description:
      "Our Desi Mutton is sourced from free-range goats, offering a rich and authentic taste that embodies the essence of Telangana cuisine.",
    pricePrimary: "₹1099/kg",
    priceSecondary: "₹1299/kg Boneless",
    imageSrc: "/3.png",
    badge: "Hot",
  },
  {
    id: "desi-eggs",
    title: "Desi Brown Eggs",
    description:
      "Our Desi Brown Eggs come from hens raised on a nutritious diet, providing fresh and flavorful eggs perfect for any meal.",
    pricePrimary: "₹399/30 Piece",
    priceSecondary: "₹199/12 Piece",
    imageSrc: "/4.png",
  },
];

export default function DesiOriginalPage() {
  return (
    <div className="min-h-screen bg-cream-50 py-12 px-6 md:px-16 lg:px-24">
      {/* Container */}
      <div className="max-w-6xl mx-auto bg-[#fbebd5] backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100">
        {/* Header / Speech bubble */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
          <div className="relative flex-1">
            <div className="inline-block bg-rose-600 text-white rounded-full px-6 py-4 shadow-lg transform -translate-y-4">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Hello,</h1>
              <p className="text-sm md:text-base font-semibold">Desi Original?</p>
            </div>

            {/* small logo/top-right */}
            <div className="absolute right-0 top-0">
              <div className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-sm font-semibold">
                <span>▲</span>
              </div>
            </div>

            {/* Main hero image (left) - optional placeholder circle */}
            <div className="mt-6 md:mt-10">
              <div className="w-full md:w-80 h-48 md:h-56 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                {/* Replace with real image */}
                <img
                  src={items[0].imageSrc}
                  alt={items[0].title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Intro text + featured price */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold">Naatu Kodi (Desi Chicken)</h2>
            <p className="mt-2 text-sm text-gray-700">Our Naatu Kodi is raised in a natural environment, ensuring tender and flavorful meat, perfect for traditional recipes.</p>
            <p className="mt-4 text-2xl font-extrabold">₹699/kg</p>

            {/* small herb decorative */}
            <div className="mt-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="opacity-70">
                <path d="M12 2C13.1 5.5 18 6.2 20 9C20 9 18.5 11 16 12C13.5 13 11 15 9 14C6.5 13 4 11 4 11C6 8 8.9 6.2 12 2Z" stroke="#16A34A" strokeWidth="0.5"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Grid of product cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((p) => (
            <article key={p.id} className="flex gap-6 items-center bg-cream-100 rounded-xl p-4 md:p-6 border border-gray-100">
              <div className="w-36 h-28 md:w-44 md:h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-sm bg-white">
                <img src={p.imageSrc} alt={p.title} className="object-cover w-full h-full" />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{p.description}</p>
                  </div>
                  {p.badge && (
                    <div className="ml-4 text-xs px-2 py-1 rounded-full bg-rose-50 text-rose-600 font-semibold">{p.badge}</div>
                  )}
                </div>

                <div className="mt-4 flex items-end gap-4">
                  <div className="text-xl font-extrabold">{p.pricePrimary}</div>
                  {p.priceSecondary && <div className="text-sm text-gray-500">{p.priceSecondary}</div>}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer small terms */}
        <div className="mt-8 text-xs text-gray-500 text-right">T&amp;C Apply</div>
      </div>
    </div>
  );
}

/*
Notes:
- The component is now named DesiOriginalPage instead of AboutPage.
- The data array is renamed from products to items.
*/
