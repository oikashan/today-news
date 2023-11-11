import gsap from "gsap";
import { useEffect } from "react";

/**
 * A hook that creates a new GSAP timeline and calls the effect handler with it.
 * The effect handler can return a cleanup function that will be called when the component unmounts.
 * @param effectHandler A function that receives the timeline as an argument.
 * @param deps The dependencies array for the effect.
 */
export function useGsapEffect(
  effectHandler: (timeline: gsap.core.Timeline) => void | (() => void),
  deps: React.DependencyList = []
) {
  useEffect(() => {
    const tl = gsap.timeline();

    // The effect handler can return a cleanup function.
    const cleanup = effectHandler(tl);

    return () => {
      // Kill the timeline when the component unmounts.
      tl.kill();

      // Call the cleanup function if it exists.
      cleanup?.();
    };
  }, deps);
}
