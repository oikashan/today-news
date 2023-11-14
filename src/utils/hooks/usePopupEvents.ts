import { useRef } from "react";
import { useEscapeEvent } from "./useEscapeEvent";
import { useClickOutsideEvent } from "./useClickOutsideEvent";

export function usePopupEvents(closePopup: () => void) {
  /**
   * Ref to the popup element
   */
  const ref = useRef<HTMLDivElement>(null);

  // Close popup when user presses Escape key
  useEscapeEvent(closePopup);

  // Close popup when user clicks outside the popup
  useClickOutsideEvent({
    element: ref.current,
    onClickOutside: closePopup,
  });

  return { ref };
}
