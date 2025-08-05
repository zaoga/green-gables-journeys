import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car,
  Users,
  Star,
  Shield,
  Wifi,
  Snowflake,
  Volume2,
  MapPin,
  CheckCircle,
  ArrowRight,
  Fuel,
  Calendar
} from "lucide-react";
import shuttleFleet from "@/assets/shuttle-fleet.jpg";
import driverTeam from "@/assets/driver-team.jpg";

const Fleet = () => {
  const vehicles = [
    {
      type: "Luxury Sedan",
      image: shuttleFleet,
      capacity: "1-4 passengers",
      description: "Perfect for executive transport and small group transfers",
      features: [
        "Premium leather seats",
        "Climate control",
        "WiFi connectivity",
        "Phone charging ports",
        "Professional chauffeur",
        "Complimentary bottled water"
      ],
      amenities: [
        { icon: <Users className="w-4 h-4" />, label: "4 Passengers" },
        { icon: <Shield className="w-4 h-4" />, label: "Fully Insured" },
        { icon: <Snowflake className="w-4 h-4" />, label: "AC" },
        { icon: <Wifi className="w-4 h-4" />, label: "WiFi" }
      ],
      popular: true,
      price: "From R450"
    },
    {
      type: "Executive SUV",
      image: driverTeam,
      capacity: "1-6 passengers",
      description: "Spacious and comfortable for family trips and group outings",
      features: [
        "Premium interior",
        "Extra luggage space",
        "Entertainment system",
        "Privacy glass",
        "Professional driver",
        "Refreshment service"
      ],
      amenities: [
        { icon: <Users className="w-4 h-4" />, label: "6 Passengers" },
        { icon: <Shield className="w-4 h-4" />, label: "Fully Insured" },
        { icon: <Snowflake className="w-4 h-4" />, label: "AC" },
        { icon: <Volume2 className="w-4 h-4" />, label: "Audio System" }
      ],
      popular: false,
      price: "From R650"
    },
    {
      type: "Luxury Minibus",
      image: shuttleFleet,
      capacity: "7-14 passengers",
      description: "Ideal for larger groups, corporate events, and tour groups",
      features: [
        "Comfortable seating",
        "Large windows for sightseeing",
        "PA system",
        "Storage compartments",
        "Tour guide capability",
        "Group entertainment"
      ],
      amenities: [
        { icon: <Users className="w-4 h-4" />, label: "14 Passengers" },
        { icon: <Shield className="w-4 h-4" />, label: "Fully Insured" },
        { icon: <Snowflake className="w-4 h-4" />, label: "AC" },
        { icon: <MapPin className="w-4 h-4" />, label: "GPS" }
      ],
      popular: false,
      price: "From R950"
    }
  ];

  const fleetFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "All vehicles undergo regular safety inspections and maintenance",
      stats: "100% Safety Compliance"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Comfort",
      description: "Luxury interiors and amenities for a comfortable journey",
      stats: "5-Star Comfort Rating"
    },
    {
      icon: <Fuel className="w-8 h-8" />,
      title: "Eco-Friendly",
      description: "Modern, fuel-efficient vehicles with reduced emissions",
      stats: "25% Lower Emissions"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Regular Maintenance",
      description: "Professionally maintained vehicles for reliability",
      stats: "Weekly Service Checks"
    }
  ];

  const driverStandards = [
    "Thorough background checks",
    "Professional driving certification",
    "Local area expertise",
    "Customer service training",
    "Regular performance reviews",
    "Continuous safety education"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Premium Fleet
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Modern, air-conditioned vehicles meticulously maintained to ensure 
              your comfort and safety on every journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">Fully Licensed</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">Comprehensive Insurance</Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">GPS Tracked</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className={`relative group hover:shadow-xl transition-all duration-300 animate-scale-in ${vehicle.popular ? 'ring-2 ring-primary' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {vehicle.popular && (
                  <Badge className="absolute -top-3 left-4 bg-gradient-to-r from-primary to-success text-primary-foreground z-10">
                    Most Popular
                  </Badge>
                )}
                
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-primary-foreground">
                    <h3 className="text-xl font-semibold">{vehicle.type}</h3>
                    <p className="text-sm opacity-90">{vehicle.capacity}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gold text-gold-foreground">{vehicle.price}</Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">{vehicle.type}</CardTitle>
                  <p className="text-muted-foreground">{vehicle.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Amenities */}
                  <div className="grid grid-cols-2 gap-3">
                    {vehicle.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="text-primary">{amenity.icon}</div>
                        <span className="text-muted-foreground">{amenity.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-3">Premium Features</h4>
                    {vehicle.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-success hover:shadow-lg hover:shadow-primary/25">
                    Book {vehicle.type}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Standards */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Fleet Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every vehicle in our fleet meets the highest standards of safety, comfort, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleetFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 animate-scale-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                <div className="text-primary font-semibold text-sm">{feature.stats}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Standards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Professional Drivers
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our experienced and friendly drivers undergo thorough background checks and 
                comprehensive training to ensure the highest level of service and expertise 
                on every journey.
              </p>

              <div className="space-y-4 mb-8">
                {driverStandards.map((standard, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{standard}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years Average Experience</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Background Verified</div>
                </div>
              </div>

              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Meet Our Team
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src={driverTeam} 
                  alt="Professional Drivers" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-primary-foreground">
                  <h3 className="text-xl font-semibold mb-2">Experienced Professionals</h3>
                  <p className="text-sm opacity-90">Your safety and comfort is our priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Maintenance */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Maintenance Excellence
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We take vehicle maintenance seriously. Our rigorous maintenance schedule ensures 
              that every vehicle is in perfect condition for your journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 animate-scale-in">
                <div className="text-3xl font-bold text-primary mb-2">Weekly</div>
                <div className="text-sm text-muted-foreground mb-4">Service Inspections</div>
                <p className="text-xs text-muted-foreground">Comprehensive checks of all vehicle systems</p>
              </Card>

              <Card className="text-center p-6 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-primary mb-2">Monthly</div>
                <div className="text-sm text-muted-foreground mb-4">Deep Maintenance</div>
                <p className="text-xs text-muted-foreground">Detailed mechanical and safety inspections</p>
              </Card>

              <Card className="text-center p-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground mb-4">Support Available</div>
                <p className="text-xs text-muted-foreground">Emergency roadside assistance when needed</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-success text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Our Premium Fleet
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Choose the perfect vehicle for your journey and experience the difference 
            that quality and professionalism make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground">
              <Calendar className="mr-2 w-5 h-5" />
              Book Your Vehicle
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fleet;