export interface Article {
  id: number;
  title: string;
  label: string;
  author: string;
  description: string;
  rating?: number;
  thumbnailURL?: string;
  previewURL?: string;
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
