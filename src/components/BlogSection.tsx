import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications",
    description: "Learn the key principles for creating web applications that can grow with your business needs.",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "The Future of User Experience Design",
    description: "Exploring emerging trends and technologies that are shaping the future of digital experiences.",
    date: "2024-03-10",
    readTime: "7 min read",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Effective Project Management Strategies",
    description: "Best practices for managing complex projects and delivering results on time and within budget.",
    date: "2024-03-05",
    readTime: "6 min read",
    image: "/api/placeholder/400/250"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6 relative">
      {/* Light overlay for consistency */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and thoughts on product management, technology, and digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Blog Image</span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {post.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto font-medium text-primary hover:text-primary/80 group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="glass-card">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;