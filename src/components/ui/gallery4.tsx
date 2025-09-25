"use client";

import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
interface ProjectCardProps {
  item: Gallery4Item;
  isActive: boolean;
  onPrev: () => void;
  onNext: () => void;
}
const ProjectCard = ({
  item,
  isActive,
  onPrev,
  onNext
}: ProjectCardProps) => {
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  return <div className="w-full max-w-4xl mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image Section with 3D Stack Effect */}
        <div className="relative h-80 md:h-96 perspective-1000">
          <div className="relative w-full h-full">
            {/* Background stacked cards for depth */}
            <div className="absolute inset-0 bg-card rounded-2xl shadow-lg transform rotate-2 scale-95 opacity-60" />
            <div className="absolute inset-0 bg-card rounded-2xl shadow-lg transform -rotate-1 scale-97 opacity-80" />
            
            {/* Main project image */}
            <motion.div className="relative w-full h-full bg-card rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300" whileHover={{
            rotateY: 5,
            rotateX: 5
          }} style={{
            transformStyle: "preserve-3d"
          }}>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              
              {/* Technology badges overlay removed */}
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div key={item.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.3
          }} className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {item.title}
              </h3>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item.description.split(" ").map((word, i) => <motion.span key={i} initial={{
                filter: "blur(10px)",
                opacity: 0,
                y: 5
              }} animate={{
                filter: "blur(0px)",
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.22,
                ease: "easeInOut",
                delay: 0.025 * i
              }} className="inline-block">
                    {word}&nbsp;
                  </motion.span>)}
              </p>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4">
                <Link to={item.href} className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                  View Details
                  <ArrowRight className="ml-2 size-4" />
                </Link>
                
                <div className="flex items-center gap-2">
                  {item.github && <a href={item.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted" aria-label="View code">
                      <Github className="size-5" />
                    </a>}
                  {item.demo && <a href={item.demo} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted" aria-label="View demo">
                      <ExternalLink className="size-5" />
                    </a>}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-6">
            <button className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300" onClick={onPrev} onMouseEnter={() => setHoverPrev(true)} onMouseLeave={() => setHoverPrev(false)} aria-label="Previous project">
              <ArrowLeft className="size-5" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300" onClick={onNext} onMouseEnter={() => setHoverNext(true)} onMouseLeave={() => setHoverNext(false)} aria-label="Next project">
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>;
};
const Gallery4 = ({
  title = "Featured Projects",
  description = "Explore my latest work and discover the technologies and methodologies I use to create innovative solutions.",
  items
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
  return <section className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-3 sm:gap-4 text-center mx-auto">
            <h2 className="text-2xl sm:text-3xl font-medium md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto">
        <Carousel setApi={setCarouselApi} opts={{
        loop: true,
        align: "center"
      }}>
          <CarouselContent className="-ml-4">
            {items.map((item, index) => <CarouselItem key={item.id} className="pl-4 basis-full">
                <ProjectCard item={item} isActive={currentSlide === index} onPrev={() => carouselApi?.scrollPrev()} onNext={() => carouselApi?.scrollNext()} />
              </CarouselItem>)}
          </CarouselContent>
        </Carousel>
      </div>
    </section>;
};
export { Gallery4 };