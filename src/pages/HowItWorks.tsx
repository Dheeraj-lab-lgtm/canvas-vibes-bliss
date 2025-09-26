import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Truck, Scale, CreditCard, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import cattleDungImage from "@/assets/cattle-dung.jpg";
import villageBiogasImage from "@/assets/village-biogas.jpg";
import iotTechnologyImage from "@/assets/iot-technology.jpg";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: CheckCircle,
      title: t('collectionRequest'),
      titleHindi: "संग्रह अनुरोध",
      description: "Submit your cattle dung collection request through our platform",
      descriptionHindi: "हमारे प्लेटफॉर्म के माध्यम से अपना गोबर संग्रह अनुरोध सबमिट करें"
    },
    {
      icon: Truck,
      title: t('pickupTransport'),
      titleHindi: "पिकअप और परिवहन", 
      description: "Our team collects the dung from your location with proper vehicles",
      descriptionHindi: "हमारी टीम उचित वाहनों के साथ आपके स्थान से गोबर एकत्र करती है"
    },
    {
      icon: Scale,
      title: t('iotVerification'),
      titleHindi: "IoT सत्यापन",
      description: "Advanced IoT sensors verify the weight and quality of collected material",
      descriptionHindi: "उन्नत IoT सेंसर एकत्रित सामग्री के वजन और गुणवत्ता की पुष्टि करते हैं"
    },
    {
      icon: CreditCard,
      title: t('sameDayPayment'),
      titleHindi: "उसी दिन भुगतान",
      description: "Receive transparent, fair payment directly to your account",
      descriptionHindi: "अपने खाते में सीधे पारदर्शी, निष्पक्ष भुगतान प्राप्त करें"
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
              {t('processTitle')}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {t('processDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="relative bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-medium">
                  {index + 1}
                </div>
                
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-accent mb-3">
                    {step.titleHindi}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {step.descriptionHindi}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Visual Process Flow */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-scale-in">
              <img 
                src={cattleDungImage} 
                alt="Cattle dung collection process"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-display font-bold text-3xl mb-6 text-foreground">
                From Waste to Wealth
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Transform your agricultural waste into a sustainable income stream. Our technology-driven approach ensures fair pricing, transparent transactions, and reliable payments.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-success-foreground" />
                  </div>
                  <span className="text-foreground">IoT-verified accurate weighments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-success-foreground" />
                  </div>
                  <span className="text-foreground">Same-day payment guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-success-foreground" />
                  </div>
                  <span className="text-foreground">Local biogas production support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="font-display font-bold text-3xl mb-6 text-foreground">
                IoT Technology at Work
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our advanced IoT sensors and digital weighing systems ensure complete accuracy and transparency in every transaction. Real-time data collection eliminates disputes and builds trust between farmers and buyers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Precision Weighing</h4>
                    <p className="text-sm text-muted-foreground">Accurate measurements down to the gram</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Quality Assessment</h4>
                    <p className="text-sm text-muted-foreground">Automated quality checks for optimal biogas production</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Real-time Tracking</h4>
                    <p className="text-sm text-muted-foreground">Monitor your collection from pickup to payment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src={iotTechnologyImage} 
                alt="IoT technology and digital systems"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
            </div>
          </div>

          {/* Final Visual */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <img 
              src={villageBiogasImage} 
              alt="Village with integrated biogas production facilities"
              className="w-full h-96 object-cover rounded-2xl shadow-strong"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;