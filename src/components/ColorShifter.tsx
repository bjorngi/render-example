import React from "react";

const randomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.random();
    const bit = (random * 16) | 0;
    color += bit.toString(16);
  }
  return `${color}50`;
};

const ColorShifter = () => {
  const color = randomColor();

  return <div className="box" style={{ background: color }} />;
};

export default ColorShifter;
