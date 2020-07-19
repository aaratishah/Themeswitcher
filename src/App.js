import React, { useState } from "react";
import ThemeContext from "./Context/themeContext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

export default function App() {
  const [themeHook, setThemeHook] = useState("light");
  return (
    <ThemeContext.Provider value={[themeHook, setThemeHook]}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
}
