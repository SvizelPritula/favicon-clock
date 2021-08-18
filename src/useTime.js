import { useState, useEffect } from "react";

function getTimestamp() {
  return Math.round(Date.now() / 1000);
}

/**
 * @returns {{hours: number, minutes: number, seconds: number}}
 */
export default function useTime() {
  const [timestamp, setTimestamp] = useState(getTimestamp);

  useEffect(() => {
    var interval;

    function updateTime() {
      setTimestamp(getTimestamp());
    }

    interval = setInterval(updateTime, 100);
    updateTime();
    return () => clearInterval(interval);
  }, []);

  var date = new Date(timestamp * 1000);

  return {
    seconds: date.getSeconds(),
    minutes: date.getMinutes(),
    hours: date.getHours()
  };
}