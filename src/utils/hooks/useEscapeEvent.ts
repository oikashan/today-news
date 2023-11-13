import { useEffect } from "react";

/**
 * Hook that calls a function when the user presses the Escape key.
 */
export function useEscapeEvent(onEscape: () => void) {
  /**
   * Effect: Close popup when user presses Escape key
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
