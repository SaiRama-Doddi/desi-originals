import React from "react";
import Home from "./Home";
import Products from "./Products";
import Blog from "./Blog";
import type { Product } from "../data/type-products";
import Contact from "../components/Contact";
import { About } from "../components/About";

import Testimonials from "../components/Testimonials";

type Props = {
  onAdd: (p: Product) => void;
};

const HomePage: React.FC<Props> = ({ onAdd }) => {
  return (
    <>
      <Home />
      <Products onAdd={onAdd} />
      <Blog />
      <About />
  
      <Testimonials/>
      <Contact/>
    </>
  );
};

export default HomePage;
