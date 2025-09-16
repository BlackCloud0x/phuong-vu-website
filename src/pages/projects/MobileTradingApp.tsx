import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, User, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import mobileAppImage from "@/assets/project-mobile-app.jpg";

const MobileTradingApp = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link 
            to="/#projects" 
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <div className="text-sm font-medium">Mobile Trading App</div>
        </div>
      </header>

      <div className="container mx-auto py-8 px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <div className="mb-8">
              <img
                src={mobileAppImage}
                alt="Mobile Trading App"
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
              />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h1 className="text-3xl md:text-4xl font-bold">Mobile Trading App</h1>
                <div className="flex gap-3">
                  <Button variant="default" asChild>
                    <a href="https://demo.example.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["React Native", "TypeScript", "GraphQL", "Redux", "WebSocket", "Chart.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A comprehensive cryptocurrency trading platform designed for mobile devices, offering real-time market data, 
                portfolio management, and advanced trading features. The app provides institutional-grade trading tools in 
                an intuitive mobile interface.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Built with React Native for cross-platform compatibility and GraphQL for efficient data fetching, 
                this application demonstrates modern mobile development practices and real-time financial data integration.
              </p>
            </section>

            {/* Key Features */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time cryptocurrency price tracking and market analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Advanced charting with technical indicators and drawing tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Portfolio management with profit/loss tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Secure wallet integration and transaction history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Push notifications for price alerts and market updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Biometric authentication and multi-factor security</span>
                </li>
              </ul>
            </section>

            {/* Technical Implementation */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Frontend Architecture:</strong> Built with React Native and TypeScript 
                  for type-safe cross-platform development. Implemented Redux for state management and React Navigation 
                  for seamless screen transitions.
                </p>
                <p>
                  <strong className="text-foreground">Real-time Data:</strong> Integrated WebSocket connections for live 
                  market data streaming and GraphQL subscriptions for real-time portfolio updates. Used Chart.js for 
                  interactive financial charts with custom indicators.
                </p>
                <p>
                  <strong className="text-foreground">Security & Performance:</strong> Implemented biometric authentication, 
                  secure keychain storage, and encrypted data transmission. Optimized for performance with lazy loading 
                  and efficient data caching strategies.
                </p>
                <p>
                  <strong className="text-foreground">API Integration:</strong> Connected to multiple cryptocurrency 
                  exchanges via RESTful APIs and WebSocket feeds. Implemented robust error handling and offline 
                  functionality for critical features.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Project Info</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground mr-2">Duration:</span>
                    <span>8 months</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground mr-2">Team Size:</span>
                    <span>5 developers</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground mr-2">Role:</span>
                    <span>Lead Mobile Developer</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-muted-foreground mr-2">Status:</span>
                    <span>Live in Production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTradingApp;