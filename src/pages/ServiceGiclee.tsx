import { useEffect } from "react";
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
  { label: "Resolução", value: "2400 dpi" },
  { label: "Tintas", value: "Arquivísticas UltraChrome HDX" },
  { label: "Suportes", value: "Cotton, Canvas, Baryta, Fine Art" },
  { label: "Largura máxima", value: "1,5 m" },
  { label: "Durabilidade", value: "100+ anos (em condições ideais)" },
  { label: "Perfis ICC", value: "Incluídos para cada papel" },
];

const benefits = [
  "Fidelidade cromática com gama de cor expandida",
  "Aprovação de prova digital antes da impressão",
  "Embalagem rígida anti-umidade para transporte seguro",
  "Suporte técnico para preparo de arquivo",
  "Certificado de qualidade arquivística incluso",
  "Entrega para todo o Brasil",
];

const papers = [
  { name: "Hahnemühle Photo Rag", gsm: "308g", finish: "Fosco", desc: "Ideal para fine art e retratos clássicos." },
  { name: "Canson Baryta", gsm: "310g", finish: "Semibrilhante", desc: "Qualidade de galeria com toque de prata." },
  { name: "Canvas Premium", gsm: "340g", finish: "Texturizado", desc: "Para obras de arte e decoração." },
  { name: "Canson PhotoArt Rag", gsm: "270g", finish: "Fosco", desc: "Versatilidade para projetos variados." },
];

const ServiceGiclee = () => {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-secondary/30 to-background py-20">
        <div className="container">
          <Button asChild variant="ghost" size="sm" className="mb-6 gap-1 text-muted-foreground">
            <Link to="/"><ArrowLeft className="h-4 w-4" /> Voltar ao início</Link>
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Fine Art</Badge>
              <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Impressão Giclée
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A técnica de impressão mais fiel que existe para fotografia e arte. Reproduzimos cada detalhe
                com precisão absoluta usando tintas arquivísticas de 12 canais.
              </p>
              <div className="flex flex-col gap-2 mb-8">
                <DeliveryBadge tier="standard" />
                <DeliveryBadge tier="express" />
                <DeliveryBadge tier="rush" />
              </div>
              <Button asChild size="lg" className="gap-2">
                <a href="https://wa.me/5511999990000" target="_blank" rel="noopener noreferrer">
                  Pedir orçamento pelo WhatsApp
                </a>
              </Button>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4 reveal-right">
              <LabCapacityBar percent={62} label="Fila atual de Giclée" />
              <p className="text-xs text-muted-foreground">Prazo estimado: 5–7 dias úteis para novos pedidos</p>
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

      {/* Papéis disponíveis */}
      <section className="container py-20">
        <div className="reveal mb-12">
          <Badge variant="secondary" className="mb-3">Suportes de Impressão</Badge>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold text-foreground mb-3">
            Papéis disponíveis
          </h2>
          <p className="text-muted-foreground max-w-xl">Trabalhamos com os melhores papéis fine art do mercado, cada um com perfil ICC otimizado.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {papers.map((p, i) => (
            <div key={p.name} className={`reveal reveal-delay-${i + 1} bg-card border border-border rounded-xl p-5`}>
              <p style={{ fontFamily: "var(--font-display)" }} className="font-semibold text-foreground mb-1">{p.name}</p>
              <div className="flex gap-2 mb-2">
                <Badge variant="outline" className="text-xs">{p.gsm}</Badge>
                <Badge variant="outline" className="text-xs">{p.finish}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container">
          <div className="reveal mb-10">
            <Badge variant="secondary" className="mb-3">Incluso em todo pedido</Badge>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold text-foreground">O que está incluído</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex items-start gap-3`}>
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/80">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <SocialCTABar
          heading="Vamos imprimir sua obra?"
          subheading="Envie suas fotos ou arte e receba um orçamento personalizado em minutos."
        />
      </section>

      <SiteFooter />
    </>
  );
};

export default ServiceGiclee;
