import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-gold/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-foreground/20">
            <Star className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium">South Africa's Trusted Transport Service</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your Journey,
            <span className="block bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent animate-glow">
              Our Priority
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Experience exceptional shuttle services and unforgettable tours across South Africa with Green Gables Shuttles & Tours
          </p>

          {/* Feature Points */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base">
            <div className="flex items-center space-x-2 animate-slide-in-left">
              <Shield className="w-5 h-5 text-gold" />
              <span>Safe & Reliable</span>
            </div>
            <div className="flex items-center space-x-2 animate-scale-in">
              <Clock className="w-5 h-5 text-gold" />
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center space-x-2 animate-slide-in-right">
              <Star className="w-5 h-5 text-gold" />
              <span>5-Star Experience</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-gold-foreground shadow-lg hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 animate-float"
            >
              Book Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              Explore Tours
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70 mb-6">Trusted by thousands of travelers</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">1000+</div>
                <div className="text-xs">Happy Customers</div>
              </div>
              <div className="w-px h-8 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">24/7</div>
                <div className="text-xs">Service Available</div>
              </div>
              <div className="w-px h-8 bg-primary-foreground/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">5★</div>
                <div className="text-xs">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-gold/20 rounded-full blur-lg animate-float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;