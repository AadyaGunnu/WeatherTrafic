
import Image from './image';
import Weather from './weather';
import React, {useEffect} from "react";


 function ListOfLocation(props) {
  
  useEffect(() => {
    let areaList=[];
    props.data.image.forEach(element => {
        const list = props.data.area.find(elem => {
            return (elem.label_location.latitude === element.location.latitude &&
             elem.label_location.longitude === element.location.longitude);
        });
        console.log(list);
    });
    console.log(areaList);
  });
  
  return (
    <>
     <div style={{border: '3px solid black'}}>
       <div>
       aadya
       </div>
        </div> 
       <div className='body'>
   <div style={{ margin: '30px',width:"70%"}}>
   <Image/>
   </div>
    <div style={{ margin: '30px', width:"30%"}}>
         <Weather/>
         </div>
     
        </div> 
      
    </>
  );
}
export default ListOfLocation;
