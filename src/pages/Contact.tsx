import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Navigation as NavigationIcon,
  Calendar,
  Users
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: [
        "074 723 1048",
        "076 561 9752"
      ],
      description: "Available 24/7 for bookings and inquiries"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: [
        "greengableshuttles@gmail.com"
      ],
      description: "We respond within 2 hours during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Location",
      details: [
        "9 Swart Drive",
        "President Park, Midrand",
        "Gauteng, South Africa"
      ],
      description: "Visit us for personalized service"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Operating Hours",
      details: [
        "24/7 Service Available",
        "Office: Mon-Fri 8:00-17:00",
        "Weekends: On Call"
      ],
      description: "Always here when you need us"
    }
  ];

  const services = [
    { name: "Airport Transfer", icon: "✈️" },
    { name: "Wine Tour", icon: "🍷" },
    { name: "Corporate Shuttle", icon: "🏢" },
    { name: "Tour Package", icon: "🗺️" },
    { name: "Dinner Transfer", icon: "🍽️" },
    { name: "Custom Service", icon: "⭐" }
  ];

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 24 hours in advance, though we can often accommodate same-day requests subject to availability."
    },
    {
      question: "Do you provide child seats?",
      answer: "Yes, we provide complimentary child seats and booster seats. Please specify ages when booking."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Free cancellation up to 24 hours before your scheduled trip. Later cancellations may incur charges."
    },
    {
      question: "Are your vehicles wheelchair accessible?",
      answer: "Yes, we have wheelchair-accessible vehicles in our fleet. Please specify this requirement when booking."
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to book your journey or have questions? We're here to help you 
              every step of the way with personalized service and expert advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm font-medium">Quick Response</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm font-medium">Free Quotes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="shadow-lg border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-3">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <span>Send Us a Message</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 2 hours during business hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="mt-2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</Label>
                      <Input id="phone" placeholder="+27 XX XXX XXXX" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-sm font-medium text-foreground">Service Needed</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                          <span className="text-lg">{service.icon}</span>
                          <span className="text-sm text-foreground">{service.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-sm font-medium text-foreground">Preferred Date</Label>
                      <Input id="date" type="date" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="passengers" className="text-sm font-medium text-foreground">Number of Passengers</Label>
                      <Input id="passengers" type="number" min="1" max="20" placeholder="1" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your journey requirements, pickup/drop-off locations, and any special requests..."
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-success hover:shadow-lg hover:shadow-primary/25">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get in touch with us through any of these convenient methods. 
                  We're always ready to assist you with your transportation needs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-gold/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-foreground font-medium">{detail}</p>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <NavigationIcon className="mr-2 w-5 h-5" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Find Our Office
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Midrand, we're easily accessible and ready 
              to serve you with personalized transportation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 animate-slide-in-left">
              <Card className="overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.229382625501!2d28.11901391502916!3d-25.96093498354621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956f0f1f251c2d%3A0x8c6b0a8d3b1c6a7!2s9%20Swart%20Dr%2C%20President%20Park%2C%20Midrand%2C%201685%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1678886789012!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Card>
            </div>

            <div className="animate-slide-in-right">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">9 Swart Drive</p>
                      <p className="text-muted-foreground">President Park, Midrand</p>
                      <p className="text-muted-foreground">Gauteng, South Africa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Office Hours</p>
                      <p className="text-muted-foreground">Mon-Fri: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-primary to-success">
                      <Calendar className="mr-2 w-4 h-4" />
                      Schedule a Visit
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 animate-scale-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="mr-2 w-4 h-4" />
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-success text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today and experience the Green Gables difference. 
            Professional, reliable, and always putting your journey first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground">
              <Phone className="mr-2 w-5 h-5" />
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Mail className="mr-2 w-5 h-5" />
              Send Email
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;