import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getLabels } from "@/lib/i18n";

export function MapSection({ lang }: { lang: string }) {
  const labels = getLabels(lang);

  return (
    <section
      className="relative h-screen bg-cover bg-center"
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
  );
}
