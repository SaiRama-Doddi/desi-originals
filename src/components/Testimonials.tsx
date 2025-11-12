import React, { useRef, useState, useEffect, type JSX } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role?: string;
  rating: number; // 1-5
  review: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anita K.",
    role: "Product Manager",
    rating: 5,
    review:
      "Fantastic work — the UI is clean and the performance is great. Highly recommended!",
  },
  {
    id: 2,
    name: "Rahul S.",
    role: "Engineer",
    rating: 4,
    review: "Good attention to detail. A couple of small UX tweaks and it's perfect.",
  },
  {
    id: 3,
    name: "Priya M.",
    role: "Designer",
    rating: 5,
    review: "Loved the visuals and the responsive behaviour — looks great on mobile!",
  },
  {
    id: 4,
    name: "Vikram D.",
    role: "CTO",
    rating: 5,
    review: "Reliable, fast and easy to integrate. Nice job on accessibility too.",
  },
  {
    id: 5,
    name: "Sonia R.",
    role: "Founder",
    rating: 4,
    review: "Great experience overall — the team was responsive and delivered on time.",
  },
];

export default function Testimonials(): JSX.Element {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      setCanScrollLeft(el.scrollLeft > 8);
      setCanScrollRight(el.scrollLeft + el.clientWidth + 8 < el.scrollWidth);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollBy = (distance: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: distance, behavior: "smooth" });
  };

  const scrollNext = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.floor(el.clientWidth * 0.8);
    scrollBy(step);
  };

  const scrollPrev = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.floor(el.clientWidth * 0.8);
    scrollBy(-step);
  };

  return (
    <section className="relative py-8 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl font-semibold mb-4">What people say</h2>

      {/* Horizontal scroller */}
      <div className="relative">
        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6"
          aria-label="Testimonials carousel"
           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="snap-start flex-shrink-0 w-[86%] sm:w-[45%] md:w-[34%] lg:w-[28%] bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-md"
              role="group"
              aria-roledescription="slide"
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-medium">{t.name}</h3>
                
                </div>
                <div className="text-sm">{'★'.repeat(t.rating)}</div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300">{t.review}</p>

  
            </article>
          ))}
        </div>

        {/* Scroll buttons below cards at right side */}
     
<div className="absolute right-0 -bottom-4 flex gap-3">
  {/* Left button */}
  <button
    onClick={scrollPrev}
    className={`h-10 w-10 flex items-center justify-center rounded-[8px] border border-indigo-200 bg-[#814142] text-white shadow-md cursor-pointer hover:bg-[#843c3d] hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-indigo-300 ${
      canScrollLeft ? "opacity-100" : "opacity-40 pointer-events-none"
    }`}
    aria-label="Scroll left"
  >
    <ChevronLeft className="w-5 h-5" />
  </button>

  {/* Right button */}
  <button
    onClick={scrollNext}
    className={`h-10 w-10 flex items-center justify-center rounded-[8px] border border-indigo-200 bg-[#814142] text-white shadow-md cursor-pointer hover:bg-[#843c3d] hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-indigo-300 ${
      canScrollRight ? "opacity-100" : "opacity-40 pointer-events-none"
    }`}
    aria-label="Scroll right"
  >
    <ChevronRight className="w-5 h-5" />
  </button>
</div>
      </div>


    </section>
  );
}