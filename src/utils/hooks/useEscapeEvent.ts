import { useEffect } from "react";

export function useEscapeEvent(onEscape: () => void) {
  /**
   * Effect: Call onEscape when user presses Escape key
   */
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onEscape();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onEscape]);
}
