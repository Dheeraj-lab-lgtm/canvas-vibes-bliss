import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-farmers.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Happy farmers with biogas facilities" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-32 left-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="font-display font-bold text-5xl lg:text-7xl mb-6 text-white leading-tight">
              {t('heroTitle').split(' ').slice(0, -1).join(' ')} <span className="text-secondary">{t('heroTitle').split(' ').slice(-1)}</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-white/90 font-medium">
              {t('heroSubtitle')}
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-lg">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium group">
                <Users className="w-5 h-5 mr-2" />
                {t('joinFarmer')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                {t('requestPickup')}
              </Button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-success">+30%</div>
                  <div className="text-foreground font-medium">{t('farmerIncomeIncrease')}</div>
                  <div className="text-sm text-muted-foreground">किसान आय वृद्धि</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary-foreground">&gt;90%</div>
                  <div className="text-foreground font-medium">{t('cbgYieldEfficiency')}</div>
                  <div className="text-sm text-muted-foreground">CBG उत्पादन दक्षता</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">40%</div>
                  <div className="text-foreground font-medium">{t('methaneReduction')}</div>
                  <div className="text-sm text-muted-foreground">मीथेन कमी</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;