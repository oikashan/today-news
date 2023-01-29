/**
 * Utilities related to the loader.
 */
export default function useLoader() {
  function hideLoader() {
    const loader = document.querySelector(".app-loader")!;

    loader.classList.add("hide");

    setTimeout(() => {
      // Send the loader backwards when its transition ends.
      loader.setAttribute("style", "z-index: -1");
    }, 1500);
  }

  return { hideLoader };
}
