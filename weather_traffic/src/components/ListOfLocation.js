import Image from "./image";
import Weather from "./weather";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ListOfLocation(props) {
  const [listOfloc, setListOfloc] = useState([]);
  const [src, setSrc] = useState({});
  const [area, setarea] = useState([]);
  let dateTime = props.dateTime;
  let uniqueAreas = [];
  //let data = [];
  useEffect(() => {
    function fetchdata() {
      axios
        .get("http://localhost:3001/getListOfAreas", {
          params: { dateTime: dateTime },
        })
        .then((res) => {
          console.log(res);
          setarea(res.data);
          //  setListOfloc(res.data);
          removeDups();
        });
    }
    if (dateTime !== "" && dateTime !== "Invalid date") {
      fetchdata();
    }
  }, [dateTime]);

  const removeDups = function () {
    let temparr = [];
    area.forEach((entry) => {
      temparr.push(entry.name);
    });
    uniqueAreas = [...new Set(temparr)];
    temparr = [];
    setListOfloc(uniqueAreas);
  };
  const getWetaher = function (e) {
    let temp = area.find((inst) => inst.name === e);
    setSrc(temp);
  };
  const listarea = listOfloc.map((listItems, index) => {
    return (
      <ul key={index} onClick={(e) => getWetaher(e.target.textContent)}>
        {listItems}
      </ul>
    );
  });

  return (
    <>
      <div className="body">
        <div className="listOfloc">
          <h1>Area available</h1>
          <ul className="text">{listarea}</ul>
        </div>
        <div className="weatherTrffic">
          {" "}
          <div className="divWeather">
            <Weather src={src.weather} />
          </div>
          <div className="divImg">
            <Image src={src.img} />
          </div>
        </div>
      </div>
    </>
  );
}
export default React.memo(ListOfLocation);
