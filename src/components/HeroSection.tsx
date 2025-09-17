import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter";
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in leading-tight">Hi there</h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-foreground mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s] leading-relaxed">
          Building digital experiences with{" "}
          <Typewriter text={["pixel-perfect precision", "innovative solutions", "seamless user interfaces", "scalable architectures"]} speed={70} className="text-primary" waitTime={1500} deleteSpeed={40} cursorChar="_" />
        </p>
        
        <div className="mb-8 sm:mb-12 animate-fade-in [animation-delay:0.4s]">
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-h-[44px]" onClick={() => document.getElementById('projects')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            View My Work
          </Button>
        </div>
        
        {/* Social Links */}
        
        
        {/* Scroll Indicator */}
        <div className="animate-bounce hidden sm:block">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-hero-text-muted mx-auto" />
        </div>
      </div>
    </section>;
};
export default HeroSection;