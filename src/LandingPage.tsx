import { Article } from "~/articles";
import { getShuffled } from "./utils/functions";
import { m, LazyMotion, domAnimation } from "framer-motion";
import {
  ListArticlesView,
  StoryArticlesView,
  VideoArticlesView,
  SquaredArticlesView,
  CircledArticlesView,
  InvertedArticlesView,
  // GalleriedArticlesView,
  FullWidthArticlesView,
  HighlightedArticlesView,
} from "./articles/views";

// Assets
import "~/assets/styles/styles.scss";

/**
 * Landing page.
 */
export default function LandingPage({
  articles,
  headings,
}: {
  headings: string[];
  articles: Article[];
}) {
  // This array is spliced to avoid mutating the original array and shuffled to
  // ensure that the articles are in a different order every time the page is
  // refreshed.
  const slicedArticles = getShuffled([...articles]);

  return (
    <LazyMotion features={domAnimation}>
      <m.main
        className="app-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section id="highlights" className="app-section">
          <div className="app-section__content">
            <HighlightedArticlesView articles={slicedArticles.splice(0, 7)} />
          </div>
        </section>
        <section id="circles" className="app-section">
          <h2 className="app-section__heading text-accent">{headings[0]}</h2>
          <div className="app-section__content padded bg-overlay">
            <CircledArticlesView articles={slicedArticles.splice(0, 5)} />
          </div>
        </section>
        {/* <section id="gallery" className="app-section">
        <h2 className="app-section__heading text-accent-secondary">
          {headings[1]}
        </h2>
        <div className="app-section__content">
          <GalleriedArticlesView  articles={slicedArticles.splice(0, 4)} />
        </div>
      </section> */}
        <section id="squares" className="app-section bg-success-200">
          <h2 className="app-section__heading text-success">{headings[2]}</h2>
          <div className="app-section__content padded bg-overlay">
            <SquaredArticlesView articles={slicedArticles.splice(0, 4)} />
          </div>
        </section>
        <section id="fullWidth" className="app-section">
          <h2 className="app-section__heading text-failure">{headings[3]}</h2>
          <div className="app-section__content">
            <FullWidthArticlesView articles={slicedArticles.splice(0, 1)} />
          </div>
        </section>
        <section id="inverted" className="app-section">
          <h2 className="app-section__heading text-accent">{headings[4]}</h2>
          <div className="app-section__content">
            <InvertedArticlesView articles={slicedArticles.splice(0, 3)} />
          </div>
        </section>
        <section id="stories" className="app-section">
          <h2 className="app-section__heading text-accent-secondary">
            {headings[5]}
          </h2>
          <div className="app-section__content padded bg-overlay">
            <StoryArticlesView articles={slicedArticles.splice(0, 2)} />
          </div>
        </section>
        <section id="squares" className="app-section">
          <h2 className="app-section__heading text-success">{headings[6]}</h2>
          <div className="app-section__content padded bg-overlay">
            <SquaredArticlesView
              hasRating
              articles={slicedArticles.splice(0, 4)}
            />
          </div>
        </section>
        <section id="list" className="app-section">
          <h2 className="app-section__heading text-failure">{headings[7]}</h2>
          <div className="app-section__content">
            <ListArticlesView articles={slicedArticles.splice(0, 6)} />
          </div>
        </section>
        <section id="videos" className="app-section">
          <h2 className="app-section__heading text-accent-secondary">
            {headings[8]}
          </h2>
          <div className="app-section__content">
            <VideoArticlesView articles={slicedArticles.splice(0, 3)} />
          </div>
        </section>
      </m.main>
    </LazyMotion>
  );
}
