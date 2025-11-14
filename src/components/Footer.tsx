import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">  
                  <img
            src="/logo2.png"
            alt="Desi Originals Logo"
            className="h-20 w-auto object-contain"
            style={{
              transform: "scale(1.6)",
              transformOrigin: "left center",
            }}
          />
          </div>
            
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted source for fresh eggs, premium meat, and quality fish.
              Authentic desi products delivered to your doorstep.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-orange-400 transition-colors">Our Products</a></li>
              <li><a href="#" className="text-sm hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+91 63000 88675</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">desioriginals1997@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Yenakapalli, Ranga Reddy, Telangana 501504</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="bg-gray-700 hover:bg-orange-600 p-2 rounded-full transition-all duration-200 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-orange-600 p-2 rounded-full transition-all duration-200 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-orange-600 p-2 rounded-full transition-all duration-200 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">Stay updated with our latest products and offers!</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Desi Originals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
