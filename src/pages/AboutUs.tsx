import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Globe, 
  Package, 
  Headphones, 
  DollarSign,
  CheckCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const whyChoosePoints = [
    {
      icon: Wrench,
      title: "🔧 Built for Ethiopia",
      description: "We design every solution with local realities in mind — from offline support to multilingual systems and local payment integration."
    },
    {
      icon: Globe,
      title: "🌍 End-to-End Expertise",
      description: "From strategy and UX to development and deployment, our team brings full-stack capability and cross-industry experience."
    },
    {
      icon: Package,
      title: "💼 Ready-to-Launch Products",
      description: "Skip months of development. Launch with one of our tested and trusted digital platforms, customized to fit your brand."
    },
    {
      icon: Headphones,
      title: "🤝 24/7 Support, Always",
      description: "Our clients don't wait. We offer real-time support, ongoing updates, and training so you're never left behind."
    },
    {
      icon: DollarSign,
      title: "💰 Affordable Pricing",
      description: "We offer competitive pricing without compromising on quality. Our goal is to provide cost-effective solutions that add real value to your business."
    }
  ];

  const trustedCompanies = [
    { name: "Ethiopian Airlines", logo: "🛫" },
    { name: "Commercial Bank of Ethiopia", logo: "🏦" },
    { name: "Ethio Telecom", logo: "📱" },
    { name: "Ethiopian Electric Power", logo: "⚡" },
    { name: "Awash Bank", logo: "💳" },
    { name: "Dashen Bank", logo: "🏛️" },
    { name: "Ministry of Education", logo: "🎓" },
    { name: "Addis Ababa University", logo: "🏫" }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-gradient py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              WHO WE ARE
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Building Ethiopia's digital future, one innovative solution at a time
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Abiam Technologies is a technology company committed to delivering world-class digital tools built with local context in mind. 
              From education and healthcare to transport and ecommerce, we aim to empower businesses, institutions, and individuals through 
              technology that is innovative, scalable, and impactful.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold font-poppins text-primary">Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver 100% client satisfaction by providing versatile, high-quality, and cost-effective web, mobile, 
                  and digital marketing solutions that drive business growth. We aim to empower startups, enterprises, and 
                  businesses to make radical changes through technology.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold font-poppins text-primary">Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading end-to-end technology solution provider in Ethiopia, leaving a positive impact on 
                  people's lives through our innovative and impactful digital solutions. We strive to contribute to a 
                  fully digital Ethiopia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Abiam */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              🎯 Why Choose Abiam
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another tech company — we're your strategic partner in digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold font-poppins mb-3 group-hover:text-primary transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              We are trusted by
            </h2>
            <p className="text-lg text-muted-foreground">
              Leading Ethiopian organizations choose Abiam for their digital transformation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustedCompanies.map((company, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 text-center">
                  <div className="text-4xl mb-3">{company.logo}</div>
                  <h3 className="font-semibold text-sm text-muted-foreground">
                    {company.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;