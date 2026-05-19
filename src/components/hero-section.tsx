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
    </section>
  );
}
