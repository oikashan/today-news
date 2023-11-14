import { useEffect } from "react";

export function useTrapFocusEffect<
  FirstElement extends HTMLElement,
  LastElement extends HTMLElement
>({
  firstElementRef,
  lastElementRef,
}: {
  firstElementRef: React.RefObject<FirstElement>;
  lastElementRef: React.RefObject<LastElement>;
}) {
  /**
   * Effect: Trap focus inside the dialog.
   */
  useEffect(() => {
    // Trap focus.
    const firstElement = firstElementRef.current;
    const lastElement = lastElementRef.current;

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
