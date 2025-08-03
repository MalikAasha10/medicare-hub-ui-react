import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Your Privacy Matters to Us
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg text-foreground">
            <p className="text-lg mb-8">
              This privacy statement describes how www.Trusticovers.com collects and uses the personal information you provide on our website: www.trusticovers.com.com. It also outlines the choices available to you regarding our use of your personal information and how you can access and update this information.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Collection and Use of Personal Information</h2>
            <p className="mb-4">We collect the following personal information from you:</p>
            <p className="mb-6">
              – Contact Information: such as name, email address, mailing address, and phone number.
            </p>
            <p className="mb-6">
              – As is common with most websites, we automatically gather information about your computer, including your IP address, browser type, referring/exit pages, and operating system. We use this information to send you quote confirmation, respond to customer service requests, administer your account, and address your questions and concerns.
            </p>
            <p className="mb-6">
              – In certain situations, we may disclose your personal information when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others, investigate fraud, respond to a government request, or if Trusti covers is involved in a merger, acquisition, or sale of all or a portion of its assets. In such cases, you will be notified via email and/or a prominent notice on our website regarding any changes in ownership or uses of your personal information, as well as any choices you may have.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Cookies and Other Tracking Technologies</h2>
            <p className="mb-6">
              We may use cookies to personalize your experience, keep track of your preferences and profile information. Cookies are also utilized to collect general usage and volume statistical information that does not include personal information. Additionally, we may employ another company to place cookies on your computer to collect non-personally identifiable information, which helps us compile aggregated statistics about visitors to our site.
            </p>
            <p className="mb-6">
              Our web pages may contain web beacons (also known as single-pixel gifs) set by our third-party partners. These web beacons, along with cookies, enable our partners to compile aggregated statistics for analyzing how our site is used.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Links to Other Websites</h2>
            <p className="mb-6">
              Our website may contain links to other websites whose privacy practices may differ from those of www.trusticovers.com. If you submit personal information to any of those sites, your information will be governed by their respective privacy statements. We encourage you to carefully read the privacy statement of any website you visit.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Security of Your Personal Information</h2>
            <p className="mb-6">
              The security of your personal information is important to us. We utilize secure socket layer technology (SSL) to encrypt the transmission of sensitive information like credit card numbers on our order forms. We follow generally accepted industry standards to protect the personal information submitted to us during transmission and upon receipt. However, please note that no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security. If you have any questions about security on our website, please contact us at Info@trusticovers.com.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Notification of Privacy Statement Changes</h2>
            <p className="mb-6">
              We may update this privacy statement to reflect changes in our information practices. In the event of any material changes, we will notify you by email (sent to the email address specified in your submissions) or by posting a notice on this site prior to the change taking effect. We encourage you to periodically review this page for the latest information on our privacy practices.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Website Ownership & Contact Information</h2>
            <p className="mb-4">This website is owned and operated by Trusti Covers . For any privacy-related concerns, you can contact us at:</p>
            <p className="mb-2">info@trusticovers.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;