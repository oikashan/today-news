export interface Article {
  title: string;
  author: string;
  description: string;
  category: string;
  rating?: number;
  thumbnailURL?: string;
  previewURL?: string;
}

export function isArticle(entity: any): entity is Article {
  return (
    entity &&
    entity.title &&
    entity.author &&
    entity.description &&
    entity.category
  );
}
