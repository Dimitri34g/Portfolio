import React, { createContext, useState, useEffect } from "react";
import { getSettings, saveSettings } from "../services/settingsService";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const loadSettings = async () => {
      const settings = await getSettings();
      setTheme(settings.theme);
    };
    loadSettings();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    saveSettings(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
