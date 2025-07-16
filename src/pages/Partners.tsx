import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Partners = () => {
  const partners = [
    {
      name: "Aetna",
      description: "Leading health insurance provider offering comprehensive Medicare and ACA plans."
    },
    {
      name: "Blue Cross Blue Shield",
      description: "Trusted nationwide network providing quality healthcare coverage and services."
    },
    {
      name: "Humana",
      description: "Innovative healthcare solutions with focus on Medicare Advantage and wellness programs."
    },
    {
      name: "UnitedHealthcare",
      description: "Comprehensive health insurance solutions with extensive provider networks."
    },
    {
      name: "Cigna",
      description: "Global health service company committed to improving health and well-being."
    },
    {
      name: "Kaiser Permanente",
      description: "Integrated healthcare delivery system providing coordinated care and coverage."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Partners
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Trusted Insurance Providers We Work With
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Strong Partnerships for Better Coverage
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Reliance Covers, we've established strong partnerships with leading insurance providers across the nation. These partnerships allow us to offer our clients access to a wide range of insurance products and competitive rates. Our network of trusted partners ensures that we can find the right coverage for your specific needs and budget.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work exclusively with A-rated insurance companies that have proven track records of financial stability and excellent customer service. This commitment to quality partnerships means you can trust that your coverage will be there when you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Insurance Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Leading insurance providers we collaborate with to serve you better
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Partners Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              Why Choose Our Partner Network?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Financial Stability</h3>
                  <p className="text-muted-foreground">All our partners maintain strong financial ratings, ensuring your claims will be paid when needed.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Competitive Rates</h3>
                  <p className="text-muted-foreground">Our partnerships allow us to negotiate better rates and pass those savings on to you.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Extensive Coverage</h3>
                  <p className="text-muted-foreground">Access to a wide range of insurance products to meet all your coverage needs.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Proven Service</h3>
                  <p className="text-muted-foreground">Partners with excellent customer service records and claims handling processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;