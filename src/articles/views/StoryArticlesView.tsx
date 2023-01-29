import ArticleComponent from "../ArticleComponent";
import type { ArticleViewProps } from "../ArticleTypes";

export default function StoryArticlesView({
  articles,
  className = "",
  ...props
}: ArticleViewProps) {
  return (
    <div {...props} className={`view-article__story ${className}`}>
      <span className="badge story__badge">One story, two perspectives</span>
      <img
        src="/glass.png"
        className="story__cover"
        alt="There's two sides to every story, this article explains this with real life examples"
      />
      {articles.map((article) => (
        <ArticleComponent
          key={article.id}
          {...article}
          rating={undefined}
          thumbnailURL={undefined}
          labelProps={{ className: "badge" }}
          titleProps={{ className: "text-title" }}
          descriptionProps={{ className: "text-body-md" }}
          // Hidden elements
          authorProps={{ className: "hidden" }}
        />
      ))}
    </div>
  );
}
