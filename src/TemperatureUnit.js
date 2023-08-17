import React, { useState } from "react";
import "./Style.css";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature" id="temperature">
          {Math.round(props.celsius)}
        </span>
        <span className="unit" id="celsius">
          °C |{" "}
          <a href="/" className="fahrenheit" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature" id="temperature">
          {Math.round(fahrenheit)}
        </span>
        <span className="unit" id="celsius">
          <a href="/" className="celsius" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
