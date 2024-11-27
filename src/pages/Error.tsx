import React, { useEffect, useState } from "react";
import "./pages.scss";
import ErrorMessage from "../components/ui/ErrorMessage/ErrorMessage";
import { useLocation } from "react-router-dom";

const Error = () => {
  document.title = "Kasa - Erreur";
  const { state } = useLocation();
  const [error, setError] = useState<{ status: number; message: string }>({
    status: 404,
    message: "Oops! La page que vous demandez n'existe pas.",
  });
  useEffect(() => {
    if (state) {
      const { status, message } = state;
      let newErrorState = error;

      if (status) {
        newErrorState = { ...newErrorState, status: status };
      }
      if (message) {
        newErrorState = { ...newErrorState, message: message };
      }
      setError(newErrorState);
    }
  }, [state]);

  return (
    <main>
      <ErrorMessage errorText={error.message} status={error.status} />
    </main>
  );
};

export default Error;
