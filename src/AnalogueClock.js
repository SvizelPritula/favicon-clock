import { useTheme } from "./ThemeContext";
import useTime from "./useTime";

export default function AnalogueClock() {
  const { foreground, background, contrast } = useTheme();
  const { hours, minutes, seconds } = useTime();

  const lines = [];
  for (var i = 1; i <= 12; i++) {
    lines.push(i * (360 / 12));
  }

  return (<>
    <circle cx={50} cy={50} r={50} fill={background} />

    {lines.map(angle => <line
      x1={50} y1={5}
      x2={50} y2={15}
      strokeWidth={5}
      stroke={foreground}
      transform={`rotate(${angle}, 50, 50)`}
      key={angle}
    />)}

    <line
      x1={50} y1={5}
      x2={50} y2={70}
      strokeWidth={3}
      stroke={contrast}
      transform={`rotate(${(seconds / 60 * 360)}, 50, 50)`}
    />

    <line
      x1={50} y1={5}
      x2={50} y2={60}
      strokeWidth={5}
      stroke={foreground}
      transform={`rotate(${(minutes / 60 * 360)}, 50, 50)`}
    />

    <line
      x1={50} y1={30}
      x2={50} y2={55}
      strokeWidth={5}
      stroke={foreground}
      transform={`rotate(${(hours / 12 * 360)}, 50, 50)`}
    />
  </>);
}