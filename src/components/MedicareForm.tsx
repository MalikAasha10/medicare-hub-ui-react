import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "lucide-react";

const MedicareForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    zipCode: "",
    email: "",
    phone: "",
    dob: "",
    consent: false,
    privacyConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-gradient-hero p-8 rounded-lg shadow-form text-primary-foreground">
      <h2 className="text-3xl font-bold mb-6 text-center">Fill Out the Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your Name (Required)"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="bg-background text-foreground border-border"
            required
          />
        </div>

        <div>
          <Input
            type="text"
            placeholder="Zip Code (Required)"
            value={formData.zipCode}
            onChange={(e) => handleInputChange("zipCode", e.target.value)}
            className="bg-background text-foreground border-border"
            required
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email Address (Required)"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="bg-background text-foreground border-border"
            required
          />
        </div>

        <div>
          <Input
            type="tel"
            placeholder="Phone Number (Required)"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="bg-background text-foreground border-border"
            required
          />
        </div>

        <div>
          <Label className="text-primary-foreground font-medium mb-2 block">DOB</Label>
          <div className="relative">
            <Input
              type="date"
              value={formData.dob}
              onChange={(e) => handleInputChange("dob", e.target.value)}
              className="bg-background text-foreground border-border"
              required
            />
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-primary-foreground leading-relaxed">
              By checking this box and clicking the button below, I provide my signed written consent directly to Reliance Covers and Excellence Media Group to call or text me about Medicare and related marketing offers at the number I provided above via manual or automated technology, including an autodialer and prerecorded or artificial voice (including AI), until such time that I revoke my consent.
            </Label>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="privacy"
              checked={formData.privacyConsent}
              onCheckedChange={(checked) => handleInputChange("privacyConsent", checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="privacy" className="text-primary-foreground">
              I agree to the Privacy Policy and consent to receive marketing emails from Excellence Media Group
            </Label>
          </div>
        </div>

        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full text-lg font-bold py-4 mt-6"
          disabled={!formData.consent || !formData.privacyConsent}
        >
          SPEAK to a LICENSED SALES AGENT
        </Button>
      </form>
    </div>
  );
};

export default MedicareForm;