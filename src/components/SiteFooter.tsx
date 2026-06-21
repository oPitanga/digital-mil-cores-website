import { Link } from "react-router-dom";
import { Heart, MessageCircle, Instagram, Music2, ShoppingBag } from "lucide-react";

const SiteFooter = () => (
  <footer className="border-t border-border mt-24 bg-card">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-[hsl(152,68%,28%)] text-primary-foreground font-bold text-base shadow-md shadow-primary/25">
              D
            </span>
            <p style={{ fontFamily: "var(--font-display)" }} className="text-lg font-bold text-foreground">
              Digital Mil Cores
            </p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Laboratório fotográfico online especializado em revelação fotográfica de alta qualidade.
            Presente no mercado há mais de 40 anos.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href="https://shopee.com.br/digitalmilcores" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-orange-500 transition-colors" aria-label="Shopee">
              <ShoppingBag className="h-5 w-5" />
            </a>
            <a href="https://www.tiktok.com/@digitalmilcores" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok Shop">
              <Music2 className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/digitalmilcores" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-pink-500 transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://wa.me/5511999990000" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-green-600 transition-colors" aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
          <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-3 w-3 text-primary fill-primary" />
            <span>para famílias</span>
          </div>
        </div>

        {/* Serviços */}
        <nav aria-label="Serviços">
          <p style={{ fontFamily: "var(--font-display)" }} className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
            Serviços
          </p>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/services/giclee",      label: "Revelação Fotográfica" },
              { to: "/services/restoration", label: "Restauração" },
              { to: "/pricing",              label: "Tabela de Preços" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Empresa */}
        <nav aria-label="Empresa">
          <p style={{ fontFamily: "var(--font-display)" }} className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
            Empresa
          </p>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/about",       label: "Sobre nós" },
              { to: "/studio-tour", label: "O Laboratório" },
              { to: "/faq",         label: "FAQ" },
              { to: "/contact",     label: "Contato" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Lojas Online */}
        <div>
          <p style={{ fontFamily: "var(--font-display)" }} className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
            Comprar Online
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://shopee.com.br/digitalmilcores"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-orange-500 transition-colors font-medium"
              >
                <ShoppingBag className="h-4 w-4" /> Shopee
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@digitalmilcores"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                <Music2 className="h-4 w-4" /> TikTok Shopping
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/digitalmilcores"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-pink-500 transition-colors font-medium"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li className="pt-2 text-xs text-muted-foreground border-t border-border">
              <p>📍 São Paulo, SP — Brasil</p>
              <p className="mt-1">Seg–Sex, 9h às 18h</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg,#E91E8C,#FF3300,#FF6600,#FFD700,#00BCD4,#9C27B0)' }} />
      <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Digital Mil Cores. Todos os direitos reservados.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          {["🌿 Qualidade de Revelação Fotográfica", "🔒 Envio Seguro", "💛 Atendimento Humano e Personalizado"].map((badge) => (
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
