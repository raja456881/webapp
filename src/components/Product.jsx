import React from "react";
import generative from "../assets/generativeparts.svg";
const Product = ({ pic = generative }) => {
  return (
    <div className="prod_div">
      <img src={pic} alt="hjsd" />
      <div className="prod_title_wrap">
        <p className="prod_title">HORN D-125MM 24 VOLT CHROME</p>
        <p className="prod_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
      </div>
    </div>
  );
};

export default Product;
