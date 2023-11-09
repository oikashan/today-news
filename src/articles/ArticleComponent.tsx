import { IconArrowUpRight, IconStar } from "~/icons";
import type { ArticleComponentProps } from "./ArticleTypes";
import ArticleThumbnail from "./components/ArticleThumbnail";
import ArticleImage from "./components/ArticleImage";

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
  isLoading = false,
  children,
  ...props
}: ArticleComponentProps) {
  return (
    <article
      {...props}
      className={`app-article ${className} ${isLoading ? "loading" : ""}`}
    >
      {/* Render if there's at least one of these. */}
      {(rating !== undefined || previewURL || thumbnailURL) && (
        <div className="app-article__media">
          {/* Thumbnail */}
          {thumbnailURL && (
            <ArticleThumbnail>
              <ArticleImage {...thumbnailProps} src={thumbnailURL} />
            </ArticleThumbnail>
          )}
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
        </div>
      )}
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
        <h2
          {...titleProps}
          className={`app-article__title ${titleProps?.className}`}
        >
          {title}
        </h2>
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
        className="app-article__anchor"
      >
        Read More
      </a>
      {children}
    </article>
  );
}
