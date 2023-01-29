import { useEffect } from "react";
import type { Theme } from "./Theme";

/**
 * The themes provider.
 * @returns Helper methods to play with the theme.
 */
export default function useThemes() {
  /**
   * Switch to the specified theme.
   */
  function switchTheme(theme: Theme) {
    // Store the specified theme in the local storage for revisits.
    localStorage.setItem("theme", theme);

    // Set the theme.
    document.body.setAttribute("data-theme", theme);
  }

  /**
   * Toggle between the dark and light themes.
   */
  function toggleTheme() {
    document.body.getAttribute("data-theme") == "light"
      ? switchTheme("dark")
      : switchTheme("light");
  }

  // Set initial theme.
  useEffect(() => {
    const existingTheme = localStorage.getItem("theme");

    // Set the theme from localStorage as the current theme if it exists.
    if (existingTheme) {
      switchTheme(existingTheme as Theme);
      return;
    }

    // Otherwise, check if user prefers the dark mode.
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // Set the dark theme if they do.
      switchTheme("dark");
      return;
    }

    // Otherwise, it's the light one.
    switchTheme("light");
  }, []);

  return { switchTheme, toggleTheme };
}
