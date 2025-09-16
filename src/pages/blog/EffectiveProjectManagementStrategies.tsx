import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, MessageCircle, Share2, User } from "lucide-react";
import { Link } from "react-router-dom";

const EffectiveProjectManagementStrategies = () => {
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
              <span className="font-medium text-foreground">Mike Chen</span>
              <span>in</span>
              <span className="font-medium text-foreground">ProductHub</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Effective Project Management Strategies
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground max-w-3xl">
              Best practices for managing complex projects and delivering results on time and within budget using modern methodologies.
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Nov 15, 2023</span>
                <span>•</span>
                <span>6 min read</span>
              </div>

              {/* Engagement */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">156</span>
                </button>
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">6</span>
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
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Modern Project Management Challenges</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Today's project management landscape is more complex than ever. With remote teams, changing requirements, 
                  and accelerated timelines, project managers need to adapt their strategies to meet modern challenges 
                  while maintaining quality and team satisfaction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Agile and Hybrid Methodologies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The most effective project management approaches today combine elements from various methodologies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Scrum for iterative development and regular feedback cycles</li>
                  <li>Kanban for continuous flow and visual project tracking</li>
                  <li>Lean principles for waste reduction and value optimization</li>
                  <li>Design Thinking for user-centered problem solving</li>
                  <li>DevOps practices for continuous integration and deployment</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Team Communication and Collaboration</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Effective communication is the backbone of successful project management. Establish clear channels, 
                  regular check-ins, and use collaborative tools that keep everyone aligned. Focus on transparency 
                  and ensure that all team members understand their roles and responsibilities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Risk Management and Contingency Planning</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Proactive risk management is essential for project success. Identify potential risks early, 
                  develop mitigation strategies, and maintain contingency plans. Regular risk assessments and 
                  stakeholder communication help prevent small issues from becoming major roadblocks.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Technology and Tools</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Leverage technology to streamline project management processes. Use project management software 
                  for tracking, automation tools for repetitive tasks, and analytics platforms for data-driven 
                  decision making. The right tools can significantly improve efficiency and project outcomes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Continuous Improvement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Successful project management is an iterative process. Conduct regular retrospectives, gather 
                  feedback from team members and stakeholders, and continuously refine your processes. This 
                  commitment to improvement ensures that your project management capabilities evolve with your 
                  organization's needs.
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

export default EffectiveProjectManagementStrategies;