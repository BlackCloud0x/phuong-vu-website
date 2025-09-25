import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Pause } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
// Import your demo video as a module for proper bundling
import demoVideo from "@/assets/video.mp4";
import posterImage from "@/assets/astrology-app-screenshot.jpeg";

const AICompanionDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLearnMore = () => {
    navigate('/projects/ai-companion');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-2xl">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link 
              to="/projects/ai-companion" 
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Project</span>
            </Link>
            <div className="px-4 py-2 border-2 border-primary/50 rounded-lg font-bold text-lg tracking-wider text-foreground bg-primary/10 backdrop-blur-sm">
              AI COMPANION DEMO
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-12">
        <div className="container mx-auto max-w-4xl px-6">
          {/* iPhone Mockup with Video */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="relative">
              <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden" style={{ width: '375px', height: '812px' }}>
                  {/* iPhone Notch */}
                  <div className="relative h-full bg-gray-900">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                    
                    {/* Video Container */}
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                        <video
                          ref={videoRef}
                          src={demoVideo}
                          className="w-full h-full object-cover"
                          onPlay={() => setIsPlaying(true)}
                          onPause={() => setIsPlaying(false)}
                          controls={false}
                          poster={posterImage}
                        />
                        
                        {/* Custom Play/Pause Overlay */}
                        <div 
                          className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                          onClick={togglePlayPause}
                        >
                          {!isPlaying && (
                            <div className="bg-white/80 rounded-full p-4 hover:bg-white/90 transition-colors">
                              <Play className="w-8 h-8 text-black ml-1" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* iPhone Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
              </div>
            </div>
            
            {/* Learn More Button */}
            <Button 
              onClick={handleLearnMore}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg shadow-lg shadow-primary/25"
            >
              Learn more about the project
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AICompanionDemo;
