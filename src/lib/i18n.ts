export const labels = {
  ja: {
    map: "マップ",
    list: "リスト",
    noArticle: "記事がありません",
    progress: "訪れた自治体数",
    articles: "記事一覧",
    viewArticles: "記事を見る",
    findOnMap: "地図から記事を探す",
    seeMore: "もっと見る",
    about: "このサイトについて",
    heroTitle: "NIPPONEL",
    article: "記事",
    ranking: "ランキング",
    trip: "旅の記録",
    shop: "ショップ",
  },
  en: {
    map: "Map",
    list: "List",
    noArticle: "No articles yet",
    progress: "Municipalities visited",
    articles: "Articles",
    viewArticles: "View Articles",
    findOnMap: "Find Articles on Map",
    seeMore: "See More",
    about: "About",
    heroTitle: "NIPPONEL",
    article: "Article",
    ranking: "Ranking",
    trip: "Trip",
    shop: "Shop",
  },
} as const;

export type Locale = "ja" | "en";

export function getLabels(lang: string) {
  return labels[lang as Locale] ?? labels.en;
}
