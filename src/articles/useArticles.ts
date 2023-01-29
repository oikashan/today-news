import { useState } from "react";
import { isArticle } from "./Article";
import { useHttpEffect } from "~/utils/hooks";

// Types
import type { Article } from "./Article";
import type { Fetchable } from "~/utils/types";

/**
 * The articles provider.
 *
 * @returns A set of articles that can be displayed.
 */
export default function useArticles(): Fetchable<Article[]> {
  // The state for the articles.
  // Notice the status = 'loading', that's what I call a fetchable entity.
  // By default, the articles are loading, and the effect below sets them
  // to either 'loaded' or 'erred', the two results of an HTTP request.
  const [articles, setArticles] = useState<Fetchable<Article[]>>({
    data: [],
    status: "loading",
  });

  // I didn't use `useEffect` since I've implemented it inside the used hook
  // plus the functionality to abort all asynchronous tasks on unmount.
  useHttpEffect(() => {
    /**
     * Callback for a failed request.
     * @param reason Mostly the catched `Error` object but can be anything.
     */
    function onFailure(reason: any) {
      console.error(reason);

      // Notice the status.
      setArticles({
        ...articles,
        status: "erred",
      });
    }

    /**
     * Callback for a successful request.
     * @param data The potential `Article[]` that we're looking for.
     */
    function onSuccess(data: any) {
      // Data must contain valid `Article` entities for us to proceed.
      if (data && Array.isArray(data) && isArticle(data[0])) {
        setArticles({
          data,
          status: "loaded",
        });
        return;
      }

      // Otherwise.
      onFailure("TypeScriptError: Fetched data isn't a valid Article.");
    }

    // Since we're fetching a local resource, this simulates the actual wait of
    // a response.
    setTimeout(() => {
      fetch("/articles.json")
        .then((response) => response.json())
        .then(onSuccess)
        .catch(onFailure);
    }, 3000);
  }, []);

  return articles;
}
