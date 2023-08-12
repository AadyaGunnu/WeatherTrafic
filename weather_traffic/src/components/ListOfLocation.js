import Image from "./image";
import Weather from "./weather";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ListOfLocation(props) {
  const [listOfloc, setListOfloc] = useState([]);
  const [src, setSrc] = useState({});
  let dateTime = props.dateTime;
  useEffect(() => {
    function fetchdata() {
      axios
        .get("http://localhost:3001/getListOfAreas", {
          params: { dateTime: dateTime },
        })
        .then((res) => {
          console.log(res);
          setListOfloc(res.data);
        });
    }
    if (dateTime) {
      fetchdata();
    }
  }, [dateTime]);

  const listarea = listOfloc.map((listItems, index) => {
    return (
      <ul key={index}>
        <button className="button" onClick={() => setSrc(listOfloc[index])}>
          {" "}
          {listItems.name}
        </button>
      </ul>
    );
  });

  return (
    <>
      <div className="lostOfloc">
        <label>Area available</label>
        <ul>{listarea}</ul>
      </div>
      <div className="body">
        <div className="weatherDIv">
          <Weather src={src.weather} />
        </div>
        <div>
          <Image src={src.img} />
        </div>
      </div>
    </>
  );
}
export default React.memo(ListOfLocation);
