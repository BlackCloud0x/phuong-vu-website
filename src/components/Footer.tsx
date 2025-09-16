import { Github, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="py-12 px-6 border-t border-border glass-card mt-20 mx-4 mb-4 rounded-2xl bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            
            
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-smooth hover:bg-primary/20 rounded-full">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-smooth hover:bg-primary/20 rounded-full">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-smooth hover:bg-primary/20 rounded-full">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;