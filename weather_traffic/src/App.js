
import Moment from "moment"
import React, {useState} from "react";
import LandingPgae from './LandingPage';
import './App.css';

function App() {
  let date_time=""
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);


  //const [imageData, setImageData] = useState([]);
const onDateChange = (event) =>{
      setDate(event.target.value)
 }
 const onTimeChange = (event) =>{
  setTime(event.target.value);
}
if(date && time){
  date_time =Moment(`${date} ${time}`, 'YYYY-MM-DD[T]HH:mm:ss (SGT)').format();

}

  return (
    <>
    <div className='maindiv'>
      <div className='header'> <h1>Weather Forecast & Traffic Cam</h1>
      </div>
     <div className='dateTimediv'>
      <div>
         <span>Enter date</span>
          <input type='date' value={date} onChange={onDateChange}></input>
      </div>
      <div>
        <span>Enter time</span>
        <input type='time' value={time} onChange={onTimeChange}></input>
      </div>
      </div>
      <LandingPgae dateTime={date_time} ></LandingPgae>
    </div>
    </>
  );
}

export default App;
