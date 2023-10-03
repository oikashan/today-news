import { Article } from "~/articles";
import {
  ListArticlesView,
  StoryArticlesView,
  VideoArticlesView,
  SquaredArticlesView,
  CircledArticlesView,
  InvertedArticlesView,
  GalleriedArticlesView,
  FullWidthArticlesView,
  HighlightedArticlesView,
} from "./articles/views";

// Assets
import "~/assets/styles/styles.scss";
import { getShuffled } from "./utils/functions";

/**
 * Landing page.
 */
export default function LandingPage({
  articles,
  headings,
  isLoading = false,
}: {
  headings: string[];
  articles: Article[];
  isLoading?: boolean;
}) {
  // This array is spliced to avoid mutating the original array and shuffled to
  // ensure that the articles are in a different order every time the page is
  // refreshed.
  const slicedArticles = getShuffled([...articles]);

  return (
    <>
      <section id="highlights" className="app-section">
        <div className="app-section__content">
          <HighlightedArticlesView
            isLoading={isLoading}
            articles={slicedArticles.splice(0, 7)}
          />
        </div>
      </section>
      <section id="circles" className="app-section">
        <h2 className="app-section__heading text-accent">{headings[0]}</h2>
        <div className="app-section__content padded bg-overlay">
          <CircledArticlesView
            isLoading={isLoading}
            articles={slicedArticles.splice(0, 5)}
          />
        </div>
      </section>
      {/* <section id="gallery" className="app-section">
        <h2 className="app-section__heading text-accent-secondary">
          {headings[1]}
        </h2>
        <div className="app-section__content">
          <GalleriedArticlesView isLoading={isLoading} articles={slicedArticles.splice(0, 4)} />
        </div>
      </section> */}
      <section id="squares" className="app-section">
        <h2 className="app-section__heading text-success">{headings[2]}</h2>
        <div className="app-section__content padded bg-overlay">
          <SquaredArticlesView
            isLoading={isLoading}
            articles={slicedArticles.splice(0, 4)}
          />
        </div>
      </section>
      <section id="fullWidth" className="app-section">
        <h2 className="app-section__heading text-failure">{headings[3]}</h2>
        <div className="app-section__content">
          <FullWidthArticlesView
            isLoading={isLoading}
            articles={slicedArticles.splice(0, 1)}
          />
        </div>
      </section>
      <section id="inverted" className="app-section">
        <h2 className="app-section__heading text-accent">{headings[4]}</h2>
        <div className="app-section__content">
          <InvertedArticlesView
            isLoading={isLoading}
            articles={slicedArticles.splice(0, 3)}
          />
        </div>
      </section>
      <section id="stories" className="app-section">
        <h2 className="app-section__heading text-accent-secondary">
          {headings[5]}
        </h2>
        <div className="app-section__content padded bg-overlay">
          <StoryArticlesView
            isLoading={isLoading}
            articles={slicedArticles.splice(0, 2)}
          />
        </div>
      </section>
      <section id="squares" className="app-section">
        <h2 className="app-section__heading text-success">{headings[6]}</h2>
        <div className="app-section__content padded bg-overlay">
          <SquaredArticlesView
            hasRating
            className="not-centered"
            isLoading={isLoading}
            articles={slicedArticles.splice(0, 4)}
          />
        </div>
      </section>
      <section id="list" className="app-section">
        <h2 className="app-section__heading text-failure">{headings[7]}</h2>
        <div className="app-section__content">
          <ListArticlesView
            isLoading={isLoading}
            articles={slicedArticles.splice(0, 6)}
          />
        </div>
      </section>
      <section id="videos" className="app-section">
        <h2 className="app-section__heading text-accent-secondary">
          {headings[8]}
        </h2>
        <div className="app-section__content">
          <VideoArticlesView
            isLoading={isLoading}
            articles={slicedArticles.splice(0, 3)}
          />
        </div>
      </section>
    </>
  );
}
