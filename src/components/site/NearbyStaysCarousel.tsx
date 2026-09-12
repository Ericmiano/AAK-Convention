import * as React from "react";
import { MapPin, Navigation, Phone, Mail } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { NEARBY_STAYS } from "@/lib/tickets";
import { STAY_PHOTOS } from "@/lib/media";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL_MS = 2600;

export function NearbyStaysCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [isHovering, setIsHovering] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!api) return;

    const onInit = () => setScrollSnaps(api.scrollSnapList());
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());

    onInit();
    onSelect();
    api.on("reInit", onInit);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api.off("reInit", onInit);
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api || isHovering) return;

    const id = window.setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [api, isHovering]);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
    >
      <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="px-1">
        <CarouselContent className="-ml-6">
          {NEARBY_STAYS.map((stay) => {
            const photo = STAY_PHOTOS[stay.id];
            const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${stay.name}, Diani, Kenya`,
            )}`;

            return (
              <CarouselItem key={stay.id} className="pl-6 sm:basis-1/2 lg:basis-1/3">
                <article className="flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors duration-500 hover:bg-surface">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      width={440}
                      height={330}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-lg leading-snug font-semibold text-foreground">
                        {stay.name}
                      </h3>
                      <span className="mt-1 shrink-0 text-[0.62rem] tracking-[0.14em] text-primary uppercase">
                        {stay.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                      <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-primary" />
                      {stay.distance} from the venue
                    </div>
                    <p className="text-xs font-medium text-foreground">
                      KES {stay.price} pp / night
                    </p>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {stay.comment}
                    </p>

                    <div className="mt-2 flex flex-col gap-1.5 border-t border-border pt-4 text-xs">
                      {stay.website && (
                        <a
                          href={`https://${stay.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-sweep font-medium text-foreground"
                        >
                          {stay.website} ↗
                        </a>
                      )}
                      {stay.phone && (
                        <a
                          href={`tel:${stay.phone.replace(/\s+/g, "")}`}
                          className="underline-sweep flex items-center gap-1.5 font-medium text-foreground"
                        >
                          <Phone aria-hidden="true" className="h-3 w-3" />
                          {stay.phone}
                        </a>
                      )}
                      {stay.email && (
                        <a
                          href={`mailto:${stay.email}`}
                          className="underline-sweep flex items-center gap-1.5 text-muted-foreground"
                        >
                          <Mail aria-hidden="true" className="h-3 w-3" />
                          {stay.email}
                        </a>
                      )}
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-sweep flex items-center gap-1.5 text-muted-foreground"
                      >
                        <Navigation aria-hidden="true" className="h-3 w-3" />
                        Get directions
                      </a>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>

      <div className="mt-8 flex items-center justify-center gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to stay ${i + 1} of ${scrollSnaps.length}`}
            aria-current={i === selectedIndex}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === selectedIndex ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-primary/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
