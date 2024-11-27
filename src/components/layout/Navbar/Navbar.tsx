import React from "react";
import Logo from "./images/logo.svg";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import Image from "../../ui/Image/Image";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      <Image imgsrc={Logo} alt="Kasa" />
      <ul className="navbar__nav">
        <li
          className={`navbar__nav__item ${
            pathname.toLowerCase() === "/" && "current"
          }`}
        >
          <Link to="/">Acceuil</Link>
        </li>
        <li
          className={`navbar__nav__item ${
            pathname.toLowerCase() === "/about" && "current"
          }`}
        >
          <Link to="/About">A propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
