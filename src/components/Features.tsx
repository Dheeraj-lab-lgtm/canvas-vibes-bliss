import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Settings, Phone } from "lucide-react";
import farmerIncomeImage from "@/assets/farmer-income.jpg";
import iotTechnologyImage from "@/assets/iot-technology.jpg";
import biogas from "@/assets/biogas-facility.jpg";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 text-foreground">
            Empowering Rural India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Saubhagya connects farmers with biogas production facilities, creating sustainable income from agricultural waste while contributing to clean energy solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* For Farmers Card */}
          <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-scale-in">
            <CardHeader className="pb-4">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src={farmerIncomeImage} 
                  alt="Farmer counting money representing increased income"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-display text-xl">For Farmers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Turn your cattle dung into daily income with transparent, fair pricing
              </p>
              <Button variant="outline" className="w-full group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
          
          {/* How It Works Card */}
          <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="pb-4">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src={iotTechnologyImage} 
                  alt="IoT technology and digital weighing systems"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-secondary-foreground" />
                </div>
                <span className="font-display text-xl">How It Works</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Simple 4-step process from collection to payment
              </p>
              <Button variant="outline" className="w-full group">
                See Process
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Get Started Card */}
          <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="pb-4">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src={biogas} 
                  alt="Modern biogas production facility"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="font-display text-xl">Get Started</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Ready to join? Contact us for immediate onboarding
              </p>
              <Button className="w-full bg-gradient-primary hover:opacity-90 group">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;