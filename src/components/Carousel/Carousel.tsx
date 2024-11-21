import React, { useState } from "react";
import ChevronRight from "./assets/chevron-right.svg";
import ChevronLeft from "./assets/chevron-left.svg";
import "./Carousel.scss";

interface Props {
  pictures: string[];
  accommodationTitle: string;
}

const Carousel = (props: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () =>
    setCurrentImageIndex(
      currentImageIndex === props.pictures.length - 1
        ? 0
        : currentImageIndex + 1
    );
  const prevSlide = () =>
    setCurrentImageIndex(
      currentImageIndex === 0
        ? props.pictures.length - 1
        : currentImageIndex - 1
    );
  return (
    <div className="carousel">
      <button className="btn btn--left" onClick={prevSlide}>
        <img src={ChevronLeft} alt="" />
      </button>
      <button className="btn btn--right" onClick={nextSlide}>
        <img src={ChevronRight} alt="" />
      </button>
      <ul className="viewport">
        {props.pictures.map((picture, index) => {
          return (
            <li
              className={`viewport__item ${
                index === currentImageIndex ? "show" : "hidden"
              }`}
              key={`picture-${index}`}
            >
              <figure className="image-wrapper">
                <img src={picture} alt={props.accommodationTitle} />
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Carousel;
