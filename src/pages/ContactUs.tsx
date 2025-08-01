import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail, validateEmail, validatePhone } from "@/lib/emailjs";

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    marketingConsent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!validatePhone(formData.phone)) newErrors.phone = "Invalid phone number";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        form_type: 'Contact Us Form',
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        marketing_consent: formData.marketingConsent ? 'Yes' : 'No',
      });

      if (result.success) {
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
          marketingConsent: false,
        });
        setErrors({});
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you soon!",
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
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
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/90">
            Get in touch with our experienced professionals for personalized insurance solutions
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Our team of experienced professionals is committed to delivering exceptional customer service and ensuring that our clients have the coverage they need to protect themselves and their assets.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">info@trusticovers.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">+1 3137204214</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/30 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">SMID:</h4>
                <p className="text-sm text-muted-foreground">MULTI-PLAN_SQKueBcR8p2025_C</p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-form">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Drop us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      type="text" 
                      name="fullName"
                      placeholder="Full Name" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`bg-background ${errors.fullName ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`bg-background ${errors.phone ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="Email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`bg-background ${errors.email ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Input 
                      type="text" 
                      name="subject"
                      placeholder="Subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`bg-background ${errors.subject ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <Textarea 
                      name="message"
                      placeholder="Your Message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`bg-background min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="consent" 
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, marketingConsent: checked as boolean }))}
                        className="mt-1" 
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                        By selecting the check box and clicking the button below, you represent that you are 18+ years of age and agree to the Privacy Policy and Terms & Conditions. By selecting the above check box you agree by your electronic signature that you give express written consent to receive marketing communications that includes Medicare Advantage, Medicare Supplement, Auto Insurance, Final Expense, and Prescription Drug plans through the use by automatic dialing system and pre-recorded calls and artificial voice messages, from our licensed agents and one or more of its Marketing partners at the phone number and e-mail address provided by you, including wireless numbers, if applicable, even if you have previously registered the provided number on the Do Not Call Registry even if you are on a government do-not call registry.
                      </label>
                    </div>
                    
                    <Button 
                      type="submit"
                      variant="cta" 
                      size="lg" 
                      className="w-full"
                      disabled={!formData.marketingConsent || isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;