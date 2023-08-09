import axios from 'axios';

function getTrafficImages() {

    axios.get('https://api.data.gov.sg/v1/transport/traffic-images',{ date_time:  '2023-02-20'  }) .then(res => {  
        const data = res.items;  
     
      })  
      return data 
}

function getWeatherForcast() {
let data = {
    items:{},
     area:{}
};
    axios.get('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast',{ date_time:  '2023-02-20'  }) .then(res => {  
        data.items = res.items;  
       data.area = res.items; 
        
      })  
      return data;
}
export default getTrafficImages,getWeatherForcast;


