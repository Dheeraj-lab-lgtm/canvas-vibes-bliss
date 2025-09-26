import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "राम कुमार शर्मा",
      nameEn: "Ram Kumar Sharma",
      location: "Uttar Pradesh",
      image: "👨‍🌾",
      rating: 5,
      text: "Saubhagya ने मेरी आय में 35% की वृद्धि की है। अब मैं अपने गोबर से रोज़ाना पैसे कमाता हूँ।",
      textEn: "Saubhagya has increased my income by 35%. Now I earn daily money from my cattle dung.",
      income: "₹2,400/month"
    },
    {
      name: "सुनीता देवी",
      nameEn: "Sunita Devi", 
      location: "Bihar",
      image: "👩‍🌾",
      rating: 5,
      text: "बहुत अच्छी सेवा है। समय पर पिकअप और उसी दिन पेमेंट मिल जाता है।",
      textEn: "Excellent service. Timely pickup and same-day payment.",
      income: "₹1,800/month"
    },
    {
      name: "मुकेश पटेल",
      nameEn: "Mukesh Patel",
      location: "Gujarat", 
      image: "👨‍🌾",
      rating: 5,
      text: "IoT technology से पूरी transparency है। कोई धोखाधड़ी नहीं, साफ-सुथरा काम।",
      textEn: "Complete transparency with IoT technology. No fraud, clean work.",
      income: "₹3,200/month"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 text-foreground">
            {t('successStories')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('successDesc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-card border-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Quote className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <p className="text-sm text-muted-foreground mb-6 italic">
                  "{testimonial.textEn}"
                </p>

                {/* Income Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium mb-6">
                  <span className="mr-1">💰</span>
                  {testimonial.income}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.nameEn}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      📍 {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Active Farmers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">50T</div>
            <div className="text-muted-foreground">Dung Processed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-success mb-2">₹25L</div>
            <div className="text-muted-foreground">Paid to Farmers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">15</div>
            <div className="text-muted-foreground">Villages Connected</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;