import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import smartHomeImage from "@/assets/project-smart-home.jpg";

const SmartHomeDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-2xl">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-smooth">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <div className="px-4 py-2 border-2 border-primary/50 rounded-lg font-bold text-lg tracking-wider text-foreground bg-primary/10 backdrop-blur-sm">
              PHUONG VU
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Project Hero */}
          <div className="mb-12">
            <img 
              src={smartHomeImage} 
              alt="Smart Home Dashboard" 
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl mb-8"
            />
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-0">
                Smart Home Dashboard
              </h1>
              
              <div className="flex space-x-4">
                <Button variant="default" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "Firebase", "Arduino"].map(tech => (
                <span key={tech} className="px-3 py-1 text-sm font-medium bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  An innovative IoT dashboard that brings smart home automation to the next level. This comprehensive 
                  system allows users to monitor and control all connected home devices from a single, intuitive 
                  interface with real-time updates and intelligent automation features.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The dashboard integrates with various IoT protocols and devices, providing a unified control 
                  center that enhances convenience, security, and energy efficiency in modern homes.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Real-time device monitoring and control
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Automated scheduling and scene management
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Energy consumption tracking and optimization
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Security system integration with alerts
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Voice control and mobile app support
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Historical data analysis and reporting
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Technical Implementation</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The system uses a hybrid architecture combining cloud-based services with edge computing for 
                  optimal performance and reliability. Arduino-based sensors and controllers communicate through 
                  WiFi and Zigbee protocols, while Firebase handles real-time data synchronization.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The React-based frontend provides an responsive interface with real-time charts, device controls, 
                  and automation settings. The system also includes machine learning algorithms for predictive 
                  automation based on user behavior patterns.
                </p>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-xl font-bold text-foreground mb-4">Project Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Duration</h4>
                    <p className="text-muted-foreground">4 months</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Team Size</h4>
                    <p className="text-muted-foreground">2 developers</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-1">My Role</h4>
                    <p className="text-muted-foreground">Full-Stack Developer & IoT Engineer</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Status</h4>
                    <p className="text-primary font-medium">Live & Deployed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SmartHomeDashboard;