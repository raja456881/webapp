import React from "react";
import Product from "../components/Product";
import prod1 from "../assets/prod1.svg";
import prod2 from "../assets/prod2.svg";
import prod3 from "../assets/prod3.svg";
import prod4 from "../assets/prod4.svg";
import prod5 from "../assets/prod5.svg";
import generative from "../assets/generativeparts.svg";
const OurProducts = () => {
  const list = [
    prod1,
    prod2,
    prod3,
    prod4,
    prod5,
    generative,
    prod2,
    prod3,
    prod4,
  ];

  return (
    <div style={{ marginBottom: "20px" }}>
      <div className="prod_headline">Our Product</div>
      <div className="product_listing">
        {list.map((el) => {
          return <Product pic={el} key={Math.random() * 56} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default OurProducts;
