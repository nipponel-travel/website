import { FooterNav } from "@/components/footer-nav";
import { HeroSection } from "@/components/hero-section";
import { MapSection } from "@/components/map-section";
import { PhotoGallery } from "@/components/photo-gallery";
import { getLabels } from "@/lib/i18n";
import { client } from "@/lib/microcms";
import type { Article } from "@/lib/types";

export default function TopPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  return <TopPageContent params={params} />;
}

async function TopPageContent({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const labels = getLabels(lang);

  const { contents } = await client.getList({
    endpoint: "blog",
    queries: { limit: 4, orders: "-publishedAt" },
  });
  const latestArticles = contents as unknown as Article[];

  return (
    <main>
      <HeroSection lang={lang} />

      <MapSection lang={lang} />

      <PhotoGallery lang={lang} articles={latestArticles} />

      <div className="max-w-6xl mx-auto">
        <FooterNav lang={lang} />
      </div>
    </main>
  );
}
