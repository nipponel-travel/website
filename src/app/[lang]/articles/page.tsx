import { client } from "@/lib/microcms";
import type { Article } from "@/lib/types";
import { FooterNav } from "@/components/footer-nav";
import ArticlesClient from "./articles-client";

export const dynamic = "force-static";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const articles = await client.getAllContents({
    endpoint: "blog",
  });

  return (
    <>
      <ArticlesClient
        lang={lang}
        articles={articles as unknown as Article[]}
      />
    </>
  );
}
