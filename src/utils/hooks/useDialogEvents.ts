import { useEffect, useRef } from "react";
import { turnOffScroll, turnOnScroll } from "../functions";
import { useEscapeEvent } from "./useEscapeEvent";
import { useTrapFocusEffect } from "./useTrapFocusEffect";

export function useDialogEvents<
  FirstLink extends HTMLElement,
  LastLink extends HTMLElement
>(onClose: () => void) {
  const firstLinkRef = useRef<FirstLink>(null);
  const lastLinkRef = useRef<LastLink>(null);

  // Close the dialog when user presses escape.
  useEscapeEvent(onClose);

  // Trap focus inside the dialog.
  useTrapFocusEffect({
    firstElementRef: firstLinkRef,
    lastElementRef: lastLinkRef,
  });

  /**
   * Effect: Turn off all scrollable elements when the dialog is open.
   */
  useEffect(() => {
    turnOffScroll();

    return turnOnScroll;
  }, []);

  return {
    firstLinkRef,
    lastLinkRef,
  };
}
