import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t border-border/50 mt-24 bg-card">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-xl font-semibold text-primary mb-3">Digital Mil Cores</p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Professional online photo lab specializing in high-fidelity Giclée printing,
            photo restoration, and archival-quality output since 2010.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <p className="font-display text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Pages</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/knowledge" className="text-muted-foreground hover:text-primary transition-colors">Knowledge Hub</Link></li>
            <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/llms.txt" className="text-muted-foreground hover:text-primary transition-colors">llms.txt</Link></li>
          </ul>
        </nav>
        <div>
          <p className="font-display text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Contact</p>
          <address className="text-sm text-muted-foreground not-italic space-y-2 leading-relaxed">
            <p>Email: info@digitalmilcores.com</p>
            <p>Phone: +55 11 9999-0000</p>
            <p>São Paulo, SP — Brazil</p>
          </address>
        </div>
      </div>
      <div className="border-t border-border/50 mt-12 pt-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Digital Mil Cores. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
