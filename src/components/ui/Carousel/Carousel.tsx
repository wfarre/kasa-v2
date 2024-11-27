import React, { useState } from "react";
import ChevronRight from "./images/chevron-right.svg";
import ChevronLeft from "./images/chevron-left.svg";
import "./Carousel.scss";
import IconButton from "../IconButton/IconButton";

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
      <IconButton
        className="btn--left"
        onClick={prevSlide}
        actionDescription="photo précédente"
        icon={ChevronLeft}
      />
      <IconButton
        className="btn--right"
        onClick={nextSlide}
        actionDescription="photo suivante"
        icon={ChevronRight}
      />
      <span className="picture-index">
        {currentImageIndex + 1}/{props.pictures.length}
      </span>
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
