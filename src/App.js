import { useState } from "react";
import SVGIcon from "react-svg-favicon";

import Clock from "./Clock";
import Controls from "./Controls";

import { ThemeContext } from "./ThemeContext";

import './App.css';

export default function App() {
  const [type, setType] = useState("analogue");
  const [theme, setTheme] = useState("light");

  return (
    <main>
      <ThemeContext.Provider value={theme}>
        <Clock type={type} />

        <SVGIcon>
          <Clock type={type} />
        </SVGIcon>

        <Controls
          type={type} setType={setType}
          theme={theme} setTheme={setTheme}
        />
      </ThemeContext.Provider>
    </main>
  );
}