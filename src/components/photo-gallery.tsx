"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLabels } from "@/lib/i18n";

export function PhotoGallery({ lang }: { lang: string }) {
  const labels = getLabels(lang);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/9.JPEG')" }}
            />
            <div className="p-4 flex items-center justify-between">
              <Badge variant="secondary">Tokyo</Badge>
              <Badge variant="outline">2024.01</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/9.JPEG')" }}
            />
            <div className="p-4 flex items-center justify-between">
              <Badge variant="secondary">Osaka</Badge>
              <Badge variant="outline">2024.02</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center">
        <Link href={`/${lang}/articles`}>
          <Button variant="outline">{labels.seeMore}</Button>
        </Link>
      </div>
    </section>
  );
}
