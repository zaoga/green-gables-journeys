import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Car, 
  Shield, 
  Clock, 
  Star, 
  Users, 
  MapPin,
  Wine,
  Plane,
  ChevronRight,
  CheckCircle,
  Award,
  Leaf
} from "lucide-react";
import shuttleFleet from "@/assets/shuttle-fleet.jpg";
import driverTeam from "@/assets/driver-team.jpg";
import wineTours from "@/assets/wine-tours.jpg";
import airportTransfer from "@/assets/airport-transfer.jpg";
import wineTourService from "@/assets/wine-tour-service.jpg";
import shuttleService from "@/assets/shuttle-service.jpg";
import tourPackages from "@/assets/tour-packages.jpg";

const Home = () => {
  const phoneNumber = "+27747231048";
  
  const handleBookNow = () => {
    const message = "Hi Green Gables! I'd like to book a journey. Please provide me with more details.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Airport Transfers",
      description: "Seamless transportation to and from airports, ensuring a stress-free journey.",
      features: ["Meet & Greet Service", "Flight Monitoring", "Door-to-Door Service"],
      image: airportTransfer
    },
    {
      icon: <Wine className="w-8 h-8" />,
      title: "Wine Tours",
      description: "Explore South Africa's renowned wine regions with our knowledgeable drivers.",
      features: ["Expert Local Guides", "Premium Wineries", "Tasting Experiences"],
      image: wineTourService
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Shuttle Services",
      description: "Reliable transportation for daily commutes, special events, or corporate functions.",
      features: ["Flexible Scheduling", "Group Bookings", "Corporate Rates"],
      image: shuttleService
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Tour Packages",
      description: "Customised tours tailored to your preferences, showcasing South Africa's beauty.",
      features: ["Custom Itineraries", "Multi-Day Tours", "Local Experiences"],
      image: tourPackages
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "Strict safety standards and thoroughly vetted drivers"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Punctual Service",
      description: "Always on time, ensuring you never miss important appointments"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "5-Star Experience",
      description: "Exceptional service that exceeds your expectations"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "Environmentally responsible transportation solutions"
    }
  ];

  const values = [
    {
      title: "No Surprises",
      description: "Clear communication and transparency in all our services",
      icon: <CheckCircle className="w-6 h-6 text-success" />
    },
    {
      title: "Complete Transparency",
      description: "Fair pricing and clear policies with no hidden fees",
      icon: <Award className="w-6 h-6 text-gold" />
    },
    {
      title: "Outstanding Service",
      description: "Exceptional reliability, professional drivers, and premium amenities",
      icon: <Star className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Premium Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From airport transfers to wine tours, we provide comprehensive transportation solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-scale-in border-border/50 hover:border-primary/30 overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose Green Gables?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're more than just a transport service – we're your partners in creating unforgettable journeys across South Africa.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-gradient-to-r from-primary to-success hover:shadow-lg hover:shadow-primary/25">
                Learn More About Us
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src={shuttleFleet} 
                  alt="Green Gables Shuttle Fleet" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Modern Fleet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern, air-conditioned vehicles meticulously maintained for your comfort and safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden animate-scale-in">
              <div className="relative h-64">
                <img 
                  src={shuttleFleet} 
                  alt="Luxury Sedan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h3 className="text-xl font-semibold">Luxury Sedans</h3>
                  <p className="text-sm opacity-90">Up to 4 passengers</p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="relative h-64">
                <img 
                  src={driverTeam} 
                  alt="Professional Drivers" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h3 className="text-xl font-semibold">Professional Team</h3>
                  <p className="text-sm opacity-90">Experienced & Friendly</p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative h-64">
                <img 
                  src={wineTours} 
                  alt="Tour Experiences" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <h3 className="text-xl font-semibold">Tour Experiences</h3>
                  <p className="text-sm opacity-90">Unforgettable Journeys</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Full Fleet
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 animate-scale-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-success text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Green Gables for their transportation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground" onClick={handleBookNow}>
              Book Your Journey Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Home;