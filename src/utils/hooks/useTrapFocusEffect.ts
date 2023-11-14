import { useEffect } from "react";

export function useTrapFocusEffect({
  firstElement,
  lastElement,
}: {
  firstElement?: HTMLElement | null;
  lastElement?: HTMLElement | null;
}) {
  /**
   * Effect: Trap focus inside the dialog.
   */
  useEffect(() => {
    if (firstElement) {
      // Initially, focus the first element.
      firstElement?.focus();
    }

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Focus the last element when shift + tabbed from the first element.
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }

          return;
        }

        // Otherwise, focus the first element when tabbed from the last element.
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTab);

    return () => {
      window.removeEventListener("keydown", handleTab);
    };
  }, []);
}
