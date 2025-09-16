import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Index = () => {
  return (
    <AuroraBackground className="min-h-screen">
      <div className="w-full">
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <Footer />
      </div>
    </AuroraBackground>
  );
};

export default Index;
