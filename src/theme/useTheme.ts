import type { Theme } from "./Theme";

/**
 * The themes provider.
 * @returns Helper methods to play with the theme.
 */
export default function useTheme() {
  function switchTheme(theme: Theme) {
    document.body.setAttribute("data-theme", theme);
  }

  function toggleTheme() {
    document.body.getAttribute("data-theme") == "light"
      ? document.body.setAttribute("data-theme", "dark")
      : document.body.setAttribute("data-theme", "light");
  }

  return { switchTheme, toggleTheme };
}
