import { IconStar } from "~/icons";
import type { ArticleComponentProps } from "./ArticleTypes";

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
  className = "",
  children,
  ...props
}: ArticleComponentProps) {
  return (
    <article {...props} className={`app-article ${className}`}>
      {/* Render if there's at least one of these. */}
      {(rating !== undefined || previewURL || thumbnailURL) && (
        <div className="app-article__media">
          {/* Thumbnail */}
          {thumbnailURL && (
            <div className="app-article__thumbnail">
              <img loading="lazy" src={thumbnailURL} {...thumbnailProps} />
            </div>
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
        {/* Label */}
        <div
          {...labelProps}
          className={`app-article__label ${labelProps?.className}`}
        >
          {label}
        </div>
        {/* Title */}
        <a
          href="#"
          {...titleProps}
          className={`app-article__title ${titleProps?.className}`}
        >
          {title}
        </a>
        {/* Description */}
        <div
          {...descriptionProps}
          className={`app-article__description ${descriptionProps?.className}`}
        >
          {description}
        </div>

        {/* Author */}
        <div
          {...authorProps}
          className={`app-article__author ${authorProps?.className}`}
        >
          {author}
        </div>
      </div>
      {children}
    </article>
  );
}
