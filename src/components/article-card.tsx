"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@/lib/types";

export function ArticleCard({
  article,
  lang,
}: {
  article: Article;
  lang: string;
}) {
  const title = lang === "ja" ? article.title_ja : article.title_en;
  const date = new Date(article.visited_date).toLocaleDateString(
    lang === "ja" ? "ja-JP" : "en-US"
  );
  const introduction = lang === "ja" ? article.introduction_ja : article.introduction_en;

  return (
    <Link href={`/${lang}/articles/${article.id}`}>
      <Card className="px-4 flex flex-col md:flex-row overflow-hidden hover:bg-accent transition-colors cursor-pointer rounded-none">
        <div className="relative w-full md:w-48 h-48 md:h-auto shrink-0">
          <Image
            src={article.thumbnail.url}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 192px"
          />
        </div>
        <CardContent className="flex flex-col justify-center gap-2">
          <CardTitle className="text-lg truncate">{title}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{date}</span>
          </CardDescription>
          {introduction && (
            <CardDescription
              className="text-sm text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: introduction }}
            />
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
