import React from "react";
import Logo from "../../assets/images/logo.svg";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="image-wrapper">
        <img src={Logo} alt="" />
      </div>
      <ul className="navbar__nav">
        <li className="navbar__nav__item current">
          <Link to="/">Acceuil</Link>
        </li>
        <li className="navbar__nav__item">
          <Link to="/About">A propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
