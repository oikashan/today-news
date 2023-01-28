import React from "react";
import type { Article } from "./Article";

type Props = Article & React.ComponentPropsWithoutRef<"article">;

export default function ArticleComponent(props: Props) {
  return <article {...props}>Hello Article</article>;
}
