"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";
import type { City, Spot } from "@/lib/types";

export function CitySpotList({
  cities,
  lang,
}: {
  cities: City[];
  lang: string;
}) {
  return (
    <Card>
      <CardContent className="pw-4">
        {cities.map((city, cityIndex) => (
          <div key={cityIndex}>
            <Badge variant="default" className="mb-2">
              {lang === "ja" ? city.name_ja : city.name_en}
            </Badge>
            <div className="flex flex-col gap-1 ml-2">
              {city.spots.map((spot: Spot, spotIndex: number) => (
                <div key={spotIndex} className="flex items-center gap-2 text-sm py-1">
                  <div className="flex items-center gap-2 text-sm py-1">
                    <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span>
                      {lang === "ja" ? spot.name_ja : spot.name_en}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {cityIndex < cities.length - 1 && <Separator className="my-3" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
