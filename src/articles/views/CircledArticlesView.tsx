import ArticleComponent from "../ArticleComponent";
import type { ArticleViewProps } from "../ArticleTypes";

export default function CircledArticlesView({
  articles,
  className = "",
  ...props
}: ArticleViewProps) {
  return (
    <div {...props} className={`view-article__circles ${className}`}>
      {articles.map((article, index) => (
        <ArticleComponent
          key={article.id}
          {...article}
          rating={undefined}
          labelProps={{ className: "badge" }}
          titleProps={{ className: "text-subtitle" }}
          // Hidden elements
          authorProps={{ className: "hidden" }}
          descriptionProps={{ className: "hidden" }}
        />
      ))}
    </div>
  );
}
