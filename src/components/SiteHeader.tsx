import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/services", label: "Serviços" },
  { to: "/knowledge", label: "Base de Conhecimento" },
  { to: "/faq", label: "Perguntas Frequentes" },
  { to: "/contact", label: "Contato" },
];

const SiteHeader = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="container flex items-center justify-between py-4" aria-label="Navegação principal">
        <Link to="/" className="font-display text-xl font-semibold tracking-wide text-primary">
          Digital Mil Cores
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`transition-colors duration-150 ${
                  pathname === l.to ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background">
          <ul className="container flex flex-col gap-4 py-6 text-sm font-medium tracking-wide uppercase">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block transition-colors duration-150 ${
                    pathname === l.to ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
