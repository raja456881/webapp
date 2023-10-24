import React from "react";
import TopMenu from "./TopMenu";
import Header from "./Header";
const Homebanner = () => {
  return (
    <>
      <div className="home_banner">
        <div className="backdrop">
          {/* <TopMenu /> */}
          <Header/>
          <div className="front_content">
            <h2 className="bold_heading">
              We Deliver Quality Auto Parts With a Guarantee Our Customers
              Depend On.
            </h2>
            <h4 className="sub_heading_home">
              Friendly & Professional Service
            </h4>
            <div className="learn_more_btn">Explore more</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homebanner;
