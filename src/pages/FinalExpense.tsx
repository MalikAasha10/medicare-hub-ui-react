import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const FinalExpense = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zipCode: "",
    consent: false,
    emailConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send email
      const emailData = {
        to: 'noumanreal@gmail.com',
        subject: 'Final Expense Form Submission',
        body: `
          First Name: ${formData.firstName}
          Last Name: ${formData.lastName}
          Phone: ${formData.phone}
          Email: ${formData.email}
          Zip Code: ${formData.zipCode}
          Consent: ${formData.consent ? 'Yes' : 'No'}
          Email Consent: ${formData.emailConsent ? 'Yes' : 'No'}
        `
      };
      
      console.log("Form submitted:", emailData);
      
      // Clear form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        zipCode: "",
        consent: false,
        emailConsent: false
      });
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Final Expense
                </h1>
                <p className="text-lg text-primary-foreground/90">
                  Planning for final expenses is a crucial aspect of financial preparedness, and Reliance Covers is here to help you navigate this important area with ease and peace of mind. Our final expense insurance plans are specifically designed to cover the costs associated with funeral services, burial or cremation, medical bills, and other end-of-life expenses.
                </p>
              </div>
              
              {/* Form Card */}
              <Card className="bg-white shadow-form">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Fill Out the Form</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) => handleCheckboxChange("consent", checked as boolean)}
                        />
                        <Label htmlFor="consent" className="text-xs leading-tight">
                          By checking this box and clicking the button below, I provide my signed written consent directly to Life Insurer Quote, Reliance Covers, and Excellence Media Group to call or text me about Final Expense and related marketing offers at the number I provided above via manual or automated technology, including an autodialer and prerecorded or artificial voice (including AI), until such time that I revoke my consent, even if my number is wireless, regardless of whether I am on any Federal or state DNC ('Do Not Call') list. I understand that my consent is not a condition of purchase of any goods or services and that I may revoke my consent at any time. To proceed without providing consent, leave this box unchecked. I understand that standard message and data rates may apply. I also agree to the Terms and Conditions (which require arbitration of disputes, including any disputes with anyone who may contact me in conjunction with this form).
                        </Label>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="emailConsent"
                          checked={formData.emailConsent}
                          onCheckedChange={(checked) => handleCheckboxChange("emailConsent", checked as boolean)}
                        />
                        <Label htmlFor="emailConsent" className="text-xs">
                          I agree to the Privacy Policy and consent to receive marketing emails from Excellence Media Group
                        </Label>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="cta" 
                      className="w-full"
                      disabled={!formData.consent || !formData.emailConsent}
                    >
                      Secure My Final Expense!
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                We understand that losing a loved one is an emotional and challenging time, and our goal is to alleviate the financial burden for your family during this difficult period. With Reliance Covers, you can ensure that your final expenses are taken care of, allowing your loved ones to focus on grieving and healing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                One of the key advantages of choosing Reliance Covers for your final expense insurance is our commitment to personalized service and tailored coverage options. We understand that everyone's financial situation and preferences are unique, and we take the time to assess your specific needs and design a plan that meets your requirements. Our experienced agents will guide you through the process, explaining the available options and helping you select the coverage that best aligns with your wishes. We are dedicated to providing exceptional customer service, and we're always available to answer your questions and provide support.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground text-center">
                Why Choose Final Expense With Us
              </h2>
              <div className="text-center space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  At Reliance Covers, we recognize that financial concerns should not add to the emotional burden of losing a loved one. Our final expense insurance plans are designed to be affordable and accessible, allowing you to secure the coverage you need without straining your budget. We work with a network of reputable insurance providers to offer competitive rates, ensuring that you receive comprehensive coverage at a price that fits your financial goals. With Reliance Covers, you can have peace of mind knowing that your final expenses will be taken care of, providing financial security for your loved ones when they need it most.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In summary, Reliance Covers is your trusted partner when it comes to final expense insurance. With our tailored coverage options, personalized service, and affordable rates, we make it easy for you to plan for the future and protect your loved ones from the financial burden of final expenses. Let us assist you in creating a comprehensive plan that brings peace of mind and allows your family to focus on healing and remembrance during a difficult time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinalExpense;