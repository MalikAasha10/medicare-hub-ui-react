import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendEmail, validateZipCode, validateEmail, validatePhone } from "@/lib/emailjs";

const AutoInsurance = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zipCode: "",
    consent: false,
    emailConsent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!validatePhone(formData.phone)) newErrors.phone = "Invalid phone number";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required";
    else if (!validateZipCode(formData.zipCode)) newErrors.zipCode = "Zip code must contain only digits (5 or 9 digits)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await sendEmail({
        form_type: 'Auto Insurance Form',
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        zip_code: formData.zipCode,
        consent_to_contact: formData.consent ? 'Yes' : 'No',
        agree_to_privacy_policy: formData.emailConsent ? 'Yes' : 'No',
      });

      if (result.success) {
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          zipCode: "",
          consent: false,
          emailConsent: false
        });
        setErrors({});
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        toast({
          title: "Success!",
          description: "Your auto insurance form has been submitted successfully. We'll contact you soon!",
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
                  Auto Insurance
                </h1>
                <p className="text-lg text-primary-foreground/90">
                  When it comes to finding the right auto insurance for your needs, Trusti Covers is the company to trust. We understand that protecting your vehicle is essential, and that's why we offer comprehensive and affordable auto insurance plans that provide you with peace of mind on the road.
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
                          className={errors.firstName ? 'border-red-500' : ''}
                          required
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={errors.lastName ? 'border-red-500' : ''}
                          required
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
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
                        className={errors.phone ? 'border-red-500' : ''}
                        required
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? 'border-red-500' : ''}
                        required
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className={errors.zipCode ? 'border-red-500' : ''}
                        required
                      />
                      {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) => handleCheckboxChange("consent", checked as boolean)}
                        />
                        <Label htmlFor="consent" className="text-xs leading-tight">
                          By checking this box and clicking the button below, I provide my signed written consent directly to Trusti Covers and Excellence Media Group to call or text me about Auto Insurance and related marketing offers at the number I provided above via manual or automated technology, including an autodialer and prerecorded or artificial voice (including AI), until such time that I revoke my consent. I understand that my consent is not a condition of purchase of any goods or services and that I may revoke my consent at any time. To proceed without providing consent, leave this box unchecked. I understand that standard message and data rates may apply. I also agree to the Terms and Conditions (which require arbitration of disputes, including any disputes with anyone who may contact me in conjunction with this form) that are linked near the bottom of the page. Even if it is a wireless number, regardless of whether you are on any Federal or state DNC ('Do Not Call').
                        </Label>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="emailConsent"
                          checked={formData.emailConsent}
                          onCheckedChange={(checked) => handleCheckboxChange("emailConsent", checked as boolean)}
                        />
                        <Label htmlFor="emailConsent" className="text-xs">
                          I agree to the Privacy Policy and consent to receive marketing emails from Excellence Media Group.
                        </Label>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="cta" 
                      className="w-full"
                      disabled={!formData.consent || !formData.emailConsent || isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Get My Auto Insurance"}
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
                Our team of experienced insurance professionals is dedicated to ensuring that you receive the coverage you need at a price that fits your budget. Whether you're a new driver or have years of driving experience, Trusti Covers has the perfect auto insurance solution for you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                One of the key reasons to choose Trusti Covers for your auto insurance needs is our commitment to providing excellent customer service. We believe in building long-lasting relationships with our clients, and that starts with personalized attention and support. Our knowledgeable agents take the time to understand your specific requirements and guide you through the process of selecting the right coverage options. We're always available to answer your questions, address your concerns, and provide expert advice. With Trusti Covers, you can trust that you'll receive the highest level of customer care throughout your insurance journey.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground text-center">
                Why Choose Auto Insurance With Us
              </h2>
              <div className="text-center space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  At Trusti Covers, we pride ourselves on offering competitive rates without compromising on the quality of coverage. We understand that auto insurance can be a significant expense, and our goal is to make it as affordable as possible for our clients. With our extensive network of insurance providers, we can compare multiple options to find the best rates available. Additionally, our team is skilled at identifying potential discounts and savings opportunities to help you maximize your insurance benefits. By choosing Trusti Covers, you can have confidence that you're getting exceptional coverage at a price that won't break the bank.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In summary, Trusti Covers stands out as a trusted provider of auto insurance due to our comprehensive and affordable coverage options, commitment to excellent customer service, and ability to offer competitive rates. With us, you can protect your vehicle and enjoy the peace of mind that comes with knowing you have reliable insurance coverage.
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

export default AutoInsurance;