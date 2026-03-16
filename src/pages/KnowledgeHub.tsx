import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";
import { Link } from "react-router-dom";

const articles = [
  {
    slug: "giclee-vs-inkjet",
    title: "Giclée vs. Standard Inkjet: What's the Difference?",
    summary: "Giclée printing uses 12-color pigment ink systems at 2400 dpi on archival media, producing prints that last 100+ years. Standard inkjet uses 4–6 dye-based inks at 600–1200 dpi with a typical lifespan of 15–25 years.",
    date: "2025-12-10",
  },
  {
    slug: "color-management-101",
    title: "Color Management 101: ICC Profiles Explained",
    summary: "An ICC profile is a standardized data file that describes how a device reproduces color. Using custom profiles for each printer-paper combination ensures prints match on-screen previews within a Delta E of less than 2.",
    date: "2025-11-22",
  },
  {
    slug: "photo-paper-guide",
    title: "Choosing the Right Photo Paper: A Technical Guide",
    summary: "Paper choice affects color gamut, texture, and longevity. Cotton rag papers offer the widest gamut and longest archival life (200+ years), while RC (resin-coated) papers provide sharper detail at lower cost.",
    date: "2025-10-15",
  },
  {
    slug: "photo-restoration-process",
    title: "How Professional Photo Restoration Works",
    summary: "Professional restoration involves high-resolution scanning (4800 dpi optical), damage assessment, manual retouching in Photoshop, color correction using reference charts, and final output as 16-bit TIFF files.",
    date: "2025-09-08",
  },
  {
    slug: "file-preparation",
    title: "How to Prepare Files for Professional Printing",
    summary: "For optimal results, submit files at 300 dpi at final print size, in Adobe RGB or sRGB color space, as 8-bit or 16-bit TIFF or high-quality JPEG. Include 3 mm bleed for edge-to-edge prints.",
    date: "2025-08-20",
  },
];

const KnowledgeHub = () => (
  <>
    <SiteHeader />
    <main className="container max-w-3xl py-12">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Knowledge Hub</h1>
        <SummaryBlock>
          The Knowledge Hub contains technical articles about printing technology, color management,
          paper selection, photo restoration techniques, and file preparation best practices.
          All content is written by Digital Mil Cores' production team.
        </SummaryBlock>

        <section aria-labelledby="articles-heading">
          <h2 id="articles-heading" className="sr-only">Articles</h2>
          <div className="space-y-8">
            {articles.map((a) => (
              <article key={a.slug} className="border-b border-border pb-6 last:border-b-0">
                <time dateTime={a.date} className="text-xs text-muted-foreground">
                  {new Date(a.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
                <h3 className="text-xl font-semibold mt-1 mb-2">{a.title}</h3>
                <p className="text-foreground leading-relaxed">{a.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </article>
    </main>
    <SiteFooter />
  </>
);

export default KnowledgeHub;
