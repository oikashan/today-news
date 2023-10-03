import ArticleComponent from "../ArticleComponent";
import type { ArticleViewProps } from "../ArticleTypes";

export default function VideoArticlesView({
  articles,
  className = "",
  ...props
}: ArticleViewProps) {
  return (
    <div {...props} className={`view-article__video ${className}`}>
      {articles.map((article) => (
        <ArticleComponent
          key={article.id}
          {...article}
          rating={undefined}
          labelProps={{ className: "badge" }}
          authorProps={{ className: "text-body-xs" }}
          titleProps={{ className: "text-subtitle" }}
          // Hidden elements
          descriptionProps={{ className: "hidden" }}
        />
      ))}
    </div>
  );
}
