import React, { useState } from 'react'

interface Article {
  id: string
  title: string
  excerpt: string
  image: string
  content: string
}

const ARTICLES: Article[] = [
  {
    id: 'b1',
    title: 'Why Free-range Eggs are Better',
    excerpt: 'A brief on nutrition and farming practices.',
    image: 'http://wovenmeadows.com/wordpress/wp-content/uploads/2012/10/Valdale-Farm-Eggs-1005.jpg',
    content:
      'Free-range eggs come from hens that have space to roam and forage outdoors. They contain more vitamins A, D, and E, as well as omega-3 fatty acids. Supporting ethical farming also means better animal welfare and sustainability. These eggs often have richer yolk color, improved taste, and higher protein quality compared to caged alternatives.'
  },
  {
    id: 'b2',
    title: 'Choosing Fresh Meat for Your Kitchen',
    excerpt: 'Tips to select and store meat safely.',
    image: 'https://www.mashed.com/img/gallery/ranking-cuts-of-pork-to-slow-cook-from-worst-to-best/l-intro-1657905663.jpg',
    content:
      'Always look for bright red meat with a firm texture and minimal moisture. Avoid meat with gray patches or sour smells. Store meat below 4°C and cook it within 24 hours of purchase. Opt for locally sourced meat for freshness and traceability — it’s not just healthier but supports your local farmers too.'
  },
  {
    id: 'b3',
    title: 'Sustainable Fishing Practices',
    excerpt: 'How to be an informed seafood buyer.',
    image: 'https://images.unsplash.com/photo-1555992336-cbf8e5b09a9e?auto=format&fit=crop&w=800&q=80',
    content:
      'Overfishing harms marine ecosystems. Choose seafood certified by sustainability organizations like MSC. Buy fish caught through traditional methods and avoid endangered species. By supporting sustainable practices, you help preserve biodiversity and ensure long-term availability of your favorite seafood.'
  }
]

const Blog: React.FC = () => {
  const [selected, setSelected] = useState<Article | null>(null)

  return (
    <section id="blog" className="bg-[#fbebd5] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#901f3b] mb-10 text-center">
          Our Blog
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((a) => (
            <article
              key={a.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#814142]">
                  {a.title}
                </h3>
                <p className="text-sm text-[#3a2d18]/80 mt-2">{a.excerpt}</p>
                <button
                  onClick={() => setSelected(a)}
                  className="mt-4 text-[#fbebd5] bg-[#901f3b] px-4 py-2 rounded-md hover:bg-[#814142] transition text-sm"
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl animate-fadeIn">
            <div className="relative">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-[#901f3b] text-[#fbebd5] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#814142] transition"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#901f3b]">
                {selected.title}
              </h3>
              <p className="mt-3 text-[#3a2d18]/90 leading-relaxed">
                {selected.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Blog
