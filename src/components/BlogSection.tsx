import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Bookmark, User } from "lucide-react";
const blogPosts = [{
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
}, {
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
}, {
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
}];
const BlogSection = () => {
  return <section id="blog" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative bg-background">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Latest Articles
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Insights and thoughts on product management, technology, and digital innovation.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {blogPosts.map(post => {
          const getPostSlug = (id: number) => {
            switch (id) {
              case 1:
                return "/blog/building-scalable-web-applications";
              case 2:
                return "/blog/future-of-user-experience-design";
              case 3:
                return "/blog/effective-project-management-strategies";
              default:
                return "#";
            }
          };
          return <article key={post.id} className="group cursor-pointer glass-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-smooth">
                <a href={getPostSlug(post.id)} className="block">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
                {/* Image - Mobile first, then desktop order */}
                <div className="w-full sm:w-36 sm:h-36 lg:w-48 lg:h-32 bg-gradient-to-br from-primary/30 to-accent/20 rounded-lg overflow-hidden flex-shrink-0 sm:order-2">
                  <div className="w-full h-32 sm:h-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-muted-foreground text-sm">Article Image</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 sm:space-y-4 sm:order-1">
                  {/* Publication Info */}
                  

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {post.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-2 sm:pt-4">
                    <div className="flex items-center space-x-2 sm:space-x-4 text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Engagement */}
                    
                  </div>
                </div>
              </div>
                </a>
            </article>;
        })}
        </div>

        {/* View More */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10 min-h-[44px] px-6">
            View all articles
          </Button>
        </div>
      </div>
    </section>;
};
export default BlogSection;