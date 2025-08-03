import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Trusti Covers</h3>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              Our team of experienced professionals is committed to delivering exceptional customer service and ensuring that our clients have the coverage they need to protect themselves and their assets.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              <Link to="/medicare" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
                Medicare
              </Link>
              <Link to="/auto-insurance" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
                Auto Insurance
              </Link>
              <Link to="/final-expense" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
                Final Expense
              </Link>
              <Link to="/aca" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm">
                ACA
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/90">info@trusticovers.com</p>
              <p className="text-primary-foreground/90">+1 947 129 8469</p>
              <p className="text-primary-foreground/90">SMID: MULTI-PLAN_SQKueBcR8p2025_C</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 pt-8 space-y-4">
          <p className="text-xs text-primary-foreground/80 leading-relaxed">
            <strong>Insurance Disclaimer:</strong> Trusti Covers is a free service, with no obligation to enroll, to assist users in getting insurance quotes from insurance providers. Trusti Covers is not affiliated with any state or government agency. Trusti Covers is not an insurance agency or broker, nor an insurance referral service.
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