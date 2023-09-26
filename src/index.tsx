import News from "./News";
import { createRoot } from "react-dom/client";
import { articleCategoryRoutes } from "./articles";
import { HeaderComponent } from "~/widgets/header";
import { FooterComponent } from "./widgets/footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// Assets
import "~/assets/styles/styles.scss";
import PageNotFound from "./PageNotFound";
import About from "./About";

function App() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
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
