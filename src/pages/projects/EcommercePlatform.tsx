import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import ecommerceImage from "@/assets/project-ecommerce.jpg";

const EcommercePlatform = () => {
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
              src={ecommerceImage} 
              alt="E-Commerce Platform" 
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl mb-8"
            />
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-0">
                E-Commerce Platform
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
              {["Next.js", "Node.js", "MongoDB"].map(tech => (
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
                  A comprehensive full-stack e-commerce solution designed to handle modern retail challenges. 
                  This platform features real-time inventory management, secure payment processing, and an 
                  intuitive user experience that drives conversions and customer satisfaction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Built with scalability in mind, the platform can handle thousands of concurrent users and 
                  millions of products while maintaining optimal performance and reliability.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Real-time inventory tracking and management
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Secure payment processing with multiple gateways
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Advanced search and filtering capabilities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Customer reviews and rating system
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Admin dashboard with analytics and reporting
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mobile-responsive design with PWA capabilities
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Technical Architecture</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The platform follows a microservices architecture with separate services for user management, 
                  product catalog, inventory, orders, and payments. This approach ensures high availability 
                  and allows for independent scaling of different components.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The frontend is built with Next.js for optimal SEO and performance, while the backend uses 
                  Node.js with Express and MongoDB for flexible data storage and fast query performance.
                </p>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-xl font-bold text-foreground mb-4">Project Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Duration</h4>
                    <p className="text-muted-foreground">8 months</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Team Size</h4>
                    <p className="text-muted-foreground">5 developers</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-1">My Role</h4>
                    <p className="text-muted-foreground">Full-Stack Developer</p>
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

export default EcommercePlatform;