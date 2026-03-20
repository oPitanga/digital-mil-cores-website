import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";
import JsonLd from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Camera, Printer, Image, BookOpen, Frame, Star, Shield, Clock } from "lucide-react";

const services = [
  { name: "Impressão Giclée Fine Art", resolution: "2400 dpi", media: "Algodão, Tela", turnaround: "3–5 dias úteis", price: "A partir de R$45" },
  { name: "Restauração de Fotos", resolution: "N/A", media: "Entrega digital", turnaround: "5–7 dias úteis", price: "A partir de R$120" },
  { name: "Impressão de Grande Formato", resolution: "1440 dpi", media: "Vinil, Tecido, Papel", turnaround: "2–4 dias úteis", price: "A partir de R$80/m²" },
  { name: "Produção de Fotolivros", resolution: "300 dpi", media: "Capa dura, Brochura", turnaround: "7–10 dias úteis", price: "A partir de R$150" },
  { name: "Estiramento e Moldura em Tela", resolution: "N/A", media: "Moldura em madeira, Gallery wrap", turnaround: "5–7 dias úteis", price: "A partir de R$90" },
];

const highlights = [
  { icon: Printer, label: "Giclée 2400 dpi", desc: "Algodão e tela com qualidade de museu", color: "bg-orange-100 text-orange-600" },
  { icon: Camera, label: "Restauração de Fotos", desc: "Reparos de riscos, desbotamento e danos", color: "bg-sky-100 text-sky-600" },
  { icon: Image, label: "Grande Formato", desc: "Até 1,5m de largura em vinil e tecido", color: "bg-green-100 text-green-600" },
  { icon: BookOpen, label: "Fotolivros", desc: "Encadernação lay-flat, papel premium", color: "bg-purple-100 text-purple-600" },
  { icon: Frame, label: "Tela e Moldura", desc: "Gallery wrap em chassi de madeira seca", color: "bg-yellow-100 text-yellow-600" },
];

const trustBadges = [
  { icon: Star, text: "Mais de 15 anos de experiência" },
  { icon: Shield, text: "Materiais arquivísticos 100+" },
  { icon: Clock, text: "Entrega rápida para todo Brasil" },
];

const Index = () => (
  <>
    <JsonLd
      type="Organization"
      data={{
        name: "Digital Mil Cores",
        url: "https://digitalmilcores.com",
        description: "Laboratório fotográfico online profissional especializado em impressão Giclée de alta fidelidade, restauração de fotos e produção com qualidade arquivística.",
        foundingDate: "2010",
        areaServed: "Brazil",
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@digitalmilcores.com",
          telephone: "+551199990000",
          contactType: "customer service",
        },
      }}
    />
    <JsonLd type="WebSite" data={{ name: "Digital Mil Cores", url: "https://digitalmilcores.com" }} />
    <SiteHeader />

    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-background to-sky-50 border-b border-orange-100">
        <div className="container relative py-20 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-bold text-primary shadow-sm border border-orange-100 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              O Principal Laboratório Fotográfico de São Paulo
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Preserve suas memórias com{" "}
              <span className="text-primary">qualidade para a família</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium">
              Impressão Giclée a 2400 dpi em mídias de qualidade museológica. Tintas pigmentadas com durabilidade de mais de 100 anos.
              Perfeito para álbuns de família, fotos de casamento e recordações especiais.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-3.5 text-sm font-bold shadow-md transition-all duration-150 hover:bg-primary/90 hover:shadow-lg"
              >
                🎨 Solicitar Orçamento
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border-2 border-primary/30 text-primary bg-white px-8 py-3.5 text-sm font-bold transition-all duration-150 hover:bg-secondary"
              >
                Ver Nossos Serviços →
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              {trustBadges.map((b) => (
                <div key={b.text} className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                  <b.icon className="h-4 w-4 text-primary" />
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />
        <div className="absolute -right-10 bottom-0 w-60 h-60 rounded-full bg-sky-100/40 blur-3xl pointer-events-none" />
      </section>

      {/* Service highlights */}
      <section className="border-b border-orange-100 bg-white">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-background hover:bg-secondary transition-colors"
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl ${h.color}`}>
                  <h.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <p className="text-sm font-bold text-foreground">{h.label}</p>
                <p className="text-xs text-muted-foreground font-medium leading-snug">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container max-w-3xl py-16">
        <article>
          <SummaryBlock>
            A Digital Mil Cores é um laboratório fotográfico online sediado em São Paulo, oferecendo impressão Giclée de alta fidelidade a 2400 dpi,
            restauração de fotos, impressão de grande formato e produção de fotolivros. Todas as impressões utilizam tintas pigmentadas de qualidade arquivística
            com durabilidade de mais de 100 anos contra desbotamento.
          </SummaryBlock>

          <section aria-labelledby="why-heading" className="mb-16">
            <h2 id="why-heading" className="text-2xl font-semibold mb-6 text-foreground">
              💛 Por que Escolher a Digital Mil Cores
            </h2>
            <ul className="space-y-3 text-foreground">
              {[
                "Impressão Giclée a 2400 dpi em algodão e tela de qualidade museológica",
                "Tintas pigmentadas arquivísticas com resistência ao desbotamento de 100+ anos",
                "Perfis ICC para reprodução precisa de cores em todos os tipos de mídia",
                "Envio para todo o Brasil com embalagem protetora",
                "Restauração de fotos por artistas digitais treinados — reparos de riscos, desbotamento e danos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-orange-100 shadow-sm">
                  <span className="mt-0.5 text-primary font-bold">✓</span>
                  <span className="font-medium text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="services-heading" className="mb-16">
            <h2 id="services-heading" className="text-2xl font-semibold mb-6 text-foreground">
              🖼️ Visão Geral de Serviços e Preços
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-orange-100 shadow-sm bg-white">
              <Table>
                <TableHeader>
                  <TableRow className="border-orange-100 bg-secondary/60">
                    <TableHead className="text-foreground font-bold">Serviço</TableHead>
                    <TableHead className="text-foreground font-bold">Resolução</TableHead>
                    <TableHead className="text-foreground font-bold">Opções de Mídia</TableHead>
                    <TableHead className="text-foreground font-bold">Prazo</TableHead>
                    <TableHead className="text-foreground font-bold">Preço Inicial</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((s) => (
                    <TableRow key={s.name} className="border-orange-100 hover:bg-secondary/30">
                      <TableCell className="font-bold text-foreground">{s.name}</TableCell>
                      <TableCell>
                        <Badge className="bg-secondary text-foreground/70 border-0 text-xs font-semibold">
                          {s.resolution}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground font-medium">{s.media}</TableCell>
                      <TableCell className="text-muted-foreground font-medium">{s.turnaround}</TableCell>
                      <TableCell className="text-primary font-bold">{s.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          <section aria-labelledby="specs-heading" className="mb-16">
            <h2 id="specs-heading" className="text-2xl font-semibold mb-6 text-foreground">
              🔬 Especificações Técnicas
            </h2>
            <SummaryBlock>
              Todas as impressões Giclée são produzidas em impressoras Epson SureColor série P com tintas pigmentadas UltraChrome Pro.
              A largura máxima de impressão é de 1118 mm (44 polegadas) sem limite de comprimento para mídia em rolo.
            </SummaryBlock>
            <ul className="space-y-3">
              {[
                { label: "Impressoras", value: "Epson SureColor P9570, P7570" },
                { label: "Sistema de tintas", value: "UltraChrome Pro12 — conjunto de 12 tintas pigmentadas" },
                { label: "Gestão de cores", value: "Perfis ICC personalizados por mídia, calibrados com X-Rite i1Pro3" },
                { label: "Largura máx. de impressão", value: "1118 mm (44″) — rolo e folha" },
                { label: "Opções de papel", value: "Hahnemühle Photo Rag 308g, Canson Infinity Platine Fibre Rag 310g, Breathing Color Signa Smooth 270g" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-orange-100 shadow-sm">
                  <span className="mt-0.5 text-sky-500 font-bold">→</span>
                  <span className="font-medium text-foreground/80">
                    <strong className="text-foreground">{item.label}:</strong> {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section aria-labelledby="cta-heading" className="text-center py-12 rounded-3xl bg-gradient-to-br from-orange-50 to-sky-50 border border-orange-100 shadow-sm">
            <div className="text-4xl mb-4">📸</div>
            <h2 id="cta-heading" className="text-2xl font-semibold mb-3 text-foreground">
              Pronto para Imprimir suas Memórias?
            </h2>
            <p className="text-muted-foreground mb-6 font-medium max-w-sm mx-auto">
              Envie seus arquivos e receba um orçamento em menos de 2 minutos.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-3.5 text-sm font-bold shadow-md transition-all duration-150 hover:bg-primary/90 hover:shadow-lg"
            >
              🎨 Solicitar Orçamento Grátis
            </Link>
          </section>
        </article>
      </div>
    </main>
    <SiteFooter />
  </>
);

export default Index;
