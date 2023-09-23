import ArticleComponent from "../ArticleComponent";
import type { ArticleViewProps } from "../ArticleTypes";

export default function FullWidthArticlesView({
  articles,
  className = "",
  ...props
}: ArticleViewProps) {
  return (
    <div {...props} className={`view-article__full ${className}`}>
      {articles.map((article) => (
        <ArticleComponent
          key={article.id}
          {...article}
          rating={undefined}
          labelProps={{ className: "badge" }}
          titleProps={{ className: "text-title" }}
          authorProps={{ className: "text-body-sm" }}
          // Hidden elements
          descriptionProps={{ className: "hidden" }}
        />
      ))}
    </div>
  );
}
