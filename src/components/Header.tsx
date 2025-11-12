import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // Track active link

  const links = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md bg-gradient-to-r from-[#601c32] via-[#8a1f44] to-[#c92a55] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo2.png"
            alt="Desi Originals Logo"
            className="w-15 h-15 rounded-full "
          />
          <h1 className="text-2xl font-semibold tracking-wide text-[#fff3e5] uppercase">
            Desi <span className="text-[#fff3e5]">Originals</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`text-lg font-medium transition-colors ${
                activeLink === link.name
                  ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
                  : "hover:text-yellow-300"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative p-2 bg-white/20 hover:bg-white/30 rounded-full transition"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Cart icon (ALWAYS visible) */}
          <button
            onClick={onCartClick}
            className="relative p-2 bg-white/20 hover:bg-white/30 rounded-full transition"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger Button */}
          <button
            className="p-2 rounded-md hover:bg-white/20"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black px-4 py-3 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`block text-lg font-medium transition ${
                activeLink === link.name
                  ? "text-[#c92a55] font-semibold"
                  : "hover:text-[#c92a55]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
