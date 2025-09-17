import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Product Manager
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
          Building digital experiences with pixel-perfect precision
        </p>
        
        <div className="mb-12 animate-fade-in [animation-delay:0.4s]">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
        </div>
        
        {/* Social Links */}
        
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-hero-text-muted mx-auto" />
        </div>
      </div>
    </section>;
};
export default HeroSection;