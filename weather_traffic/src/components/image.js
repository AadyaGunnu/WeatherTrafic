import React, { useState, useRef, useEffect } from "react";

export default function Image(props) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const defaultImg = require("../image/travel-updates-emergency-areas.jpg");
  const handleZoomIn = () => {
    setScale((scale) => scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale((scale) => scale - 0.1);
  };

  useEffect(() => {
    const image = imageRef.current;
    let isDragging = false;
    let prevPosition = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      prevPosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPosition.x;
      const deltaY = e.clientY - prevPosition.y;
      prevPosition = { x: e.clientX, y: e.clientY };
      setPosition((position) => ({
        x: position.x + deltaX,
        y: position.y + deltaY,
      }));
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    image?.addEventListener("mousedown", handleMouseDown);
    image?.addEventListener("mousemove", handleMouseMove);
    image?.addEventListener("mouseup", handleMouseUp);

    return () => {
      image?.removeEventListener("mousedown", handleMouseDown);
      image?.removeEventListener("mousemove", handleMouseMove);
      image?.removeEventListener("mouseup", handleMouseUp);
    };
  }, [imageRef, scale]);

  return (
    <div>
      <div className="btn-container">
        <button onClick={handleZoomIn}>
          <span>Zoom In</span>
        </button>
        <button onClick={handleZoomOut}>
          <span>Zoom out</span>
        </button>
      </div>
      <div className="imgDIv">
        <img
          ref={imageRef}
          src={props.src ? props.src : defaultImg}
          alt=""
          style={{
            width: "50vw",
            height: "auto",
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
            cursor: "move",
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}
