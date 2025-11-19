import { Award, Users, Target, Heart } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-[#fbebd5] py-16" id="about">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#901f3b] mb-4">
            About Desi Originals
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Bringing farm-fresh quality and authentic flavors to your table since 2020.
          </p>
        </div>

        {/* Story + Mission */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {[ 
            {
              title: "Our Story",
              text1:
                "Desi Originals was born from a simple idea—bringing the true taste of tradition back to modern homes. We started with a passion for authentic, desi flavors and the desire to keep our cultural roots alive through food made the right way.",
              text2:
                "At Desi Originals, we celebrate the taste of our heritage and deliver it fresh to your table, just the way it was meant to be."
            },
            {
              title: "Our Mission",
              text1:
                "We are committed to providing the freshest, highest-quality products while supporting local farmers and promoting sustainable practices.",
              text2:
                "Transparency, quality, and long-term relationships lie at the heart of everything we do. Your health and satisfaction always come first."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl p-10 shadow-xl border border-orange-100 hover:shadow-2xl transition-all"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{item.text1}</p>
              <p className="text-gray-600 leading-relaxed">{item.text2}</p>
            </div>
          ))}
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Award, value: "100+", label: "Partner Farms" },
            { icon: Users, value: "5000+", label: "Happy Customers" },
            { icon: Target, value: "99%", label: "Quality Score" },
            { icon: Heart, value: "4+ Years", label: "Of Excellence" }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-10 rounded-2xl text-center shadow-xl hover:scale-105 transition-transform"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-4xl font-extrabold mb-2">{stat.value}</h3>
              <p className="text-orange-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Award,
                title: "Quality First",
                desc: "We never compromise on quality. Every product is carefully selected and inspected."
              },
              {
                icon: Heart,
                title: "Customer Care",
                desc: "Your satisfaction is our priority. We serve you with dedication and honesty."
              },
              {
                icon: Target,
                title: "Sustainability",
                desc: "We support eco-friendly farming and responsible sourcing."
              }
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white/90 p-10 rounded-2xl shadow-md border border-orange-100 hover:shadow-xl transition-all text-center"
              >
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
