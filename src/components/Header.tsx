import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/#products" }, // optional if sections on homepage
  { name: "Blog", href: "/blog" },
  {name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];


  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setMenuOpen(false); // close menu after clicking
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#601c32] via-[#8a1f44] to-[#c92a55] text-white shadow-md">
      
      {/* TOP HEADER BAR */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 h-20 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center">
          <img
            src="/logo2.png"
            alt="Desi Originals Logo"
            className="h-16 w-auto object-contain"
            style={{
              transform: "scale(1.6)",
              transformOrigin: "left center",
            }}
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`text-lg font-medium ${
                activeLink === link.name
                  ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
                  : "hover:text-yellow-300"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* CART BUTTON */}
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

        {/* MOBILE ICONS */}
       <div className="md:hidden flex items-center gap-4">
  {/* Cart button */}
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

  {/* Hamburger menu */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="p-2 rounded-md hover:bg-white/20"
  >
    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>
</div>

      </div>

      {/* MOBILE MENU (Drops Below Header) */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black px-4 py-3 space-y-3 shadow-inner">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`block text-lg font-medium ${
                activeLink === link.name ? "text-[#c92a55] font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
