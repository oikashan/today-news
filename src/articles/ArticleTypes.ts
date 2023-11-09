import React from "react";
import type { Article } from "./Article";

export type ArticleCategory =
  | "astrology"
  | "business"
  | "lifestyle"
  | "philanthropy"
  | "technology"
  | "vacation";

export type ArticleComponentProps = Article & {
  /**
   * Additional props for the article's title
   */
  titleProps?: React.ComponentPropsWithoutRef<"div">;

  /**
   * Additional props for the article's label
   */
  labelProps?: React.ComponentPropsWithoutRef<"div">;

  /**
   * Additional props for the article's author
   */
  authorProps?: React.ComponentPropsWithoutRef<"div">;

  /**
   * Additional props for the article's rating
   */
  ratingProps?: React.ComponentPropsWithoutRef<"div">;

  /**
   * Additional props for the article's description
   */
  descriptionProps?: React.ComponentPropsWithoutRef<"div">;

  /**
   * Additional props for the article's preview video
   */
  previewProps?: React.ComponentPropsWithoutRef<"video">;

  /**
   * Additional props for the article's thumbnail image
   */
  thumbnailProps?: React.ComponentPropsWithoutRef<"img">;
} & React.ComponentPropsWithoutRef<"div">;

export type ArticleViewProps = {
  articles: Article[];
} & React.ComponentPropsWithoutRef<"div">;

export type ArticleResponse = {
  source: { id?: number; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}[];
