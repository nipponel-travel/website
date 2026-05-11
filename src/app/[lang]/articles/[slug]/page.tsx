import { client } from "@/lib/microcms";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CitySpotList } from "@/components/city-spot-list";
import RouteMap from "./map";
import { getLabels } from "@/lib/i18n";
import type { Article } from "@/lib/types";

export async function generateStaticParams() {
  const articles = await client.getAllContents({
    endpoint: "blog",
  });
  return articles.map((article: Article) => ({ slug: article.id }));
}

export default function ArticleDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  return <ArticleDetailContent params={params} />;
}

async function ArticleDetailContent({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const labels = getLabels(lang);

  let article: Article;
  try {
    article = await client.get({
      endpoint: "blog",
      contentId: slug,
    });
  } catch {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Article not found</p>
      </div>
    );
  }

  const title = lang === "ja" ? article.title_ja : article.title_en;
  const introduction =
    lang === "ja" ? article.introduction_ja : article.introduction_en;
  const _body = lang === "ja" ? article.article_ja : article.article_en;
  const date = new Date(article.visited_date).toLocaleDateString(
    lang === "ja" ? "ja-JP" : "en-US"
  );
  const cityCount = article.cities.length;
  const progressValue = (cityCount / 1704) * 100;
  const body =  lang === "ja" ? article.article_ja : article.article_en;

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      {/* Title + Date */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <Badge variant="secondary">{date}</Badge>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{labels.progress}</span>
          <span className="font-medium">
            {cityCount} / 1704
          </span>
        </div>
        <Progress value={progressValue} />
      </div>

      {/* Introduction */}
      {introduction ? (
        <div
          dangerouslySetInnerHTML={{ __html: introduction }}
        />
      ) : null}

      {/* City Spot List */}
      <CitySpotList cities={article.cities} lang={lang} />

      {/* Route Map */}
      <RouteMap
        initialViewState={article.initial_view_state}
        geojsonData={article.geojson}
      />

      <Separator />

      {/* Body */}      
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: body }}
      />
     
    </main>
  );
}
