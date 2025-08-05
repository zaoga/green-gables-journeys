import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  Star, 
  Award,
  Target,
  Eye,
  CheckCircle,
  Quote
} from "lucide-react";
import driverTeam from "@/assets/driver-team.jpg";
import shuttleFleet from "@/assets/shuttle-fleet.jpg";

const About = () => {
  const stats = [
    { number: "1000+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "5", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Service Available", icon: <Shield className="w-6 h-6" /> },
    { number: "5★", label: "Average Rating", icon: <Star className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: "No Surprises",
      description: "Clear communication and transparency in all our services. You know exactly what to expect every step of the way.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Safety and Responsibility",
      description: "Strict safety standards and environmentally responsible practices ensure your wellbeing and our planet's future.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Complete Transparency",
      description: "Fair pricing and clear policies with no hidden fees. What you see is what you get, always.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Outstanding Service",
      description: "Exceptional reliability, professional drivers, and premium in-vehicle amenities that exceed expectations.",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Exceeding Expectations",
      description: "We don't just meet your needs – we anticipate them and deliver more than you expect, every time.",
      icon: <Award className="w-8 h-8" />
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
              About Green Gables
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A reputable transportation company dedicated to providing exceptional shuttle services 
              and tour experiences across South Africa
            </p>
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
              <Quote className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">Your Journey, Our Priority</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 animate-scale-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-success rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Provide safe, dependable, and environmentally responsible transportation services, 
                  ensuring seamless travel experiences that exceed our customers' expectations while 
                  maintaining the highest standards of professionalism and reliability.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="w-8 h-8 text-gold" />
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Become the go-to transport company in South Africa, exceeding expectations through 
                  professionalism, reliability, and unwavering customer satisfaction while setting 
                  the standard for excellence in the transportation industry.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src={driverTeam} 
                  alt="Professional Team" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-primary-foreground">
                  <h3 className="text-xl font-semibold mb-2">Professional Excellence</h3>
                  <p className="text-sm opacity-90">Our experienced team is dedicated to your journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape every interaction we have
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.slice(0, 3).map((value, index) => (
              <Card key={index} className="p-8 animate-scale-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {values.slice(3).map((value, index) => (
              <Card key={index + 3} className="p-8 animate-scale-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-gold/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img 
                src={shuttleFleet} 
                alt="Green Gables Fleet" 
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why We Started Green Gables
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Green Gables Shuttles & Tours was born from a simple belief: that every journey 
                  should be more than just transportation – it should be an experience that adds 
                  value to your day and memories to your life.
                </p>
                <p>
                  We recognized that South Africa's incredible beauty and diverse destinations 
                  deserved a transportation service that matched their quality. That's why we 
                  committed to providing not just rides, but carefully crafted experiences that 
                  showcase the best of our beautiful country.
                </p>
                <p>
                  Today, we're proud to serve thousands of satisfied customers who trust us with 
                  their most important journeys – from airport transfers that start vacations 
                  right, to wine tours that create lifelong memories.
                </p>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-gradient-to-r from-primary to-success hover:shadow-lg hover:shadow-primary/25">
                  Start Your Journey With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-success text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Green Gables Difference
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our family of satisfied customers and discover why we're South Africa's 
            trusted transportation partner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground">
              Book Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;