import { useState } from "react";
import type { Article } from "./Article";
import useHttpEffect from "~/utils/hooks/useHttpEffect";

/**
 * The articles provider.
 *
 * @returns A set of articles that can be displayed.
 */
export default function useArticles(): Article[] {
  const [articles, setArticles] = useState<Article[]>([]);

  useHttpEffect(() => {
    fetch("./articles.json")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((reason) => console.error(reason));
  }, []);

  return articles;
}
