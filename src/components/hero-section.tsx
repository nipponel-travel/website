import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getLabels } from "@/lib/i18n";

export function HeroSection({ lang }: { lang: string }) {
  const labels = getLabels(lang);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/9.JPEG"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          {labels.heroTitle}
        </h1>
        <Link href={`/${lang}/articles`}>
          <Button size="lg" className="text-base">
            {labels.viewArticles}
          </Button>
        </Link>
      </div>
    </section>
  );
}
