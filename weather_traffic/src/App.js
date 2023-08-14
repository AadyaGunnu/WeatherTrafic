import Moment from "moment";
import React, { useState } from "react";
import ListOfLocation from "./components/ListOfLocation";
import "./App.css";

function App() {
  const [dateTime, setDateTime] = useState({
    date: "",
    time: "",
  });
  const [date_time, setdate_time] = useState("");
  const onChangeHandler = (e) => {
    setDateTime({ ...dateTime, [e.target.name]: e.target.value });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setdate_time(
      Moment(
        `${dateTime.date} ${dateTime.time}`,
        "YYYY-MM-DD[T]HH:mm:ss (SGT)"
      ).format()
    );
  };

  return (
    <div className="maindiv">
      <div className="header">
        {" "}
        <h1 className="h1">Weather Forecast & Traffic Cam</h1>
      </div>
      <form onSubmit={handleSearch} className="form">
        <div>
          <label>Please enter date : </label>
          <input
            id="date"
            value={dateTime.date}
            onChange={onChangeHandler}
            name="date"
            type="date"
          />
        </div>
        <div>
          <label>Please enter time : </label>
          <input
            id="time"
            value={dateTime.time}
            onChange={onChangeHandler}
            type="time"
            name="time"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <div className="mainBody">
        <ListOfLocation dateTime={date_time}></ListOfLocation>
      </div>
    </div>
  );
}

export default App;
