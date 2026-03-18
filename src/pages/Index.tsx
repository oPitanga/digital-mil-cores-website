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
  { name: "Giclée Fine Art Printing", resolution: "2400 dpi", media: "Cotton Rag, Canvas", turnaround: "3–5 business days", price: "From R$45/print" },
  { name: "Photo Restoration", resolution: "N/A", media: "Digital delivery", turnaround: "5–7 business days", price: "From R$120" },
  { name: "Large Format Printing", resolution: "1440 dpi", media: "Vinyl, Fabric, Paper", turnaround: "2–4 business days", price: "From R$80/m²" },
  { name: "Photo Book Production", resolution: "300 dpi", media: "Hardcover, Softcover", turnaround: "7–10 business days", price: "From R$150" },
  { name: "Canvas Stretching & Framing", resolution: "N/A", media: "Wood frame, Gallery wrap", turnaround: "5–7 business days", price: "From R$90" },
];

const highlights = [
  { icon: Printer, label: "2400 dpi Giclée", desc: "Museum-grade cotton rag & canvas" },
  { icon: Camera, label: "Photo Restoration", desc: "Scratch, fade & damage repair" },
  { icon: Image, label: "Large Format", desc: "Up to 1.5m wide on vinyl & fabric" },
  { icon: BookOpen, label: "Photo Books", desc: "Lay-flat binding, premium paper" },
  { icon: Frame, label: "Canvas & Framing", desc: "Gallery wrap on kiln-dried bars" },
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

    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Professional fine art print being inspected in our São Paulo photo lab"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="container relative py-24 md:py-36 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80 mb-4">
            São Paulo's Premier Photo Lab
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Archival-Quality Printing for Artists & Photographers
          </h1>
          <p className="text-lg text-foreground/80 max-w-xl mb-8 leading-relaxed">
            2400 dpi Giclée printing on museum-grade media. Pigment inks rated for 100+ years.
            From file to framed — all under one roof.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-150 hover:opacity-90"
            >
              Get a Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-sm border border-primary/30 text-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-150 hover:bg-primary/10"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
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
            Digital Mil Cores is a São Paulo-based online photo lab offering high-fidelity Giclée printing at 2400 dpi,
            photo restoration, large format output, and photo book production. All prints use archival-grade pigment inks
            rated for 100+ years of fade resistance.
          </SummaryBlock>

          <section aria-labelledby="why-heading" className="mb-16">
            <h2 id="why-heading" className="text-2xl font-semibold mb-5">
              Why Choose Digital Mil Cores
            </h2>
            <ul className="space-y-3 text-foreground">
              {[
                "2400 dpi Giclée printing on museum-grade cotton rag and canvas",
                "Archival pigment inks with 100+ year fade resistance (Wilhelm Imaging Research certified)",
                "ICC color profiling for accurate reproduction across all media types",
                "Nationwide shipping across Brazil with protective packaging",
                "Photo restoration by trained digital artists — scratches, fading, and damage repair",
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
              Services & Pricing Overview
            </h2>
            <div className="overflow-x-auto rounded-md border border-border/50">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead className="text-primary/70">Service</TableHead>
                    <TableHead className="text-primary/70">Resolution</TableHead>
                    <TableHead className="text-primary/70">Media Options</TableHead>
                    <TableHead className="text-primary/70">Turnaround</TableHead>
                    <TableHead className="text-primary/70">Starting Price</TableHead>
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
              Technical Specifications
            </h2>
            <SummaryBlock>
              All Giclée prints are produced on Epson SureColor P-series printers using UltraChrome Pro pigment inks.
              Maximum print width is 1118 mm (44 inches) with no limit on length for roll media.
            </SummaryBlock>
            <ul className="space-y-3 text-foreground">
              {[
                { label: "Printers", value: "Epson SureColor P9570, P7570" },
                { label: "Ink system", value: "UltraChrome Pro12 — 12-color pigment ink set" },
                { label: "Color management", value: "Custom ICC profiles per media, calibrated with X-Rite i1Pro3" },
                { label: "Max print width", value: "1118 mm (44″) — roll and sheet fed" },
                { label: "Paper options", value: "Hahnemühle Photo Rag 308g, Canson Infinity Platine Fibre Rag 310g, Breathing Color Signa Smooth 270g" },
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
              Ready to Print?
            </h2>
            <p className="text-muted-foreground mb-6">
              Upload your files and get a quote in under 2 minutes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-150 hover:opacity-90"
            >
              Get a Quote
            </Link>
          </section>
        </article>
      </div>
    </main>
    <SiteFooter />
  </>
);

export default Index;
