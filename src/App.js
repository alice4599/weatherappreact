import React from "react";
import Weather from "./Weather";
import "./Style.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hanau" />
      </div>
    </div>
  );
}
