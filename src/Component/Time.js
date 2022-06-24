import React, { useEffect, useState } from "react";

function ClockTime() {
  const [Time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="ClockTime">
      <label>{Time}</label>
    </div>
  );
}
export default ClockTime;