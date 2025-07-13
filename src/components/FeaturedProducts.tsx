import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Mela360°",
      subtitle: "Smart School Management System",
      description: "Simplify school operations with a platform designed for Ethiopian educators. Handle grading, fees, communication, and more — all in one place.",
      industry: "Education",
      features: ["Student Management", "Fee Tracking", "Parent Communication", "Offline Support"],
      gradient: "bg-primary-gradient",
      textColor: "text-primary-foreground"
    },
    {
      name: "Merkato",
      subtitle: "Multi-Vendor eCommerce Platform",
      description: "Create your own digital marketplace with Merkato. Vendors can list, sell, and manage their products in a system inspired by Ethiopia's iconic open-air markets.",
      industry: "eCommerce",
      features: ["Multi-Vendor", "Commission Tracking", "Local Payments", "Mobile Ready"],
      gradient: "bg-accent-gradient",
      textColor: "text-accent-foreground"
    },
    {
      name: "Brana",
      subtitle: "Audiobook & Podcast Platform",
      description: "Amplify African voices through stories and culture. Brana lets users stream curated content from Ethiopia and across the continent.",
      industry: "Media",
      features: ["African Content", "Offline Streaming", "Multilingual", "Cultural Focus"],
      gradient: "bg-primary-gradient",
      textColor: "text-primary-foreground"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-foreground mb-4">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready-to-launch digital platforms that solve real Ethiopian challenges
          </p>
          
          {/* Filter Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              All Products
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Education
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              eCommerce
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Media
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              FinTech
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <div className={`h-2 ${product.gradient}`}></div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.industry}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold font-poppins text-foreground mb-2">
                  {product.name}
                </CardTitle>
                <p className="text-primary font-medium">
                  {product.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Key Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary-gradient hover:opacity-90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <Link to="/products">
              View All 17+ Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;