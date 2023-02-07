import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import "./Slider.css";

export function Slider() {
  const sliderWidth = 400;

  const x = useMotionValue(0);

  useMotionValueEvent(x, "change", (xValue) => {
    console.log(xValue);
  });

  return (
    <div className="Slider" style={{ width: sliderWidth }}>
      <div className="SliderTrack">
        <motion.div
          className="SliderTrackFill"
          style={{ width: x }}
        ></motion.div>
      </div>
      <motion.div
        className="SliderThumb"
        style={{
          x,
        }}
        drag
        dragConstraints={{ left: 0, right: sliderWidth, top: 0, bottom: 0 }}
        dragElastic={false}
        dragMomentum={false}
      ></motion.div>
    </div>
  );
}
