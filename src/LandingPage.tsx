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

/**
 * Landing page.
 */
export default function LandingPage({ articles }: { articles: Article[] }) {
  return (
    <>
      <section id="highlights" className="app-section">
        <div className="app-section__content">
          <HighlightedArticlesView articles={articles.slice(0, 7)} />
        </div>
      </section>
      <section id="circles" className="app-section">
        <h2 className="app-section__heading text-accent">
          1 row: 5 circles with bg
        </h2>
        <div className="app-section__content padded bg-overlay">
          <CircledArticlesView articles={articles.slice(0, 5)} />
        </div>
      </section>
      <section id="gallery" className="app-section">
        <h2 className="app-section__heading text-accent-secondary">
          2 rows: 1 x 3
        </h2>
        <div className="app-section__content">
          <GalleriedArticlesView articles={articles.slice(0, 4)} />
        </div>
      </section>
      <section id="squares" className="app-section">
        <h2 className="app-section__heading text-success">1 row: 4 with bg</h2>
        <div className="app-section__content padded bg-overlay">
          <SquaredArticlesView articles={articles.slice(0, 4)} />
        </div>
      </section>
      <section id="fullWidth" className="app-section">
        <h2 className="app-section__heading text-failure">
          1 full width article
        </h2>
        <div className="app-section__content">
          <FullWidthArticlesView articles={articles.slice(0, 1)} />
        </div>
      </section>
      <section id="inverted" className="app-section">
        <h2 className="app-section__heading text-accent">
          1 row: 2 x 1 inverted
        </h2>
        <div className="app-section__content">
          <InvertedArticlesView articles={articles.slice(0, 3)} />
        </div>
      </section>
      <section id="stories" className="app-section">
        <h2 className="app-section__heading text-accent-secondary">
          1 row: 2 stories with bg
        </h2>
        <div className="app-section__content padded bg-overlay">
          <StoryArticlesView articles={articles.slice(0, 2)} />
        </div>
      </section>
      <section id="squares" className="app-section">
        <h2 className="app-section__heading text-success">1 row: 4 reviews</h2>
        <div className="app-section__content padded bg-overlay">
          <SquaredArticlesView
            hasRating
            className="not-centered"
            articles={articles.slice(0, 4)}
          />
        </div>
      </section>
      <section id="list" className="app-section">
        <h2 className="app-section__heading text-failure">2 rows: 3 x 3</h2>
        <div className="app-section__content">
          <ListArticlesView articles={articles.slice(0, 6)} />
        </div>
      </section>
      <section id="videos" className="app-section">
        <h2 className="app-section__heading text-accent-secondary">
          1 row: 3 video
        </h2>
        <div className="app-section__content">
          <VideoArticlesView articles={articles.slice(0, 3)} />
        </div>
      </section>
    </>
  );
}
