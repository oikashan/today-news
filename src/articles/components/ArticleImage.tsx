import { useEffect, useRef } from "react";

export default function ArticleImage({
  src,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"img">) {
  const imgRef = useRef<HTMLImageElement>(null);

  /**
   * Image loading effect.
   * Intersection based image loading.
   */
  useEffect(() => {
    const { current: imgEl } = imgRef;

    if (!imgEl) return;

    const src = imgEl.dataset.src;

    if (!src) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          /**
           * A loader image that loads the actual image.
           */
          const loader = new Image();

          // This initiates the loading process.
          loader.src = src;

          loader.onload = () => {
            imgEl.src = src;
            imgEl.removeAttribute("data-src");
            imgEl.classList.remove("loading");
            observer.unobserve(imgEl);
          };

          loader.onerror = () => {
            imgEl.src = "https://picsum.photos/seed/johncena/1000";
            imgEl.removeAttribute("data-src");
            imgEl.classList.remove("loading");
            observer.unobserve(imgEl);
          };
        }
      });
    });

    observer.observe(imgEl);

    return () => {
      if (imgEl) {
        observer.unobserve(imgEl);
      } else {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <img
      {...props}
      ref={imgRef}
      data-src={src}
      className={`loading ${className}`}
    />
  );
}
