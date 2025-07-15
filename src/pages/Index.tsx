import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Execute happiness with Reliance Covers
              </h1>
              <p className="text-lg text-primary-foreground/90">
                With our personalized approach, insurance policies we recommend are tailored specifically to you.
              </p>
              <Button variant="cta" size="lg" className="font-semibold">
                CONTACT US
              </Button>
            </div>
            <div className="relative">
              <div className="bg-background/95 backdrop-blur-sm rounded-lg p-8 shadow-form">
                <h3 className="text-2xl font-bold text-foreground mb-4">Get Your Free Quote</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full p-3 border border-input rounded-md bg-background text-foreground"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-3 border border-input rounded-md bg-background text-foreground"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-3 border border-input rounded-md bg-background text-foreground"
                  />
                  <Button variant="cta" size="lg" className="w-full">
                    Get My Quote
                  </Button>
                </form>
              </div>
            </div>
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
              <Button variant="cta" size="lg">
                CONTACT US
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-soft p-8">
                <div className="w-full h-64 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-lg font-semibold">About Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-accent font-semibold mb-4">// Services</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              We may help our clients find great insurance services.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-form transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-gradient-accent rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-accent-foreground text-lg font-semibold">Medicare</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Medicare Insurance</h3>
                <p className="text-muted-foreground mb-4">
                  Medicare Insurance coverage for your peace of mind.
                </p>
                <Button variant="cta" className="w-full">
                  Get a Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-form transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-gradient-primary rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-primary-foreground text-lg font-semibold">Auto</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Auto Insurance</h3>
                <p className="text-muted-foreground mb-4">
                  Drive with confidence, we've got you covered.
                </p>
                <Button variant="cta" className="w-full">
                  Get a Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-form transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-gradient-accent rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-accent-foreground text-lg font-semibold">Final Expense</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Final Expense</h3>
                <p className="text-muted-foreground mb-4">
                  Protecting your loved ones with comprehensive coverage.
                </p>
                <Button variant="cta" className="w-full">
                  Get a Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © 2024 Reliance Covers. All rights reserved. | Licensed insurance professionals.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
