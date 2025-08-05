import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Wine, 
  Car, 
  MapPin, 
  Users, 
  Clock,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  Route,
  Building
} from "lucide-react";
import wineTours from "@/assets/wine-tours.jpg";
import shuttleFleet from "@/assets/shuttle-fleet.jpg";

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Airport Transfers",
      description: "Seamless transportation to and from airports, ensuring a stress-free journey from start to finish.",
      features: [
        "Meet & Greet Service",
        "Flight Monitoring",
        "Door-to-Door Service",
        "Luggage Assistance",
        "24/7 Availability",
        "All Major Airports"
      ],
      pricing: "From R450",
      duration: "One-way",
      popular: true
    },
    {
      icon: <Wine className="w-12 h-12" />,
      title: "Wine Tours",
      description: "Explore South Africa's renowned wine regions with our knowledgeable drivers and curated experiences.",
      features: [
        "Expert Local Guides",
        "Premium Wineries",
        "Tasting Experiences",
        "Scenic Routes",
        "Group Bookings",
        "Custom Itineraries"
      ],
      pricing: "From R1,200",
      duration: "Full Day",
      popular: false
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Shuttle Services",
      description: "Reliable transportation for daily commutes, special events, or corporate functions.",
      features: [
        "Flexible Scheduling",
        "Group Bookings",
        "Corporate Rates",
        "Regular Routes",
        "Event Transportation",
        "Hourly Rentals"
      ],
      pricing: "From R350",
      duration: "Per Trip",
      popular: false
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Tour Packages",
      description: "Customised tours tailored to your preferences, showcasing South Africa's natural beauty.",
      features: [
        "Custom Itineraries",
        "Multi-Day Tours",
        "Local Experiences",
        "Photography Stops",
        "Cultural Sites",
        "Nature Reserves"
      ],
      pricing: "From R800",
      duration: "Half/Full Day",
      popular: false
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Dinner Transfers",
      description: "Enjoy a safe and convenient ride to your evening destinations and back home.",
      features: [
        "Evening Service",
        "Restaurant Pickups",
        "Return Trips",
        "Wait Service",
        "Special Occasions",
        "Safe Night Travel"
      ],
      pricing: "From R300",
      duration: "Round Trip",
      popular: false
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Corporate Services",
      description: "Professional transportation solutions for businesses and corporate events.",
      features: [
        "Executive Transport",
        "Conference Shuttles",
        "Airport Transfers",
        "Team Building Events",
        "Monthly Contracts",
        "VIP Service"
      ],
      pricing: "Custom Quotes",
      duration: "As Required",
      popular: false
    }
  ];

  const additionalFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fully Insured",
      description: "Complete insurance coverage for your peace of mind"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Punctual Service",
      description: "Always on time, every time"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Professional Drivers",
      description: "Experienced, friendly, and knowledgeable"
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "GPS Tracking",
      description: "Real-time tracking for all journeys"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From airport transfers to wine tours, we provide comprehensive transportation 
              solutions tailored to your specific needs across South Africa
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">24/7 Available</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Fully Licensed</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Professional Drivers</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative group hover:shadow-xl transition-all duration-300 animate-scale-in ${service.popular ? 'ring-2 ring-primary' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-4 bg-gradient-to-r from-primary to-success text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <span className="text-xl font-bold text-primary">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Duration</span>
                      <span className="text-sm font-medium text-foreground">{service.duration}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-success hover:shadow-lg hover:shadow-primary/25">
                    Book {service.title}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Highlight */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Discover South Africa's Wine Country
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience the magic of South Africa's world-renowned wine regions with our expertly 
                guided wine tours. From the rolling hills of Stellenbosch to the dramatic landscapes 
                of Franschhoek, we'll take you on an unforgettable journey through some of the world's 
                most beautiful vineyards.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Premium Wineries</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Wine Tourists</div>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-primary to-success hover:shadow-lg hover:shadow-primary/25">
                Explore Wine Tours
                <Wine className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src={wineTours} 
                  alt="Wine Tours" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-primary-foreground">
                  <h3 className="text-xl font-semibold mb-2">Premium Wine Experiences</h3>
                  <p className="text-sm opacity-90">Taste the finest wines in stunning settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every service comes with these premium features included at no extra cost
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 animate-scale-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-gold/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img 
                src={shuttleFleet} 
                alt="Service Areas" 
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Comprehensive Service Coverage
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We proudly serve the greater Gauteng area and beyond, with specialized routes 
                covering all major destinations, airports, and attractions throughout South Africa.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">OR Tambo International Airport</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Lanseria Airport</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Cape Town Wine Routes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Johannesburg City Center</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Pretoria and Surrounds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Custom Destinations Available</span>
                </div>
              </div>

              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Coverage Areas
                <MapPin className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-success text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Choose from our range of premium services and experience the Green Gables difference today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground">
              <Calendar className="mr-2 w-5 h-5" />
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;