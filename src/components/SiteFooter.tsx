import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const SiteFooter = () => (
  <footer className="border-t border-orange-100 mt-24 bg-white">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-primary text-white font-bold text-base shadow-sm">
              D
            </span>
            <p style={{ fontFamily: "var(--font-display)" }} className="text-lg font-semibold text-foreground">
              Digital Mil Cores
            </p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Laboratório fotográfico online profissional especializado em impressão Giclée de alta fidelidade,
            restauração de fotos e produção com qualidade arquivística desde 2010.
          </p>
          <div className="flex items-center gap-1.5 mt-4 text-xs text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-3 w-3 text-primary fill-primary" />
            <span>para famílias</span>
          </div>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p style={{ fontFamily: "var(--font-display)" }} className="text-sm font-semibold text-foreground mb-4">
            Páginas
          </p>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Início" },
              { to: "/services", label: "Serviços" },
              { to: "/knowledge", label: "Base de Conhecimento" },
              { to: "/faq", label: "Perguntas Frequentes" },
              { to: "/contact", label: "Contato" },
              { to: "/llms.txt", label: "llms.txt" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p style={{ fontFamily: "var(--font-display)" }} className="text-sm font-semibold text-foreground mb-4">
            Contato
          </p>
          <address className="text-sm text-muted-foreground not-italic space-y-2 leading-relaxed font-medium">
            <p>📧 info@digitalmilcores.com</p>
            <p>📞 +55 11 9999-0000</p>
            <p>📍 São Paulo, SP — Brasil</p>
            <p className="pt-1 text-xs">Seg–Sex, 9h às 18h</p>
          </address>
        </div>
      </div>

      <div className="border-t border-orange-100 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Digital Mil Cores. Todos os direitos reservados.
        </p>
        <div className="flex gap-3">
          {["🌟 Qualidade Arquivística", "🔒 Envio Seguro", "💛 Suporte Familiar"].map((badge) => (
            <span key={badge} className="text-xs bg-secondary rounded-full px-3 py-1 text-foreground/70 font-semibold">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
