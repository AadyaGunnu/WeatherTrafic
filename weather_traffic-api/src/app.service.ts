import { Injectable } from '@nestjs/common';
import {area} from './app.interface';

let camera = [];
let location = [];
let weather = [];


@Injectable()
export class AppService {
  getListOfAreas(dateTime): area[] {
    this.fetchdata(dateTime);
    let data = [];
    let locCordinate=[]
    let camCordinates=[];
    camera.forEach((data,index)=>{
           
          camCordinates[index] = data.location;
    })
    location.forEach((data,index) =>{
    locCordinate[index] = data.label_location;
    })
    
    for(let i = 0; i < camCordinates.length; i++){
     
     let Index =  this.fetchNearest(camCordinates[i], locCordinate);
     let instenct = {
      name: location[Index].name,
      weather:weather[Index].forecast,
      img:camera[Index].image
     }
     data.push(instenct);
    }

  return data;
  }
  fetchNearest(camCordinates: object , location: object[] ) : number {
    var index = 0;
   let closest = location[0];
   let shortestDistance = this.DistSquared(camCordinates, location[0]);
    for (var i = 0; i < location.length; i++) {
        var d = this.DistSquared(camCordinates, location[i]);
        if (d < shortestDistance) {
            closest = location[i];
            index = i;
            shortestDistance = d;
        }
    }
    return index
  }

 DistSquared(pt1, pt2) : number{
    var diffX = pt1.x - pt2.x;
    var diffY = pt1.y - pt2.y;
    return (diffX*diffX+diffY*diffY);
}
  fetchdata(dateTime): void {
     
    fetch('https://api.data.gov.sg/v1/transport/traffic-images')
    .then((response) => response.json())
    .then((json) => {
      camera = json.items[0].cameras;
     
    });
    fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast')
    .then((response) => response.json())
    .then((json) => {
      location = json.area_metadata;
      weather = json.items[0].forecasts;
    });
      console.log(dateTime);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
