import React from 'react';

export default function image(props) {
  return (
    <div style={{border: '3px solid blue', width:"fit-content"}}>
      <img
        src={props.src}
        alt=""
      />
    </div>
  );
}