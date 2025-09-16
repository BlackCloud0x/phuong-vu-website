import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Index = () => {
  return (
    <div className="min-h-screen dark">
      <AuroraBackground className="min-h-screen">
        <div className="w-full relative z-10">
          <Header />
          <HeroSection />
        </div>
      </AuroraBackground>
      
      <div className="w-full bg-zinc-900 dark:bg-zinc-900">
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
