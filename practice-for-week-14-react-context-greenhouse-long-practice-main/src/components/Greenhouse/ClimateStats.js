import "./ClimateStats.css";

import { useClimate } from "../../context/ClimateContext";

function ClimateStats() {

  const { temp, humidity} = useClimate();
  // console.log(temp, humidity );
  

    return (
        <div className="climate-stats">
            <div className="temperature">Temperature {temp}°F</div>
            <div className="humidity">Humidity {humidity}%</div>
        </div>
    );
}

export default ClimateStats;
