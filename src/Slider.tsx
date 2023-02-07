import { motion } from "framer-motion";
import "./Slider.css";

export function Slider() {
  const sliderWidth = 400;

  return (
    <div className="Slider" style={{ width: sliderWidth }}>
      <div className="SliderTrack">
        <div className="SliderTrackFill"></div>
      </div>
      <motion.div
        className="SliderThumb"
        drag
        dragConstraints={{ left: 0, right: sliderWidth, top: 0, bottom: 0 }}
        dragElastic={false}
        dragMomentum={false}
      ></motion.div>
    </div>
  );
}
