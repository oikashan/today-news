import LandingPage from "./LandingPage";
import { ArticleCategory, useArticles } from "./articles";

export default function News({ category }: { category: ArticleCategory }) {
  const { articles, headings } = useArticles(category);

  return (
    <>
      {articles.status === "erred" ? (
        // If there's an error.
        alert("Something went wrong...")
      ) : (
        <>
          <LandingPage
            headings={headings}
            articles={articles.data}
            isLoading={articles.status === "loading"}
          />
        </>
      )}
    </>
  );
}
