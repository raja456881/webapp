import React from "react";
import ContactUsImg from "../assets/footerBg.jpeg";
import '../App.css'

const ContactUs = () => {
  return (
    <div className="contact-container">
      <img src={ContactUsImg} alt="" style={{width:"50%"}} />
    </div>
  );
};

export default ContactUs;
