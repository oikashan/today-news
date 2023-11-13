import { useEffect, useRef } from "react";
import { useEscapeEvent } from "./useEscapeEvent";

export function usePopupEffect<Popup extends HTMLElement>(
  closePopup: () => void
) {
  // Close popup when user presses Escape key
  useEscapeEvent(closePopup);

  /**
   * Ref to the popup element
   */
  const ref = useRef<Popup>(null);

  /**
   * Effect: Close popup when user clicks outside of popup
   */
  useEffect(() => {
    const popup = ref.current;

    if (!popup) return;

    function handleClickOutside(e: MouseEvent) {
      // If the clicked node is not the popup or a child of the popup
      if (!popup!.contains(e.target as Node)) {
        closePopup();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return { ref };
}
