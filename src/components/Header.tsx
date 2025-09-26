import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">स</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">Saubhagya</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Benefits</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#stories" className="text-foreground hover:text-primary transition-colors">Stories</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-primary hover:opacity-90">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;