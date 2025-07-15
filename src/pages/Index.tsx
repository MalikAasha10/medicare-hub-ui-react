import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroFamily from "@/assets/hero-family.jpg";
import aboutUs from "@/assets/about-us.jpg";
import medicareInsurance from "@/assets/medicare-insurance.jpg";
import autoInsurance from "@/assets/auto-insurance.jpg";
import finalExpense from "@/assets/final-expense.jpg";
import acaInsurance from "@/assets/aca-insurance.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroFamily} 
            alt="Happy family" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Execute happiness with Reliance Covers
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              With our personalized approach, insurance policies we recommend are tailored specifically to you.
            </p>
            <Link to="/contact-us">
              <Button variant="cta" size="lg" className="font-semibold">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-accent font-semibold">// About Us</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                You could save on your insurance policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Reliance Covers, we believe in providing our clients with peace of mind by offering reliable and comprehensive insurance quotes. With years of experience in the industry, we understand that every individual's needs are unique, which is why we strive to provide personalized insurance quotes tailored to fit our clients.
              </p>
              <p className="text-sm text-muted-foreground">
                Not affiliated with the U.S. government
              </p>
              <Link to="/contact-us">
                <Button variant="cta" size="lg">
                  CONTACT US
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-soft overflow-hidden">
                <img 
                  src={aboutUs} 
                  alt="Insurance professional" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-accent font-semibold mb-4">// Services</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              We may help our clients find great insurance services.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-form transition-shadow duration-300">
              <CardContent className="p-0">
                <img 
                  src={medicareInsurance} 
                  alt="Medicare Insurance" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Medicare Insurance</h3>
                  <p className="text-muted-foreground mb-4">
                    Medicare Insurance coverage for your peace of mind.
                  </p>
                  <Link to="/medicare">
                    <Button variant="cta" className="w-full">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-form transition-shadow duration-300">
              <CardContent className="p-0">
                <img 
                  src={autoInsurance} 
                  alt="Auto Insurance" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Auto Insurance</h3>
                  <p className="text-muted-foreground mb-4">
                    Drive with confidence, we've got you covered.
                  </p>
                  <Link to="/contact-us">
                    <Button variant="cta" className="w-full">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-form transition-shadow duration-300">
              <CardContent className="p-0">
                <img 
                  src={finalExpense} 
                  alt="Final Expense Insurance" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Final Expense</h3>
                  <p className="text-muted-foreground mb-4">
                    Protecting your loved ones with comprehensive coverage.
                  </p>
                  <Link to="/contact-us">
                    <Button variant="cta" className="w-full">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-form transition-shadow duration-300">
              <CardContent className="p-0">
                <img 
                  src={acaInsurance} 
                  alt="ACA Insurance" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">ACA</h3>
                  <p className="text-muted-foreground mb-4">
                    Specialized in finding the perfect ACA insurance plans.
                  </p>
                  <Link to="/contact-us">
                    <Button variant="cta" className="w-full">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
