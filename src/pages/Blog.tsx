import React, { useState } from "react";

type Item = {
  id: string;
  title: string;
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

const Blog: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <section className="min-h-screen bg-[#fbebd] py-12 px-6 sm:px-10" id="blog">
      <div className="max-w-6xl mx-auto">
        {/* Page title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mt-5 mb-2 text-gray-800">
          Desi Originals
        </h1>

      {/* Subtitle */}
<p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-8">
  Experience the authentic taste of farm-fresh quality.  
  Handpicked with care, nurtured with tradition, and delivered with trust.
</p>

{/* Decorative divider */}
<div className="flex justify-center mb-12">
  <div className="w-44 h-1 bg-[#814142] rounded-full"></div>
</div>
        {/* Blog Cards Grid */}
        {!selectedItem ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                  {item.badge && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.description}
                  </p>
                  <div className="mt-4 text-indigo-600 font-semibold">
                    {item.pricePrimary}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          // Single Blog Detail View
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 transition-all duration-300">
            <button
              onClick={() => setSelectedItem(null)}
              className="mb-4 text-indigo-600 hover:underline"
            >
              ← Back to all
            </button>

            <img
              src={selectedItem.imageSrc}
              alt={selectedItem.title}
              className="w-full h-72 object-cover rounded-xl mb-6"
            />
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              {selectedItem.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {selectedItem.description}
            </p>
            <div className="text-lg font-semibold text-indigo-600 mb-2">
              {selectedItem.pricePrimary}
            </div>
            {selectedItem.priceSecondary && (
              <div className="text-gray-600">{selectedItem.priceSecondary}</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
