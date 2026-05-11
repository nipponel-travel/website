"use client";

import { useCallback } from "react";
import Map, { Source, Layer, type MapEvent } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { ViewState } from "@/lib/types";
import { Card } from "@/components/ui/card";

const PIN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40"><path d="M16 0C7.16 0 0 7.16 0 16c0 12 16 24 16 24s16-12 16-24C32 7.16 24.84 0 16 0z" fill="#007cbf" stroke="#ffffff" stroke-width="2"/><circle cx="16" cy="14" r="5" fill="#ffffff"/></svg>`;

export default function RouteMap({
  initialViewState,
  geojsonData,
}: {
  initialViewState: ViewState;
  geojsonData: string;
}) {
  let geojson;
  try {
    geojson = JSON.parse(geojsonData);
  } catch {
    geojson = null;
  }

  const handleLoad = useCallback((e: MapEvent) => {
    const map = e.target;
    if (map.hasImage("pin")) return;
    const img = new Image(32, 40);
    img.onload = () => {
      if (!map.hasImage("pin")) map.addImage("pin", img);
    };
    img.src = `data:image/svg+xml;utf8,${encodeURIComponent(PIN_SVG)}`;
  }, []);

  return (
    <Card className="h-100 py-0 isolate">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          latitude: initialViewState.latitude,
          longitude: initialViewState.longitude,
          zoom: initialViewState.zoom,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        attributionControl={false}
        onLoad={handleLoad}
      >
        {geojson && (
          <Source id="route" type="geojson" data={geojson}>
            <Layer
              id="geo-lines"
              type="line"
              paint={{
                "line-color": "#FF0000",
                "line-width": 2,
              }}
            />
            <Layer
              id="geo-points"
              type="symbol"
              layout={{
                "icon-image": "pin",
                "icon-size": 0.75,
                "icon-anchor": "bottom",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true,
              }}
            />
          </Source>
        )}
      </Map>
    </Card>
  );
}
