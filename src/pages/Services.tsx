import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Smartphone, 
  Database, 
  Code, 
  TrendingUp, 
  Camera,
  ChevronRight,
  Check
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      id: 1,
      title: "IT Consulting & Digital Transformation",
      description: "We help you plan and implement smart digital strategies that drive efficiency and long-term value.",
      icon: Settings,
      detailedDescription: "Transform your business with strategic technology implementation. Our expert consultants work closely with your team to identify opportunities, streamline processes, and implement cutting-edge solutions that drive measurable results. We don't just recommend technology – we ensure it aligns perfectly with your business goals and Ethiopian market needs.",
      offerings: [
        "Digital Strategy Development",
        "Process Optimization & Automation",
        "Technology Assessment & Planning",
        "Digital Roadmap Creation",
        "Change Management Support",
        "ROI Analysis & Measurement"
      ]
    },
    {
      id: 2,
      title: "Web & Mobile App Development",
      description: "Custom-built apps tailored to your business needs — scalable, fast, and designed with users in mind.",
      icon: Smartphone,
      detailedDescription: "Create powerful, user-friendly applications that work seamlessly across all devices. Our development team specializes in modern frameworks and technologies, ensuring your applications are fast, secure, and built to scale. From concept to deployment, we handle every aspect of the development process.",
      offerings: [
        "React & React Native Development",
        "Progressive Web Apps (PWA)",
        "Responsive Design Implementation",
        "API Development & Integration",
        "Cross-platform Mobile Apps",
        "Performance Optimization"
      ]
    },
    {
      id: 3,
      title: "ERP, CRM, and CMS Solutions",
      description: "Optimize operations and customer relationships with intelligent business systems that fit your workflow.",
      icon: Database,
      detailedDescription: "Streamline your business operations with integrated enterprise solutions designed for Ethiopian businesses. Our ERP, CRM, and CMS systems are built to handle complex workflows while remaining intuitive for your team. We customize every solution to match your specific industry requirements and business processes.",
      offerings: [
        "Custom ERP Development",
        "Customer Relationship Management (CRM)",
        "Content Management Systems",
        "Inventory Management Solutions",
        "Financial Management Tools",
        "Reporting & Analytics Dashboards"
      ]
    },
    {
      id: 4,
      title: "Custom Software Development",
      description: "Have a unique idea? We'll design, build, and launch it — from MVP to market-ready product.",
      icon: Code,
      detailedDescription: "Turn your innovative ideas into reality with custom software solutions. Whether you need an MVP to test your concept or a full-scale enterprise application, our team has the expertise to bring your vision to life. We use agile methodologies to ensure rapid development and continuous improvement.",
      offerings: [
        "MVP Development & Prototyping",
        "Full-Stack Application Development",
        "Scalable Architecture Design",
        "Cloud Infrastructure Setup",
        "Third-party Integrations",
        "Maintenance & Support Services"
      ]
    },
    {
      id: 5,
      title: "Digital Marketing & Branding",
      description: "Grow your visibility with compelling campaigns, data-driven content, and strong brand storytelling.",
      icon: TrendingUp,
      detailedDescription: "Build a powerful digital presence that resonates with Ethiopian audiences. Our marketing team combines creative storytelling with data-driven strategies to help your brand stand out in the digital landscape. From brand identity to performance marketing, we cover all aspects of digital growth.",
      offerings: [
        "Brand Strategy & Identity Design",
        "Social Media Marketing",
        "Search Engine Optimization (SEO)",
        "Digital Advertising Campaigns",
        "Content Creation & Strategy",
        "Analytics & Performance Tracking"
      ]
    },
    {
      id: 6,
      title: "Photo & Video Production",
      description: "From product shoots to corporate videos, our media team helps you stand out visually and emotionally.",
      icon: Camera,
      detailedDescription: "Create compelling visual content that tells your brand story. Our media production team specializes in creating high-quality photography and videography that captures the essence of Ethiopian businesses. We handle everything from concept development to final delivery.",
      offerings: [
        "Product Photography",
        "Corporate Video Production",
        "Brand Content Creation",
        "Event Documentation",
        "Animation & Motion Graphics",
        "Video Editing & Post-Production"
      ]
    }
  ];

  const openServiceDialog = (service: any) => {
    setSelectedService(service);
  };

  const closeServiceDialog = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-gradient py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Our Core Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              End-to-end digital solutions designed to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-poppins group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => openServiceDialog(service)}
                    >
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={closeServiceDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary-gradient rounded-lg flex items-center justify-center">
                    <selectedService.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-poppins text-left">
                      {selectedService.title}
                    </DialogTitle>
                  </div>
                </div>
                <DialogDescription className="text-base leading-relaxed text-left">
                  {selectedService.detailedDescription}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold font-poppins mb-4">Key Offerings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.offerings.map((offering: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{offering}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-primary-gradient hover:opacity-90">
                    Get Started with This Service
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Request a Quote
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Services;