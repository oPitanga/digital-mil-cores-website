import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { to: "/services/giclee",      label: "Revelação Fotográfica" },
  { to: "/services/restoration", label: "Restauração" },
];

const links = [
  { to: "/about",       label: "Sobre nós" },
  { to: "/studio-tour", label: "O Laboratório" },
  { to: "/pricing",     label: "Preços" },
  { to: "/faq",         label: "FAQ" },
  { to: "/contact",     label: "Contato" },
];

const SiteHeader = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isServiceActive = services.some((s) => pathname === s.to);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md shadow-sm">
      <nav className="container flex items-center justify-between py-4" aria-label="Navegação principal">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-[hsl(240,88%,58%)] text-white font-bold text-lg shadow-md shadow-primary/30">
            D
          </span>
          <span style={{ fontFamily: "var(--font-display)" }} className="text-xl font-bold text-foreground">
            Digital <span className="rainbow-text">Mil Cores</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm font-semibold">
          {/* Dropdown serviços */}
          <li className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-150 ${
                isServiceActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground/70 hover:bg-secondary hover:text-foreground"
              }`}
            >
              Serviços <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-card border border-border rounded-xl shadow-xl py-1 z-50">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`px-4 py-2 rounded-full transition-all duration-150 ${
                  pathname === l.to
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="container flex flex-col gap-1 py-4">
            <li>
              <p className="px-4 pt-2 pb-1 text-xs text-muted-foreground font-bold uppercase tracking-wide">Serviços</p>
            </li>
            {services.map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    pathname === s.to
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {s.label}
                </Link>
              </li>
            ))}
            <li><div className="border-t border-border my-2" /></li>
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    pathname === l.to
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:bg-secondary hover:text-foreground"
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
