import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";
import JsonLd from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const services = [
  {
    name: "Giclée Fine Art Printing",
    description: "Museum-quality inkjet printing on cotton rag and canvas using 12-color UltraChrome Pro pigment inks at 2400 dpi. Suitable for fine art reproduction, photography exhibitions, and archival collections.",
    specs: ["2400 dpi resolution", "Max width 1118 mm", "100+ year fade resistance", "Custom ICC profiling"],
    media: ["Hahnemühle Photo Rag 308g", "Canson Infinity Platine Fibre Rag 310g", "Breathing Color Signa Smooth 270g", "Epson Premium Canvas Satin"],
    price: "From R$45/print",
  },
  {
    name: "Photo Restoration",
    description: "Professional digital restoration of damaged, faded, or deteriorated photographs. Services include scratch and tear repair, color correction, stain removal, and reconstruction of missing areas.",
    specs: ["Manual retouching by trained artists", "Before/after comparison provided", "High-resolution scan included", "Delivered as TIFF + JPEG"],
    media: [],
    price: "From R$120",
  },
  {
    name: "Large Format Printing",
    description: "High-impact prints for events, retail displays, and signage. Available on vinyl, fabric, and coated paper up to 1.5 m wide.",
    specs: ["1440 dpi resolution", "Max width 1500 mm", "Indoor and outdoor options", "Lamination available"],
    media: ["Self-adhesive vinyl", "PVC banner", "Polyester fabric", "Coated paper 180g"],
    price: "From R$80/m²",
  },
  {
    name: "Photo Book Production",
    description: "Custom photo books with lay-flat binding and premium paper. Ideal for weddings, portfolios, and family albums. Available in hardcover and softcover formats.",
    specs: ["300 dpi digital press", "Lay-flat binding", "Sizes from 20×20 cm to 30×40 cm", "20–100 pages"],
    media: ["Silk-coated 200g", "Matte art 170g", "Lustre photo paper 250g"],
    price: "From R$150",
  },
  {
    name: "Canvas Stretching & Framing",
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
    <main className="container max-w-3xl py-12">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Services</h1>
        <SummaryBlock>
          Digital Mil Cores offers five core services: Giclée fine art printing (2400 dpi), photo restoration,
          large format printing, photo book production, and canvas stretching with framing. All services use
          archival-grade materials and professional color management.
        </SummaryBlock>

        {services.map((service, i) => (
          <section key={service.name} aria-labelledby={`service-${i}`} className="mb-12">
            <h2 id={`service-${i}`} className="text-2xl font-semibold mb-2">{service.name}</h2>
            <Badge variant="outline" className="mb-3">{service.price}</Badge>
            <p className="text-foreground mb-4">{service.description}</p>

            <h3 className="text-lg font-semibold mb-2">Specifications</h3>
            <ul className="list-disc list-inside space-y-1 text-foreground mb-4">
              {service.specs.map((s) => <li key={s}>{s}</li>)}
            </ul>

            {service.media.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mb-2">Available Media</h3>
                <ul className="list-disc list-inside space-y-1 text-foreground">
                  {service.media.map((m) => <li key={m}>{m}</li>)}
                </ul>
              </>
            )}
          </section>
        ))}

        <section aria-labelledby="comparison" className="mb-12">
          <h2 id="comparison" className="text-2xl font-semibold mb-4">Service Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Best For</TableHead>
                  <TableHead>Turnaround</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>Giclée Printing</TableCell><TableCell>Fine art, exhibitions</TableCell><TableCell>3–5 days</TableCell><TableCell>From R$45</TableCell></TableRow>
                <TableRow><TableCell>Photo Restoration</TableCell><TableCell>Damaged photos</TableCell><TableCell>5–7 days</TableCell><TableCell>From R$120</TableCell></TableRow>
                <TableRow><TableCell>Large Format</TableCell><TableCell>Events, signage</TableCell><TableCell>2–4 days</TableCell><TableCell>From R$80/m²</TableCell></TableRow>
                <TableRow><TableCell>Photo Books</TableCell><TableCell>Weddings, portfolios</TableCell><TableCell>7–10 days</TableCell><TableCell>From R$150</TableCell></TableRow>
                <TableRow><TableCell>Canvas & Framing</TableCell><TableCell>Home décor, galleries</TableCell><TableCell>5–7 days</TableCell><TableCell>From R$90</TableCell></TableRow>
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
