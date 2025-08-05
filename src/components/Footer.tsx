import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gold/40 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gold rounded-full animate-glow"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Green Gables Shuttles</h3>
                <p className="text-sm text-primary-foreground/80">Your Journey, Our Priority</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              Providing exceptional shuttle services and tour experiences across South Africa with a focus on reliability, safety, and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 animate-fade-in">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Fleet", path: "/fleet" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6 animate-fade-in">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Airport Transfers",
                "Wine Tours",
                "Dinner Transfers",
                "Shuttle Services",
                "Tour Packages",
                "Corporate Events"
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center space-x-2 group cursor-pointer">
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-gold" />
                <div>
                  <p className="text-primary-foreground/90">9 Swart Drive</p>
                  <p className="text-primary-foreground/90">President Park, Midrand</p>
                  <p className="text-primary-foreground/90">Gauteng, South Africa</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <div className="space-y-1">
                  <p className="text-primary-foreground/90">074 723 1048</p>
                  <p className="text-primary-foreground/90">076 561 9752</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <p className="text-primary-foreground/90">greengableshuttles@gmail.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gold" />
                <p className="text-primary-foreground/90">24/7 Service Available</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4 border-t border-primary-foreground/20">
              <h5 className="font-medium mb-3">Stay Updated</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="icon" className="bg-gold hover:bg-gold/90">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/70 text-sm">
            © 2025 Green Gables Shuttles & Tours. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Terms of Service
            </button>
            <button className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;