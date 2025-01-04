import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { Portfolio } from "./Portfolio";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);
