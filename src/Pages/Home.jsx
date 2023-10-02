import React from "react";
import Slider from "../components/Slider";
import About from "../components/About";
import WhyBuy from "../components/WhyBuy";
import Products from "../components/Products";
import Homebanner from "../components/Homebanner";

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      <WhyBuy />
      <Products />
    </>
  );
};

export default Home;
