"use client";

import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  technologies?: string[];
  github?: string;
  demo?: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Featured Projects",
  description = "Explore my latest work and discover the technologies and methodologies I use to create innovative solutions.",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl font-medium md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-lg text-sm sm:text-base text-muted-foreground">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto min-h-[44px] min-w-[44px]"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto min-h-[44px] min-w-[44px]"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 pl-4 sm:pl-6 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] sm:max-w-[384px] pl-[16px] sm:pl-[20px] lg:max-w-[432px]"
              >
                <div className="group h-full min-h-[24rem] sm:min-h-[29rem] bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Technology tags positioned at top */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1.5">
                        {item.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-background/90 text-foreground text-xs backdrop-blur-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {item.technologies.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="bg-background/90 text-foreground text-xs backdrop-blur-sm"
                          >
                            +{item.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 sm:line-clamp-4 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <Link 
                        to={item.href} 
                        className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        View Details
                        <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <div className="flex items-center gap-2">
                        {item.github && (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                            aria-label="View code"
                          >
                            <Github className="size-4" />
                          </a>
                        )}
                        {item.demo && (
                          <a
                            href={item.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                            aria-label="View demo"
                          >
                            <ExternalLink className="size-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-6 sm:mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };