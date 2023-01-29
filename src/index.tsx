import LandingPage from "./LandingPage";
import { useArticles } from "~/articles";
import { createRoot } from "react-dom/client";
import { HeaderComponent } from "~/widgets/header";
import { LoaderComponent, useLoader } from "./widgets/loader";

// Assets
import "~/assets/styles/styles.scss";

/**
 * Root component.
 */
function App() {
  const { hideLoader } = useLoader();
  const { articles } = useArticles();

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
              {/* Hide the loader and rending the landing page */}
              {hideLoader()}
              <LandingPage articles={articles.data} />
            </>
          )}
    </>
  );
}

createRoot(document.getElementById("app")!).render(<App />);
