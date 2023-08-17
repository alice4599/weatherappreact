import React from "react";

export default function Icon(props) {
  console.log(props);
  let url = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data}.png`;
  return (
    <div className="mainIcon">
      <img id="icon" src={url} alt={props.alt} className="w-40" />
    </div>
  );
}
