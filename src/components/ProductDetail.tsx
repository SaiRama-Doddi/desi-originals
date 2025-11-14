import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/type-products";
import type { Product } from "../data/type-products";
import { ShoppingCart } from "lucide-react";
import type { CartItem } from "../types/cart";

type Props = {
  onAdd: (p: Product) => void;
  onRemove: (id: string) => void;
  cartItems: CartItem[];
};


const ProductDetail: React.FC<Props> = ({ onAdd ,onRemove,cartItems}) => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);
  const [idx, setIdx] = useState(0);

  if (!product) {
    return (
      <div className="py-20 text-center text-[#901f3b] text-xl">
        Product not found.
      </div>
    );
  }
const inCart = cartItems?.some(item => item.product.id === product?.id) ?? false;


  return (
    <div className="bg-[#fbebd5] min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto  overflow-hidden p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SECTION: Product Images */}
        <div>
          <img
            src={product.images[idx]}
            alt={product.title}
            className="w-full h-[380px] object-cover rounded-xl"
          />

    
        {/* Thumbnails */}
<div className="flex flex-col items-center mt-4">
 <div className="flex gap-3 overflow-x-auto pb-2 pl-2 pr-2 scroll-smooth">
  {product.images.map((src, i) => (
    <button
      key={i}
      onClick={() => setIdx(i)}
      className={`w-20 h-16 border-2 rounded-lg overflow-hidden flex-shrink-0 transition ${
        i === idx
          ? "border-orange-500 ring-2 ring-orange-300"
          : "border-gray-200 hover:border-orange-400"
      }`}
    >
      <img
        src={src}
        alt={product.title}
        className="w-full h-full object-cover"
      />
    </button>
  ))}
</div>


  {/* Line indicators */}
  <div className="flex justify-center items-center gap-2 mt-3">
    {product.images.map((_, i) => (
      <span
        key={i}
        className={`h-[3px] rounded-full transition-all duration-300 ${
          i === idx
            ? "w-8 bg-orange-500"
            : "w-4 bg-gray-300 hover:bg-orange-300"
        }`}
      />
    ))}
  </div>
</div>

        </div>

        {/* RIGHT SECTION: Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <Link
              to="/"
              className="text-sm text-orange-600 hover:text-orange-700 mb-3 block"
            >
              ← Back to Products
            </Link>

            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              {product.title}
            </h1>

            {/* Description */}
            <div className="mb-5">
              <h3 className="font-semibold text-gray-800 mb-1">Description</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>

            {/* Details */}
            <div className="mb-5">
              <h3 className="font-semibold text-gray-800 mb-1">Details</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our farm fresh brown eggs come from chickens raised in a
                natural, free-range environment. These hens are fed a wholesome
                diet of grains and have access to pasture, resulting in eggs
                with rich, golden yolks and superior nutrition. Perfect for all
                your cooking and baking needs.
              </p>
            </div>

            {/* Product Info Card */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                Product Info
              </h4>
              <div className="flex justify-between text-sm text-gray-700">
                <span>
                  Unit:{" "}
                  <span className="font-medium text-gray-900">
                    {product.unit ?? "dozen"}
                  </span>
                </span>
                <span>
                  Availability:{" "}
                  <span className="text-green-600 font-medium">In Stock</span>
                </span>
              </div>
            </div>
          </div>

          {/* Price + Add to Cart */}
         <div className="mt-6 flex items-center justify-between">
  <span className="text-3xl font-bold text-gray-800">
    ₹{product.price}
  </span>
  

  {inCart ? (
    <button
      onClick={() => onRemove(product.id)}
      className="cursor-pointer flex items-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-300 transition"
    >
      <ShoppingCart size={20} />
      Remove from Cart
    </button>
  ) : (
    <button
      onClick={() => onAdd(product)}
      className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition"
    >
      <ShoppingCart size={20} />
      Add to Cart
    </button>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
