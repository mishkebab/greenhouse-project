import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";

import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";

// we imported this
import { useTheme } from "../../context/ThemeContext";

function Greenhouse() {
    // created these two variables
    const { themeName } = useTheme();
    const imageSource = themeName === "day" ? dayImage : nightImage;

    return (
        <section>
            <img
                className="greenhouse-img"
                src={imageSource} // called our variable to render that img
                alt="greenhouse"
            />
            <LightSwitch />
            <ClimateStats />
        </section>
    );
}

export default Greenhouse;
