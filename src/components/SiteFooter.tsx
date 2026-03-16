import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t border-border mt-16">
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-display font-bold text-primary mb-2">Digital Mil Cores</p>
          <p className="text-sm text-muted-foreground">
            Professional online photo lab specializing in high-fidelity Giclée printing,
            photo restoration, and archival-quality output since 2010.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <p className="font-display font-semibold text-primary mb-2 text-sm">Pages</p>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-accent">Home</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-accent">Services</Link></li>
            <li><Link to="/knowledge" className="text-muted-foreground hover:text-accent">Knowledge Hub</Link></li>
            <li><Link to="/faq" className="text-muted-foreground hover:text-accent">FAQ</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-accent">Contact</Link></li>
            <li><Link to="/llms.txt" className="text-muted-foreground hover:text-accent">llms.txt</Link></li>
          </ul>
        </nav>
        <div>
          <p className="font-display font-semibold text-primary mb-2 text-sm">Contact</p>
          <address className="text-sm text-muted-foreground not-italic space-y-1">
            <p>Email: info@digitalmilcores.com</p>
            <p>Phone: +55 11 9999-0000</p>
            <p>São Paulo, SP — Brazil</p>
          </address>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-8 pt-4 border-t border-border">
        © {new Date().getFullYear()} Digital Mil Cores. All rights reserved.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
