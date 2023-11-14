export type Theme = "dark" | "light" | "neobrutalist";

/**
 * Switch to the specified theme.
 */
export function switchTheme(theme: Theme) {
  // Store the specified theme in the local storage for revisits.
  localStorage.setItem("theme", theme);

  // Set the theme.
  document.body.setAttribute("data-theme", theme);
}

/**
 * Toggle between the dark and light themes.
 */
export function toggleTheme() {
  document.body.getAttribute("data-theme") == "light"
    ? switchTheme("dark")
    : switchTheme("light");
}

/**
 * Check if the current theme is the specified one.
 */
export function isTheme(theme: Theme) {
  return document.body.getAttribute("data-theme") == theme;
}

/**
 * Initialize the theme.
 *
 */
export function initTheme() {
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
}
