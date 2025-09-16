import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-hero-text mb-6 animate-fade-in">
          Software Engineer
        </h1>
        
        <p className="text-xl md:text-2xl text-hero-text-muted mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
          Building digital experiences with pixel-perfect precision
        </p>
        
        <div className="mb-12 animate-fade-in [animation-delay:0.4s]">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-6 h-auto"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in [animation-delay:0.6s]">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-white/20 transition-smooth rounded-full"
          >
            <Github className="w-6 h-6 text-hero-text" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-white/20 transition-smooth rounded-full"
          >
            <Linkedin className="w-6 h-6 text-hero-text" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-white/20 transition-smooth rounded-full"
          >
            <Twitter className="w-6 h-6 text-hero-text" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-hero-text-muted mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;