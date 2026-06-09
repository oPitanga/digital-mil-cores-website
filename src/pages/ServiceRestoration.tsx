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

const steps = [
  { step: "01", title: "Envio da foto original", desc: "Digitalização em alta resolução ou envio do arquivo." },
  { step: "02", title: "Análise e diagnóstico", desc: "Avaliamos danos, manchas, rasgos e desbotamento." },
  { step: "03", title: "Retoque manual", desc: "Restauração pixel a pixel por especialista certificado." },
  { step: "04", title: "Aprovação prévia", desc: "Você aprova a versão digital antes da impressão." },
  { step: "05", title: "Impressão e entrega", desc: "Impresso em Giclée com papel arquivístico premium." },
];

const includes = [
  "Análise gratuita antes de fechar o pedido",
  "Retoque digital manual de alta precisão",
  "Remoção de manchas, riscos e dobras",
  "Correção de coloração e desbotamento",
  "Entrega em arquivo TIFF + JPEG",
  "Impressão opcional em papel arquivístico",
];

const ServiceRestoration = () => {
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
              <Badge className="mb-4">Especialidade</Badge>
              <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Restauração Fotográfica
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Devolvemos a vida às fotos da sua família. Nossos especialistas restauram imagens danificadas,
                desbotadas ou rasgadas com precisão artesanal.
              </p>
              <div className="flex flex-col gap-2 mb-8">
                <DeliveryBadge tier="standard" />
                <DeliveryBadge tier="express" />
              </div>
              <Button asChild size="lg" className="gap-2">
                <a href="https://wa.me/5511999990000" target="_blank" rel="noopener noreferrer">
                  Pedir análise gratuita pelo WhatsApp
                </a>
              </Button>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4 reveal-right">
              <LabCapacityBar percent={35} label="Fila atual de restauração" />
              <p className="text-xs text-muted-foreground">Prazo estimado: 5–10 dias úteis conforme complexidade</p>
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-2">A partir de</p>
                <p style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold text-primary">R$ 150</p>
                <p className="text-xs text-muted-foreground mt-1">por foto · valor varia com a complexidade dos danos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="container py-20">
        <div className="reveal mb-12">
          <Badge variant="secondary" className="mb-3">Como funciona</Badge>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold text-foreground mb-3">Processo de restauração</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.step} className={`reveal reveal-delay-${i + 1} bg-card border border-border rounded-xl p-5`}>
              <p className="text-3xl font-bold text-primary/20 mb-2">{s.step}</p>
              <p style={{ fontFamily: "var(--font-display)" }} className="font-semibold text-foreground mb-1">{s.title}</p>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Incluso */}
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
          heading="Vamos restaurar sua história?"
          subheading="Envie uma foto da imagem e fazemos uma análise gratuita sem compromisso."
        />
      </section>

      <SiteFooter />
    </>
  );
};

export default ServiceRestoration;
