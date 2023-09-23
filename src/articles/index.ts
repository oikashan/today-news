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
