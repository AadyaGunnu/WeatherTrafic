
import React, {useEffect} from "react";
import ListOfLocation from './components/ListOfLocation';
import axios from 'axios';

import './App.css';
let data = {
  items:{},
   area:{} ,
   image:[]
};
  

function LandingPage(props) {
 
 let dateTime = props.dateTime;
  useEffect(() => {
    function fetchdata() {
    axios.get('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast',{ date_time: {dateTime}  }).then(res => {  
      data.items = res.data.items[0].forecasts;  
      data.area = res.data.area_metadata;  
    });  
      axios.get('https://api.data.gov.sg/v1/transport/traffic-images',{ date_time: {dateTime}}).then(res => { 
        const data1 = res.data.items[0].cameras; 
    data.image = data1;
      }); 
    } 
    if(dateTime){
      fetchdata();
    }
  });


  return (
    <>
      <ListOfLocation data = {data} />
    </>
  );
}

export default LandingPage;
