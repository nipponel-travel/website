import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FooterNav } from "@/components/footer-nav";
import { HeroSection } from "@/components/hero-section";
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

      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/map.png')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {labels.findOnMap}
            </h2>
            <Link href={`/${lang}/articles?view=map`}>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white/20"
              >
                {labels.viewArticles}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <PhotoGallery lang={lang} articles={latestArticles} />

      <FooterNav lang={lang} />
    </main>
  );
}
