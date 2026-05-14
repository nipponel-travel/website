import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLabels } from "@/lib/i18n";
import type { Article } from "@/lib/types";

export function PhotoGallery({
  lang,
  articles,
}: {
  lang: string;
  articles: Article[];
}) {
  const labels = getLabels(lang);
  const dateLocale = lang === "ja" ? "ja-JP" : "en-US";

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {articles.map((article) => {
          const title = lang === "ja" ? article.title_ja : article.title_en;
          const date = new Date(article.visited_date).toLocaleDateString(
            dateLocale,
          );
          const firstCity = article.cities?.[0];
          const cityName = firstCity
            ? lang === "ja"
              ? firstCity.name_ja
              : firstCity.name_en
            : null;
          return (
            <Link
              key={article.id}
              href={`/${lang}/articles/${article.id}`}
              className="block"
            >
              <Card className="py-0 overflow-hidden hover:opacity-90 transition-opacity">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={article.thumbnail.url}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-3 flex items-center justify-between gap-2">
                    {cityName ? (
                      <Badge variant="secondary" className="truncate">
                        {cityName}
                      </Badge>
                    ) : (
                      <span />
                    )}
                    <Badge variant="outline" className="shrink-0">
                      {date}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link href={`/${lang}/articles`}>
          <Button variant="outline">{labels.seeMore}</Button>
        </Link>
      </div>
    </section>
  );
}
