import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DeliveryBadge from "@/components/DeliveryBadge";
import SocialCTABar from "@/components/SocialCTABar";
import { useRevealOnScroll } from "@/hooks/use-intersection";

const giclee = [
  { size: "A4 (21×30 cm)", cotton: "R$ 89", canvas: "R$ 119", baryta: "R$ 99" },
  { size: "A3 (30×42 cm)", cotton: "R$ 149", canvas: "R$ 189", baryta: "R$ 159" },
  { size: "A2 (42×60 cm)", cotton: "R$ 229", canvas: "R$ 279", baryta: "R$ 249" },
  { size: "A1 (60×84 cm)", cotton: "R$ 349", canvas: "R$ 419", baryta: "R$ 379" },
  { size: "A0 (84×119 cm)", cotton: "R$ 549", canvas: "R$ 649", baryta: "R$ 589" },
];

const restoration = [
  { level: "Básica", desc: "Limpeza de manchas e pequenos arranhões", price: "R$ 150" },
  { level: "Intermediária", desc: "Rasgos, dobras, desbotamento leve", price: "R$ 250" },
  { level: "Avançada", desc: "Danos extensos, reconstrução de partes", price: "R$ 450" },
  { level: "Colorização", desc: "Adição de cor em fotos P&B", price: "R$ 350" },
];

const photobook = [
  { format: "Mini 15×15", pages: "20 pág.", price: "R$ 249" },
  { format: "Retrato 21×28", pages: "40 pág.", price: "R$ 389" },
  { format: "Quadrado 30×30", pages: "40 pág.", price: "R$ 489" },
  { format: "Panorâmico 30×20", pages: "40 pág.", price: "R$ 449" },
  { format: "Páginas adicionais", pages: "por folha", price: "R$ 8" },
];

const largeFormat = [
  { size: "Até 50×70 cm", material: "Papel", price: "R$ 120" },
  { size: "Até 70×100 cm", material: "Papel", price: "R$ 189" },
  { size: "Até 100×140 cm", material: "Papel", price: "R$ 289" },
  { size: "Até 50×70 cm", material: "Lona", price: "R$ 149" },
  { size: "Até 100×140 cm", material: "Lona", price: "R$ 329" },
];

const Pricing = () => {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-secondary/30 to-background py-20 text-center">
        <div className="container max-w-3xl">
          <Badge variant="outline" className="mb-4 text-primary border-primary/40 font-semibold">
            Tabela de Preços
          </Badge>
          <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Preços claros, sem surpresas
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tabela de referência para os principais serviços. Projetos especiais têm orçamento
            personalizado — fale conosco pelo WhatsApp ou Instagram.
          </p>
        </div>
      </section>

      {/* Giclée */}
      <section className="container py-16">
        <div className="reveal mb-8 flex items-start justify-between flex-wrap gap-4">
          <div>
            <Badge variant="secondary" className="mb-2">Fine Art</Badge>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-bold text-foreground">Impressão Giclée</h2>
          </div>
          <div className="flex flex-col gap-1.5">
            <DeliveryBadge tier="standard" />
            <DeliveryBadge tier="express" />
            <DeliveryBadge tier="rush" />
          </div>
        </div>
        <div className="reveal overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-foreground">Tamanho</th>
                <th className="px-4 py-3 font-semibold text-foreground text-center">Papel Cotton</th>
                <th className="px-4 py-3 font-semibold text-foreground text-center">Canvas</th>
                <th className="px-4 py-3 font-semibold text-foreground text-center">Baryta</th>
              </tr>
            </thead>
            <tbody>
              {giclee.map((row, i) => (
                <tr key={row.size} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                  <td className="px-4 py-3 font-medium text-foreground">{row.size}</td>
                  <td className="px-4 py-3 text-center text-primary font-semibold">{row.cotton}</td>
                  <td className="px-4 py-3 text-center text-primary font-semibold">{row.canvas}</td>
                  <td className="px-4 py-3 text-center text-primary font-semibold">{row.baryta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3">* Tamanhos personalizados disponíveis sob orçamento. Incluem calibração de cor e embalagem.</p>
      </section>

      {/* Restauração */}
      <section className="bg-secondary/40 border-y border-border py-16">
        <div className="container">
          <div className="reveal mb-8 flex items-start justify-between flex-wrap gap-4">
            <div>
              <Badge variant="secondary" className="mb-2">Especialidade</Badge>
              <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-bold text-foreground">Restauração Fotográfica</h2>
            </div>
            <div className="flex flex-col gap-1.5">
              <DeliveryBadge tier="standard" />
              <DeliveryBadge tier="express" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {restoration.map((r, i) => (
              <Card key={r.level} className={`reveal reveal-delay-${i + 1} border-border`}>
                <CardHeader className="pb-2">
                  <p style={{ fontFamily: "var(--font-display)" }} className="font-bold text-foreground">{r.level}</p>
                  <p className="text-xs text-muted-foreground">{r.desc}</p>
                </CardHeader>
                <CardContent>
                  <p style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-bold text-primary">{r.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">por foto</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">* Análise gratuita antes de fechar o pedido. Valor final pode variar conforme a complexidade.</p>
        </div>
      </section>

      {/* Fotolivros */}
      <section className="container py-16">
        <div className="reveal mb-8 flex items-start justify-between flex-wrap gap-4">
          <div>
            <Badge variant="secondary" className="mb-2">Premium</Badge>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-bold text-foreground">Fotolivros</h2>
          </div>
          <div className="flex flex-col gap-1.5">
            <DeliveryBadge tier="standard" />
            <DeliveryBadge tier="express" />
          </div>
        </div>
        <div className="reveal overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-foreground">Formato</th>
                <th className="px-4 py-3 font-semibold text-foreground text-center">Páginas base</th>
                <th className="px-4 py-3 font-semibold text-foreground text-center">Preço</th>
              </tr>
            </thead>
            <tbody>
              {photobook.map((row, i) => (
                <tr key={row.format} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                  <td className="px-4 py-3 font-medium text-foreground">{row.format}</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">{row.pages}</td>
                  <td className="px-4 py-3 text-center text-primary font-semibold">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Grande Formato */}
      <section className="bg-secondary/40 border-y border-border py-16">
        <div className="container">
          <div className="reveal mb-8 flex items-start justify-between flex-wrap gap-4">
            <div>
              <Badge variant="secondary" className="mb-2">Grande Formato</Badge>
              <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-bold text-foreground">Impressão de Grande Formato</h2>
            </div>
            <div className="flex flex-col gap-1.5">
              <DeliveryBadge tier="standard" />
              <DeliveryBadge tier="rush" />
            </div>
          </div>
          <div className="reveal overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary/60">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Dimensão</th>
                  <th className="px-4 py-3 font-semibold text-foreground text-center">Material</th>
                  <th className="px-4 py-3 font-semibold text-foreground text-center">Preço</th>
                </tr>
              </thead>
              <tbody>
                {largeFormat.map((row, i) => (
                  <tr key={`${row.size}-${row.material}`} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                    <td className="px-4 py-3 font-medium text-foreground">{row.size}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{row.material}</td>
                    <td className="px-4 py-3 text-center text-primary font-semibold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">* Dimensões maiores disponíveis sob orçamento.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <SocialCTABar
          heading="Projeto especial? Fale conosco."
          subheading="Produção em série, telas com chassi, formatos customizados — fazemos orçamentos personalizados."
        />
      </section>

      <SiteFooter />
    </>
  );
};

export default Pricing;
