import { useEffect, useRef } from "react";
import { turnOffScroll, turnOnScroll } from "../functions";

export function useDialogEvents<
  FirstLink extends HTMLElement,
  LastLink extends HTMLElement
>(onClose: () => void) {
  const firstLinkRef = useRef<FirstLink>(null);
  const lastLinkRef = useRef<LastLink>(null);

  /**
   * Effect: Close the dialog when the escape key is pressed.
   */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  /**
   * Effect: Trap focus inside the dialog.
   */
  useEffect(() => {
    // Trap focus.
    const firstLink = firstLinkRef.current;
    const lastLink = lastLinkRef.current;

    if (firstLink) {
      // Initially, focus the first link.
      firstLink?.focus();
    }

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Focus the last link when shift + tabbed from the first link.
          if (document.activeElement === firstLink) {
            e.preventDefault();
            lastLink?.focus();
          }

          return;
        }

        // Otherwise, focus the first link when tabbed from the last link.
        if (document.activeElement === lastLink) {
          e.preventDefault();
          firstLink?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTab);

    return () => {
      window.removeEventListener("keydown", handleTab);
    };
  }, []);

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
