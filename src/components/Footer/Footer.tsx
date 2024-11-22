import React from "react";
import FooterLogo from "../../assets/images/footer-logo.svg";
import Image from "../Image/Image";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Image imgsrc={FooterLogo} alt="Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
