import React from "react";
import "./Style.css";

export default function TemperatureUnit(props) {
  return (
    <div>
      <span className="temperature" id="temperature">
        {Math.round(props.celsius)}
      </span>
      <span className="unit" id="celsius">
        °C
      </span>
    </div>
  );
}
