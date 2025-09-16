import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="px-4 py-2 border-2 border-foreground rounded-lg font-bold text-lg tracking-wider">
              DEV
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;