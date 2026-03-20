import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";
import JsonLd from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const services = [
  {
    emoji: "🎨",
    name: "Impressão Giclée Fine Art",
    description: "Impressão inkjet de qualidade museológica em algodão e tela usando tintas pigmentadas UltraChrome Pro de 12 cores a 2400 dpi. Ideal para reprodução de arte, exposições fotográficas e coleções de arquivo.",
    specs: ["Resolução de 2400 dpi", "Largura máxima de 1118 mm", "Resistência ao desbotamento de 100+ anos", "Perfil ICC personalizado"],
    media: ["Hahnemühle Photo Rag 308g", "Canson Infinity Platine Fibre Rag 310g", "Breathing Color Signa Smooth 270g", "Epson Premium Canvas Satin"],
    price: "A partir de R$45",
    color: "from-orange-50 to-orange-100/50",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    emoji: "🔧",
    name: "Restauração de Fotos",
    description: "Restauração digital profissional de fotografias danificadas, desbotadas ou deterioradas. Os serviços incluem reparo de riscos e rasgos, correção de cores, remoção de manchas e reconstrução de áreas faltantes.",
    specs: ["Retoque manual por artistas treinados", "Comparação antes/depois fornecida", "Digitalização em alta resolução inclusa", "Entrega em TIFF + JPEG"],
    media: [],
    price: "A partir de R$120",
    color: "from-sky-50 to-sky-100/50",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    emoji: "📏",
    name: "Impressão de Grande Formato",
    description: "Impressões de alto impacto para eventos, displays de varejo e sinalização. Disponível em vinil, tecido e papel cuchê com até 1,5 m de largura.",
    specs: ["Resolução de 1440 dpi", "Largura máxima de 1500 mm", "Opções para uso interno e externo", "Laminação disponível"],
    media: ["Vinil autoadesivo", "Banner em PVC", "Tecido poliéster", "Papel cuchê 180g"],
    price: "A partir de R$80/m²",
    color: "from-green-50 to-green-100/50",
    badge: "bg-green-100 text-green-700",
  },
  {
    emoji: "📖",
    name: "Produção de Fotolivros",
    description: "Fotolivros personalizados com encadernação lay-flat e papel premium. Ideal para casamentos, portfólios e álbuns de família. Disponível em capa dura e brochura.",
    specs: ["Impressão digital a 300 dpi", "Encadernação lay-flat", "Tamanhos de 20×20 cm a 30×40 cm", "20–100 páginas"],
    media: ["Papel cuchê silk 200g", "Papel fosco artístico 170g", "Papel fotográfico lustre 250g"],
    price: "A partir de R$150",
    color: "from-purple-50 to-purple-100/50",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    emoji: "🖼️",
    name: "Estiramento e Moldura em Tela",
    description: "Estiramento de tela em qualidade de galeria com chassi de madeira seca em estufa. Moldura personalizada opcional com uma seleção curada de perfis.",
    specs: ["Chassi gallery wrap de 38 mm", "Bordas espelhadas ou coloridas", "Ferragens inclusas", "Tamanhos personalizados disponíveis"],
    media: [],
    price: "A partir de R$90",
    color: "from-yellow-50 to-yellow-100/50",
    badge: "bg-yellow-100 text-yellow-700",
  },
];

const ServicesPage = () => (
  <>
    <JsonLd
      type="Service"
      data={{
        provider: { "@type": "Organization", name: "Digital Mil Cores" },
        serviceType: "Impressão Fotográfica e Restauração",
        areaServed: "Brazil",
        description: "Serviços profissionais de impressão Giclée, restauração de fotos, impressão de grande formato, produção de fotolivros e emolduramento em tela.",
      }}
    />
    <SiteHeader />
    <main className="container max-w-4xl py-16">
      <article>
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">✨</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Nossos Serviços</h1>
          <p className="text-muted-foreground font-medium max-w-md mx-auto">
            Tudo o que você precisa para preservar e exibir suas memórias mais preciosas
          </p>
        </div>

        <SummaryBlock>
          A Digital Mil Cores oferece cinco serviços principais: impressão Giclée fine art (2400 dpi), restauração de fotos,
          impressão de grande formato, produção de fotolivros e estiramento em tela com moldura.
        </SummaryBlock>

        <div className="space-y-8 mb-16">
          {services.map((service, i) => (
            <section
              key={service.name}
              aria-labelledby={`service-${i}`}
              className={`rounded-3xl bg-gradient-to-br ${service.color} border border-orange-100 p-6 md:p-8 shadow-sm`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-start gap-4 md:w-3/5">
                  <span className="text-4xl flex-shrink-0">{service.emoji}</span>
                  <div>
                    <h2 id={`service-${i}`} className="text-xl font-bold text-foreground mb-1">{service.name}</h2>
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${service.badge}`}>
                      {service.price}
                    </span>
                    <p className="text-foreground/75 leading-relaxed font-medium text-sm">{service.description}</p>
                  </div>
                </div>

                <div className="md:w-2/5 space-y-4">
                  <div>
                    <p className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">Especificações</p>
                    <ul className="space-y-1.5">
                      {service.specs.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                          <span className="text-primary font-bold">✓</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.media.length > 0 && (
                    <div>
                      <p className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-2">Mídias Disponíveis</p>
                      <ul className="space-y-1.5">
                        {service.media.map((m) => (
                          <li key={m} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                            <span className="text-sky-400 font-bold">→</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section aria-labelledby="comparison" className="mb-12">
          <h2 id="comparison" className="text-2xl font-semibold mb-6 text-foreground">📊 Comparação de Serviços</h2>
          <div className="overflow-x-auto rounded-2xl border border-orange-100 shadow-sm bg-white">
            <Table>
              <TableHeader>
                <TableRow className="border-orange-100 bg-secondary/60">
                  <TableHead className="text-foreground font-bold">Serviço</TableHead>
                  <TableHead className="text-foreground font-bold">Ideal Para</TableHead>
                  <TableHead className="text-foreground font-bold">Prazo</TableHead>
                  <TableHead className="text-foreground font-bold">Preço</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: "Impressão Giclée", ideal: "Arte, exposições", prazo: "3–5 dias", preco: "A partir de R$45" },
                  { name: "Restauração de Fotos", ideal: "Fotos danificadas", prazo: "5–7 dias", preco: "A partir de R$120" },
                  { name: "Grande Formato", ideal: "Eventos, sinalização", prazo: "2–4 dias", preco: "A partir de R$80/m²" },
                  { name: "Fotolivros", ideal: "Casamentos, portfólios", prazo: "7–10 dias", preco: "A partir de R$150" },
                  { name: "Tela e Moldura", ideal: "Decoração, galerias", prazo: "5–7 dias", preco: "A partir de R$90" },
                ].map((row) => (
                  <TableRow key={row.name} className="border-orange-100 hover:bg-secondary/30">
                    <TableCell className="font-bold text-foreground">{row.name}</TableCell>
                    <TableCell className="text-muted-foreground font-medium">{row.ideal}</TableCell>
                    <TableCell className="text-muted-foreground font-medium">{row.prazo}</TableCell>
                    <TableCell className="text-primary font-bold">{row.preco}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-sky-50 border border-orange-100">
          <div className="text-4xl mb-3">🤝</div>
          <h3 className="text-xl font-bold text-foreground mb-2">Pronto para começar?</h3>
          <p className="text-muted-foreground font-medium mb-4 text-sm">Nossa equipe está aqui para ajudar você a escolher o serviço ideal.</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-3 text-sm font-bold shadow-md hover:bg-primary/90 transition-colors"
          >
            Falar Conosco
          </a>
        </div>
      </article>
    </main>
    <SiteFooter />
  </>
);

export default ServicesPage;
