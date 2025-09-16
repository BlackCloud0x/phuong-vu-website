import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, MessageCircle, Share2, User } from "lucide-react";
import { Link } from "react-router-dom";

const BuildingScalableWebApplications = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Article Header */}
      <header className="py-16 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {/* Publication Info */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-5 h-5 bg-primary/30 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-primary" />
              </div>
              <span className="font-medium text-foreground">John Smith</span>
              <span>in</span>
              <span className="font-medium text-foreground">TechBlog</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Building Scalable Web Applications
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground max-w-3xl">
              Learn the key principles for creating web applications that can grow with your business needs and handle millions of users.
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Dec 12, 2023</span>
                <span>•</span>
                <span>5 min read</span>
              </div>

              {/* Engagement */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">234</span>
                </button>
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">12</span>
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Building scalable web applications is one of the most challenging aspects of modern software development. 
                  As your user base grows and your application becomes more complex, the decisions you make early in the 
                  development process can make or break your ability to handle growth effectively.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Architecture Principles</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The foundation of any scalable web application lies in its architecture. Here are the key principles 
                  that should guide your architectural decisions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Microservices architecture for better modularity and independent scaling</li>
                  <li>Database sharding and replication strategies</li>
                  <li>Caching layers at multiple levels (CDN, application, database)</li>
                  <li>Load balancing and horizontal scaling capabilities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Performance Optimization</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Performance optimization is crucial for scalability. Focus on optimizing database queries, 
                  implementing efficient caching strategies, and minimizing network requests. Consider using 
                  tools like Redis for session management and Elasticsearch for fast search capabilities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Monitoring and Analytics</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implement comprehensive monitoring from day one. Use tools like Prometheus, Grafana, and 
                  application performance monitoring (APM) solutions to track key metrics and identify 
                  bottlenecks before they become critical issues.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Conclusion</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Building scalable web applications requires careful planning, the right technology choices, 
                  and a deep understanding of your application's growth patterns. By following these principles 
                  and continuously monitoring your application's performance, you can build systems that grow 
                  with your business needs.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-muted/50 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <Link to="/#blog">
            <Button variant="outline" className="hover:bg-primary/10">
              Back to All Articles
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BuildingScalableWebApplications;