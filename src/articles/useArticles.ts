import { useState } from "react";
import { useHttpEffect } from "~/utils/hooks";
import { getArticleFromResponse, isArticle } from "./Article";
import {
  isArticleCategory,
  defaultArticleCategory,
  articleCategoryHeadings,
} from ".";

// Types
import type { Article } from "./Article";
import type { Fetchable } from "~/utils/types";
import type { ArticleResponse } from "./ArticleTypes";

/**
 * The articles provider.
 *
 * @returns A set of articles that can be displayed.
 */
export default function useArticles(category?: string) {
  let articleCategory = defaultArticleCategory;

  if (category && isArticleCategory(category)) {
    articleCategory = category;
  }

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
    // If the articles aren't already loading, set them to loading.
    // This is useful when the user switches between categories.
    if (articles.status !== "loading") {
      setArticles({
        ...articles,
        status: "loading",
      });
    }

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
    function onSuccess(data: ArticleResponse) {
      // Data must be an array.
      if (!Array.isArray(data)) {
        onFailure("TypeScriptError: Fetched data isn't an array.");
        return;
      }

      // Convert the data to `Article[]`.
      const articles = data.map((article) => getArticleFromResponse(article));

      // Filter out the articles that aren't articles (duh).
      setArticles({
        status: "loaded",
        data: articles.filter(isArticle),
      });
    }

    // Since we're fetching a local resource, this simulates the actual wait of
    // a response.
    const timeout = setTimeout(() => {
      fetch(`/articles/${articleCategory}.json`)
        .then((response) => response.json())
        .then(onSuccess)
        .catch(onFailure);
    }, 4500);

    return () => clearTimeout(timeout);
  }, [articleCategory]);

  return { articles, headings: articleCategoryHeadings[articleCategory] };
}
