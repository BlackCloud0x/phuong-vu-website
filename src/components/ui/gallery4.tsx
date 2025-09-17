"use client";

import { ArrowLeft, ArrowRight, Github, ExternalLink, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            {title}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button variant="secondary" size="sm" asChild className="backdrop-blur-sm text-xs sm:text-sm">
                    <Link to={item.href || "#"}>
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">View Details</span>
                      <span className="sm:hidden">View</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="backdrop-blur-sm text-xs sm:text-sm">
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Code</span>
                      <span className="sm:hidden">Git</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="backdrop-blur-sm text-xs sm:text-sm">
                    <a href={item.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Demo</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies?.slice(0, 3).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {item.technologies && item.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      +{item.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Title and Description */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Action Buttons - Mobile Friendly */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6 sm:mt-8">
                  <Button variant="default" size="sm" asChild className="flex-1 min-h-[44px] text-sm">
                    <Link to={item.href || "#"} className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                  <div className="flex gap-2 sm:gap-3">
                    <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none min-h-[44px] text-sm">
                      <a href={item.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Github className="w-4 h-4 mr-2" />
                        <span className="sm:hidden">GitHub</span>
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none min-h-[44px] text-sm">
                      <a href={item.demo} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };