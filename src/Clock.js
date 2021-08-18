import AnalogueClock from "./AnalogueClock";
import DigitalClock from "./DigitalClock";

/**
 * @param {object} params
 * @param {string} params.type
 * @returns 
 */
export default function Clock({ type }) {
  return (
    <svg viewBox="0 0 100 100">
      {type === "analogue" && <AnalogueClock />}
      {type === "digital" && <DigitalClock />}
    </svg>
  );
}