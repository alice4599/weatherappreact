import React from "react";
import Icon from "./Icon";

export default function ForecastInfo(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecastData">
      <div className="forecastDay">{day()}</div>
      <Icon data={props.data.condition.icon} />
      <div className="forecastTemp">
        <span className="forecastMax">
          {Math.round(props.data.temperature.minimum)}°
        </span>
        |
        <span className="forecastMin">
          {Math.round(props.data.temperature.maximum)}°
        </span>
      </div>
    </div>
  );
}
