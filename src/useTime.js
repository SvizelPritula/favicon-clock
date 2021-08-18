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
    var animationFrame;

    function updateTime() {
      setTimestamp(getTimestamp());
      animationFrame = requestAnimationFrame(updateTime);
    }

    animationFrame = requestAnimationFrame(updateTime);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  var date = new Date(timestamp * 1000);

  return {
    seconds: date.getSeconds(),
    minutes: date.getMinutes(),
    hours: date.getHours()
  };
}