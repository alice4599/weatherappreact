import React from "react";
import Date from "./Date";
import Icon from "./Icon";
import TemperatureUnit from "./TemperatureUnit";

export default function Info(props) {
  return (
    <div className="body">
      <h1 className="cityUnit" id="city">
        {props.data.city}
      </h1>
      <Date date={props.data.date} />
      <div className="tempUnit">
        <Icon data={props.data.icon} />
        <p className="weatherDescription" id="description">
          {props.data.description}
        </p>
        <TemperatureUnit celsius={props.data.temperature} />
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
