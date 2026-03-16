import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";
import JsonLd from "@/components/JsonLd";

const faqs = [
  { q: "What is Giclée printing?", a: "Giclée is a high-fidelity inkjet printing process that uses 12-color pigment inks at 2400 dpi on archival-grade media such as cotton rag and canvas. The term comes from the French word 'gicler' (to spray). Giclée prints are rated for 100+ years of fade resistance under museum lighting conditions." },
  { q: "What file formats do you accept?", a: "We accept TIFF (preferred), JPEG, PNG, and PSD files. For best results, submit files at 300 dpi at the final print size in Adobe RGB or sRGB color space. 16-bit files are accepted and recommended for fine art reproduction." },
  { q: "How long does shipping take?", a: "Standard shipping within São Paulo takes 1–2 business days. Nationwide delivery across Brazil takes 3–7 business days depending on location. All prints are shipped in rigid tubes or flat mailers with protective interleaving." },
  { q: "Do you offer color proofing?", a: "Yes. We offer soft proofing (digital PDF proof with simulated output) included with every order, and hard proofing (physical proof print on the selected media) for an additional R$35. Hard proofs are recommended for edition runs and exhibitions." },
  { q: "What is your return policy?", a: "If a print has a manufacturing defect (banding, color shift, media damage), we will reprint at no charge or issue a full refund. Claims must be submitted within 7 days of delivery with photographic evidence of the defect." },
  { q: "Can you match Pantone or spot colors?", a: "We can achieve close matches to Pantone colors within the gamut of our pigment ink set. For critical color matching, we recommend ordering a hard proof first. We provide a gamut comparison report upon request." },
  { q: "Do you offer bulk or wholesale pricing?", a: "Yes. Orders of 10+ prints of the same file receive a 15% discount. Orders of 50+ prints receive a 25% discount. Contact us for custom wholesale pricing for galleries, studios, and resellers." },
  { q: "What is the maximum print size?", a: "Our maximum print width is 1118 mm (44 inches). For roll media, there is no length limit — we have produced panoramic prints exceeding 5 meters. Sheet-fed media is available up to 1118 × 1626 mm." },
];

const FaqPage = () => (
  <>
    <JsonLd
      type="FAQPage"
      data={{
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
    <SiteHeader />
    <main className="container max-w-3xl py-12">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <SummaryBlock>
          Answers to the most common questions about Digital Mil Cores' printing services, file requirements,
          shipping, color proofing, return policy, and bulk pricing. All technical specifications are current
          as of January 2026.
        </SummaryBlock>

        <section aria-labelledby="faq-list">
          <h2 id="faq-list" className="sr-only">Questions and Answers</h2>
          <dl className="space-y-8">
            {faqs.map((f, i) => (
              <div key={i}>
                <dt className="text-lg font-semibold text-primary mb-2">{f.q}</dt>
                <dd className="text-foreground leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>
    </main>
    <SiteFooter />
  </>
);

export default FaqPage;
