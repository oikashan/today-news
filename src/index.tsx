import News from "./News";
import About from "./About";
import { initTheme, isTheme, switchTheme } from "./themes";
import PageNotFound from "./PageNotFound";
import { createRoot } from "react-dom/client";
import { articleCategoryRoutes } from "./articles";
import { HeaderComponent } from "~/widgets/header";
import { FooterComponent } from "./widgets/footer";
import { useGsapEffect } from "./utils/hooks/useGsapEffect";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";

// Assets
import "~/assets/styles/styles.scss";

// Initialize theme
initTheme();

/**
 * Main app component.
 */
function App() {
  useGsapEffect((tl) => {
    tl.fromTo(
      [
        ".app-banner",
        ".app-header",
        ".app-header button",
        ".app-header a",
        ".app-footer",
        ".app-footer a",
        ".app-footer__menu > *",
      ],
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <>
      {/* Banner */}
      {!isTheme("neobrutalist") && (
        <div role="alert" data-theme="neobrutalist" className="app-banner">
          <p>
            We have a lovely new theme,{" "}
            <button
              className="button button-transparent"
              onClick={(e) => {
                switchTheme("neobrutalist");
                e.currentTarget.parentElement?.parentElement?.remove();
              }}
            >
              click here to try! 🚀
            </button>
          </p>
        </div>
      )}
      <div className="container">
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
        <ScrollRestoration />
      </div>
    </>
  );
}

createRoot(document.getElementById("app")!).render(
  <>
    <RouterProvider
      router={createBrowserRouter([
        // Default route is the astrology category.
        {
          path: "/",
          element: <App />,
          children: [
            // Article categories
            ...articleCategoryRoutes.map(({ index, basename, category }) => ({
              index,
              path: basename,
              element: <News category={category} />,
            })),
            // About
            {
              path: "about",
              element: <About />,
            },
            // 404
            {
              path: "*",
              element: <PageNotFound />,
            },
          ],
        },
      ])}
    />
  </>
);
