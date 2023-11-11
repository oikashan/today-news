import { WEBSITE } from "./utils/constants";
import { useGsapEffect } from "./utils/hooks/useGsapEffect";

export default function About() {
  useGsapEffect((tl) => {
    tl.fromTo(
      ".about-content > *",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="container about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          We are your source for the latest news, delivering the most up-to-date
          stories from around the world. Our dedicated team of journalists is
          committed to providing you with accurate and reliable news coverage.
        </p>
        <p>
          Just Kidding! This is a fun side project of{" "}
          <a href={WEBSITE}>Kashan</a>, built with React, TypeScript, and Vite.
          The news articles are real&mdash;they're coming from{" "}
          <a href="https://www.newsapi.org">NewsAPI</a>
          &mdash;but the rest of the site is just a dummy.{" "}
        </p>
        <p>
          You can find the source code on{" "}
          <a href="https://github.com/oikashan/today-news">GitHub</a>.
          <br />
          Contributions are welcome!
        </p>
      </div>
    </div>
  );
}
