import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, ShoppingCart, CreditCard, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const projectContent = [
  {
    title: "Project Overview",
    description: "A comprehensive full-stack e-commerce solution designed to handle modern retail challenges. This platform features real-time inventory management, secure payment processing, and an intuitive user experience that drives conversions and customer satisfaction. Built with scalability in mind, the platform can handle thousands of concurrent users and millions of products while maintaining optimal performance and reliability.",
    content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,rgb(6_182_212),rgb(16_185_129))] flex items-center justify-center text-white rounded-lg p-6">
      <div className="text-center">
        <ShoppingCart className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
        <p className="text-sm opacity-90">Full-Stack Solution</p>
      </div>
    </div>
  },
  {
    title: "Key Features",
    description: "• Real-time inventory tracking and management\n• Secure payment processing with multiple gateways\n• Advanced search and filtering capabilities\n• Customer reviews and rating system\n• Admin dashboard with analytics and reporting\n• Mobile-responsive design with PWA capabilities\n• Order management and fulfillment system\n• Multi-vendor marketplace support",
    content: <div className="h-full w-full flex items-center justify-center text-white">
      <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop" className="h-full w-full object-cover rounded-lg" alt="E-commerce dashboard interface" />
    </div>
  },
  {
    title: "Technical Architecture",
    description: "The platform follows a microservices architecture with separate services for user management, product catalog, inventory, orders, and payments. This approach ensures high availability and allows for independent scaling of different components. The frontend is built with Next.js for optimal SEO and performance, while the backend uses Node.js with Express and MongoDB for flexible data storage.",
    content: <div className="h-full w-full bg-[linear-gradient(to_bottom_right,rgb(249_115_22),rgb(234_179_8))] flex items-center justify-center text-white rounded-lg p-4">
      <div className="text-center">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <span className="px-2 py-1 bg-white/20 rounded text-xs">Next.js</span>
          <span className="px-2 py-1 bg-white/20 rounded text-xs">Node.js</span>
          <span className="px-2 py-1 bg-white/20 rounded text-xs">MongoDB</span>
          <span className="px-2 py-1 bg-white/20 rounded text-xs">Stripe</span>
        </div>
        <BarChart3 className="w-12 h-12 mx-auto" />
      </div>
    </div>
  },
  {
    title: "Project Information",
    description: "Duration: 8 months\nTeam Size: 5 developers\nMy Role: Full-Stack Developer\nStatus: Live & Deployed\n\nThis e-commerce platform has successfully processed thousands of transactions and serves as a robust foundation for modern online retail businesses.",
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
        <CreditCard className="w-12 h-12 mx-auto" />
        <p className="text-sm font-medium">Production Ready</p>
      </div>
    </div>
  }
];

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

      <main className="pt-20 sm:pt-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          {/* Project Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              E-Commerce Platform
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              A comprehensive full-stack solution for modern online retail businesses
            </p>
          </div>

          {/* Sticky Scroll Content */}
          <StickyScroll content={projectContent} />
        </div>
      </main>
    </div>
  );
};

export default EcommercePlatform;