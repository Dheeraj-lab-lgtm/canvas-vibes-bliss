import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">स</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">Saubhagya</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering rural India through sustainable biogas solutions. Converting agricultural waste into wealth for farmers.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#stories" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-muted-foreground">Dung Collection</span></li>
              <li><span className="text-muted-foreground">IoT Verification</span></li>
              <li><span className="text-muted-foreground">Biogas Production</span></li>
              <li><span className="text-muted-foreground">Fair Payment</span></li>
              <li><span className="text-muted-foreground">Farmer Support</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">info@saubhagya.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-muted-foreground">
                  123 Green Energy Park,<br />
                  New Delhi, India 110001
                </span>
              </div>
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 Saubhagya. All rights reserved. | Made with ❤️ for Indian farmers
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;