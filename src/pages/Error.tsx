import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <ul className="error">
        <li className="error__title">
          <h1 className="title">404</h1>
        </li>
        <li className="error__text">
          Oops! La page que vous demandez n'existe pas.
        </li>
        <li className="error__link">
          <Link className="link" to={"/"}>
            Retourner à la page d'acceuil
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Error;
