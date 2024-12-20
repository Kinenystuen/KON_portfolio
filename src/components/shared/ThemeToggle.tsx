import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Button from "./Button/Button";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Button
      onClick={toggleDarkMode}
      buttonType="transparent"
      className="text-lg p-2 m-0 md:mt-2 lg:m-0 rounded hover:border-transparent transition-colors duration-300 bg-transparent dark:hover:bg-transparent dark:text-whiteFont-600 dark:hover:text-whiteFont-500 text-gray-700 z-30 lg:mr-1 focus:ring-2 focus:ring-black dark:focus:ring-white"
      aria-label="Toggle Dark Mode"
      title={`${darkMode ? "Light mode" : "Dark mode"}`}
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
    </Button>
  );
};

export default ThemeToggle;
