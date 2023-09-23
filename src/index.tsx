import LandingPage from "./LandingPage";
import { createRoot } from "react-dom/client";
import { HeaderComponent } from "~/widgets/header";
import { FooterComponent } from "./widgets/footer";
import { LoaderComponent, useLoader } from "./widgets/loader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ArticleCategory, articleCategories, useArticles } from "~/articles";

// Assets
import "~/assets/styles/styles.scss";

function App({ articleCategory }: { articleCategory: ArticleCategory }) {
  const { hideLoader } = useLoader();
  const { articles } = useArticles(articleCategory);

  return (
    <>
      <LoaderComponent />
      <HeaderComponent />
      {articles.status === "erred"
        ? // If there's an error.
          alert("Something went wrong...")
        : // If the articles are loaded.
          articles.status === "loaded" && (
            <>
              {/* Hide the loader and render the landing page */}
              {hideLoader()}
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
          )}
      <FooterComponent />
    </>
  );
}

createRoot(document.getElementById("app")!).render(
  <>
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <App articleCategory="astrology" />,
          children: articleCategories.map((category) => ({
            path: `${category}`,
            element: <App articleCategory={category} />,
          })),
        },
      ])}
    />
  </>
);
