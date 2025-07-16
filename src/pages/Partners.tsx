import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Partners = () => {
  const partners = [
    "1st Century", "Accuquote", "AIG Direct", "AIS", "All Web Leads", "Alliance", "Allstate", "Agentra Healthcare", 
    "Angelic Marketing Group", "Alpine Digital Group, Inc.", "American Adventure Insurance", "Americare", "Ameriquote", 
    "Answer Financial", "Apollo Interactive", "Art Institute", "Avendia", "Avenge Digital", "Black Optek", 
    "BRXTN Digital Media", "Bantam Connect", "Bayside", "Cege Media", "Choice Direct", "ClearLink", 
    "ClearMatch Medicare", "Click 2 Call Network", "CompareInsuranceQuotes", "Connect Insurance Brands", 
    "Contactability", "Coverage One", "CS Marketing", "Debt.com", "Direct General", "Discount Insurance Quotes", 
    "EasyMedicare.com, an affiliate of e-TeleQuote Insurance, Inc", "Efinancial", "EPIQ", "Esurance", "Excel Impact", 
    "FirstQuoteHealth.com", "Florida Blue", "Fortegra", "Freeway Insurance Services", "Stone Tapert Insurance Services", 
    "Get Seen Media", "Globe Life", "GoHealthInsurance", "Goji", "goMedigap", "Hannigan Insurance", 
    "Health Benefit Center", "Health Benefits One", "Health Choice One", "HealtheDeals", "Health Insurance Innovations", 
    "Health Insurance Services", "Health IQ", "Health Plans of America", "Health Solutions One", "HealthCare, Inc.", 
    "HealthMarkets", "HealthPlanOne LLC", "Home Insurance King", "Ideal Concepts", "Inside Response", "InsuraMatch", 
    "Insurance Care Direct", "Insurance Quotes Now", "Insurance Services", "IPA Direct", "iWebQuotes", 
    "Kanopy Insurance", "America's Moneyline, Inc.", "Leadnomics", "Liberty Mutual", "Lighthouse", "Medicare Solutions", 
    "Mercury", "Moss", "Mutual of Omaha", "National General", "Nationwide", "NetQuote", "NextGen Leads, LLC", 
    "Nexus Enterprise Solutions", "Outlook Advisors", "Veterans United Home Loans", "PEMCO", "PFP", "Ping Leads", 
    "Platform Advertising", "Plymouth Rock", "Precursor Media", "Progressive", "Quote Engine", "QuoteWizard", 
    "Rank Media Agency", "RevPoint", "Selective Healthcare", "SelectMyPolicy.com", "SelectQuote", "SolidQuote, LLC", 
    "State Farm", "The Insurance Center", "The Lead Company", "The Zebra", "Anthem", "Travelers", "Underground Elephant", 
    "United Medicare Advisors", "Velapoint", "Vital One Health", "ZQ Auto Insurance", "Allied Insurance Partners", 
    "American Income Life Insurance Company Family", "Heritage Life Insurance Company", "Globe Life Insurance Company of New York", 
    "Liberty National Life Insurance Company", "My USA Health", "National Income Life Insurance Company", 
    "United American Insurance Company", "Prudential", "Smart Health Options, LLC", "American Insurance Company", 
    "Open Market Quotes", "Senior Market Quotes", "Smart Match Insurance Solutions", "Spring Health Plans", 
    "Spring Insurance Solutions", "Tiburon Insurance", "TrueChoice Insurance Services", "Visiqua LLC", "EverQuote, Inc.", 
    "Q3MInsuranceSolutions", "Themedicareassistant.com", "Finalexpenseassistant.com", "Healthcareassistant.com", 
    "Benefit Advisors", "Support First", "Figure Lending LLC", "Insurance311", "Legacy Insurance Solutions", 
    "Health Center Marketing", "Inboxed LLC.", "Clean Energy Concepts", "S.B. Fintech Ltd", "Quotehound", 
    "Groves Capital, Inc", "Commercial Insurance Center", "United Insurance Group Agency, Inc.", "Quote Velocity", 
    "Purple Dog Marketing LLC", "Alphatech Resource Holdings s.r.o", "Policy Scout", "PolicyScout", "Disability Advisor", 
    "National Disability", "Citizens Disability", "Premier Disability", "Heard and Smith", "Advocator Group", 
    "STRINGBIT inc.", "Innovation Direct Group", "Presidio Interactive", "Connect Plus", "Insurance Solutions LLC", 
    "Innovate Financial Group", "Blue Summit", "TrustedConsumer", "Mercury Insurance", "Palisades Media Group", 
    "American Insurance Organization, LLC", "Adsparkx Digital", "Morty Inc.", "Loan Depot", "Quicken Loans", 
    "AmeriSave", "First Family Life", "New American Funding", "Digital Market Media, Inc.", 
    "Legends United Insurance Agency, Inc", "New Age Health", "RCPT2", "Exclusive Digital Media", "QuoteManage LLC", 
    "Caliber Home Loans", "Capital Health Advisors Inc.", "US Health Advisors", "Spring EQ LLC", 
    "BE Marketing Solutions Inc.", "Sales Data Pro", "Independent Insurance Consultants", "Priority Insurance", 
    "Synergy Insurance Marketing", "Florida Plan Advisors", "National Plan Advisors", "My Health Advisors", 
    "Stone Tapert", "Quote Manager LLC", "HealthPlanOne, LLC", "Auto Insurance Guide", "NILCO", 
    "Smart Match Insurance Agency", "SolidQuote LLC", "Professional Consultant Insurance Solutions", "Taylor & Associates", 
    "Priority One Health", "Atlantis Health Group", "Platinum Health Solutions", "Bright Health Solutions", 
    "Family First Insurance Advisors", "Universal Healthcare Advisors", "Sicuro Health LLC", 
    "Parachute Insurance Services Corp", "Policy Fuel LLC", "ACE Solutions", "Senior Life Insurance Company", 
    "The HealthScout", "Automobile Association of America", "Acceptance Insurance", 
    "Automobile Club of Southern California", "Alfa Insurance", "American Health Plans", "American National", 
    "American Select", "American Family", "American Income Life", "Arrowstar Insurance Center", "Bianco", 
    "Bluensure Insurance", "Bristolwest", "Comfort Care Insurance Group", "Core Health Solutions", "Country Financial", 
    "Crosspointe", "Datalot", "Erie", "Farm Bureau", "Farmers", "Fiorella", "First American Financial", "Foremost", 
    "GEICO", "GetMe Healthcare", "Health Plan One", "HiegPartners", "Horace Mann Agency", "Infinity", "Infinix", 
    "Insurance Leads", "Integrated Insurance Solutions", "Kin Insurance", "Leading Healthcare", "Lemonade Insurance", 
    "Liberty Health Professionals", "Martin Financial", "MassMutual", "MetLife", "Mortgage Protection Plus", 
    "New York Life Insurance Group", "Northwestern Mutual", "Number One Health", "Nxtlevel Health", "Precision Health", 
    "Primerica", "Quotestorm", "Ralph Perez Insurance", "Success Mortgage Partners, Inc.", "Millennial Home Lending", 
    "Credible Operations, Inc", "Creative Intellects", "MAPFRE U.S.A. Corp. and its affiliates", 
    "Commerce West Insurance Company", "Affordable Insurance Group Inc.", "GoMedicare", "Choice Health", "Quote.com", 
    "Healthplan Outlook", "Fuego Leads", "K.F. Agency, Inc.", "Caliber Home Loans, Inc.", "Direct Web Advertising", 
    "Innovative Financial Group", "Better Living Health Services", "My Health Angel", "Cigna", 
    "Beyond Finance, DBA Accredited Debt Relief", "Reali Loans, Inc.", "Opportunity Financial, LLC", "ETHOS", 
    "Insurance Lead Broker, ILB", "Mellohome LLC", "ACE Global Marketing LLC", "Golden Care", "SaveToday", 
    "InsureMe, Inc", "Lead Gate Media GmbH", "EasyHealth Insurance Services", "This or ThatMedia", "This or That Media", 
    "CallCore", "Quantum 3 Media", "QuoteManage LLC", "My Health Group", "Montys Health Agency", "Shelter Insurance", 
    "The General", "Toggle", "Level Up Funding", "Global Equity Finance", "Even Financial", "Kolor Marketing", 
    "American Commerce Insurance Company", "MAPFRE Insurance Company", "Coverance Insurance Solutions", "Aetna", 
    "Gerber Life", "Powderhorn Media", "TZ Insurance Solutions LLC", "Number One Advertising", 
    "Presidio Interactive Corporation", "Central Bank", "Mission Loans", "OneMain Financial Group, LLC", "The Lead Giant", 
    "Digital Media Solutions", "Medicare10", "Hometown Quotes", "Pivotal Concepts", "Atreus Medicare Group", 
    "Q3M Insurance Solutions, LLC", "Transamerica", "UniversalHealthcareAdvisors", "Westcoast Closers", 
    "Cardinal Financial Company, Limited Partnership", "Better Mortgage Corporation", "AmOne", "I Life And Health", 
    "Citation Insurance Company", "MAPFRE Insurance Company of Florida", "Together Health", "Healthspire", 
    "Digital BGA", "Resource Connect", "TruBridge, Inc.", "Premier Insurance Benefits, LLC", "Northpointe Bank", 
    "Wyndham Capital Mortgage, Inc", "Next Gen Leads", "Elite Health Plus", "Health Caddies", "Shop RX Plans", 
    "Western & Southern Financial", "Reliance First Capital, LLC", "PennyMac Loan Services, LLC", "American Senior Med", 
    "The Commerce Insurance Company", "Bright Idea Insurance Solutions, Inc.", "Total Insurance Brokers", 
    "United Health Advisers LLC", "Senior Coverage", "Anhelo Insurance Solutions LLC.", "Insurance Group", 
    "LoanSnap, Inc", "Zillow Home Loans, LLC", "National Health Plans", "Whoop Media", "Quantum Research", 
    "Digital agents United", "KP Leads", "Aragon- Advertising LLC", "Cover Care Insurance Services LLS", "myusahealth", 
    "CPL LEADS LLC.", "Elite Medicare", "Save Today", "Amerilife Group LLC", "Oakstreet Health", 
    "Senior Select Insurance", "Senior Healthcare Direct", "Exclusive Marketing Plus"
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
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg text-center">
                <h3 className="text-sm font-semibold text-foreground">
                  {partner}
                </h3>
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