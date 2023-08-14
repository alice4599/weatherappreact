import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Info from "./Info";
import axios from "axios";

import "./Style.css";

export default function Weather(props) {
  let [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function weatherResponse(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  function submit(event) {
    event.preventDefault();
    search();
  }
  function cityInput(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "4dad04c3ca4f2774bb04900t8b93bo1f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(weatherResponse);
  }
  if (weather.ready) {
    return (
      <div className="container">
        <div className="card">
          <form onSubmit={submit} className="showCity" id="show-city">
            <input
              type="search"
              placeholder="enter city"
              id="enter-city"
              className="enterCity"
              onChange={cityInput}
            />
            <Button variant="outline-dark" type="submit" id="searchCity">
              search
            </Button>
            <Button variant="outline-dark" id="currentLocation">
              current
            </Button>
          </form>
          <Info data={weather} />
          <small>
            <a
              class="source"
              href="https://github.com/alice4599/weatherappreact.git"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Neli
          </small>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
