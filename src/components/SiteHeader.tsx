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
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="container flex items-center justify-between py-4" aria-label="Navegação principal">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-white font-bold text-lg shadow-sm">
            D
          </span>
          <span style={{ fontFamily: "var(--font-display)" }} className="text-xl font-semibold text-foreground">
            Digital Mil Cores
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm font-semibold">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`px-4 py-2 rounded-full transition-all duration-150 ${
                  pathname === l.to
                    ? "bg-primary text-white shadow-sm"
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
        <div className="md:hidden border-t border-orange-100 bg-white">
          <ul className="container flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    pathname === l.to
                      ? "bg-primary text-white"
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
