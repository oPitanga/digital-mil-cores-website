import { Link } from "react-router-dom";

const SiteHeader = () => (
  <header className="border-b border-border">
    <nav className="container flex items-center justify-between py-4" aria-label="Main navigation">
      <Link to="/" className="font-display text-xl font-bold text-primary">
        Digital Mil Cores
      </Link>
      <ul className="flex items-center gap-6 text-sm font-medium">
        <li><Link to="/" className="text-foreground hover:text-accent transition-colors duration-100">Home</Link></li>
        <li><Link to="/services" className="text-foreground hover:text-accent transition-colors duration-100">Services</Link></li>
        <li><Link to="/knowledge" className="text-foreground hover:text-accent transition-colors duration-100">Knowledge Hub</Link></li>
        <li><Link to="/faq" className="text-foreground hover:text-accent transition-colors duration-100">FAQ</Link></li>
        <li><Link to="/contact" className="text-foreground hover:text-accent transition-colors duration-100">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default SiteHeader;
