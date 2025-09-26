import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Clock, Leaf, DollarSign, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import farmerIncomeImage from "@/assets/farmer-income.jpg";
import familyProsperityImage from "@/assets/family-prosperity.jpg";
import countrysideHarmonyImage from "@/assets/countryside-harmony.jpg";

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Income",
      titleHindi: "बढ़ी हुई आय",
      description: "Generate consistent daily income from your agricultural waste",
      descriptionHindi: "अपने कृषि अपशिष्ट से निरंतर दैनिक आय प्राप्त करें",
      stat: "+30%",
      statDesc: "Average income increase"
    },
    {
      icon: Shield,
      title: "Fair & Transparent",
      titleHindi: "निष्पक्ष और पारदर्शी",
      description: "IoT-verified weighments ensure you get fair compensation",
      descriptionHindi: "IoT-सत्यापित तौल सुनिश्चित करता है कि आपको उचित मुआवजा मिले",
      stat: "100%",
      statDesc: "Transparent pricing"
    },
    {
      icon: Clock,
      title: "Same-Day Payment",
      titleHindi: "उसी दिन भुगतान",
      description: "Receive payments immediately after collection verification",
      descriptionHindi: "संग्रह सत्यापन के तुरंत बाद भुगतान प्राप्त करें",
      stat: "24hrs",
      statDesc: "Payment guarantee"
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      titleHindi: "पर्यावरणीय प्रभाव",
      description: "Contribute to clean energy and reduce methane emissions",
      descriptionHindi: "स्वच्छ ऊर्जा में योगदान दें और मीथेन उत्सर्जन कम करें",
      stat: "40%",
      statDesc: "Methane reduction"
    },
    {
      icon: DollarSign,
      title: "No Middleman",
      titleHindi: "कोई बिचौलिया नहीं",
      description: "Direct payments eliminate middleman exploitation",
      descriptionHindi: "प्रत्यक्ष भुगतान बिचौलिए के शोषण को समाप्त करता है",
      stat: "0%",
      statDesc: "Commission fees"
    },
    {
      icon: Users,
      title: "Community Support",
      titleHindi: "सामुदायिक सहायता",
      description: "Join a growing network of empowered farmers",
      descriptionHindi: "सशक्त किसानों के बढ़ते नेटवर्क में शामिल हों",
      stat: "500+",
      statDesc: "Active farmers"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-display font-bold text-5xl lg:text-6xl mb-6">
              {t('benefitsTitle')}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {t('benefitsDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <span className="font-display text-lg text-foreground">{benefit.title}</span>
                      <p className="text-sm text-accent font-medium">{benefit.titleHindi}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80 mb-4 italic">
                    {benefit.descriptionHindi}
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{benefit.stat}</div>
                    <div className="text-sm text-muted-foreground">{benefit.statDesc}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <img 
                src={farmerIncomeImage} 
                alt="Farmer counting increased income"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-display font-bold text-3xl mb-6 text-foreground">
                Real Income, Real Impact
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our farmers have seen significant improvements in their monthly income, with some earning up to ₹3,200 additional revenue per month from agricultural waste that was previously discarded.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-success/10 rounded-lg">
                  <span className="font-medium text-foreground">Average Monthly Increase</span>
                  <span className="text-xl font-bold text-success">₹2,400</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                  <span className="font-medium text-foreground">Farmers Benefited</span>
                  <span className="text-xl font-bold text-primary">500+</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-secondary/10 rounded-lg">
                  <span className="font-medium text-foreground">Total Payments Made</span>
                  <span className="text-xl font-bold text-secondary">₹25L+</span>
                </div>
              </div>
              <Button className="bg-gradient-primary hover:opacity-90">
                Join Our Success Story
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="font-display font-bold text-3xl mb-6 text-foreground">
                Family Prosperity
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The additional income from biogas production helps farming families invest in education, healthcare, and improving their quality of life. Many have been able to purchase better equipment and expand their agricultural operations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <div className="text-2xl font-bold text-success mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Improved Living Standards</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <div className="text-2xl font-bold text-primary mb-1">70%</div>
                  <div className="text-sm text-muted-foreground">Reinvested in Farming</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src={familyProsperityImage} 
                alt="Rural family celebrating prosperity"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 text-foreground">
              Environmental Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your participation contributes to India's sustainable development goals
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center animate-scale-in">
              <div className="w-20 h-20 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-success" />
              </div>
              <div className="text-3xl font-bold text-success mb-2">50T</div>
              <div className="text-muted-foreground">CO₂ Equivalent Reduced</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">15MWh</div>
              <div className="text-muted-foreground">Clean Energy Generated</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-muted-foreground">Waste Utilized</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏡</span>
              </div>
              <div className="text-3xl font-bold text-accent mb-2">15</div>
              <div className="text-muted-foreground">Villages Powered</div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <img 
              src={countrysideHarmonyImage} 
              alt="Harmonious countryside with sustainable practices"
              className="w-full h-96 object-cover rounded-2xl shadow-strong"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Benefits;