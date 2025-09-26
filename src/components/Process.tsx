import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Truck, Scale, CreditCard } from "lucide-react";
import cattleDungImage from "@/assets/cattle-dung.jpg";
import villageBiogasImage from "@/assets/village-biogas.jpg";

const Process = () => {
  const steps = [
    {
      icon: CheckCircle,
      title: "Collection Request",
      titleHindi: "संग्रह अनुरोध",
      description: "Submit your cattle dung collection request through our platform",
      descriptionHindi: "हमारे प्लेटफॉर्म के माध्यम से अपना गोबर संग्रह अनुरोध सबमिट करें"
    },
    {
      icon: Truck,
      title: "Pickup & Transport",
      titleHindi: "पिकअप और परिवहन", 
      description: "Our team collects the dung from your location with proper vehicles",
      descriptionHindi: "हमारी टीम उचित वाहनों के साथ आपके स्थान से गोबर एकत्र करती है"
    },
    {
      icon: Scale,
      title: "IoT Verification",
      titleHindi: "IoT सत्यापन",
      description: "Advanced IoT sensors verify the weight and quality of collected material",
      descriptionHindi: "उन्नत IoT सेंसर एकत्रित सामग्री के वजन और गुणवत्ता की पुष्टि करते हैं"
    },
    {
      icon: CreditCard,
      title: "Same-day Payment",
      titleHindi: "उसी दिन भुगतान",
      description: "Receive transparent, fair payment directly to your account",
      descriptionHindi: "अपने खाते में सीधे पारदर्शी, निष्पक्ष भुगतान प्राप्त करें"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our simple 4-step process ensures seamless collection, verification, and payment for your agricultural waste
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

        {/* Additional Visual */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <img 
            src={villageBiogasImage} 
            alt="Village with integrated biogas production facilities"
            className="w-full h-96 object-cover rounded-2xl shadow-strong"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;