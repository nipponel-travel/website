import Link from "next/link";
import { getLabels } from "@/lib/i18n";

export function FooterNav({ lang }: { lang: string }) {
  const labels = getLabels(lang);
  const linkClass =
    "text-xl font-normal px-4 py-2 hover:text-primary transition-colors";

  return (
    <footer className="py-12 flex flex-wrap justify-start gap-1 sm:gap-6">
      <Link href={`/${lang}/articles`} className={linkClass}>
        ARTICLES
      </Link>
      <a
        href="https://notion.com"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        RANKING
      </a>
      <a
        href="https://note.com"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        TRIP
      </a>
      <Link href={`/${lang}/shop`} className={linkClass}>
        SHOP
      </Link>
      <Link href={`/${lang}/about`} className={linkClass}>
        ABOUT
      </Link>
    </footer>
  );
}
