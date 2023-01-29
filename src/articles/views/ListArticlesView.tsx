import ArticleComponent from "../ArticleComponent";
import type { ArticleViewProps } from "../ArticleTypes";

export default function ListArticlesView({
  articles,
  className = "",
  ...props
}: ArticleViewProps) {
  return (
    <div {...props} className={`view-article__list ${className}`}>
      {articles.map((article) => (
        <ArticleComponent
          key={article.id}
          {...article}
          rating={undefined}
          labelProps={{ className: "badge" }}
          authorProps={{ className: "text-body-xs" }}
          titleProps={{ className: "text-subtitle-sm" }}
          // Hidden elements
          descriptionProps={{ className: "hidden" }}
        />
      ))}
    </div>
  );
}
