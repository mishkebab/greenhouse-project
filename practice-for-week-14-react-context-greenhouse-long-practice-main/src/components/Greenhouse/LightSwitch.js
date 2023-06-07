import "./LightSwitch.css";


// imported these
import { useTheme } from "../../context/ThemeContext";

function LightSwitch() {

  // called this
    const { themeName, setThemeName } = useTheme();

    return (
        <div className={`light-switch ${themeName}`}>
          
          {/* called the on click for both of these*/}
            <div className="on" onClick={() => setThemeName("day")}> 
                DAY
            </div>
            <div className="off" onClick={() => setThemeName("night")}>
                NIGHT
            </div>
        </div>
    );
}

export default LightSwitch;
