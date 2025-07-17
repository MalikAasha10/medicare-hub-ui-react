import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, DollarSign, Users, Shield } from "lucide-react";

const FinalExpense = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-foreground text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Final Expense Insurance
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Planning for final expenses is a crucial aspect of financial preparedness, and Reliance Covers is here to help you navigate this important area with ease and peace of mind. Our final expense insurance plans are specifically designed to cover the costs associated with funeral services, burial or cremation, medical bills, and other end-of-life expenses.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact-us">Secure My Final Expense!</Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Peace of Mind for Your Family</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We understand that losing a loved one is an emotional and challenging time, and our goal is to alleviate the financial burden for your family during this difficult period. With Reliance Covers, you can ensure that your final expenses are taken care of, allowing your loved ones to focus on grieving and healing.
            </p>
            <p className="text-lg text-muted-foreground">
              One of the key advantages of choosing Reliance Covers for your final expense insurance is our commitment to personalized service and tailored coverage options. We understand that everyone's financial situation and preferences are unique, and we take the time to assess your specific needs.
            </p>
          </div>
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Get Your Quote Today</h3>
            <p className="text-muted-foreground mb-6">
              Our experienced agents will guide you through the process, explaining the available options and helping you select the coverage that best aligns with your wishes.
            </p>
            <Button asChild className="w-full">
              <Link to="/contact-us">Get a Free Quote</Link>
            </Button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Final Expense With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Compassionate Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  We provide supportive guidance during difficult times with compassionate, understanding service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <DollarSign className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Affordable Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Our plans are designed to be affordable and accessible without straining your budget.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Family Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Protect your loved ones from financial burden during their time of grief and loss.
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
                  Coverage for funeral services, burial, cremation, medical bills, and other final expenses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-muted p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Financial Security When It Matters Most</h3>
          <p className="text-lg text-muted-foreground mb-4">
            At Reliance Covers, we recognize that financial concerns should not add to the emotional burden of losing a loved one. Our final expense insurance plans are designed to be affordable and accessible, allowing you to secure the coverage you need without straining your budget.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            We work with a network of reputable insurance providers to offer competitive rates, ensuring that you receive comprehensive coverage at a price that fits your financial goals. With Reliance Covers, you can have peace of mind knowing that your final expenses will be taken care of, providing financial security for your loved ones when they need it most.
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

export default FinalExpense;