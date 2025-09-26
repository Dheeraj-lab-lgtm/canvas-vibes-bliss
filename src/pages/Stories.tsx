import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const Stories = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-display font-bold text-5xl lg:text-6xl mb-6">
              Success Stories
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Real farmers sharing their journey with Saubhagya
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Component */}
      <Testimonials />

      <Footer />
    </div>
  );
};

export default Stories;