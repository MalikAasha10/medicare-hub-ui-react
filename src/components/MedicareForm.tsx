import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { sendEmail, validateZipCode, validateEmail, validatePhone } from "@/lib/emailjs";

const MedicareForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    zipCode: "",
    email: "",
    phone: "",
    dob: "",
    consent: false,
    privacyConsent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!validatePhone(formData.phone)) newErrors.phone = "Invalid phone number";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required";
    else if (!validateZipCode(formData.zipCode)) newErrors.zipCode = "Zip code must contain only digits (5 or 9 digits)";
    if (!formData.dob) newErrors.dob = "Date of birth is required";

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
        form_type: 'Medicare Form',
        full_name: formData.name,
        zip_code: formData.zipCode,
        email: formData.email,
        phone: formData.phone,
        dob: formData.dob,
        consent_to_contact: formData.consent ? 'Yes' : 'No',
        agree_to_privacy_policy: formData.privacyConsent ? 'Yes' : 'No',
      });

      if (result.success) {
        // Clear form after successful submission
        setFormData({
          name: "",
          zipCode: "",
          email: "",
          phone: "",
          dob: "",
          consent: false,
          privacyConsent: false,
        });
        setErrors({});
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        toast({
          title: "Success!",
          description: "Your Medicare form has been submitted successfully. We'll contact you soon!",
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-gradient-hero p-4 sm:p-6 lg:p-8 rounded-lg shadow-form text-primary-foreground h-fit sticky top-4">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center text-white">Fill Out the Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your Name (Required)"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`bg-white text-foreground border-border w-full text-sm sm:text-base h-10 sm:h-12 ${errors.name ? 'border-red-500' : ''}`}
            required
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <Input
            type="text"
            placeholder="Zip Code (Required)"
            value={formData.zipCode}
            onChange={(e) => handleInputChange("zipCode", e.target.value)}
            className={`bg-white text-foreground border-border w-full text-sm sm:text-base h-10 sm:h-12 ${errors.zipCode ? 'border-red-500' : ''}`}
            required
          />
          {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email Address (Required)"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`bg-white text-foreground border-border w-full text-sm sm:text-base h-10 sm:h-12 ${errors.email ? 'border-red-500' : ''}`}
            required
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <Input
            type="tel"
            placeholder="Phone Number (Required)"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={`bg-white text-foreground border-border w-full text-sm sm:text-base h-10 sm:h-12 ${errors.phone ? 'border-red-500' : ''}`}
            required
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <Label className="text-white font-medium mb-2 block text-sm sm:text-base">DOB</Label>
          <div className="relative">
            <Input
              type="date"
              placeholder="mm/dd/yyyy"
              value={formData.dob}
              onChange={(e) => handleInputChange("dob", e.target.value)}
              className={`bg-white text-foreground border-border w-full text-sm sm:text-base h-10 sm:h-12 ${errors.dob ? 'border-red-500' : ''}`}
              required
            />
          </div>
          {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
        </div>

        <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
          <div className="flex items-start space-x-2 sm:space-x-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
              className="mt-1 h-5 w-5 border-2 border-white bg-white data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-primary"
            />
            <Label htmlFor="consent" className="text-white leading-relaxed text-xs sm:text-sm">
              By checking this box and clicking the button below, I provide my signed written consent directly to Trusti Covers and Excellence Media Group to call or text me about Medicare and related marketing offers at the number I provided above via manual or automated technology, including an autodialer and prerecorded or artificial voice (including AI), until such time that I revoke my consent. I understand that my consent is not a condition of purchase of any goods or services and that I may revoke my consent at any time. To proceed without providing consent, leave this box unchecked. I understand that standard message and data rates may apply. I also agree to the Terms and Conditions (which require arbitration of disputes, including any disputes with anyone who may contact me in conjunction with this form) that are linked near the bottom of the page. Even if it is a wireless number, regardless of whether you are on any Federal or state DNC ('Do Not Call').
            </Label>
          </div>

          <div className="flex items-start space-x-2 sm:space-x-3">
            <Checkbox
              id="privacy"
              checked={formData.privacyConsent}
              onCheckedChange={(checked) => handleInputChange("privacyConsent", checked as boolean)}
              className="mt-1 h-5 w-5 border-2 border-white bg-white data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-primary"
            />
            <Label htmlFor="privacy" className="text-white text-xs sm:text-sm">
              I agree to the Privacy Policy and consent to receive marketing emails from Excellence Media Group
            </Label>
          </div>
        </div>

        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full text-sm sm:text-base lg:text-lg font-bold py-3 sm:py-4 mt-4 sm:mt-6 bg-accent hover:bg-accent/90 text-black"
          disabled={!formData.consent || !formData.privacyConsent || isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "SPEAK to a LICENSED SALES AGENT"}
        </Button>
      </form>
    </div>
  );
};

export default MedicareForm;