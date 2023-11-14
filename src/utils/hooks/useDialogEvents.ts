import { useEffect } from "react";
import { useEscapeEvent } from "./useEscapeEvent";
import { useTrapFocusEffect } from "./useTrapFocusEffect";
import { turnOffScroll, turnOnScroll } from "../functions";

export function useDialogEvents({
  onClose,
  ...elements
}: {
  onClose: () => void;
  firstElement?: HTMLElement | null;
  lastElement?: HTMLElement | null;
}) {
  // Close the dialog when user presses escape.
  useEscapeEvent(onClose);

  // Trap focus inside the dialog.
  useTrapFocusEffect(elements);

  /**
   * Effect: Turn off all scrollable elements when the dialog is open.
   */
  useEffect(() => {
    turnOffScroll();

    return turnOnScroll;
  }, []);
}
