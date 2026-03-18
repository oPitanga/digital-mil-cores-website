import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";
import JsonLd from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import serviceGiclee from "@/assets/service-giclee.jpg";
import serviceRestoration from "@/assets/service-restoration.jpg";
import serviceLargeformat from "@/assets/service-largeformat.jpg";
import servicePhotobook from "@/assets/service-photobook.jpg";
import serviceCanvas from "@/assets/service-canvas.jpg";

const services = [
  {
    name: "Impressão Giclée Fine Art",
    image: serviceGiclee,
    imageAlt: "Impressão Giclée em papel de algodão texturizado em nosso laboratório",
    description: "Impressão inkjet de qualidade museológica em algodão e tela usando tintas pigmentadas UltraChrome Pro de 12 cores a 2400 dpi. Ideal para reprodução de arte, exposições fotográficas e coleções de arquivo.",
    specs: ["Resolução de 2400 dpi", "Largura máxima de 1118 mm", "Resistência ao desbotamento de 100+ anos", "Perfil ICC personalizado"],
    media: ["Hahnemühle Photo Rag 308g", "Canson Infinity Platine Fibre Rag 310g", "Breathing Color Signa Smooth 270g", "Epson Premium Canvas Satin"],
    price: "A partir de R$45",
  },
  {
    name: "Restauração de Fotos",
    image: serviceRestoration,
    imageAlt: "Antes e depois de restauração de foto em monitor profissional",
    description: "Restauração digital profissional de fotografias danificadas, desbotadas ou deterioradas. Os serviços incluem reparo de riscos e rasgos, correção de cores, remoção de manchas e reconstrução de áreas faltantes.",
    specs: ["Retoque manual por artistas treinados", "Comparação antes/depois fornecida", "Digitalização em alta resolução inclusa", "Entrega em TIFF + JPEG"],
    media: [],
    price: "A partir de R$120",
  },
  {
    name: "Impressão de Grande Formato",
    image: serviceLargeformat,
    imageAlt: "Impressora de grande formato produzindo uma impressão vibrante",
    description: "Impressões de alto impacto para eventos, displays de varejo e sinalização. Disponível em vinil, tecido e papel cuchê com até 1,5 m de largura.",
    specs: ["Resolução de 1440 dpi", "Largura máxima de 1500 mm", "Opções para uso interno e externo", "Laminação disponível"],
    media: ["Vinil autoadesivo", "Banner em PVC", "Tecido poliéster", "Papel cuchê 180g"],
    price: "A partir de R$80/m²",
  },
  {
    name: "Produção de Fotolivros",
    image: servicePhotobook,
    imageAlt: "Fotolivro premium aberto mostrando fotografia de casamento",
    description: "Fotolivros personalizados com encadernação lay-flat e papel premium. Ideal para casamentos, portfólios e álbuns de família. Disponível em capa dura e brochura.",
    specs: ["Impressão digital a 300 dpi", "Encadernação lay-flat", "Tamanhos de 20×20 cm a 30×40 cm", "20–100 páginas"],
    media: ["Papel cuchê silk 200g", "Papel fosco artístico 170g", "Papel fotográfico lustre 250g"],
    price: "A partir de R$150",
  },
  {
    name: "Estiramento e Moldura em Tela",
    image: serviceCanvas,
    imageAlt: "Impressão em tela sendo esticada em chassi de madeira na oficina",
    description: "Estiramento de tela em qualidade de galeria com chassi de madeira seca em estufa. Moldura personalizada opcional com uma seleção curada de perfis.",
    specs: ["Chassi gallery wrap de 38 mm", "Bordas espelhadas ou coloridas", "Ferragens inclusas", "Tamanhos personalizados disponíveis"],
    media: [],
    price: "A partir de R$90",
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Serviços</h1>
        <SummaryBlock>
          A Digital Mil Cores oferece cinco serviços principais: impressão Giclée fine art (2400 dpi), restauração de fotos,
          impressão de grande formato, produção de fotolivros e estiramento em tela com moldura. Todos os serviços utilizam
          materiais de qualidade arquivística e gestão profissional de cores.
        </SummaryBlock>

        {services.map((service, i) => (
          <section key={service.name} aria-labelledby={`service-${i}`} className="mb-16">
            <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 mb-5`}>
              <div className="md:w-2/5 shrink-0">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full aspect-square object-cover rounded-md"
                  loading="lazy"
                />
              </div>
              <div className="md:w-3/5">
                <h2 id={`service-${i}`} className="text-2xl font-semibold mb-2">{service.name}</h2>
                <Badge variant="secondary" className="mb-3 text-xs">{service.price}</Badge>
                <p className="text-foreground mb-5 leading-relaxed">{service.description}</p>

                <h3 className="text-sm font-semibold text-primary/70 uppercase tracking-wider mb-2">Especificações</h3>
                <ul className="space-y-1.5 text-foreground text-sm mb-4">
                  {service.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-primary/50 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                {service.media.length > 0 && (
                  <>
                    <h3 className="text-sm font-semibold text-primary/70 uppercase tracking-wider mb-2">Mídias Disponíveis</h3>
                    <ul className="space-y-1.5 text-foreground text-sm">
                      {service.media.map((m) => (
                        <li key={m} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-primary/50 shrink-0" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </section>
        ))}

        <section aria-labelledby="comparison" className="mb-12">
          <h2 id="comparison" className="text-2xl font-semibold mb-5">Comparação de Serviços</h2>
          <div className="overflow-x-auto rounded-md border border-border/50">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="text-primary/70">Serviço</TableHead>
                  <TableHead className="text-primary/70">Ideal Para</TableHead>
                  <TableHead className="text-primary/70">Prazo</TableHead>
                  <TableHead className="text-primary/70">Preço</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-border/50"><TableCell className="font-medium">Impressão Giclée</TableCell><TableCell className="text-muted-foreground">Arte, exposições</TableCell><TableCell className="text-muted-foreground">3–5 dias</TableCell><TableCell className="font-medium">A partir de R$45</TableCell></TableRow>
                <TableRow className="border-border/50"><TableCell className="font-medium">Restauração de Fotos</TableCell><TableCell className="text-muted-foreground">Fotos danificadas</TableCell><TableCell className="text-muted-foreground">5–7 dias</TableCell><TableCell className="font-medium">A partir de R$120</TableCell></TableRow>
                <TableRow className="border-border/50"><TableCell className="font-medium">Grande Formato</TableCell><TableCell className="text-muted-foreground">Eventos, sinalização</TableCell><TableCell className="text-muted-foreground">2–4 dias</TableCell><TableCell className="font-medium">A partir de R$80/m²</TableCell></TableRow>
                <TableRow className="border-border/50"><TableCell className="font-medium">Fotolivros</TableCell><TableCell className="text-muted-foreground">Casamentos, portfólios</TableCell><TableCell className="text-muted-foreground">7–10 dias</TableCell><TableCell className="font-medium">A partir de R$150</TableCell></TableRow>
                <TableRow className="border-border/50"><TableCell className="font-medium">Tela e Moldura</TableCell><TableCell className="text-muted-foreground">Decoração, galerias</TableCell><TableCell className="text-muted-foreground">5–7 dias</TableCell><TableCell className="font-medium">A partir de R$90</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </article>
    </main>
    <SiteFooter />
  </>
);

export default ServicesPage;
