import LandingPage from "./LandingPage";
import { LoaderComponent } from "./widgets/loader";
import { ArticleCategory, useArticles } from "./articles";

export default function News({ category }: { category: ArticleCategory }) {
  const { articles } = useArticles(category);

  return (
    <>
      {articles.status === "erred" ? (
        // If there's an error.
        alert("Something went wrong...")
      ) : // If the articles are loading.
      articles.status === "loading" ? (
        <LoaderComponent />
      ) : (
        // If the articles are loaded.
        articles.status === "loaded" && (
          <>
            <LandingPage
              articles={articles.data}
              headings={[
                "Tech Titans Clash: Silicon Valley's Latest Showdown",
                "Climate Crisis: Innovations and Actions for a Greener World",
                "Crypto Craze: Navigating the Wild World of Digital Assets",
                "Fashion Forward: Trends and Styles Redefining the Runway",
                "Health Matters: Breakthroughs and Wellness Tips for a Better You",
                "Beyond Borders: Global Affairs and the Changing World Order",
                "Entertainment Extravaganza: A Glimpse into Hollywood's Hottest Hits",
                "Exploring the Final Frontier: Space Exploration's Latest Frontiers",
                "Culinary Chronicles: Food Trends and Tantalizing Tastes",
              ]}
            />
          </>
        )
      )}
    </>
  );
}
