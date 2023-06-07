import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimate } from "../../context/ClimateContext";
import { useState, useEffect } from "react";

function Hygrometer() {
  const {humidity, setHumidity} = useClimate();

  const [goalHumidity, setGoalHumidity] = useState(humidity);

  useEffect(() => {
    const timer = setTimeout(() => {
    if (goalHumidity < humidity) {
      setHumidity(humidity - 1);
    } else if (goalHumidity > humidity) {
      setHumidity(humidity + 1);
    } 
  }, 1000)

  return () => {
      clearTimeout(timer);
  }
}, [humidity, goalHumidity])

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={goalHumidity}
        onAfterChange={(val) => {setGoalHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;