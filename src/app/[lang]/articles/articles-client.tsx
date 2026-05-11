"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArticleList } from "@/components/article-list";
import { getLabels } from "@/lib/i18n";
import type { Article } from "@/lib/types";
import Maps from "./maps";

export default function ArticlesClient({
  lang,
  articles,
}: {
  lang: string;
  articles: Article[];
}) {
  const labels = getLabels(lang);

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-2xl mt-16 p-4 font-bold">{labels.articles}</h1>

      {/* Mobile: Tabs */}
      <div className="md:hidden flex flex-col flex-1 min-h-0">
        <Tabs defaultValue="map" className="flex flex-col flex-1 min-h-0">
          <TabsList className="w-full">
            <TabsTrigger value="map" className="flex-1">
              {labels.map}
            </TabsTrigger>
            <TabsTrigger value="list" className="flex-1">
              {labels.list}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="map" className="flex-1 min-h-0">
            <Maps lang={lang} articles={articles} />
          </TabsContent>
          <TabsContent value="list" className="flex-1 min-h-0">
            <ArticleList lang={lang} articles={articles} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Desktop: Side by side */}
      <div className="hidden md:flex flex-1 min-h-0">
        <div className="w-1/2 h-full">
          <Maps lang={lang} articles={articles} />
        </div>
        <div className="w-1/2 h-full">
          <ArticleList lang={lang} articles={articles} />
        </div>
      </div>
    </div>
  );
}
