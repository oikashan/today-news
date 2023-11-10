import LandingPage from "./LandingPage";
import PageNotFound from "./PageNotFound";
import { ArticleCategory, useArticles } from "./articles";
import Loader from "./widgets/loader/LoaderComponent";

export default function News({ category }: { category: ArticleCategory }) {
  const { articles, headings } = useArticles(category);

  console.log(articles);

  return (
    <>
      {articles.status === "erred" ? (
        // If there's an error.
        <PageNotFound />
      ) : articles.status === "loading" ? (
        // If we're loading.
        <Loader />
      ) : (
        <>
          <LandingPage headings={headings} articles={articles.data} />
        </>
      )}
    </>
  );
}
