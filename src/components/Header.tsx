import { Phone, Mail, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-2 sm:px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 lg:gap-6">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">+1 3137204214</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">info@reliancecovers.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Twitter className="h-3 w-3 sm:h-4 sm:w-4 hover:text-accent cursor-pointer transition-colors" />
            <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 hover:text-accent cursor-pointer transition-colors" />
            <Facebook className="h-3 w-3 sm:h-4 sm:w-4 hover:text-accent cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background border-b border-border py-2 sm:py-4 px-2 sm:px-4 shadow-soft">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                Reliance Covers
              </h1>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Home
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Services
            </Link>
            <Link to="/partners" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Partners
            </Link>
            <Link to="/terms-and-conditions" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Terms And Conditions
            </Link>
            <Link to="/privacy-policy" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Privacy Policy
            </Link>
            <Link to="/contact-us" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/contact-us" className="hidden sm:block">
              <Button variant="cta" size="sm" className="text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6">
                Get A Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden text-xs sm:text-sm px-2 sm:px-3">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;