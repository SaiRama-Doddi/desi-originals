import React from "react";
import Home from "./Home";
import Products from "./Products";
import Blog from "./Blog";
import type { Product } from "../data/type-products";
import Contact from "../components/Contact";

type Props = {
  onAdd: (p: Product) => void;
};

const HomePage: React.FC<Props> = ({ onAdd }) => {
  return (
    <>
      <Home />
      <Products onAdd={onAdd} />
      <Blog />
      <Contact/>
    </>
  );
};

export default HomePage;
