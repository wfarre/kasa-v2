import { useState } from "react";
import Chrevron from "./images/chevron-left.svg";
import "./Dropdown.scss";

interface Props {
  content?: string | string[];
  title: string;
}

const Dropdown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown" data-expanded={isOpen}>
      <button className="btn btn--expand" onClick={() => setIsOpen(!isOpen)}>
        <h2>{props.title}</h2>
        <picture className={`image-wrapper ${isOpen ? "open" : ""}`}>
          <img src={Chrevron} alt="" />
        </picture>
        <span hidden>Ouvrir our fermer détails concernant {props.title}</span>
      </button>
      <div className={`dropdown__content ${isOpen ? "" : "hidden"}`}>
        {typeof props.content === "string" ? (
          <p className="text">{props.content}</p>
        ) : (
          <ul>
            {props.content?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
