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
    case "Rain": {
      image = require("../image/rainny.png");
      break;
    }
    case "Thunder": {
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
      image = require("../image/particallycloudy.png");
      break;
  }
  return (
    <div className="weatherDiv">
      <div>{props.src ? props.src : "weather"}</div>
      <div className="weatherIcon">
        <img
          style={{
            width: "20px",
            height: "20px",
          }}
          src={image}
        />
      </div>
    </div>
  );
}
