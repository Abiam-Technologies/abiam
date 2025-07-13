import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, ArrowRight, Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedUseCase, setSelectedUseCase] = useState("all");

  const products = [
    {
      id: 1,
      name: "Mela360°",
      subtitle: "School Management System",
      emoji: "🏫",
      purpose: "Streamlines school operations across Ethiopia.",
      industry: "Education",
      useCase: "Management",
      features: [
        "Student enrollment & grading",
        "Staff & timetable management", 
        "Financial tracking (fees, payroll)",
        "Parent communication",
        "Local payment integrations (Chapa, Telebirr)",
        "Offline sync & multilingual support"
      ],
      targetUsers: "Schools (private & public), school owners, admins",
      gradient: "bg-primary-gradient"
    },
    {
      id: 2,
      name: "Brana",
      subtitle: "Audiobook & Podcast Platform",
      emoji: "📚",
      purpose: "Amplifies African voices through digital storytelling.",
      industry: "Media",
      useCase: "Content",
      features: [
        "On-demand audiobooks & podcast streaming",
        "Curated Ethiopian/African authors",
        "Mobile-first, offline-friendly",
        "Multilingual content"
      ],
      targetUsers: "Readers, cultural organizations, education platforms",
      gradient: "bg-accent-gradient"
    },
    {
      id: 3,
      name: "Merkato",
      subtitle: "Multi-Vendor eCommerce Platform",
      emoji: "🛒",
      purpose: "Digital marketplace inspired by Ethiopia's Merkato.",
      industry: "eCommerce",
      useCase: "Marketplace",
      features: [
        "Multi-vendor registration and dashboards",
        "Product listing & cart system",
        "Commission tracking",
        "Payment integration",
        "Mobile-responsive UI"
      ],
      targetUsers: "Retailers, wholesalers, entrepreneurs, SMEs",
      gradient: "bg-primary-gradient"
    },
    {
      id: 4,
      name: "Bet-ET",
      subtitle: "Sports Betting Platform",
      emoji: "🧾",
      purpose: "Launch-ready Ethiopian betting system.",
      industry: "Gaming",
      useCase: "Betting",
      features: [
        "Live & pre-match betting",
        "Multi-type bets (single, multi)",
        "Admin control for games, payouts",
        "Referral earning tools",
        "Telebirr, Chapa integration"
      ],
      targetUsers: "Betting entrepreneurs, entertainment companies",
      gradient: "bg-accent-gradient"
    },
    {
      id: 5,
      name: "Hiber",
      subtitle: "Network Marketing Platform",
      emoji: "🤝",
      purpose: "Supports MLM & affiliate business models.",
      industry: "Marketing",
      useCase: "Network Marketing",
      features: [
        "Matrix plan logic & commission automation",
        "Referral systems",
        "Wallet management",
        "Secure KYC & transaction history",
        "Multi-language & mobile-ready"
      ],
      targetUsers: "Direct sellers, digital marketers, MLM startups",
      gradient: "bg-primary-gradient"
    },
    {
      id: 6,
      name: "PaymentHub",
      subtitle: "Online Payment Gateway",
      emoji: "🏦",
      purpose: "Centralized gateway for digital payments.",
      industry: "FinTech",
      useCase: "Payments",
      features: [
        "Accepts 25+ payment methods (mobile money, crypto, cards)",
        "Admin dashboard",
        "API integration for third-party platforms",
        "Real-time transaction tracking"
      ],
      targetUsers: "eCommerce, SaaS, fintech platforms",
      gradient: "bg-accent-gradient"
    },
    {
      id: 7,
      name: "TableTrack",
      subtitle: "Restaurant Management System",
      emoji: "🍽️",
      purpose: "Digitizes restaurant operations.",
      industry: "Hospitality",
      useCase: "Management",
      features: [
        "Menu control, order processing",
        "POS system & payment gateways",
        "Staff & kitchen coordination",
        "Customer management portal",
        "Analytics dashboard"
      ],
      targetUsers: "Restaurants, cafés, food chains",
      gradient: "bg-primary-gradient"
    },
    {
      id: 8,
      name: "iMentor",
      subtitle: "Tutor Hiring Platform",
      emoji: "🎓",
      purpose: "Connects students with qualified tutors.",
      industry: "Education",
      useCase: "Marketplace",
      features: [
        "Profile listing & verification",
        "Secure payments & messaging",
        "Tutor reviews & filters",
        "Search by subject, region, or experience"
      ],
      targetUsers: "Schools, tutoring centers, parents/students",
      gradient: "bg-accent-gradient"
    },
    {
      id: 9,
      name: "Mama's Kitchen",
      subtitle: "Home-Cooked Food Delivery",
      emoji: "👩‍🍳",
      purpose: "Empowers home chefs to become food entrepreneurs.",
      industry: "Food Delivery",
      useCase: "Delivery",
      features: [
        "Menu listings & profile promotion",
        "Order management",
        "Secure payments & delivery tracking",
        "Authentic Ethiopian cuisine focus"
      ],
      targetUsers: "Home cooks, food startups, local customers",
      gradient: "bg-primary-gradient"
    },
    {
      id: 10,
      name: "ET-Bus",
      subtitle: "Bus Ticket Booking System",
      emoji: "🚌",
      purpose: "Simplifies bus ticketing & travel.",
      industry: "Transport",
      useCase: "Booking",
      features: [
        "Real-time seat search & booking",
        "Agent system & mobile interface",
        "Automated ticket generation",
        "Payment integrations"
      ],
      targetUsers: "Intercity transport companies, bus agents",
      gradient: "bg-accent-gradient"
    },
    {
      id: 11,
      name: "HABESHA-RIDE",
      subtitle: "Taxi & Courier Management",
      emoji: "🚕",
      purpose: "Full ride & delivery solution.",
      industry: "Transport",
      useCase: "Ride Sharing",
      features: [
        "Driver tracking & customer app",
        "Ride, goods delivery, and vehicle rental modules",
        "Loyalty program support",
        "Admin analytics & safety features"
      ],
      targetUsers: "Taxi companies, cooperatives, logistics startups",
      gradient: "bg-primary-gradient"
    },
    {
      id: 12,
      name: "iStock",
      subtitle: "Inventory Management App",
      emoji: "🏢",
      purpose: "Stock tracking for small/medium businesses.",
      industry: "Business",
      useCase: "Management",
      features: [
        "Real-time inventory updates",
        "Warehouse & product flow tracking",
        "Supplier database",
        "Android/iOS support, works offline"
      ],
      targetUsers: "Retailers, wholesalers, agribusinesses",
      gradient: "bg-accent-gradient"
    },
    {
      id: 13,
      name: "Church-ET",
      subtitle: "Church Management System",
      emoji: "⛪",
      purpose: "Digitally supports church administration.",
      industry: "Religion",
      useCase: "Management",
      features: [
        "Online tithing & donation tools",
        "Sermon archiving",
        "Church CRM & member directory",
        "Livestream integration"
      ],
      targetUsers: "Churches, ministries, religious organizations",
      gradient: "bg-primary-gradient"
    },
    {
      id: 14,
      name: "LAKI",
      subtitle: "Courier & Logistics Tracking",
      emoji: "🚚",
      purpose: "Parcel tracking & delivery system.",
      industry: "Logistics",
      useCase: "Tracking",
      features: [
        "Real-time delivery status",
        "Branch dashboards",
        "Staff coordination",
        "Unlimited users & parcel management"
      ],
      targetUsers: "Courier services, logistics firms, eCommerce enablers",
      gradient: "bg-accent-gradient"
    },
    {
      id: 15,
      name: "ParkSpot",
      subtitle: "Parking Spot Booking App",
      emoji: "📍",
      purpose: "Smart navigation to parking areas.",
      industry: "Transport",
      useCase: "Booking",
      features: [
        "Real-time availability display",
        "Pricing & booking options",
        "EV charging & 24/7 security filters",
        "Admin dashboard for lot owners"
      ],
      targetUsers: "Malls, event centers, urban lot owners",
      gradient: "bg-primary-gradient"
    },
    {
      id: 16,
      name: "Social-Merkato",
      subtitle: "Digital Asset Marketplace",
      emoji: "📱",
      purpose: "Secure buying/selling of social media accounts.",
      industry: "Digital Assets",
      useCase: "Marketplace",
      features: [
        "Account verification system",
        "Buyer/seller bidding",
        "Secure negotiation platform",
        "Transfer tracking"
      ],
      targetUsers: "Digital marketers, influencers, agencies",
      gradient: "bg-accent-gradient"
    },
    {
      id: 17,
      name: "iDentSoft",
      subtitle: "Dental & Clinic Management System",
      emoji: "🏥",
      purpose: "Digital admin for healthcare providers.",
      industry: "Healthcare",
      useCase: "Management",
      features: [
        "Appointment scheduling",
        "Electronic medical records (EMR)",
        "Billing & prescriptions",
        "Lab & test integration"
      ],
      targetUsers: "Clinics, dental offices, healthcare networks",
      gradient: "bg-primary-gradient"
    }
  ];

  const industries = ["all", ...new Set(products.map(p => p.industry))];
  const useCases = ["all", ...new Set(products.map(p => p.useCase))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchTerm === "" || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesIndustry = selectedIndustry === "all" || product.industry === selectedIndustry;
      const matchesUseCase = selectedUseCase === "all" || product.useCase === selectedUseCase;
      
      return matchesSearch && matchesIndustry && matchesUseCase;
    });
  }, [searchTerm, selectedIndustry, selectedUseCase, products]);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4">
              Our Digital <span className="text-accent">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              17+ ready-to-launch platforms designed for Ethiopian businesses and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products, features, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>
                      {industry === "all" ? "All Industries" : industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedUseCase} onValueChange={setSelectedUseCase}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Use Case" />
                </SelectTrigger>
                <SelectContent>
                  {useCases.map(useCase => (
                    <SelectItem key={useCase} value={useCase}>
                      {useCase === "all" ? "All Use Cases" : useCase}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 relative overflow-hidden"
              >
                <div className={`h-2 ${product.gradient}`}></div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.industry}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {product.useCase}
                      </Badge>
                    </div>
                    <span className="text-2xl">{product.emoji}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold font-poppins text-foreground mb-2">
                    {product.name}
                  </CardTitle>
                  <p className="text-primary font-medium mb-2">
                    {product.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {product.purpose}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">Key Features:</p>
                    <ul className="space-y-1">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-sm text-primary font-medium">
                          +{product.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Target Users:</p>
                    <p className="text-sm text-muted-foreground">
                      {product.targetUsers}
                    </p>
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedIndustry("all");
                  setSelectedUseCase("all");
                }}
                variant="outline"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8 shadow-elegant text-center">
            <h3 className="text-3xl font-bold font-poppins text-foreground mb-4">
              Ready to Launch Your Digital Platform?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Choose from our ready-made solutions or let us build something custom for your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-gradient hover:opacity-90 transition-opacity">
                🚀 Book a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                📞 Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;