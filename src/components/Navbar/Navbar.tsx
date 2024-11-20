import React from "react";
import Logo from "../../assets/images/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="image-wrapper">
        <img src={Logo} alt="" />
      </div>
      <ul className="navbar__nav">
        <li className="navbar__nav__item current">
          <a href="./">Acceuil</a>
        </li>
        <li className="navbar__nav__item">
          <a href="./">A propos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
