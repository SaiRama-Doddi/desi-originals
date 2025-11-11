import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS, type Product } from "../data/type-products";
import ProductCard from "../components/ProductCard";

type Props = { onAdd: (p: Product) => void };

const Products: React.FC<Props> = ({ onAdd }) => {
  const [filter, setFilter] = useState<"all" | "eggs" | "meat" | "fish">("all");
  const navigate = useNavigate();

  const list =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section className="bg-[#fbebd5] py-20 px-4 flex justify-center items-center" id="products">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl font-extrabold text-[#901f3b] mb-10">
          Our Fresh Products
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["all", "eggs", "meat", "fish"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full font-medium shadow-md transition-all duration-300 ${
                filter === cat
                  ? "bg-[#901f3b] text-[#fbebd5] scale-105"
                  : "border-2 border-[#901f3b] text-[#901f3b] hover:bg-[#901f3b] hover:text-[#fbebd5]"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
          {list.map((p) => (
            <div key={p.id} className="w-full max-w-[320px]">
              <ProductCard
                product={p}
                onView={() => navigate(`/product/${p.id}`)}
                onAdd={onAdd}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
