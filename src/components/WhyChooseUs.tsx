import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Package, HeadphonesIcon } from "lucide-react";

const WhyChooseUs = () => {
  const pillars = [
    {
      icon: MapPin,
      title: "Built for Ethiopia",
      description: "We design every solution with local realities in mind — from offline support to multilingual systems and local payment integration.",
      gradient: "bg-accent-gradient"
    },
    {
      icon: Users,
      title: "End-to-End Expertise",
      description: "From strategy and UX to development and deployment, our team brings full-stack capability and cross-industry experience.",
      gradient: "bg-primary-gradient"
    },
    {
      icon: Package,
      title: "Ready-to-Launch Products",
      description: "Skip months of development. Launch with one of our tested and trusted digital platforms, customized to fit your brand.",
      gradient: "bg-accent-gradient"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support, Always",
      description: "Our clients don't wait. We offer real-time support, ongoing updates, and training so you're never left behind.",
      gradient: "bg-primary-gradient"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Why Choose <span className="text-primary">Abiam</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another tech company. We're Ethiopia's digital transformation partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full ${pillar.gradient} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground font-poppins">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;