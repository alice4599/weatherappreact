import React from "react";
import Icon from "./Icon";

export default function Forecast() {
  return (
    <div>
      <div class="col">
        <div class="forecastDay">Time</div>
        <Icon />
        <div class="forecastTemp">
          <span class="forecastMax">Min°</span>
          <span class="forecastMin">Max</span>
        </div>
      </div>
    </div>
  );
}
