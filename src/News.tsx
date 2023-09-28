import LandingPage from "./LandingPage";
import { LoaderComponent } from "./widgets/loader";
import { ArticleCategory, useArticles } from "./articles";

export default function News({ category }: { category: ArticleCategory }) {
  const { articles, headings } = useArticles(category);

  return (
    <>
      {articles.status === "erred"
        ? // If there's an error.
          alert("Something went wrong...")
        : // If the articles are loading.
          // articles.status === "loading" ? (
          //   <LoaderComponent />
          // ) :
          // If the articles are loaded.
          articles.status === "loaded" && (
            <>
              <LandingPage headings={headings} articles={articles.data} />
            </>
          )}
    </>
  );
}
