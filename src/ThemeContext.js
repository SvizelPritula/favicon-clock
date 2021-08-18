import { createContext, useContext } from "react";

export const ThemeContext = createContext('light');

const themes = {
  light: {
    background: "white",
    foreground: "black",
    contrast: "red"
  },
  dark: {
    background: "black",
    foreground: "white",
    contrast: "red"
  }
};

/** 
 * @returns {{background: string, foreground: string, contrast: string}}
 */
export function useTheme() {
  const themeName = useContext(ThemeContext);

  return themes[themeName] || themes.light;
}