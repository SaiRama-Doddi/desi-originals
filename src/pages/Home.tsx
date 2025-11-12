import React, { useState, useEffect } from "react";
import {  ShoppingBag, BookOpen } from "lucide-react";

const carouselImages = [
  "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=1600&q=80",
  "https://png.pngtree.com/background/20230519/original/pngtree-six-chickens-walking-in-the-fall-picture-image_2661901.jpg",
  "https://www.tastingtable.com/img/gallery/the-best-cuts-of-chicken-ranked/l-intro-1659739353.jpg",
];

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

/*   const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % carouselImages.length); */

  return (
    <section id="home" className="relative w-full h-[90vh] overflow-hidden">
      {/* Blurred, glowing background carousel */}
      <div className="absolute inset-0">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === current
                ? "opacity-100 scale-105 brightness-110 blur-[3px]"
                : "opacity-0 scale-100 brightness-90 blur-sm"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: index === current ? "blur(4px) brightness(1.1)" : "blur(2px) brightness(0.9)",
              transform: index === current ? "scale(1.05)" : "scale(1)",
            }}
          ></div>
        ))}

        {/* Light overlay glow */}
        <div className="absolute inset-0 bg-linear-to-b from-[#fff3e5]/10 via-[#fff3e5]/10 to-black/20"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6">
        <div className="p-8 rounded-3xl  max-w-2xl mx-auto ">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug text-[#fbebd5] drop-shadow-lg">
            Bringing Farm Fresh <br />
            <span className="text-white">Goodness to Your Doorstep</span>
          </h1>

          <p className="text-md md:text-lg text-gray-100 leading-relaxed mb-8">
            Experience the true taste of freshness — premium{" "}
            <span className="font-semibold text-[#fbebd5]">
              eggs, meat, and fish
            </span>{" "}
            delivered straight from our farms to your kitchen.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#products"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#fbebd5] bg-[#901f3b] shadow-md hover:bg-[#814142] hover:scale-105 transition-transform duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              Shop Now
            </a>

            <a
              href="#blog"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-[#fbebd5] text-[#fbebd5] bg-transparent hover:bg-[#fbebd5] hover:text-[#901f3b] hover:scale-105 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              Read Our Blog
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
{/*       <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-[#901f3b]/80 transition"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-[#901f3b]/80 transition"
      >
        <ChevronRight />
      </button> */}

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
        {carouselImages.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === current ? "bg-[#fbebd5]" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Home;
