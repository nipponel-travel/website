import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <Card>
        <CardContent className="p-8 flex flex-col items-center text-center gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/images/9.JPEG" alt="Profile" />
            <AvatarFallback>NP</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold">About</h1>
          <p className="text-muted-foreground max-w-md">
            A traveler exploring every municipality in Japan.
          </p>
          <div className="flex gap-2">
            {/* 
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            */}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
