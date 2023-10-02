import React from "react";
import barometer from "../assets/barometer.svg";
import cockpit from "../assets/cockpit.svg";
// import welding from "../assets/welding.svg";
const WhyBuy = () => {
  return (
    <>
      <div className="why_buy_wrap">
        <div className="text_side">
          <div className="wb_main_heading">Why Buy From Us?</div>
          <p className="wb_sub_heading">Peace of Mind</p>
          <p className="wb_para">
            Why stress out searching all over town for your parts? Our extensive
            inventory and exclusive network puts millions of parts at our finger
            tips. This unique advantage gives us the ability to say “YES” when
            others say no, eliminating a lot of wasted time and money for you.
            In most cases, if you are a local business, parts will be delivered
            the next business day. Our goal is to be your “
          </p>
          <div className="learn_more_btn">Learn More</div>
        </div>
        <div className="image_side">
          <div className="barometer_image">
            <img
              src={barometer}
              alt="barometer"
              height={190}
              width={200}
              style={{ borderRadius: "30px", marginRight: "30px" }}
            />
          </div>
          <div className="cockpit_img">
            <img
              src={cockpit}
              alt="cockpit"
              height={350}
              width={450}
              style={{ borderRadius: "30px", marginRight: "30px" }}
            />
          </div>
          <div className="welding_img">
            <img
              src={barometer}
              alt="welding"
              height={190}
              width={200}
              style={{ borderRadius: "30px", marginRight: "30px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyBuy;
