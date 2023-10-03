import { motion } from "framer-motion";
import { IconArrowUpRight, IconStar } from "~/icons";
import {
  getListMotionVariants,
  getListItemMotionVariants,
} from "~/utils/functions";
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
  url,
  className = "",
  children,
  ...props
}: ArticleComponentProps) {
  const motionProps = getListMotionVariants({
    initial: {
      y: 50,
    },
    animate: {
      y: 0,
    },
  });

  const motionItemProps = getListItemMotionVariants({
    initial: {
      y: 50,
    },
    animate: {
      y: 0,
    },
  });

  return (
    <motion.article
      {...props}
      {...motionProps}
      className={`app-article ${className}`}
    >
      {/* Render if there's at least one of these. */}
      {(rating !== undefined || previewURL || thumbnailURL) && (
        <motion.div className="app-article__media">
          {/* Thumbnail */}
          {thumbnailURL && (
            <motion.div className="app-article__thumbnail" {...motionItemProps}>
              <motion.img
                {...thumbnailProps}
                alt={title}
                loading="lazy"
                src={thumbnailURL}
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/1000/1000";
                }}
              />
            </motion.div>
          )}
          {/* Preview */}
          {previewURL && (
            <motion.div className="app-article__preview" {...motionItemProps}>
              <motion.video {...previewProps} src={previewURL} />
            </motion.div>
          )}
          {/* Rating */}
          {rating !== undefined && (
            <motion.div
              {...ratingProps}
              {...motionItemProps}
              className={`app-article__rating badge ${ratingProps?.className}`}
            >
              <IconStar width={16} height={16} />
              {rating}
            </motion.div>
          )}
        </motion.div>
      )}
      <motion.div className="app-article__body">
        <motion.div {...labelProps} className="app-article__badge">
          {/* Label */}
          <motion.span
            className={`app-article__label ${labelProps?.className}`}
          >
            {label}
          </motion.span>
          <motion.span className={`app-article__arrow badge badge-success`}>
            <IconArrowUpRight width={12} height={12} />
          </motion.span>
        </motion.div>
        {/* Title */}
        <motion.h2
          {...titleProps}
          className={`app-article__title ${titleProps?.className}`}
        >
          {title}
        </motion.h2>
        {/* Description */}
        <motion.div
          {...descriptionProps}
          className={`app-article__description ${descriptionProps?.className}`}
        >
          {description}
        </motion.div>

        {/* Author */}
        {author && (
          <motion.div
            {...authorProps}
            className={`app-article__author ${authorProps?.className}`}
          >
            {author.split(" ").slice(0, 2).join(" ")}
          </motion.div>
        )}
      </motion.div>
      <motion.a
        target="_blank"
        rel="noreferrer"
        href={url || "#"}
        className="app-article__anchor"
      >
        Read More
      </motion.a>
      {children}
    </motion.article>
  );
}
