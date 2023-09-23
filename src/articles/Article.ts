import { ArticleResponse } from "./ArticleTypes";

export interface Article {
  id?: number;
  title: string;
  label: string;
  author: string;
  description: string;
  rating?: number;
  thumbnailURL?: string;
  previewURL?: string;
  url?: string;
}

export function isArticle(entity: any): entity is Article {
  return (
    entity &&
    entity.label &&
    entity.title &&
    entity.author &&
    entity.description
  );
}

export function getArticleFromResponse(response: ArticleResponse[0]): Article {
  return {
    id: response.source.id,
    label: response.source.name,
    title: response.title,
    author: response.author,
    description: response.description,
    thumbnailURL: response.urlToImage,
    url: response.url,
  };
}
