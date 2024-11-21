import React from "react";
import FooterLogo from "../../assets/images/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="image-wrapper">
        <img src={FooterLogo} alt="" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
