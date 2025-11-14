import React from "react";
import type { Product } from "../data/type-products";

type Props = {
  product: Product;
  onView: (p: Product) => void;
  onAdd: (p: Product) => void;
};

const ProductCard: React.FC<Props> = ({ product, onView, onAdd }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border border-[#814142]/20">
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={
            product.images[0] ||
            "https://images.unsplash.com/photo-1606813909320-fad6c7bfc5f8?auto=format&fit=crop&w=800&q=80"
          }
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-[#901f3b] text-[#fbebd5] text-xs px-3 py-1 rounded-full shadow-md">
          Fresh
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between min-h-[180px]">
        <div>
          <h3 className="text-xl font-semibold text-[#814142]">
            {product.title}
          </h3>
          <p className="text-sm text-[#3a2d18]/80 mt-1 leading-snug">
            {product.highlights.slice(0, 2).join(" • ")}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-lg font-bold text-[#901f3b]">
            ₹{product.price}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onView(product)}
              className="cursor-pointer text-sm px-3 py-1.5 border border-[#814142] text-[#814142] rounded-lg hover:bg-[#814142] hover:text-[#fbebd5] transition"
            >
              View
            </button>
            <button
              onClick={() => onAdd(product)}
              className="cursor-pointer text-sm px-3 py-1.5 bg-[#901f3b] text-[#fbebd5] rounded-lg hover:bg-[#814142] transition"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
