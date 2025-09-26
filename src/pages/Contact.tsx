import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Clock, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-display font-bold text-5xl lg:text-6xl mb-6">
              {t('contactTitle')}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {t('contactDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-0 shadow-medium animate-scale-in">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-foreground">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Name / नाम
                    </label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone / फोन
                    </label>
                    <Input placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email / ईमेल
                  </label>
                  <Input placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Village / गांव
                  </label>
                  <Input placeholder="Your village name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message / संदेश
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements or any questions you have..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message / संदेश भेजें
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        Call Us / हमें कॉल करें
                      </h3>
                      <p className="text-muted-foreground">Available 24/7 for support</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">+91 98765 43210</p>
                    <p className="text-foreground font-medium">+91 87654 32109</p>
                    <p className="text-sm text-muted-foreground">Toll-free support line</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        Email Us / ईमेल करें
                      </h3>
                      <p className="text-muted-foreground">For detailed inquiries</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">info@saubhagya.com</p>
                    <p className="text-foreground font-medium">support@saubhagya.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        Visit Us / हमसे मिलें
                      </h3>
                      <p className="text-muted-foreground">Our headquarters</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">
                      123 Green Energy Park<br />
                      Sector 15, New Delhi<br />
                      India 110001
                    </p>
                    <p className="text-sm text-muted-foreground">Open Monday - Saturday, 9 AM - 6 PM</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-16 flex-col space-y-1">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">WhatsApp</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col space-y-1">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">Call Now</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions from farmers about our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-0 shadow-soft animate-scale-in">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  How much can I earn per month?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Earnings depend on the amount of cattle dung you can provide. On average, farmers earn ₹1,800-₹3,200 per month as additional income.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-soft animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  How do I join the platform?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Simply contact us via phone or WhatsApp. Our team will visit your location for onboarding and setup within 48 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-soft animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  Is the payment really same-day?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Yes, we guarantee same-day payment after collection and IoT verification. Payments are made directly to your bank account.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-soft animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  What areas do you serve?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Currently serving 15 villages across North India. We're rapidly expanding to new areas based on farmer demand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;