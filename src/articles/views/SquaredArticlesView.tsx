import ArticleComponent from "../ArticleComponent";
import type { ArticleViewProps } from "../ArticleTypes";

export type SquaredArticlesViewProps = {
  hasRating?: boolean;
} & ArticleViewProps;

export default function SquaredArticlesView({
  articles,
  hasRating = false,
  className = "",
  ...props
}: SquaredArticlesViewProps) {
  return (
    <div {...props} className={`view-article__circles squared ${className}`}>
      {articles.map((article) => (
        <ArticleComponent
          key={article.id}
          {...article}
          rating={hasRating ? article.rating : undefined}
          labelProps={{ className: "badge" }}
          titleProps={{ className: "text-subtitle" }}
          authorProps={{ className: "text-body-xs" }}
          // Hidden elements
          descriptionProps={{ className: "hidden" }}
        />
      ))}
    </div>
  );
}
