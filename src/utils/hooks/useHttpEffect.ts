import React, { useEffect } from "react";

/**
 * Hook to be used for HTTP requests.
 * Aborts any observers and asynchronous operations using the AbortController
 * on unmount.
 *
 * @param effectHandler The handler to be used for the effect.
 * @param deps The array of dependancies.
 */
export default function useHttpEffect(
  effectHandler: React.EffectCallback,
  deps: React.DependencyList
) {
  useEffect(() => {
    const controller = new AbortController();

    const handler = effectHandler();

    return () => {
      controller.abort();

      if (typeof handler === "function") {
        handler();
      }
    };
  }, deps);
}
