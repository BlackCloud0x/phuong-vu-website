import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Home, Smartphone, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import smartHomeImage from "@/assets/project-smart-home.jpg";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const projectContent = [
  {
    title: "Project Overview",
    description: "An innovative IoT dashboard that brings smart home automation to the next level. This comprehensive system allows users to monitor and control all connected home devices from a single, intuitive interface with real-time updates and intelligent automation features. The dashboard integrates with various IoT protocols and devices, providing a unified control center that enhances convenience, security, and energy efficiency in modern homes.",
    content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,rgb(6_182_212),rgb(16_185_129))] flex items-center justify-center text-white rounded-lg p-6">
      <div className="text-center">
        <Home className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Smart Home Dashboard</h3>
        <p className="text-sm opacity-90">IoT Control Center</p>
      </div>
    </div>
  },
  {
    title: "Key Features",
    description: "• Real-time device monitoring and control\n• Automated scheduling and scene management\n• Energy consumption tracking and optimization\n• Security system integration with alerts\n• Voice control and mobile app support\n• Historical data analysis and reporting\n• Multi-protocol device compatibility\n• Predictive automation based on usage patterns",
    content: <div className="h-full w-full flex items-center justify-center text-white">
      <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop" className="h-full w-full object-cover rounded-lg" alt="Smart home control interface" />
    </div>
  },
  {
    title: "Technical Implementation",
    description: "The system uses a hybrid architecture combining cloud-based services with edge computing for optimal performance and reliability. Arduino-based sensors and controllers communicate through WiFi and Zigbee protocols, while Firebase handles real-time data synchronization. The React-based frontend provides a responsive interface with real-time charts, device controls, and automation settings.",
    content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,rgb(249_115_22),rgb(234_179_8))] flex items-center justify-center text-white rounded-lg p-4">
      <div className="text-center">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <span className="px-2 py-1 bg-white/20 rounded text-xs">React</span>
          <span className="px-2 py-1 bg-white/20 rounded text-xs">Firebase</span>
          <span className="px-2 py-1 bg-white/20 rounded text-xs">Arduino</span>
          <span className="px-2 py-1 bg-white/20 rounded text-xs">WebSocket</span>
        </div>
        <Wifi className="w-12 h-12 mx-auto" />
      </div>
    </div>
  },
  {
    title: "Project Information",
    description: "Duration: 4 months\nTeam Size: 2 developers\nMy Role: Full-Stack Developer & IoT Engineer\nStatus: Live & Deployed\n\nThis smart home dashboard successfully integrates multiple IoT devices and provides users with complete control over their connected home environment.",
    content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,rgb(236_72_153),rgb(99_102_241))] flex items-center justify-center text-white rounded-lg p-6">
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <Button variant="secondary" size="sm" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3 h-3 mr-1" />
              Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-3 h-3 mr-1" />
              Code
            </a>
          </Button>
        </div>
        <Smartphone className="w-12 h-12 mx-auto" />
        <p className="text-sm font-medium">Production Ready</p>
      </div>
    </div>
  }
];

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

      <main className="pt-20 sm:pt-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          {/* Project Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Smart Home Dashboard
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              IoT dashboard for monitoring and controlling connected home devices in real-time
            </p>
          </div>

          {/* Sticky Scroll Content */}
          <StickyScroll content={projectContent} />
        </div>
      </main>
    </div>
  );
};

export default SmartHomeDashboard;