import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-hero-text mb-6 animate-fade-in md:text-4xl text-center">Product Manager</h1>
        
        <p className="text-xl md:text-2xl text-hero-text-muted mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s]">
          Building digital experiences with pixel-perfect precision
        </p>
        
        <div className="mb-12 animate-fade-in [animation-delay:0.4s]">
          
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