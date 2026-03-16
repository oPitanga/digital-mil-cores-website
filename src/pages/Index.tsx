import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";
import JsonLd from "@/components/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

const services = [
  { name: "Giclée Fine Art Printing", resolution: "2400 dpi", media: "Cotton Rag, Canvas", turnaround: "3–5 business days", price: "From R$45/print" },
  { name: "Photo Restoration", resolution: "N/A", media: "Digital delivery", turnaround: "5–7 business days", price: "From R$120" },
  { name: "Large Format Printing", resolution: "1440 dpi", media: "Vinyl, Fabric, Paper", turnaround: "2–4 business days", price: "From R$80/m²" },
  { name: "Photo Book Production", resolution: "300 dpi", media: "Hardcover, Softcover", turnaround: "7–10 business days", price: "From R$150" },
  { name: "Canvas Stretching & Framing", resolution: "N/A", media: "Wood frame, Gallery wrap", turnaround: "5–7 business days", price: "From R$90" },
];

const Index = () => (
  <>
    <JsonLd
      type="Organization"
      data={{
        name: "Digital Mil Cores",
        url: "https://digitalmilcores.com",
        description: "Professional online photo lab specializing in high-fidelity Giclée printing, photo restoration, and archival-quality output.",
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
    <main className="container max-w-3xl py-12">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Professional Online Photo Lab — Archival-Quality Printing in Brazil
        </h1>

        <SummaryBlock>
          Digital Mil Cores is a São Paulo-based online photo lab offering high-fidelity Giclée printing at 2400 dpi,
          photo restoration, large format output, and photo book production. All prints use archival-grade pigment inks
          rated for 100+ years of fade resistance.
        </SummaryBlock>

        <section aria-labelledby="why-heading" className="mb-12">
          <h2 id="why-heading" className="text-2xl font-semibold mb-4">
            Why Choose Digital Mil Cores
          </h2>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>2400 dpi Giclée printing on museum-grade cotton rag and canvas</li>
            <li>Archival pigment inks with 100+ year fade resistance (Wilhelm Imaging Research certified)</li>
            <li>ICC color profiling for accurate reproduction across all media types</li>
            <li>Nationwide shipping across Brazil with protective packaging</li>
            <li>Photo restoration by trained digital artists — scratches, fading, and damage repair</li>
          </ul>
        </section>

        <section aria-labelledby="services-heading" className="mb-12">
          <h2 id="services-heading" className="text-2xl font-semibold mb-4">
            Services & Pricing Overview
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Resolution</TableHead>
                  <TableHead>Media Options</TableHead>
                  <TableHead>Turnaround</TableHead>
                  <TableHead>Starting Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((s) => (
                  <TableRow key={s.name}>
                    <TableCell className="font-medium">{s.name}</TableCell>
                    <TableCell><Badge variant="secondary">{s.resolution}</Badge></TableCell>
                    <TableCell>{s.media}</TableCell>
                    <TableCell>{s.turnaround}</TableCell>
                    <TableCell>{s.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section aria-labelledby="specs-heading" className="mb-12">
          <h2 id="specs-heading" className="text-2xl font-semibold mb-4">
            Technical Specifications
          </h2>
          <SummaryBlock>
            All Giclée prints are produced on Epson SureColor P-series printers using UltraChrome Pro pigment inks.
            Maximum print width is 1118 mm (44 inches) with no limit on length for roll media.
          </SummaryBlock>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li><strong>Printers:</strong> Epson SureColor P9570, P7570</li>
            <li><strong>Ink system:</strong> UltraChrome Pro12 — 12-color pigment ink set</li>
            <li><strong>Color management:</strong> Custom ICC profiles per media, calibrated with X-Rite i1Pro3</li>
            <li><strong>Max print width:</strong> 1118 mm (44″) — roll and sheet fed</li>
            <li><strong>Paper options:</strong> Hahnemühle Photo Rag 308g, Canson Infinity Platine Fibre Rag 310g, Breathing Color Signa Smooth 270g</li>
          </ul>
        </section>

        <section aria-labelledby="cta-heading" className="text-center py-8">
          <h2 id="cta-heading" className="text-2xl font-semibold mb-3">
            Ready to Print?
          </h2>
          <p className="text-muted-foreground mb-5">
            Upload your files and get a quote in under 2 minutes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-6 py-3 text-sm font-medium transition-colors duration-100 hover:opacity-90"
          >
            Get a Quote
          </Link>
        </section>
      </article>
    </main>
    <SiteFooter />
  </>
);

export default Index;
