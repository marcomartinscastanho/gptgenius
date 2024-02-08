"use client";

import React, { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  light: "fantasy",
  dark: "dracula",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === themes.light ? themes.dark : themes.light;
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  };

  return (
    <button className="btn btn-sm btn-outline" onClick={toggleTheme}>
      {theme === themes.light ? (
        <BsMoonFill className="h-4 w-4 " />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
