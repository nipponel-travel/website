"use client";

import Map from "react-map-gl/maplibre";
import type { Article } from "@/lib/types";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Card } from "@/components/ui/card";

export default function Maps({
  lang: _lang,
  articles: _articles,
}: {
  lang: string;
  articles: Article[];
}) {
  return (
    <div className="h-full w-full p-4">
      <Card className="h-full w-full py-0 isolate">
        <Map
          mapLib={maplibregl}
          initialViewState={{
            latitude: 37.498,
            longitude: 139.933,
            zoom: 4,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
          attributionControl={false}
        >
          {/*
          {articles.map((article) => (
            <Marker
              key={article.id}
              latitude={article.initial_view_state.latitude}
              longitude={article.initial_view_state.longitude}
            >
              <MapPin className="text-red-500 w-6 h-6" />
            </Marker>
          ))}
          {articles.map((article) => (
            <Popup
              key={article.id}
              latitude={article.initial_view_state.latitude}
              longitude={article.initial_view_state.longitude}
              closeButton={false}
            >
              <div className="p-2">
                <h3 className="text-sm font-bold">
                  {lang === "ja" ? article.title_ja : article.title_en}
                </h3>
              </div>
            </Popup>
          ))}
          */}
        </Map>
      </Card>
    </div>
  );
}
