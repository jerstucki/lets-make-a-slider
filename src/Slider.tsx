import { scalePoint } from "d3";
import {
  motion,
  PanInfo,
  useAnimationControls,
  useMotionValue,
} from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import "./Slider.css";

type SliderProps = {
  initialValue: number;
  width?: number;
  onChange?: (value: number) => void;
};

const defaultWidth = 400;

const defaultOnChange = (value: number) => {
  console.log("slider value", value);
};

export function Slider({
  initialValue,
  width = defaultWidth,
  onChange = defaultOnChange,
}: SliderProps) {
  const sliderEl = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const animationControls = useAnimationControls();
  const scaleX = scalePoint([10, 100, 1000, 5000], [0, width]);
  const initialX = scaleX(initialValue!) ?? 0;

  useEffect(() => {
    animationControls.start({ x: initialX });
  }, [initialX]);

  const getCurrentValue = useCallback<
    (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => number
  >(
    (e, info) => {
      if (sliderEl.current) {
        const thumbX =
          info.point.x -
          sliderEl.current.getBoundingClientRect().x -
          window.scrollX;
        console.log(scaleX.step());
        const valueIndex = Math.round(
          Math.max(0, Math.min(width, thumbX)) / scaleX.step()
        );
        const currentValue = scaleX.domain()[valueIndex];

        onChange(currentValue);

        return currentValue;
      }

      return scaleX.domain()[0];
    },
    [onChange, width]
  );

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
        onDrag={(event, info) => {
          const currentValue = getCurrentValue(event, info);
          onChange(currentValue);
        }}
        onDragEnd={(event, info) => {
          const currentValue = getCurrentValue(event, info);
          onChange(currentValue);
          animationControls.start({
            x: scaleX(currentValue),
            transition: {
              delay: 0.01, // add slight delay, otherwise it interferes with drag
            },
          });
        }}
        animate={animationControls}
      ></motion.div>
    </div>
  );
}
