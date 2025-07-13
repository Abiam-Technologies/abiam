import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact-us" },
  ];

  const products = [
    "Mela360° - School Management",
    "Merkato - eCommerce Platform",
    "Brana - Audiobook Platform",
    "Bet-ET - Sports Betting",
    "PaymentHub - Payment Gateway",
    "View All Products"
  ];

  const services = [
    "Web & Mobile Development",
    "IT Consulting",
    "ERP/CRM Solutions",
    "Digital Marketing",
    "Custom Software",
    "Media Production"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold font-poppins">
              Abiam<span className="text-accent">Technologies</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Building the future of Ethiopia digitally with innovative, locally-relevant digital platforms.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Hayahulet, 3rd Floor, 24 Building, Addis Ababa</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>+251 941 91 9514</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@abiam.net</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Our Products</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <Link 
                    to="/products"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Stay Updated</h3>
            <p className="text-primary-foreground/80 text-sm">
              Get the latest updates on Ethiopian tech innovation and our new product launches.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-sm">
            © 2024 Abiam Technologies. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;