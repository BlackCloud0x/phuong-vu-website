import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, MessageCircle, Share2, User } from "lucide-react";
import { Link } from "react-router-dom";

const FutureOfUserExperienceDesign = () => {
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
              <span className="font-medium text-foreground">Sarah Johnson</span>
              <span>in</span>
              <span className="font-medium text-foreground">DesignDaily</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              The Future of User Experience Design
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground max-w-3xl">
              Exploring emerging trends and technologies that are shaping the future of digital experiences in 2024 and beyond.
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Nov 28, 2023</span>
                <span>•</span>
                <span>7 min read</span>
              </div>

              {/* Engagement */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">189</span>
                </button>
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">8</span>
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
                <h2 className="text-2xl font-semibold mb-4 text-foreground">The Evolution of UX Design</h2>
                <p className="text-muted-foreground leading-relaxed">
                  User experience design has evolved dramatically over the past decade, and we're on the cusp of even 
                  more significant changes. As technology advances and user expectations shift, designers must adapt 
                  their approaches to create meaningful and engaging digital experiences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Emerging Technologies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Several emerging technologies are reshaping how we think about user experience design:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>AI-powered personalization and predictive interfaces</li>
                  <li>Voice user interfaces and conversational design</li>
                  <li>Augmented reality (AR) and virtual reality (VR) experiences</li>
                  <li>Gesture-based interactions and haptic feedback</li>
                  <li>Brain-computer interfaces and neural design patterns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Design for Accessibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The future of UX design must prioritize accessibility and inclusion. This means designing for users 
                  with diverse abilities, creating interfaces that work across different devices and contexts, and 
                  ensuring that digital experiences are truly universal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Sustainable Design Practices</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As environmental consciousness grows, UX designers are increasingly focusing on sustainable design 
                  practices. This includes optimizing for performance to reduce energy consumption, designing for 
                  longevity to minimize digital waste, and considering the environmental impact of design decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">The Human-Centered Future</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Despite all the technological advances, the future of UX design remains fundamentally human-centered. 
                  The most successful designs will be those that leverage technology to enhance human capabilities 
                  and create more meaningful connections between people and digital products.
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

export default FutureOfUserExperienceDesign;