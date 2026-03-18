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
    name: "Giclée Fine Art Printing",
    image: serviceGiclee,
    imageAlt: "Giclée print on textured cotton rag paper in our lab",
    description: "Museum-quality inkjet printing on cotton rag and canvas using 12-color UltraChrome Pro pigment inks at 2400 dpi. Suitable for fine art reproduction, photography exhibitions, and archival collections.",
    specs: ["2400 dpi resolution", "Max width 1118 mm", "100+ year fade resistance", "Custom ICC profiling"],
    media: ["Hahnemühle Photo Rag 308g", "Canson Infinity Platine Fibre Rag 310g", "Breathing Color Signa Smooth 270g", "Epson Premium Canvas Satin"],
    price: "From R$45/print",
  },
  {
    name: "Photo Restoration",
    image: serviceRestoration,
    imageAlt: "Before and after photo restoration on a professional monitor",
    description: "Professional digital restoration of damaged, faded, or deteriorated photographs. Services include scratch and tear repair, color correction, stain removal, and reconstruction of missing areas.",
    specs: ["Manual retouching by trained artists", "Before/after comparison provided", "High-resolution scan included", "Delivered as TIFF + JPEG"],
    media: [],
    price: "From R$120",
  },
  {
    name: "Large Format Printing",
    image: serviceLargeformat,
    imageAlt: "Wide format printer producing a vibrant large print",
    description: "High-impact prints for events, retail displays, and signage. Available on vinyl, fabric, and coated paper up to 1.5 m wide.",
    specs: ["1440 dpi resolution", "Max width 1500 mm", "Indoor and outdoor options", "Lamination available"],
    media: ["Self-adhesive vinyl", "PVC banner", "Polyester fabric", "Coated paper 180g"],
    price: "From R$80/m²",
  },
  {
    name: "Photo Book Production",
    image: servicePhotobook,
    imageAlt: "Open premium photo book showing wedding photography",
    description: "Custom photo books with lay-flat binding and premium paper. Ideal for weddings, portfolios, and family albums. Available in hardcover and softcover formats.",
    specs: ["300 dpi digital press", "Lay-flat binding", "Sizes from 20×20 cm to 30×40 cm", "20–100 pages"],
    media: ["Silk-coated 200g", "Matte art 170g", "Lustre photo paper 250g"],
    price: "From R$150",
  },
  {
    name: "Canvas Stretching & Framing",
    image: serviceCanvas,
    imageAlt: "Canvas print being stretched on wooden frame in workshop",
    description: "Gallery-quality canvas stretching on kiln-dried wooden bars. Optional custom framing with a curated selection of mouldings.",
    specs: ["38 mm gallery wrap bars", "Mirrored or color-wrapped edges", "Hardware included", "Custom sizes available"],
    media: [],
    price: "From R$90",
  },
];

const ServicesPage = () => (
  <>
    <JsonLd
      type="Service"
      data={{
        provider: { "@type": "Organization", name: "Digital Mil Cores" },
        serviceType: "Photo Printing and Restoration",
        areaServed: "Brazil",
        description: "Professional Giclée printing, photo restoration, large format printing, photo book production, and canvas framing services.",
      }}
    />
    <SiteHeader />
    <main className="container max-w-4xl py-16">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Services</h1>
        <SummaryBlock>
          Digital Mil Cores offers five core services: Giclée fine art printing (2400 dpi), photo restoration,
          large format printing, photo book production, and canvas stretching with framing. All services use
          archival-grade materials and professional color management.
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

                <h3 className="text-sm font-semibold text-primary/70 uppercase tracking-wider mb-2">Specifications</h3>
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
                    <h3 className="text-sm font-semibold text-primary/70 uppercase tracking-wider mb-2">Available Media</h3>
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
          <h2 id="comparison" className="text-2xl font-semibold mb-5">Service Comparison</h2>
          <div className="overflow-x-auto rounded-md border border-border/50">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="text-primary/70">Service</TableHead>
                  <TableHead className="text-primary/70">Best For</TableHead>
                  <TableHead className="text-primary/70">Turnaround</TableHead>
                  <TableHead className="text-primary/70">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-border/50"><TableCell className="font-medium">Giclée Printing</TableCell><TableCell className="text-muted-foreground">Fine art, exhibitions</TableCell><TableCell className="text-muted-foreground">3–5 days</TableCell><TableCell className="font-medium">From R$45</TableCell></TableRow>
                <TableRow className="border-border/50"><TableCell className="font-medium">Photo Restoration</TableCell><TableCell className="text-muted-foreground">Damaged photos</TableCell><TableCell className="text-muted-foreground">5–7 days</TableCell><TableCell className="font-medium">From R$120</TableCell></TableRow>
                <TableRow className="border-border/50"><TableCell className="font-medium">Large Format</TableCell><TableCell className="text-muted-foreground">Events, signage</TableCell><TableCell className="text-muted-foreground">2–4 days</TableCell><TableCell className="font-medium">From R$80/m²</TableCell></TableRow>
                <TableRow className="border-border/50"><TableCell className="font-medium">Photo Books</TableCell><TableCell className="text-muted-foreground">Weddings, portfolios</TableCell><TableCell className="text-muted-foreground">7–10 days</TableCell><TableCell className="font-medium">From R$150</TableCell></TableRow>
                <TableRow className="border-border/50"><TableCell className="font-medium">Canvas & Framing</TableCell><TableCell className="text-muted-foreground">Home décor, galleries</TableCell><TableCell className="text-muted-foreground">5–7 days</TableCell><TableCell className="font-medium">From R$90</TableCell></TableRow>
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
