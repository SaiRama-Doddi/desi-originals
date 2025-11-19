import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { type Product } from "./data/type-products";
import type { CartItem } from "./types/cart";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";
import ScrollToHash from "./components/ScrollToHash";
import { About } from "./components/About";
import { ShoppingCart } from "lucide-react";


const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (p: Product) => {
    setCart((prev) => {
      const found = prev.find((it) => it.product.id === p.id);
      if (found)
        return prev.map((it) =>
          it.product.id === p.id ? { ...it, qty: it.qty + 1 } : it
        );
      return [...prev, { product: p, qty: 1 }];
    });
  };

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) return;
    setCart((prev) =>
      prev.map((it) => (it.product.id === id ? { ...it, qty } : it))
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((it) => it.product.id !== id));
  };

  return (
    <Router>
        <ScrollToTop /> 
        <ScrollToHash/>
      <div className="min-h-screen flex flex-col">
        <Header
          cartCount={cart.reduce((s, i) => s + i.qty, 0)}
          onCartClick={() => setIsCartOpen(true)}
        />

        <main className="flex-1 bg-[#fbebd5]">
          <Routes>
            <Route path="/" element={<HomePage onAdd={addToCart} />} />
            <Route path="/blog" element={<Blog />} />
            <Route
  path="/product/:id"
  element={
    <ProductDetail
      onAdd={addToCart}
      onRemove={removeFromCart}
      cartItems={cart}   // send cart items
    />
  }
/>
     
     <Route path="/about" element={<About/>} />

            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>

        <Footer />

        {isCartOpen && (
          <Cart
            items={cart}
            onClose={() => setIsCartOpen(false)}
            onUpdateQty={updateQty}
            onRemove={removeFromCart}
          />
        )}


        {cart.length > 0 && (
  <button
    onClick={() => setIsCartOpen(true)}
    className="fixed bottom-5 right-5 bg-gradient-to-r from-[#8a1f44] to-[#c92a55] 
               text-white w-14 h-14 rounded-full shadow-lg flex items-center 
               justify-center text-2xl font-bold z-50 animate-bounce-slow"
  >
     <ShoppingCart className="w-7 h-7" />
    <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs 
                     w-5 h-5 flex items-center justify-center rounded-full font-bold">
      {cart.reduce((s, i) => s + i.qty, 0)}
    </span>
  </button>
)}

      </div>
    </Router>
  );
};

export default App;
