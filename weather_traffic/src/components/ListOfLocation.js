
import Image from './image';
import Weather from './weather';
import React, {useEffect,useState} from "react";
import axios from 'axios';


 function ListOfLocation(props) {
  const [listOfloc, setListOfloc] = useState([]);
  const [src, setSrc] = useState({});
  let dateTime = props.dateTime;
  useEffect(() => {
    function fetchdata() {
    axios.get('http://localhost:3000/getListOfAreas',{ params: { dateTime: dateTime } })
    .then(res => { 
    console.log(res); 
    setListOfloc(res.data);
  });
}
  if(dateTime){
    fetchdata();
  }
     
  },[dateTime]);


  const listarea = listOfloc.map((listItems,index)=>{
    return(
            <li key={index}><button onClick={()=>setSrc(listOfloc[index])}>  {listItems.name}</button>
              
            </li>
        );
});


  return (
    <>
     <div style={{border: '3px solid black'}}>
       <div>
        <label>Area available</label>
       <ul>{listarea}</ul>
       </div>
        </div> 
       <div className='body'>
   <div style={{ margin: '30px',width:"70%"}}>
   <Image src={src.img}/>
   </div>
    <div style={{ margin: '30px', width:"30%"}}>
         <Weather src={src.weather}/>
         </div>
     
        </div> 
      
    </>
  );
}
export default ListOfLocation;
