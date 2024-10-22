import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa"; // Utilisation d'icônes si nécessaire

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
