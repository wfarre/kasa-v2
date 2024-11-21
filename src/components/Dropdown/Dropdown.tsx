import React, { useState } from "react";

import Chrevron from "../../assets/images/chevron-left.svg";
import "./Dropdown.scss";

interface Props {
  content?: string | string[];
  title: string;
}

const Dropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="btn btn--expand" onClick={() => setIsOpen(!isOpen)}>
        <h2>Description</h2>
        <picture className={`image-wrapper ${isOpen ? "open" : ""}`}>
          <img src={Chrevron} alt="" />
        </picture>
      </button>
      <div className={`dropdown__content ${isOpen ? "" : "hidden"}`}>
        {typeof props.content === "string" ? (
          <p className="text">{props.content}</p>
        ) : (
          <ul>
            {props.content?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
