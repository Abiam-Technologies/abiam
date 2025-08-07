import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    helpType: "",
    fullName: "",
    role: "",
    company: "",
    phone: "",
    email: "",
    services: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.role || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('contacts')
        .insert({
          help_type: formData.helpType,
          full_name: formData.fullName,
          role: formData.role,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          services: formData.services,
          message: formData.message
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        helpType: "",
        fullName: "",
        role: "",
        company: "",
        phone: "",
        email: "",
        services: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+251 941 91 9514", "+251 932 99 4194"]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@abiam.net (Sales)", "support@abiam.net (Support)"]
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Hayahulet, 3rd Floor, 24 Building", "Addis Ababa, Ethiopia"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-gradient py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Tell us about yourself and how we can help you succeed
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-2xl font-poppins">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* How can we help */}
                  <div className="space-y-2">
                    <Label htmlFor="helpType">How can we help you?</Label>
                    <Select value={formData.helpType} onValueChange={(value) => handleInputChange("helpType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Request a Free Demo</SelectItem>
                        <SelectItem value="quote">Get a Quote for Pricing</SelectItem>
                        <SelectItem value="feedback">Provide Feedback</SelectItem>
                        <SelectItem value="question">Ask Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Role */}
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role *</Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => handleInputChange("role", e.target.value)}
                        placeholder="e.g., Manager"
                        required
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+251 911 123 456"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-2">
                    <Label htmlFor="services">Services of Interest</Label>
                    <Select value={formData.services} onValueChange={(value) => handleInputChange("services", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select services you're interested in" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consulting">IT Consulting & Digital Transformation</SelectItem>
                        <SelectItem value="development">Web & Mobile App Development</SelectItem>
                        <SelectItem value="erp">ERP, CRM, and CMS Solutions</SelectItem>
                        <SelectItem value="custom">Custom Software Development</SelectItem>
                        <SelectItem value="marketing">Digital Marketing & Branding</SelectItem>
                        <SelectItem value="media">Photo & Video Production</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your project or requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary-gradient hover:opacity-90">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-poppins mb-6">Other Ways to Reach Us</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <Card key={index} className="p-6">
                        <CardContent className="p-0">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold font-poppins mb-2">{info.title}</h3>
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-muted-foreground text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Instant Messaging */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold font-poppins mb-4">Instant Messaging</h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start hover:bg-green-50 hover:border-green-200"
                      onClick={() => window.open("https://wa.me/251941919514", "_blank")}
                    >
                      <MessageCircle className="mr-2 h-4 w-4 text-green-600" />
                      Chat on WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start hover:bg-blue-50 hover:border-blue-200"
                      onClick={() => window.open("https://t.me/abiamtech", "_blank")}
                    >
                      <Send className="mr-2 h-4 w-4 text-blue-600" />
                      Message us on Telegram
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;