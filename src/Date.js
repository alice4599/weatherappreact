import React from "react";

export default function Date(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[props.date.getDay()];
  let dayOfTheMonth = props.date.getDate();
  let month = months[props.date.getMonth()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span className="weather">
      {day}, {month} {dayOfTheMonth}
      <span className="timeDisplay">
        {hours}:{minutes}
      </span>
    </span>
  );
}
