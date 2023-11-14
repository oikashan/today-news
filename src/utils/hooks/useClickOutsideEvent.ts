import { useEffect } from "react";

export function useClickOutsideEvent({
  element,
  onClickOutside,
}: {
  onClickOutside: () => void;
  element?: HTMLElement | null;
}) {
  /**
   * Effect: Call onClickOutside when user clicks outside the element
   */
  useEffect(() => {
    if (!element) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target;

      // If the clicked node is a child of the element, do nothing
      if ((element as Node).contains(target as Node)) return;

      // If the clicked node is the element itself, do nothing
      if (target == element) return;

      // If the clicked node is not the element or a child of the element
      onClickOutside();
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);
}
