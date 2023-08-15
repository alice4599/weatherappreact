import React from "react";

export default function Icon(props) {
  console.log(props);
  let url = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data}.png`;
  return (
    <div className="icon">
      <img id="icon" src={url} alt={props.alt} />
    </div>
  );
}
