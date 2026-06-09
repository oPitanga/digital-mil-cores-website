import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DeliveryBadge from "@/components/DeliveryBadge";
import LabCapacityBar from "@/components/LabCapacityBar";
import SocialCTABar from "@/components/SocialCTABar";
import { useRevealOnScroll } from "@/hooks/use-intersection";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const specs = [
  { label: "Resolução", value: "1440 dpi" },
  { label: "Largura máxima", value: "1,5 m" },
  { label: "Comprimento", value: "Ilimitado (rolo)" },
  { label: "Acabamentos", value: "Fosco, Brilhante, Lona, Banner" },
  { label: "Suportes", value: "Papel, Lona, Adesivo, Banner" },
  { label: "Tintas", value: "Pigmentadas resistentes a UV" },
];

const useCases = [
  { icon: "🖼️", title: "Exposições de arte", desc: "Impressões de alta qualidade para galerias e museus." },
  { icon: "🏢", title: "Decoração corporativa", desc: "Painéis e murais para escritórios e lojas." },
  { icon: "🎉", title: "Eventos e festas", desc: "Banners, backdrops e painéis personalizados." },
  { icon: "📸", title: "Fotografia profissional", desc: "Ampliações para estúdios e portfólios." },
];

const includes = [
  "Impressão em alta resolução 1440 dpi",
  "Ajuste de cor profissional incluído",
  "Opção de montagem em moldura ou chassis",
  "Embalagem em tubo rígido para transporte",
  "Entrega para todo o Brasil",
  "Orçamento sem compromisso",
];

const ServiceLargeFormat = () => {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />

      <section className="bg-gradient-to-br from-background via-secondary/30 to-background py-20">
        <div className="container">
          <Button asChild variant="ghost" size="sm" className="mb-6 gap-1 text-muted-foreground">
            <Link to="/"><ArrowLeft className="h-4 w-4" /> Voltar ao início</Link>
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Grande Formato</Badge>
              <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Impressão de Grande Formato
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Transforme suas fotos e artes em impressões impactantes de até 1,5 m de largura.
                Perfeitas para exposições, eventos e decoração.
              </p>
              <div className="flex flex-col gap-2 mb-8">
                <DeliveryBadge tier="standard" />
                <DeliveryBadge tier="express" />
                <DeliveryBadge tier="rush" />
              </div>
              <Button asChild size="lg">
                <a href="https://wa.me/5511999990000" target="_blank" rel="noopener noreferrer">
                  Solicitar orçamento pelo WhatsApp
                </a>
              </Button>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4 reveal-right">
              <LabCapacityBar percent={78} label="Fila atual de grande formato" />
              <p className="text-xs text-muted-foreground">Alta demanda · Agende com antecedência</p>
              <div className="border-t border-border pt-4 space-y-3">
                {specs.map((s) => (
                  <div key={s.label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{s.label}</span>
                    <span className="font-semibold text-foreground">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="reveal mb-12">
          <Badge variant="secondary" className="mb-3">Aplicações</Badge>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold text-foreground mb-3">Para quem é ideal</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((u, i) => (
            <div key={u.title} className={`reveal reveal-delay-${i + 1} bg-card border border-border rounded-xl p-6 text-center`}>
              <div className="text-4xl mb-3">{u.icon}</div>
              <p style={{ fontFamily: "var(--font-display)" }} className="font-semibold text-foreground mb-1">{u.title}</p>
              <p className="text-sm text-muted-foreground">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container">
          <div className="reveal mb-10">
            <Badge variant="secondary" className="mb-3">Incluso no serviço</Badge>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold text-foreground">O que você recebe</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {includes.map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex items-start gap-3`}>
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <SocialCTABar
          heading="Vamos ampliar sua visão?"
          subheading="Informe as dimensões e o uso pretendido e fazemos o orçamento na hora."
        />
      </section>

      <SiteFooter />
    </>
  );
};

export default ServiceLargeFormat;
