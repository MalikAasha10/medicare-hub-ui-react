import { Phone, Mail, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 3137204214</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@reliancecovers.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Twitter className="h-4 w-4 hover:text-accent cursor-pointer transition-colors" />
            <Linkedin className="h-4 w-4 hover:text-accent cursor-pointer transition-colors" />
            <Facebook className="h-4 w-4 hover:text-accent cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background border-b border-border py-4 px-4 shadow-soft">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Reliance Covers
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Partners
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Terms And Conditions
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact Us
            </a>
          </nav>

          <Button variant="cta" size="lg" className="hidden md:inline-flex">
            Get A Quote
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;