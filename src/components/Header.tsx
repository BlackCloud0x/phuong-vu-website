import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-card mx-2 sm:mx-4 mt-2 sm:mt-4 rounded-xl sm:rounded-2xl">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="px-3 sm:px-4 py-2 border-2 border-primary/50 rounded-lg font-bold text-sm sm:text-lg tracking-wider text-foreground bg-primary/10 backdrop-blur-sm">
                PHUONG VU
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
                About
              </a>
              <a href="#projects" className="text-foreground hover:text-primary transition-smooth font-medium">
                Projects
              </a>
              <a href="#blog" className="text-foreground hover:text-primary transition-smooth font-medium">
                Blog
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-foreground hover:bg-primary/20 w-10 h-10"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={closeMobileMenu} />
          <div className="fixed top-20 left-2 right-2 glass-card rounded-xl p-6">
            <nav className="flex flex-col space-y-6">
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-smooth font-medium text-lg py-2"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-foreground hover:text-primary transition-smooth font-medium text-lg py-2"
                onClick={closeMobileMenu}
              >
                Projects
              </a>
              <a 
                href="#blog" 
                className="text-foreground hover:text-primary transition-smooth font-medium text-lg py-2"
                onClick={closeMobileMenu}
              >
                Blog
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;