import { Shield, Heart, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import medicalIcon from "@/assets/medical-icon.png";

const MedicareContent = () => {
  return (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
          Medicare Health Insurance
        </h1>
        
        <div className="flex justify-center md:justify-start mb-6">
          <img 
            src={medicalIcon} 
            alt="Medical Care" 
            className="h-16 w-16 opacity-80"
          />
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-foreground leading-relaxed mb-6">
          When it comes to Medicare Health Insurance, Reliance Covers is your go-to provider. 
          We understand the importance of having comprehensive healthcare coverage in your golden 
          years, and that's why we offer a range of Medicare Health insurance quotes to suit your 
          specific needs. Whether you're looking for Health Advantage, Health Supplement, we may 
          help you get covered.
        </p>

        <p className="text-foreground leading-relaxed mb-6">
          Our experienced team of compliant agents is well-versed in the complexities of Health 
          and will guide you through the process, ensuring you understand your options and can 
          make informed decisions about your healthcare coverage.
        </p>

        <p className="text-foreground leading-relaxed">
          One of the key advantages of choosing Reliance Covers for your Medicare Health Insurance 
          needs is our commitment to personalized service. We believe that every individual has 
          unique healthcare requirements, and we take the time to understand your specific needs 
          and preferences. Our knowledgeable licensed sales agents will work closely with you to 
          assess your healthcare needs and may help you find the insurance plan that provides the 
          right coverage at an affordable price.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="bg-medical-trust p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-accent" />
            <h3 className="text-xl font-semibold text-primary">Comprehensive Coverage</h3>
          </div>
          <p className="text-muted-foreground">
            Get complete protection with our Medicare plans designed for your peace of mind.
          </p>
        </div>

        <div className="bg-medical-trust p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-accent" />
            <h3 className="text-xl font-semibold text-primary">Personalized Care</h3>
          </div>
          <p className="text-muted-foreground">
            Tailored insurance solutions that fit your unique healthcare needs and budget.
          </p>
        </div>

        <div className="bg-medical-trust p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-8 w-8 text-accent" />
            <h3 className="text-xl font-semibold text-primary">Expert Guidance</h3>
          </div>
          <p className="text-muted-foreground">
            Licensed agents ready to help you navigate Medicare options with confidence.
          </p>
        </div>

        <div className="bg-medical-trust p-6 rounded-lg border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="h-8 w-8 text-accent" />
            <h3 className="text-xl font-semibold text-primary">24/7 Support</h3>
          </div>
          <p className="text-muted-foreground">
            Dedicated customer service to assist you every step of the way.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-primary p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-primary-foreground mb-4">
          Ready to Get Started?
        </h3>
        <p className="text-primary-foreground/90 mb-6">
          Let our experts help you find the perfect Medicare plan for your needs.
        </p>
        <Button variant="cta" size="lg" className="text-lg font-semibold px-8">
          Get Your Free Quote Today
        </Button>
      </div>
    </div>
  );
};

export default MedicareContent;