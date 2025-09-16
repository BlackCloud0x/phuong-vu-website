import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import pixelLandscape from "@/assets/pixel-landscape-bg-new.png";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Global Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${pixelLandscape})` }}
      />
      <div className="fixed inset-0 bg-black/20 -z-10" />
      
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
