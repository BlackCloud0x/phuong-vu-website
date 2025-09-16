import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Bookmark, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications",
    description: "Learn the key principles for creating web applications that can grow with your business needs and handle millions of users.",
    date: "Dec 12, 2023",
    readTime: "5 min read",
    author: "John Smith",
    publication: "TechBlog",
    likes: 234,
    comments: 12,
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "The Future of User Experience Design",
    description: "Exploring emerging trends and technologies that are shaping the future of digital experiences in 2024 and beyond.",
    date: "Nov 28, 2023",
    readTime: "7 min read", 
    author: "Sarah Johnson",
    publication: "DesignDaily",
    likes: 189,
    comments: 8,
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Effective Project Management Strategies",
    description: "Best practices for managing complex projects and delivering results on time and within budget using modern methodologies.",
    date: "Nov 15, 2023",
    readTime: "6 min read",
    author: "Mike Chen",
    publication: "ProductHub",
    likes: 156,
    comments: 6,
    image: "/api/placeholder/400/250"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6 relative">
      {/* Light overlay for consistency */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights and thoughts on product management, technology, and digital innovation.
          </p>
        </div>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Publication Info */}
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center">
                      <User className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-foreground">{post.author}</span>
                    <span>in</span>
                    <span className="font-medium text-foreground">{post.publication}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {post.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Engagement */}
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-80 h-48 lg:h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Article Image</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-12 border-b border-border/30" />
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            View all articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;