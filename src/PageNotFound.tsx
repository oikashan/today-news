import { m, LazyMotion, domAnimation } from "framer-motion";

export default function PageNotFound() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container not-found-container"
      >
        <div className="not-found-content">
          <h1>404</h1>
          <p>Page Not Found</p>
          <p>Sorry, the news you are looking for does not exist.</p>
        </div>
      </m.div>
    </LazyMotion>
  );
}
