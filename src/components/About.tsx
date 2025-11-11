import { Award, Users, Target, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About Desi Originals</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Bringing farm-fresh quality and authentic flavors to your table since 2020
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Desi Originals was born from a simple belief that everyone deserves access to fresh,
              high-quality food. We started with a small network of local farms and have grown into
              a trusted name for premium eggs, meat, and seafood.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we work with dozens of partner farms and fisheries, ensuring that every product
              meets our strict standards for quality, freshness, and sustainability. Our commitment
              to excellence has earned us the trust of thousands of families across the region.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are committed to providing our customers with the freshest, highest-quality products
              while supporting local farmers and sustainable practices. Every product we offer is
              carefully sourced and inspected to ensure it meets our exacting standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in transparency, quality, and building long-term relationships with both
              our suppliers and customers. Your health and satisfaction are our top priorities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-2xl text-center transform hover:scale-105 transition-transform">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">100+</h3>
            <p className="text-orange-100">Partner Farms</p>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-2xl text-center transform hover:scale-105 transition-transform">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">5000+</h3>
            <p className="text-orange-100">Happy Customers</p>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-2xl text-center transform hover:scale-105 transition-transform">
            <Target className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">99%</h3>
            <p className="text-orange-100">Quality Score</p>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-2xl text-center transform hover:scale-105 transition-transform">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">4+ Years</h3>
            <p className="text-orange-100">Of Excellence</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product is carefully selected and inspected.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Care</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're here to serve you with dedication.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We support sustainable farming practices and local communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
