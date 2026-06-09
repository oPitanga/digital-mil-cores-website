import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DeliveryBadge from "@/components/DeliveryBadge";
import SocialCTABar from "@/components/SocialCTABar";
import { useRevealOnScroll } from "@/hooks/use-intersection";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const formats = [
  { name: "Quadrado 30×30", pages: "até 100 pág.", cover: "Capa dura", paper: "300g" },
  { name: "Retrato 21×28", pages: "até 80 pág.", cover: "Capa dura ou soft", paper: "250g" },
  { name: "Panorâmico 30×20", pages: "até 60 pág.", cover: "Capa dura", paper: "300g" },
  { name: "Mini 15×15", pages: "até 40 pág.", cover: "Capa dura", paper: "200g" },
];

const features = [
  "Encadernação lay-flat (abre totalmente plano)",
  "Papel fotográfico premium 300g",
  "Capa dura personalizada com foto ou tecido",
  "Impressão com tintas arquivísticas",
  "Design assistido por nossos especialistas",
  "Embalagem presente com caixa premium",
];

const ServicePhotobook = () => {
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
              <Badge className="mb-4">Premium</Badge>
              <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Fotolivros Premium
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Transforme suas memórias em um livro impresso de qualidade editorial. Encadernação
                lay-flat, papel 300g e tintas arquivísticas para durar décadas.
              </p>
              <div className="flex flex-col gap-2 mb-8">
                <DeliveryBadge tier="standard" />
                <DeliveryBadge tier="express" />
              </div>
              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-1">A partir de</p>
                <p style={{ fontFamily: "var(--font-display)" }} className="text-4xl font-bold text-primary">R$ 249</p>
              </div>
              <Button asChild size="lg">
                <a href="https://wa.me/5511999990000" target="_blank" rel="noopener noreferrer">
                  Pedir meu fotolivro pelo WhatsApp
                </a>
              </Button>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 reveal-right">
              <p style={{ fontFamily: "var(--font-display)" }} className="font-semibold text-foreground mb-4">Formatos disponíveis</p>
              <div className="space-y-3">
                {formats.map((f) => (
                  <div key={f.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{f.name}</p>
                      <p className="text-xs text-muted-foreground">{f.pages} · {f.cover}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">{f.paper}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container">
          <div className="reveal mb-10">
            <Badge variant="secondary" className="mb-3">Incluso em todo fotolivro</Badge>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold text-foreground">O que faz a diferença</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex items-start gap-3`}>
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/80">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <SocialCTABar
          heading="Vamos criar seu fotolivro?"
          subheading="Envie suas fotos e preferências. Nossa equipe cuida de tudo."
        />
      </section>

      <SiteFooter />
    </>
  );
};

export default ServicePhotobook;
