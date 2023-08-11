import React, { useState, useEffect } from "react";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
    let apiKey = "4dad04c3ca4f2774bb04900t8b93bo1f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(forecastResponse);
  }, [props.city]);

  function forecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded && forecast) {
    return (
      <div className="Forecast row">
        {forecast.map(function (day, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <ForecastPreview data={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
