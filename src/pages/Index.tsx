import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";
import JsonLd from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Camera, Printer, Image, BookOpen, Frame } from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";

const services = [
  { name: "Impressão Giclée Fine Art", resolution: "2400 dpi", media: "Algodão, Tela", turnaround: "3–5 dias úteis", price: "A partir de R$45" },
  { name: "Restauração de Fotos", resolution: "N/A", media: "Entrega digital", turnaround: "5–7 dias úteis", price: "A partir de R$120" },
  { name: "Impressão de Grande Formato", resolution: "1440 dpi", media: "Vinil, Tecido, Papel", turnaround: "2–4 dias úteis", price: "A partir de R$80/m²" },
  { name: "Produção de Fotolivros", resolution: "300 dpi", media: "Capa dura, Brochura", turnaround: "7–10 dias úteis", price: "A partir de R$150" },
  { name: "Estiramento e Moldura em Tela", resolution: "N/A", media: "Moldura em madeira, Gallery wrap", turnaround: "5–7 dias úteis", price: "A partir de R$90" },
];

const highlights = [
  { icon: Printer, label: "Giclée 2400 dpi", desc: "Algodão e tela com qualidade de museu" },
  { icon: Camera, label: "Restauração de Fotos", desc: "Reparos de riscos, desbotamento e danos" },
  { icon: Image, label: "Grande Formato", desc: "Até 1,5m de largura em vinil e tecido" },
  { icon: BookOpen, label: "Fotolivros", desc: "Encadernação lay-flat, papel premium" },
  { icon: Frame, label: "Tela e Moldura", desc: "Gallery wrap em chassi de madeira seca" },
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
    <JsonLd
      type="WebSite"
      data={{
        name: "Digital Mil Cores",
        url: "https://digitalmilcores.com",
      }}
    />
    <SiteHeader />

    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Impressão fine art profissional sendo inspecionada em nosso laboratório em São Paulo"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="container relative py-24 md:py-36 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80 mb-4">
            O Principal Laboratório Fotográfico de São Paulo
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Impressão com Qualidade Arquivística para Artistas e Fotógrafos
          </h1>
          <p className="text-lg text-foreground/80 max-w-xl mb-8 leading-relaxed">
            Impressão Giclée a 2400 dpi em mídias de qualidade museológica. Tintas pigmentadas com durabilidade de mais de 100 anos.
            Do arquivo à moldura — tudo sob o mesmo teto.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-150 hover:opacity-90"
            >
              Solicitar Orçamento
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-sm border border-primary/30 text-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-150 hover:bg-primary/10"
            >
              Nossos Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="border-y border-border/50 bg-card">
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex flex-col items-center text-center gap-2">
                <h.icon className="h-6 w-6 text-primary/70" strokeWidth={1.5} />
                <p className="text-sm font-semibold text-foreground">{h.label}</p>
                <p className="text-xs text-muted-foreground">{h.desc}</p>
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
            <h2 id="why-heading" className="text-2xl font-semibold mb-5">
              Por que Escolher a Digital Mil Cores
            </h2>
            <ul className="space-y-3 text-foreground">
              {[
                "Impressão Giclée a 2400 dpi em algodão e tela de qualidade museológica",
                "Tintas pigmentadas arquivísticas com resistência ao desbotamento de 100+ anos (certificação Wilhelm Imaging Research)",
                "Perfis ICC para reprodução precisa de cores em todos os tipos de mídia",
                "Envio para todo o Brasil com embalagem protetora",
                "Restauração de fotos por artistas digitais treinados — reparos de riscos, desbotamento e danos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="services-heading" className="mb-16">
            <h2 id="services-heading" className="text-2xl font-semibold mb-5">
              Visão Geral de Serviços e Preços
            </h2>
            <div className="overflow-x-auto rounded-md border border-border/50">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead className="text-primary/70">Serviço</TableHead>
                    <TableHead className="text-primary/70">Resolução</TableHead>
                    <TableHead className="text-primary/70">Opções de Mídia</TableHead>
                    <TableHead className="text-primary/70">Prazo</TableHead>
                    <TableHead className="text-primary/70">Preço Inicial</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((s) => (
                    <TableRow key={s.name} className="border-border/50">
                      <TableCell className="font-medium text-foreground">{s.name}</TableCell>
                      <TableCell><Badge variant="secondary" className="text-xs">{s.resolution}</Badge></TableCell>
                      <TableCell className="text-muted-foreground">{s.media}</TableCell>
                      <TableCell className="text-muted-foreground">{s.turnaround}</TableCell>
                      <TableCell className="text-foreground font-medium">{s.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          <section aria-labelledby="specs-heading" className="mb-16">
            <h2 id="specs-heading" className="text-2xl font-semibold mb-5">
              Especificações Técnicas
            </h2>
            <SummaryBlock>
              Todas as impressões Giclée são produzidas em impressoras Epson SureColor série P com tintas pigmentadas UltraChrome Pro.
              A largura máxima de impressão é de 1118 mm (44 polegadas) sem limite de comprimento para mídia em rolo.
            </SummaryBlock>
            <ul className="space-y-3 text-foreground">
              {[
                { label: "Impressoras", value: "Epson SureColor P9570, P7570" },
                { label: "Sistema de tintas", value: "UltraChrome Pro12 — conjunto de 12 tintas pigmentadas" },
                { label: "Gestão de cores", value: "Perfis ICC personalizados por mídia, calibrados com X-Rite i1Pro3" },
                { label: "Largura máx. de impressão", value: "1118 mm (44″) — rolo e folha" },
                { label: "Opções de papel", value: "Hahnemühle Photo Rag 308g, Canson Infinity Platine Fibre Rag 310g, Breathing Color Signa Smooth 270g" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                  <span><strong className="text-primary/80">{item.label}:</strong> {item.value}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="cta-heading" className="text-center py-12 rounded-md bg-card border border-border/50">
            <h2 id="cta-heading" className="text-2xl font-semibold mb-3">
              Pronto para Imprimir?
            </h2>
            <p className="text-muted-foreground mb-6">
              Envie seus arquivos e receba um orçamento em menos de 2 minutos.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-150 hover:opacity-90"
            >
              Solicitar Orçamento
            </Link>
          </section>
        </article>
      </div>
    </main>
    <SiteFooter />
  </>
);

export default Index;
