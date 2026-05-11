"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { ArticleCard } from "@/components/article-card";
import { getLabels } from "@/lib/i18n";
import type { Article } from "@/lib/types";

export function ArticleList({
  lang,
  articles,
}: {
  lang: string;
  articles: Article[];
}) {
  const labels = getLabels(lang);

  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground py-12">
        <Skeleton className="h-32 w-64" />
        <p>{labels.noArticle}</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-3 p-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} lang={lang} />
        ))}
      </div>
    </ScrollArea>
  );
}
