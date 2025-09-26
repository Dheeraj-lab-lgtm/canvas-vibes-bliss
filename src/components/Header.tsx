import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">स</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">Saubhagya</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              {t('home')}
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              {t('about')}
            </Link>
            <Link 
              to="/how-it-works" 
              className={`transition-colors ${isActive('/how-it-works') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              {t('howItWorks')}
            </Link>
            <Link 
              to="/benefits" 
              className={`transition-colors ${isActive('/benefits') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              {t('benefits')}
            </Link>
            <Link 
              to="/stories" 
              className={`transition-colors ${isActive('/stories') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              {t('stories')}
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
            >
              {t('contact')}
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="hidden sm:flex"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'en' ? 'हिं' : 'EN'}
            </Button>
            
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