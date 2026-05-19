import Link from "next/link";
import Image from "next/image";
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

  const articleCards = articles.slice(0, 4).map((article) => {
    const title = lang === "ja" ? article.title_ja : article.title_en;
    const date = new Date(article.visited_date).toLocaleDateString(
      dateLocale,
    );
    return { article, title, date };
  });

  if (articleCards.length === 4) {
    const [c0, c1, c2, c3] = articleCards;

    return (
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Left Column */}
          <div className="flex flex-col gap-4 flex-1">
            {/* Top-left: large */}
            <Link
              key={c0.article.id}
              href={`/${lang}/articles/${c0.article.id}`}
              className="block relative aspect-square overflow-hidden hover:opacity-90 transition-opacity"
            >
              <Image
                src={c0.article.thumbnail.url}
                alt={c0.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute bottom-3 left-3 text-black bg-white px-2 py-1">
                <div className="text-sm">{c0.date}</div>
                {c0.title && (
                  <div className="text-lg font-bold">{c0.title}</div>
                )}
              </div>
            </Link>

            {/* Bottom-left: small */}
            <Link
              key={c2.article.id}
              href={`/${lang}/articles/${c2.article.id}`}
              className="block relative aspect-video overflow-hidden hover:opacity-90 transition-opacity"
            >
              <Image
                src={c2.article.thumbnail.url}
                alt={c2.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute bottom-3 left-3 text-black bg-white px-2 py-1">
                <div className="text-sm">{c2.date}</div>
                {c2.title && (
                  <div className="text-lg font-bold">{c2.title}</div>
                )}
              </div>
            </Link>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 flex-1">
            {/* Top-right: small */}
            <Link
              key={c1.article.id}
              href={`/${lang}/articles/${c1.article.id}`}
              className="block relative aspect-video overflow-hidden hover:opacity-90 transition-opacity"
            >
              <Image
                src={c1.article.thumbnail.url}
                alt={c1.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute bottom-3 right-3 text-black bg-white px-2 py-1 text-right">
                <div className="text-sm">{c1.date}</div>
                {c1.title && (
                  <div className="text-lg font-bold">{c1.title}</div>
                )}
              </div>
            </Link>

            {/* Bottom-right: large */}
            <Link
              key={c3.article.id}
              href={`/${lang}/articles/${c3.article.id}`}
              className="block relative aspect-square overflow-hidden hover:opacity-90 transition-opacity"
            >
              <Image
                src={c3.article.thumbnail.url}
                alt={c3.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute bottom-3 right-3 text-black bg-white px-2 py-1 text-right">
                <div className="text-sm">{c3.date}</div>
                {c3.title && (
                  <div className="text-lg font-bold">{c3.title}</div>
                )}
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-end">
          <Link href={`/${lang}/articles`}>
            <Button variant="outline" className="rounded-none px-6 py-5">
              {labels.seeMore}→
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {articles.map((article) => {
          const title = lang === "ja" ? article.title_ja : article.title_en;
          const date = new Date(article.visited_date).toLocaleDateString(
            dateLocale,
          );
          return (
            <Link
              key={article.id}
              href={`/${lang}/articles/${article.id}`}
              className="block"
            >
              <div className="relative aspect-video overflow-hidden hover:opacity-90 transition-opacity">
                <Image
                  src={article.thumbnail.url}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              <div className="absolute bottom-3 left-3 text-black bg-white px-2 py-1">
                  <div className="text-sm">{date}</div>
                  {title && (
                    <div className="text-lg font-bold">{title}</div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-end">
        <Link href={`/${lang}/articles`}>
          <Button variant="outline" className="rounded-none px-6 py-5">
            {labels.seeMore}→
          </Button>
        </Link>
      </div>
    </section>
  );
}
