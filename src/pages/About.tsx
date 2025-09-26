import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Heart, Users, Globe } from "lucide-react";
import researchTeamImage from "@/assets/research-team.jpg";
import cleanEnergyImage from "@/assets/clean-energy.jpg";
import farmersCooperationImage from "@/assets/farmers-cooperation.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-display font-bold text-5xl lg:text-6xl mb-6">
              {t('about')}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Transforming rural India through sustainable biogas solutions
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Vision */}
            <Card className="bg-gradient-card border-0 shadow-medium animate-scale-in">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="font-display">{t('ourVision')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('visionText')}
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-gradient-card border-0 shadow-medium animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <span className="font-display">{t('ourMission')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('missionText')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 text-foreground">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How we started the journey to empower rural India
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <img 
                src={researchTeamImage} 
                alt="Research team working on biogas solutions"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-display font-bold text-3xl mb-6 text-foreground">
                Innovation Meets Tradition
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by a team of agricultural scientists and technology experts, Saubhagya was born from the vision to transform India's rural economy. We saw the untapped potential in agricultural waste and the struggles of farmers seeking fair compensation for their resources.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey began in 2022 with a simple question: How can we turn agricultural waste into wealth while contributing to India's clean energy goals?
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="font-display font-bold text-3xl mb-6 text-foreground">
                Technology for Transparency
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We developed cutting-edge IoT solutions to ensure complete transparency in the collection and verification process. Our technology guarantees fair pricing and eliminates the middleman exploitation that farmers have faced for generations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to serve over 500 farmers across 15 villages, processing more than 50 tonnes of agricultural waste monthly and contributing to India's sustainable energy future.
              </p>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src={cleanEnergyImage} 
                alt="Clean energy solutions in rural India"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 text-foreground">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our mission to empower rural India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-4 text-foreground">
                  Farmer First
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every decision we make puts farmers at the center. Their prosperity and well-being guide our innovation and growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-4 text-foreground">
                  Sustainability
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to environmental responsibility, turning waste into clean energy for a greener future.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-4 text-foreground">
                  Transparency
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our IoT-enabled platform ensures complete transparency in every transaction, building trust through technology.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Image */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <img 
              src={farmersCooperationImage} 
              alt="Farmers working together in cooperation"
              className="w-full h-96 object-cover rounded-2xl shadow-strong"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;