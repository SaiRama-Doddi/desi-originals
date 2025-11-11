import React from "react";
import { Truck, Shield, Clock } from "lucide-react";
import { ShoppingBag, BookOpen } from "lucide-react";

const Home: React.FC = () => {
  return (
    <section id="home" className="bg-[#fbebd5] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Section - Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-[#901f3b]">
            Desi Originals —
            <br className="hidden md:block" />
            <span className="text-[#814142]"> Fresh from Our Farms</span>
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
            Experience the true taste of freshness. We bring you premium{" "}
            <span className="font-semibold text-[#901f3b]">
              eggs, meat, and fish
            </span>{" "}
            — ethically sourced, hand-selected, and delivered straight to your
            kitchen with care and love from our local farms.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
      <a
        href="#products"
        className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#fbebd5] bg-[#901f3b] shadow-md hover:bg-[#814142] hover:scale-105 transition-transform duration-300"
      >
        <ShoppingBag size={20} />
        Shop Now
      </a>

      <a
        href="#blog"
        className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-[#901f3b] text-[#901f3b] bg-white hover:bg-[#901f3b] hover:text-[#fbebd5] hover:scale-105 transition-all duration-300"
      >
        <BookOpen size={20} />
        Read Our Blog
      </a>
    </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1606813902958-b94d7796c1c7?auto=format&fit=crop&w=900&q=80"
              alt="Farm fresh produce"
              className="rounded-3xl shadow-2xl w-full md:w-[480px] h-[320px] object-cover border-4 border-[#901f3b]"
            />
        
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 mt-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#901f3b]">Why Choose Us?</h2>
            <p className="text-gray-700 mt-2">
              We’re committed to bringing only the freshest, most ethical products to your doorstep.
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
                Get your fresh products delivered within hours of ordering — right to your doorstep.
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
                Every product is carefully handpicked, checked, and stored under strict hygiene.
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
                We source daily from trusted farms ensuring the best taste and natural goodness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
