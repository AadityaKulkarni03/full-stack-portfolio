
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-finance-blue font-bold text-xl sm:text-2xl">
            Portfolio<span className="text-finance-teal">Vision</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-finance-gray hover:text-finance-blue transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-finance-gray hover:text-finance-blue transition-colors">
            How It Works
          </a>
          <div className="relative group">
            <button className="flex items-center text-finance-gray hover:text-finance-blue transition-colors">
              Resources
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <a href="#" className="block px-4 py-2 text-sm text-finance-gray hover:bg-finance-lightGray" role="menuitem">Documentation</a>
                <a href="#" className="block px-4 py-2 text-sm text-finance-gray hover:bg-finance-lightGray" role="menuitem">Sample Reports</a>
                <a href="#" className="block px-4 py-2 text-sm text-finance-gray hover:bg-finance-lightGray" role="menuitem">FAQ</a>
              </div>
            </div>
          </div>
          <Button className="bg-finance-teal hover:bg-finance-teal/90 text-white">
            Sign Up Free
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-finance-blue"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            <a 
              href="#features" 
              className="text-finance-gray hover:text-finance-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-finance-gray hover:text-finance-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between text-finance-gray hover:text-finance-blue transition-colors py-2">
                Resources
                <ChevronDown className="h-4 w-4" />
              </summary>
              <div className="ml-4 mt-2 space-y-1">
                <a href="#" className="block text-sm text-finance-gray hover:text-finance-blue py-2">Documentation</a>
                <a href="#" className="block text-sm text-finance-gray hover:text-finance-blue py-2">Sample Reports</a>
                <a href="#" className="block text-sm text-finance-gray hover:text-finance-blue py-2">FAQ</a>
              </div>
            </details>
            <Button className="bg-finance-teal hover:bg-finance-teal/90 text-white w-full">
              Sign Up Free
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
