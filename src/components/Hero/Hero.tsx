import React from "react";
import BgImg from "../../assets/images/hero-banner.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <header className="hero">
      <img src={BgImg} alt="" className="bg-img" />
      <h1 className="title">Chez vous, partout et ailleurs</h1>
    </header>
  );
};

export default Hero;
