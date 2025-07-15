import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Reliance Covers</h3>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              Our team of experienced professionals is committed to delivering exceptional customer service and ensuring that our clients have the coverage they need to protect themselves and their assets.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              <Link to="/medicare" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
                Medicare
              </Link>
              <div className="text-primary-foreground/90 text-sm">Auto Insurance</div>
              <div className="text-primary-foreground/90 text-sm">Final Expense</div>
              <div className="text-primary-foreground/90 text-sm">ACA</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/90">info@reliancecovers.com</p>
              <p className="text-primary-foreground/90">+1 3137204214</p>
              <p className="text-primary-foreground/90">SMID: MULTI-PLAN_SQKueBcR8p2025_C</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 pt-8 space-y-4">
          <p className="text-xs text-primary-foreground/80 leading-relaxed">
            <strong>Insurance Disclaimer:</strong> Reliance Covers is a free service, with no obligation to enroll, to assist users in getting insurance quotes from insurance providers. Reliance Covers is not affiliated with any state or government agency. Reliance Covers is not an insurance agency or broker, nor an insurance referral service.
          </p>
          <p className="text-xs text-primary-foreground/80">
            © All Rights Reserved | SMID: MULTI-PLAN_SQKueBcR8p2025_C
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;