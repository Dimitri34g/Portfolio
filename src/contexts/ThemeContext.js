import React, { createContext, useState, useEffect } from "react";

// Créer le contexte
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Gestion de l'état du thème (clair ou sombre)
  const [theme, setTheme] = useState("light");

  // Charger le thème depuis le localStorage ou définir un thème par défaut
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Fonction pour basculer entre clair et sombre
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Sauvegarder le choix de l'utilisateur
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
