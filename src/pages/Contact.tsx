import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Instagram, ShoppingBag, Music2, MapPin, Clock } from "lucide-react";
import { useRevealOnScroll } from "@/hooks/use-intersection";

const channels = [
  {
    icon: ShoppingBag,
    label: "Shopee",
    desc: "Compre com segurança e rastreamento",
    href: "https://shopee.com.br/digitalmilcores",
    cta: "Acessar loja",
    gradient: "from-orange-500 to-orange-600",
    shadow: "shadow-orange-500/30",
    bg: "bg-orange-50 border-orange-200 hover:border-orange-400",
    iconColor: "text-orange-500",
  },
  {
    icon: Music2,
    label: "TikTok Shopping",
    desc: "Veja nossos produtos em vídeo",
    href: "https://www.tiktok.com/@digitalmilcores",
    cta: "Ver loja",
    gradient: "from-[#010101] to-[#444]",
    shadow: "shadow-black/25",
    bg: "bg-gray-50 border-gray-200 hover:border-gray-400",
    iconColor: "text-gray-900",
  },
  {
    icon: Instagram,
    label: "Instagram",
    desc: "@digitalmilcores",
    href: "https://instagram.com/digitalmilcores",
    cta: "Seguir e comprar",
    gradient: "from-pink-500 to-purple-600",
    shadow: "shadow-pink-500/30",
    bg: "bg-pink-50 border-pink-200 hover:border-pink-400",
    iconColor: "text-pink-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    desc: "Atendimento em minutos",
    href: "https://wa.me/5511999990000",
    cta: "Iniciar conversa",
    gradient: "from-green-500 to-green-600",
    shadow: "shadow-green-500/30",
    bg: "bg-green-50 border-green-200 hover:border-green-400",
    iconColor: "text-green-600",
  },
];

const ContactPage = () => {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background py-20 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float-delay" />
        </div>
        <div className="container max-w-2xl relative">
          <Badge variant="outline" className="mb-4 text-primary border-primary/40 font-semibold px-4 py-1.5">Contato</Badge>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Fale com a nossa equipe
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Compre diretamente pela Shopee ou TikTok Shopping, ou entre em contato
            pelo Instagram e WhatsApp.
          </p>
        </div>
      </section>

      {/* Canais de compra e atendimento */}
      <section className="container py-16 max-w-4xl mx-auto">
        <div className="text-center mb-10 reveal">
          <Badge variant="secondary" className="mb-3 px-4 py-1">Onde nos encontrar</Badge>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-2xl md:text-3xl font-bold text-foreground"
          >
            Escolha o canal de sua preferência
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {channels.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${i + 1} group flex items-center gap-5 ${c.bg} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                <c.icon className={`h-7 w-7 ${c.iconColor}`} />
              </div>
              <div className="flex-1 text-left">
                <p className="font-bold text-foreground text-base">{c.label}</p>
                <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
                <span className={`inline-flex items-center gap-1 text-xs font-bold bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent`}>
                  {c.cta} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Info adicional */}
      <section className="container pb-20 max-w-4xl mx-auto">
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Endereço</p>
              <p className="text-sm font-semibold text-foreground">R. Benedito de Almeida Bueno, 134</p>
              <p className="text-xs text-muted-foreground">Centro — Atibaia, SP</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Horário de atendimento</p>
              <p className="text-sm font-semibold text-foreground">Seg–Sex, 9h às 18h</p>
              <p className="text-xs text-muted-foreground">Sábados, 9h às 13h</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default ContactPage;
