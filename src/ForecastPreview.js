import React from "react";
import Icon from "./Icon";

export default function ForecastPreview(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}°`;
  }
  return (
    <div className="col">
      <div className="forecastDay">{day()}</div>
      <Icon code={props.data.condition.icon} />
      <div className="forecastTemp">
        <span className="forecastMondayMax">{maxTemp()}°</span>
        <span className="forecastMondayMin">{minTemp()}°</span>
      </div>
    </div>
  );
}
