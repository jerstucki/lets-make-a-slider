import "./Slider.css";

export function Slider() {
  return (
    <div className="Slider" style={{ width: 400 }}>
      <div className="SliderTrack">
        <div className="SliderTrackFill"></div>
      </div>
      <div className="SliderThumb"></div>
    </div>
  );
}
