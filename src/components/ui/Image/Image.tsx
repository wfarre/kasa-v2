import React from "react";
import "./Image.scss";

interface Props {
  imgsrc: string | undefined;
  alt?: string;
}

const Image = (props: Props) => {
  return (
    <picture className="image-wrapper">
      <img src={props.imgsrc} alt={props.alt ? props.alt : ""} />
    </picture>
  );
};

export default Image;
