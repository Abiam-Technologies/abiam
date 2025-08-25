import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Code, Database, Lightbulb, TrendingUp, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "IT Consulting & Digital Transformation",
      description: "We help you plan and implement smart digital strategies that drive efficiency and long-term value.",
      features: ["Digital Strategy", "Process Optimization", "Technology Assessment"]
    },
    {
      icon: Code,
      title: "Web & Mobile App Development",
      description: "Custom-built apps tailored to your business needs scalable, fast, and designed with users in mind.",
      features: ["React/React Native", "Responsive Design", "API Integration"]
    },
    {
      icon: Database,
      title: "ERP, CRM, and CMS Solutions",
      description: "Optimize operations and customer relationships with intelligent business systems that fit your workflow.",
      features: ["Custom ERP", "CRM Systems", "Content Management"]
    },
    {
      icon: Lightbulb,
      title: "Custom Software Development",
      description: "Have a unique idea? We'll design, build, and launch it from MVP to market-ready product.",
      features: ["MVP Development", "Scalable Architecture", "Full-Stack Solutions"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Branding",
      description: "Grow your visibility with compelling campaigns, data-driven content, and strong brand storytelling.",
      features: ["Brand Strategy", "Digital Campaigns", "Content Creation"]
    },
    {
      icon: Camera,
      title: "Photo & Video Production",
      description: "From product shoots to corporate videos, our media team helps you stand out visually and emotionally.",
      features: ["Product Photography", "Corporate Videos", "Brand Content"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Our Core <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end digital solutions designed to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-gradient"></div>
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-primary-gradient mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground font-poppins">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-center">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Key Offerings:</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-4">
              Ready to build something amazing?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's turn your idea into an impact-driven product built for Ethiopia, by Ethiopians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <Button size="lg" className="bg-primary-gradient hover:opacity-90 transition-opacity">
                  💬 Book a Free Consultation
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  📨 Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;