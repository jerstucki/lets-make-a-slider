import React from "react";
import ReactDOM from "react-dom/client";
import { Slider } from "./Slider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="container">
      <Slider />
    </div>
  </React.StrictMode>
);
