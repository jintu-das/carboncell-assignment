import * as React from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  }

  function enableDarkMode() {
    document.documentElement.classList.add("dark");
    setIsDarkMode(true);
  }

  function disableDarkMode() {
    document.documentElement.classList.remove("dark");
    setIsDarkMode(false);
  }

  return { isDarkMode, toggleDarkMode, enableDarkMode, disableDarkMode };
}
