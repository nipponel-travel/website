import type { MicroCMSImage } from "microcms-js-sdk";

export interface Article {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  number: number;
  title_ja: string;
  title_en: string;
  initial_view_state: ViewState;
  geojson: string;
  cities: City[];
  visited_date: Date;
  introduction_ja: string;
  introduction_en: string;
  thumbnail: MicroCMSImage;
  article_ja: string;
  article_en: string;
}

export type City = {
  fieldId: string;
  name_ja: string;
  name_en: string;
  spots: Spot[];
};

export type Spot = {
  fieldId: string;
  name_ja: string;
  name_en: string;
};

export type ViewState = {
  fieldId: string;
  latitude: number;
  longitude: number;
  zoom: number;
};
