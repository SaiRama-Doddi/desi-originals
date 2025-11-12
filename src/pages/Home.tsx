import React, { useState, useEffect } from "react";
import { Truck, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { ShoppingBag, BookOpen } from "lucide-react";

const carouselImages = [
  "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=1600&q=80",
  "https://static.vecteezy.com/system/resources/previews/034/763/882/original/ai-generated-raw-chicken-meat-free-png.png",
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

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % carouselImages.length);

  return (
    <section id="home" className="bg-[#fbebd5] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug text-[#901f3b]">
            Brininging Farm Fresh  <br className="hidden md:block" />
            <span className="text-[#814142]">Goodness to Your Doorstep</span>
          </h1>

          <p className="text-md text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
            Experience the true taste of freshness. We bring you premium{" "}
            <span className="font-semibold text-[#901f3b]">
              eggs, meat, and fish
            </span>{" "}
            — ethically sourced, hand-selected, and delivered straight to your
            kitchen with care and love from our local farms.
          </p>

       <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
  {/* Shop Now Button */}
  <a
    href="#products"
    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#fbebd5] bg-[#901f3b] shadow-md hover:bg-[#814142] hover:scale-105 transition-transform duration-300"
  >
    <ShoppingBag className="w-5 h-5" /> {/* 👈 Icon */}
    Shop Now
  </a>

  {/* Blog Button */}
  <a
    href="#blog"
    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-[#901f3b] text-[#901f3b] bg-white hover:bg-[#901f3b] hover:text-[#fbebd5] hover:scale-105 transition-all duration-300"
  >
    <BookOpen className="w-5 h-5" /> {/* 👈 Icon */}
    Read Our Blog
  </a>
</div>
        </div>

        {/* Right Section - Carousel */}
        <div className="flex-1 relative w-full md:w-[480px] overflow-hidden rounded-3xl shadow-2xl border-4 border-[#901f3b]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {carouselImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="w-full flex-shrink-0 h-[300px] md:h-[320px] object-cover"
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#901f3b]/70 text-white p-2 rounded-full hover:bg-[#814142]"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#901f3b]/70 text-white p-2 rounded-full hover:bg-[#814142]"
          >
            <ChevronRight />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {carouselImages.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === current ? "bg-[#901f3b]" : "bg-[#814142]/40"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#901f3b]">Why Choose Us?</h2>
            <p className="text-gray-700 mt-2">
              We’re committed to bringing only the freshest, most ethical
              products to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#901f3b]">
              <div className="bg-[#901f3b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                <Truck className="h-8 w-8 text-[#fbebd5]" />
              </div>
              <h3 className="text-xl font-bold text-[#814142] mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Get your fresh products delivered within hours of ordering —
                right to your doorstep.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#814142]">
              <div className="bg-[#814142] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                <Shield className="h-8 w-8 text-[#fbebd5]" />
              </div>
              <h3 className="text-xl font-bold text-[#814142] mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600">
                Every product is carefully handpicked, checked, and stored under
                strict hygiene.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-[#832c37]">
              <div className="bg-[#832c37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                <Clock className="h-8 w-8 text-[#fbebd5]" />
              </div>
              <h3 className="text-xl font-bold text-[#814142] mb-2">
                Always Fresh
              </h3>
              <p className="text-gray-600">
                We source daily from trusted farms ensuring the best taste and
                natural goodness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
