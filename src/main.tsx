import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Slider } from "./Slider";
import "./index.css";

const App = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div className="container">
      <div className="AppSliderValue">{sliderValue.toFixed(0)}</div>
      <Slider onChange={(value) => setSliderValue(value)} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
