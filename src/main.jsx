import React from "react";
import ReactDOM from "react-dom/client";
import { PokeApiApp } from "./PokeApiApp";

import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokeApiApp />
  </React.StrictMode>
);
