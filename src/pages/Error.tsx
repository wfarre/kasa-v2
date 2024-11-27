import React from "react";
import "./pages.scss";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const Error = () => {
  return (
    <main>
      <ErrorMessage
        errorText="Oops! La page que vous demandez n'existe pas."
        status={404}
      />
    </main>
  );
};

export default Error;
