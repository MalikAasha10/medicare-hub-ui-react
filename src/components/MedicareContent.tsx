import { Shield, Heart, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import medicalIcon from "@/assets/medical-icon.png";

const MedicareContent = () => {
  return (
    <div className="space-y-6 sm:space-y-8 p-4 sm:p-6 lg:p-8">
      <div className="text-center xl:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
          Medicare Health Insurance
        </h1>
      </div>

      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
        <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed mb-4 sm:mb-6">
          When it comes to Medicare Health Insurance, Reliance Covers is your go-to provider. We understand the importance of having comprehensive healthcare coverage in your golden years, and that's why we offer a range of Medicare Health insurance quotes to suit your specific needs. Whether you're looking for Health Advantage, Health Supplement, we may help you get covered. Our experienced team of compliant agents is well-versed in the complexities of Health and will guide you through the process, ensuring you understand your options and can make informed decisions about your healthcare coverage.
        </p>

        <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4 sm:mb-6">
          One of the key advantages of choosing Reliance Covers for your Medicare Health insurance needs is our commitment to personalized service. We believe that every individual has unique healthcare requirements, and we take the time to understand your specific needs and preferences. Our knowledgeable licensed sales agents will work closely with you to assess your healthcare needs and may help you find the insurance plan that provides the right coverage at an affordable price. We are dedicated to providing exceptional customer service, and we'll be there to assist you every step of the way, from enrollment to navigating the complexities of the Health system.
        </p>
      </div>

      <div className="mt-6 sm:mt-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6">
          Why Choose Medicare Health Insurance With Us
        </h2>
        <p className="text-sm sm:text-base text-foreground leading-relaxed">
          At Reliance Covers, we recognize the importance of cost-effective healthcare solutions. We understand that medical expenses can be a significant burden, especially for seniors on fixed incomes. That's why we strive to offer Medicare Health insurance plans that provide comprehensive coverage at great rates. Our network of insurance providers allows us to compare multiple options and find great rates available. Additionally, our team is skilled at identifying potential savings and discounts, to help you maximize your health benefits while minimizing your out-of-pocket expenses. With Reliance Covers, you can have peace of mind knowing that you have reliable Medicare Health insurance coverage without breaking the bank.
        </p>
        <p className="text-sm sm:text-base text-foreground leading-relaxed mt-4">
          In summary, Reliance Covers is the trusted choice for Health insurance. With our range of comprehensive plans, personalized service, and commitment to affordability, we make it easy for you to navigate the complexities of Medicare Health Plans and secure the healthcare coverage you deserve. Let us help you make the most of your Medicare Health benefits and ensure that you have peace of mind when it comes to your healthcare needs.
        </p>
      </div>

    </div>
  );
};

export default MedicareContent;