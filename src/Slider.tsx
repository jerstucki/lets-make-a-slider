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
  const x = useMotionValue(0);

  return (
    <div className="Slider" style={{ width }}>
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
          // FIXME: info.point.x is the coordinates within the viewport, not relative to the parent!
          onChange(info.point.x);
        }}
      ></motion.div>
    </div>
  );
}
