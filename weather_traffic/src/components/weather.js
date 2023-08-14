import * as React from "react";

export default function weather(props) {
  let image = "";
  switch (props.src) {
    case "Partly Cloudy (Night)": {
      image = require("../image/pleasent.png");
      break;
    }
    case "Sunny": {
      image = require("../image/sunny.png");
      break;
    }
    case "Light Rain": {
      image = require("../image/rainny.png");
      break;
    }
    case "Showers": {
      image = require("../image/thunder.png");
      break;
    }
    case "Partly Cloudy (Day)": {
      image = require("../image/cloudy.png");
      break;
    }
    case "SnowFall": {
      image = require("../image/snowfall.png");
      break;
    }
    default:
      image = require("../image/default.png");
      break;
  }
  return (
    <div className="weatherDiv">
      <ul className="weather">{props.src ? props.src : "weather"}</ul>

      <img
        className="weatherIcon"
        style={{
          width: "50px",
          height: "50px",
        }}
        src={image}
      />
    </div>
  );
}
