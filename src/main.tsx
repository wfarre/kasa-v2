import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accommodation from "./Accommodation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
