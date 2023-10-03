import React from "react";
import type { Article } from "./Article";
import type { MotionComponentProps } from "~/utils/types";

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
  titleProps?: MotionComponentProps;

  /**
   * Additional props for the article's label
   */
  labelProps?: MotionComponentProps;

  /**
   * Additional props for the article's author
   */
  authorProps?: MotionComponentProps;

  /**
   * Additional props for the article's rating
   */
  ratingProps?: MotionComponentProps;

  /**
   * Additional props for the article's description
   */
  descriptionProps?: MotionComponentProps;

  /**
   * Additional props for the article's preview video
   */
  previewProps?: MotionComponentProps;

  /**
   * Additional props for the article's thumbnail image
   */
  thumbnailProps?: MotionComponentProps;
} & MotionComponentProps;

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
