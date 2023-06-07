import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from "../../context/ClimateContext";
import { useState, useEffect } from "react";

function Thermometer() {
  const {temp, setTemp} = useClimate();

  const [goalTemp, setGoalTemp] = useState(temp);

  useEffect(() => {
      const timer = setTimeout(() => {
      console.log("1 second has passed")
      if (goalTemp < temp) {
        setTemp(temp - 1);
      } else if (goalTemp > temp) {
        setTemp(temp + 1);
      } 
    }, 1000)
  
    return () => {
        clearTimeout(timer);
    }
  }, [temp, goalTemp])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={goalTemp}
        onAfterChange={(val) => {setGoalTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
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

export default Thermometer;