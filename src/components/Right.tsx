import dayjs from "dayjs";
import React from "react";
import ColorShifter from "./ColorShifter";
import ShowTime from "./ShowTime";

const Right = () => {
  const currentTime = dayjs().format("HH:mm:ss");

  return (
    <div className="container">
      <h1>Right</h1>
      <div className="boxes">
        <ShowTime time={currentTime} />
        <ColorShifter />
      </div>
    </div>
  );
};

export default Right;
