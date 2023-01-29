import ArticleComponent from "../ArticleComponent";
import type { ArticleViewProps } from "../ArticleTypes";

export default function InvertedArticlesView({
  articles,
  className = "",
  ...props
}: ArticleViewProps) {
  return (
    <div {...props} className={`view-article__inverted ${className}`}>
      {articles.map((article) => (
        <ArticleComponent
          key={article.id}
          {...article}
          rating={undefined}
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
