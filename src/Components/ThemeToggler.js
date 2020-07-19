import React, { useContext } from "react";
import ThemeContext from "../Context/themeContext";

export default function Themetoggler() {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <page
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <span>{themeMode === "light" ? "turn off" : "turn on"}</span>
    </page>
  );
}
