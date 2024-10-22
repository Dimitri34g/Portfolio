import React from "react";
import ThemeToggle from "./ThemeSwitcher/ThemeToggle";

function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-2xl">Mon Portfolio</h1>
      <ThemeToggle />
    </header>
  );
}

export default Header;
