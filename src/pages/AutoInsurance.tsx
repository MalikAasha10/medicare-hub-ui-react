import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, DollarSign, Users, Clock } from "lucide-react";

const AutoInsurance = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-foreground text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Auto Insurance
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            When it comes to finding the right auto insurance for your needs, Reliance Covers is the company to trust. We understand that protecting your vehicle is essential, and that's why we offer comprehensive and affordable auto insurance plans that provide you with peace of mind on the road.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact-us">Get My Auto Insurance</Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Comprehensive Coverage You Can Trust</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our team of experienced insurance professionals is dedicated to ensuring that you receive the coverage you need at a price that fits your budget. Whether you're a new driver or have years of driving experience, Reliance Covers has the perfect auto insurance solution for you.
            </p>
            <p className="text-lg text-muted-foreground">
              One of the key reasons to choose Reliance Covers for your auto insurance needs is our commitment to providing excellent customer service. We believe in building long-lasting relationships with our clients, and that starts with personalized attention and support.
            </p>
          </div>
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Get Your Quote Today</h3>
            <p className="text-muted-foreground mb-6">
              Our knowledgeable agents take the time to understand your specific requirements and guide you through the process of selecting the right coverage options.
            </p>
            <Button asChild className="w-full">
              <Link to="/contact-us">Get a Free Quote</Link>
            </Button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Auto Insurance With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Comprehensive Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Complete protection for your vehicle with comprehensive coverage options tailored to your needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <DollarSign className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Competitive Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  We offer competitive rates without compromising on the quality of coverage you receive.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Our experienced team provides personalized support throughout your insurance journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Quick Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Fast quote processing and efficient service to get you covered quickly and easily.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-muted p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Affordable Coverage That Fits Your Budget</h3>
          <p className="text-lg text-muted-foreground mb-4">
            At Reliance Covers, we pride ourselves on offering competitive rates without compromising on the quality of coverage. We understand that auto insurance can be a significant expense, and our goal is to make it as affordable as possible for our clients.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            With our extensive network of insurance providers, we can compare multiple options to find the best rates available. Additionally, our team is skilled at identifying potential discounts and savings opportunities to help you maximize your insurance benefits.
          </p>
          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/contact-us">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AutoInsurance;