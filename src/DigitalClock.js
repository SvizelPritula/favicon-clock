import { useTheme } from "./ThemeContext";
import useTime from "./useTime";

export default function DigitalClock() {
  const { foreground, background } = useTheme();
  const { hours, minutes, seconds } = useTime();

  const unit = Math.floor(seconds / 5) % 3;
  const value = [hours, minutes, seconds][unit];

  return (
    <>
      <rect x={0} y={0} width={100} height={100} rx={20} ry={20} fill={background} />

      <text x={50} y={60} fontSize={60} fontFamily="monospace" textAnchor="middle" fill={foreground}>
        {value.toString().padStart(2, '0')}
      </text>

      <circle cx={20 + 30 * unit} cy={80} r={8} fill={foreground} />
    </>
  );
}