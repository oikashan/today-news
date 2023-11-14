import { useSearchParams } from "react-router-dom";

export function useHeaderOverlay() {
  const [params, setParams] = useSearchParams();

  // Initial value is based on the param itself.
  // This ensures that the overlay is truly controlled by the URL.
  const isOverlayOpen = params.get("menu") === "open";

  /**
   * Update the URL when the overlay is opened or closed.
   * This ensures that the overlay is truly controlled by the URL.
   *
   * @param value Whether the overlay is open or not.
   */
  const setIsOverlayOpen = (value: boolean) => {
    if (value) {
      setParams({ menu: "open" });
    } else {
      setParams();
    }
  };

  return { isOverlayOpen, setIsOverlayOpen };
}
