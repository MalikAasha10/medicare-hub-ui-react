import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import medicareImg from "@/assets/medicare-insurance.jpg";
import autoImg from "@/assets/auto-insurance.jpg";
import finalExpenseImg from "@/assets/final-expense.jpg";
import acaImg from "@/assets/aca-insurance.jpg";

const Services = () => {
  const services = [
    {
      title: "Medicare",
      description: "Secure your healthcare needs with our reliable and comprehensive Senior Health insurance plans.",
      image: medicareImg,
      link: "/medicare"
    },
    {
      title: "Auto Insurance",
      description: "Drive with confidence knowing that your vehicle and your finances are protected with our comprehensive auto insurance coverage.",
      image: autoImg,
      link: "/auto-insurance"
    },
    {
      title: "Final Expense",
      description: "Ensure your loved ones are financially protected during difficult times with our compassionate final expense insurance options.",
      image: finalExpenseImg,
      link: "/final-expense"
    },
    {
      title: "ACA",
      description: "Specialized in finding the perfect ACA insurance plans that meet your healthcare needs and budget requirements.",
      image: acaImg,
      link: "/aca"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Comprehensive Insurance Solutions for Peace of Mind
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Comprehensive Insurance Solutions for Peace of Mind
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Trusti Covers, we understand that life is full of unexpected twists and turns. That's why we are dedicated to providing comprehensive insurance solutions that offer our valued clients peace of mind. With our extensive range of insurance products and personalized services, we aim to protect what matters most to you, whether it's your vehicle, medicare, or final expense.
            </p>
            <br />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experienced and licensed insurance professionals is committed to tailoring coverage plans to meet your unique needs and budget. We work closely with you to assess your risks, explain your options, and recommend the most suitable policies to safeguard your assets. From auto and casualty insurance to medicare, we offer a wide array of solutions designed to provide you with the financial protection you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Provided Service Field Which You Love
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block">
                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 cursor-pointer h-full">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Button variant="cta" className="w-full">
                      Get a Quote
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;