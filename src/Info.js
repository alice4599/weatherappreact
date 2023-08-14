import React from "react";
import Date from "./Date";

export default function Info(props) {
  return (
    <div className="body">
      <h1 className="cityUnit" id="city">
        {props.data.city}
      </h1>
      <Date date={props.data.date} />
      <div className="tempUnit">
        <img
          di="mainIcon"
          src={props.data.iconUrl}
          alt={props.data.description}
        />
        <span className="temperature" id="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit" id="celsius">
          °C
        </span>
        <p className="weatherDescription" id="description">
          {props.data.description}
        </p>
        <br />
        <ul className="weatherInfo">
          <span> Humidity💦: </span>
          <li className="infoHumidity" id="humidity">
            {props.data.humidity}%
          </li>
          <br />
          <span>Windspeed💨: </span>
          <li className="infoSpeed" id="speed">
            {props.data.wind}
          </li>
          km/h
        </ul>
      </div>
    </div>
  );
}
