import { useRef } from "react";
import { IconArrowUpRight, IconStar } from "~/icons";
import ArticleImage from "./components/ArticleImage";
import type { ArticleComponentProps } from "./ArticleTypes";
import ArticleThumbnail from "./components/ArticleThumbnail";
import { useGsapEffect } from "~/utils/hooks/useGsapEffect";

/**
 * The component that renders an article.
 * Everything is customizeable and configurable with it's respective properties.
 */
export default function ArticleComponent({
  id,
  title,
  titleProps,
  label,
  labelProps,
  author,
  authorProps,
  rating,
  ratingProps,
  description,
  descriptionProps,
  previewURL,
  previewProps,
  thumbnailURL,
  thumbnailProps,
  url,
  className = "",
  children,
  ...props
}: ArticleComponentProps) {
  const articleRef = useRef<HTMLElement>(null);

  useGsapEffect((tl) => {
    if (!articleRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const article = entry.target as HTMLElement;

            // Stop observing this element.
            observer.unobserve(entry.target);

            tl.fromTo(
              [
                article,
                article.querySelector(".app-article__media"),
                article.querySelector(".app-article__badge"),
                article.querySelector(".app-article__title"),
                article.querySelector(".app-article__description"),
                article.querySelector(".app-article__author"),
              ],
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(articleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article {...props} ref={articleRef} className={`app-article ${className}`}>
      <div className="app-article__media">
        {/* Thumbnail */}
        <ArticleThumbnail>
          <ArticleImage {...thumbnailProps} alt={title} src={thumbnailURL} />
        </ArticleThumbnail>
        {/* Render if there's at least one of these. */}
        {(rating !== undefined || previewURL) && (
          <>
            {/* Preview */}
            {previewURL && (
              <div className="app-article__preview">
                <video {...previewProps} src={previewURL} />
              </div>
            )}
            {/* Rating */}
            {rating !== undefined && (
              <div
                {...ratingProps}
                className={`app-article__rating badge ${ratingProps?.className}`}
              >
                <IconStar width={16} height={16} />
                {rating}
              </div>
            )}
          </>
        )}
      </div>
      <div className="app-article__body">
        <div {...labelProps} className="app-article__badge">
          {/* Label */}
          <span className={`app-article__label ${labelProps?.className}`}>
            {label}
          </span>
          <span className={`app-article__arrow badge badge-success`}>
            <IconArrowUpRight width={12} height={12} />
          </span>
        </div>
        {/* Title */}
        <h3
          {...titleProps}
          className={`app-article__title ${titleProps?.className}`}
        >
          {title}
        </h3>
        {/* Description */}
        <div
          {...descriptionProps}
          className={`app-article__description ${descriptionProps?.className}`}
        >
          {description}
        </div>

        {/* Author */}
        {author && (
          <div
            {...authorProps}
            className={`app-article__author ${authorProps?.className}`}
          >
            {author.split(" ").slice(0, 2).join(" ")}
          </div>
        )}
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={url || "#"}
        className="app-article__anchor button button-primary"
      >
        Read More
      </a>
      {children}
    </article>
  );
}
