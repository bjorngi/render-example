import dayjs from "dayjs";
import React from "react";
import ColorShifter from "./ColorShifter";
import ShowTime from "./ShowTime";

const Left: React.FC = () => {
  const [time, setTime] = React.useState(dayjs());

  const formattedTime = React.useMemo(() => time.format("HH:mm:ss"), [time]);

  React.useEffect(() => {
    const intId = window.setInterval(() => setTime(dayjs()), 1000);
    return () => window.clearInterval(intId);
  });

  return (
    <div className="container">
      <h1>Left</h1>
      <div className="boxes">
        <ShowTime time={formattedTime} />
        <ColorShifter />
      </div>
    </div>
  );
};

export default Left;
