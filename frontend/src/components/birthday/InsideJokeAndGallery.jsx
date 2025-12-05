import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Sparkles, Image as ImageIcon } from "lucide-react";

export const placeholderImages = [
  {
    id: 1,
    label: "Future party photo slot",
  },
  {
    id: 2,
    label: "Chirag & chaos squad",
  },
  {
    id: 3,
    label: "Legendary midnight deploy",
  },
];

export const InsideJokeAndGallery = ({ settings }) => {
  return (
    <section className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pb-16 pt-4 sm:px-6 lg:flex-row lg:px-10">
      <div className="flex-1">
        <Card className="card-elevated border-primary/40 bg-black/30">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="h-4 w-4" />
              <p className="text-xs uppercase tracking-[0.18em]">Insider logs</p>
            </div>
            <CardTitle className="mt-1 text-lg font-semibold tracking-tight text-foreground">
              More chaotic energy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Still cant believe that time you accidentally deployed to prod and it worked??
            </p>
            <p>
              Chirag, the only man who can break AND fix the app in the same minute 
            </p>
            <p>
              We said no more midnight deploys and you still hit that button
            </p>
            <p className="pt-1 text-xs text-muted-foreground/80">
              This card is hard-coded lore. Swap the copy in <code className="rounded bg-muted/60 px-1 py-0.5 text-[11px]">meta.json</code> later if you want new stories.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex-1">
        <Card className="card-elevated flex h-full flex-col border-secondary/40 bg-black/30">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 text-secondary">
              <ImageIcon className="h-4 w-4" />
              <p className="text-xs uppercase tracking-[0.18em]">Memory slots</p>
            </div>
            <CardTitle className="mt-1 text-lg font-semibold tracking-tight text-foreground">
              Party gallery (placeholders)
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-4">
            {settings.imagesEnabled ? (
              <div className="relative w-full flex-1">
                <Carousel className="h-full" opts={{ loop: true }}>
                  <CarouselContent className="h-full">
                    {placeholderImages.map((img) => (
                      <CarouselItem key={img.id} className="h-full basis-full">
                        <div className="flex h-60 items-center justify-center rounded-2xl border border-dashed border-secondary/50 bg-[radial-gradient(circle_at_top,_hsl(var(--secondary)/0.25),_transparent_55%)] hacker-grid-bg px-6 py-4 sm:h-64">
                          <div className="text-center">
                            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-secondary/50 bg-black/40 text-secondary">
                              <ImageIcon className="h-5 w-5" />
                            </div>
                            <p className="text-sm font-medium text-foreground">{img.label}</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              Plug in real URLs later to replace this card with actual photos.
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            ) : (
              <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-muted bg-black/30 px-6 text-center text-sm text-muted-foreground">
                Image gallery is toggled off in settings. Flip it back on when you drop the real photos.
              </div>
            )}
            <p className="text-[11px] text-muted-foreground">
              All image slots are for <span className="font-medium text-secondary">Chirag</span> only. No generic upload fields  just wire your URLs into the config.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
