import React, { useContext } from "react";
import ThemeContext from "../Context/themeContext";
import AppTheme from "../colors";

export default function Herosection() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div
      style={{
        padding: "10rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>context API theme toggler</h1>
      <p>this is a paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currentTheme.border}`,
        }}
      >
        click me
      </button>
    </div>
  );
}
