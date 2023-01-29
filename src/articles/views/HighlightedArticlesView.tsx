import ArticleComponent from "../ArticleComponent";
import type { ArticleViewProps } from "../ArticleTypes";

export default function HighlightedArticlesView({
  articles,
  className = "",
  ...props
}: ArticleViewProps) {
  return (
    <div {...props} className={`view-article__highlights ${className}`}>
      {articles.map((article) => (
        <ArticleComponent
          key={article.id}
          {...article}
          rating={undefined}
          labelProps={{ className: "badge" }}
          titleProps={{ className: "text-title" }}
          authorProps={{ className: "text-body-xs" }}
          descriptionProps={{ className: "text-subtitle" }}
        />
      ))}
    </div>
  );
}
