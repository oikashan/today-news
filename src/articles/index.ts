import { ArticleCategory } from "./ArticleTypes";

export * from "./Article";
export * from "./ArticleTypes";
export { default as useArticles } from "./useArticles";
export { default as ArticleComponent } from "./ArticleComponent";

export const articleCategories: ArticleCategory[] = [
  "business",
  "lifestyle",
  "philanthropy",
  "technology",
  "vacation",
];

export const defaultArticleCategory: ArticleCategory = "astrology";

export function isArticleCategory(
  category: string
): category is ArticleCategory {
  return articleCategories.includes(category as ArticleCategory);
}
