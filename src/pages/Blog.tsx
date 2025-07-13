import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  // Placeholder blog posts - will be populated later
  const blogPosts = [
    {
      id: 1,
      title: "How to Build Scalable Platforms for Ethiopia",
      excerpt: "Discover the key principles and technologies needed to create digital platforms that can grow with Ethiopia's expanding digital economy.",
      category: "Technology",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "📱",
      featured: true
    },
    {
      id: 2,
      title: "Choosing the Right ERP for Your Business",
      excerpt: "A comprehensive guide to selecting enterprise resource planning solutions that fit your Ethiopian business needs and budget.",
      category: "Business",
      date: "2024-01-10",
      readTime: "8 min read",
      image: "🏢",
      featured: false
    },
    {
      id: 3,
      title: "Digital Transformation in Ethiopian Education",
      excerpt: "Exploring how technology is revolutionizing education across Ethiopia and what schools need to know for successful digital adoption.",
      category: "Education",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "🎓",
      featured: true
    }
  ];

  const categories = ["All", "Technology", "Business", "Education", "Innovation", "Digital Marketing"];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-gradient py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Insights & Stories
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Discover the latest trends, insights, and success stories from the Ethiopian tech ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Coming Soon Message */}
          <div className="text-center py-20">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-3xl font-bold font-poppins mb-4">
                Content Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're working on bringing you valuable insights, tutorials, and stories about technology, 
                innovation, and digital transformation in Ethiopia. Stay tuned for our first articles!
              </p>
              
              {/* Newsletter Signup */}
              <Card className="max-w-md mx-auto p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold font-poppins mb-3">
                    Get notified when we publish
                  </h3>
                  <div className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Enter your email"
                    />
                    <Button className="w-full bg-primary-gradient hover:opacity-90">
                      Subscribe to Updates
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Preview of Future Blog Posts */}
          <div className="border-t pt-12">
            <h3 className="text-2xl font-bold font-poppins mb-8 text-center">
              What to Expect
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-75">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-3xl">{post.image}</div>
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <CardTitle className="font-poppins group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      disabled
                    >
                      Coming Soon
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;