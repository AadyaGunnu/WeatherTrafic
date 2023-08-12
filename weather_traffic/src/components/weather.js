import * as React from 'react';


export default function weather(props) {
  return (
    <div style={{border: '3px solid black'}}>
           <div >{props.src}</div>
    </div>
  );
}