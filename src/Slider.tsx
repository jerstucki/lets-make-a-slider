import { useRef } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import "./Slider.css";

type SliderProps = {
  width?: number;
  onChange?: (value: number) => void;
};

const defaultWidth = 400;

const defaultOnChange = (value: number) => {
  console.log("slider value", value);
};

export function Slider({ width = defaultWidth, onChange = defaultOnChange }) {
  const sliderEl = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  return (
    <div ref={sliderEl} className="Slider" style={{ width }}>
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
        dragConstraints={{ left: 0, right: width, top: 0, bottom: 0 }}
        dragElastic={false}
        dragMomentum={false}
        onDrag={(e, info) => {
          if (sliderEl.current) {
            const thumbX =
              info.point.x -
              sliderEl.current.getBoundingClientRect().x -
              window.scrollX;
            onChange(thumbX);
          }
        }}
      ></motion.div>
    </div>
  );
}
