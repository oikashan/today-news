import { RouteObject } from "react-router-dom";
import { ArticleCategory } from "./ArticleTypes";

export * from "./Article";
export * from "./ArticleTypes";
export { default as useArticles } from "./useArticles";
export { default as ArticleComponent } from "./ArticleComponent";

export const defaultArticleCategory: ArticleCategory = "astrology";

export const articleCategories: ArticleCategory[] = [
  "astrology",
  "business",
  "lifestyle",
  "philanthropy",
  "technology",
  "vacation",
];

export const articleCategoriesWithoutDefaultCategory = articleCategories.filter(
  (category) => category !== defaultArticleCategory
);

export const articleCategoryNavItems =
  articleCategoriesWithoutDefaultCategory.map((category) => ({
    to: `/${category}`,
    label: category.toUpperCase(),
  }));

export const articleCategoryRoutes: (Pick<RouteObject, "path" | "index"> & {
  category: ArticleCategory;
  basename?: ArticleCategory;
})[] = [
  {
    path: "/",
    index: true,
    category: defaultArticleCategory,
  },
  ...articleCategoriesWithoutDefaultCategory.map((category) => ({
    category,
    index: false,
    basename: category,
    path: `/${category}`,
  })),
];

export function isArticleCategory(
  category: string
): category is ArticleCategory {
  return articleCategories.includes(category as ArticleCategory);
}
