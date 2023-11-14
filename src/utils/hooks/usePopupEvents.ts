import { useEffect, useRef } from "react";
import { useEscapeEvent } from "./useEscapeEvent";
import { useClickOutsideEvent } from "./useClickOutsideEvent";

export function usePopupEvents<Popup extends HTMLElement>(
  closePopup: () => void
) {
  /**
   * Ref to the popup element
   */
  const ref = useRef<Popup>(null);

  // Close popup when user presses Escape key
  useEscapeEvent(closePopup);

  // Close popup when user clicks outside the popup
  useClickOutsideEvent({
    ref,
    onClickOutside: closePopup,
  });

  return { ref };
}
