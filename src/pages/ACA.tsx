import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Users, Shield, CheckCircle } from "lucide-react";

const ACA = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-foreground text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ACA Insurance
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            With our extensive expertise, we specialize in finding the perfect Affordable Care Act (ACA) insurance plans for individuals like you. Rely on us to guide you towards the ideal ACA insurance plan that suits your unique needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact-us">Request ACA Quote</Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Expert ACA Insurance Guidance</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our licensed insurance agents will thoroughly review your options, ensuring affordable coverage and verifying your eligibility for enrollment. Trust us to navigate the complexities of ACA insurance and secure the plan that best fits your requirements.
            </p>
            <p className="text-lg text-muted-foreground">
              We understand that healthcare decisions are important and can be overwhelming. That's why our team is dedicated to providing personalized support and clear explanations of your coverage options.
            </p>
          </div>
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Get Your Quote Today</h3>
            <p className="text-muted-foreground mb-6">
              Let our experts help you find the perfect ACA plan that provides comprehensive healthcare coverage at an affordable price.
            </p>
            <Button asChild className="w-full">
              <Link to="/contact-us">Get a Free Quote</Link>
            </Button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ACA With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <FileText className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Expert Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  We help you navigate the complexities of ACA insurance with expert guidance and support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Licensed Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Our licensed insurance agents provide professional guidance and personalized service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Comprehensive Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Access to comprehensive healthcare coverage that meets ACA requirements and your needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Eligibility Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  We verify your eligibility for enrollment and help you understand your coverage options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-muted p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Affordable Healthcare Solutions</h3>
          <p className="text-lg text-muted-foreground mb-4">
            At Reliance Covers, we recognize that healthcare should be accessible and affordable for everyone. Our ACA insurance plans are designed to provide comprehensive coverage while fitting within your budget constraints.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            We work with a network of reputable insurance providers to offer competitive rates and ensure that you receive quality healthcare coverage at a price that works for you. With Reliance Covers, you can have confidence knowing that your healthcare needs are protected.
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

export default ACA;