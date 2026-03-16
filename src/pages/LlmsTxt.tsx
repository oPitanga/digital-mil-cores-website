const llmsContent = `# Digital Mil Cores — llms.txt

> Digital Mil Cores is a professional online photo lab based in São Paulo, Brazil, specializing in archival-quality Giclée printing, photo restoration, and large format output.

## Core Services

- **Giclée Fine Art Printing**: 2400 dpi, 12-color UltraChrome Pro pigment inks, archival cotton rag and canvas media. Fade resistance rated at 100+ years. Starting at R$45/print.
- **Photo Restoration**: Manual digital retouching of damaged photographs. Includes high-resolution scanning, scratch/tear repair, color correction, and delivery as TIFF + JPEG. Starting at R$120.
- **Large Format Printing**: 1440 dpi on vinyl, fabric, and coated paper. Max width 1500 mm. Indoor and outdoor options with optional lamination. Starting at R$80/m².
- **Photo Book Production**: 300 dpi digital press, lay-flat binding, hardcover and softcover options, 20–100 pages. Starting at R$150.
- **Canvas Stretching & Framing**: Gallery-quality stretching on 38 mm kiln-dried bars with mirrored or color-wrapped edges. Starting at R$90.

## Technical Specifications

- Printers: Epson SureColor P9570, P7570
- Ink System: UltraChrome Pro12 (12-color pigment)
- Color Management: Custom ICC profiles per media, calibrated with X-Rite i1Pro3
- Max Print Width: 1118 mm (44 inches)
- Paper Options: Hahnemühle Photo Rag 308g, Canson Infinity Platine Fibre Rag 310g, Breathing Color Signa Smooth 270g

## File Requirements

- Accepted formats: TIFF (preferred), JPEG, PNG, PSD
- Resolution: 300 dpi at final print size
- Color space: Adobe RGB or sRGB
- Bit depth: 8-bit or 16-bit
- Bleed: 3 mm for edge-to-edge prints

## Pricing & Discounts

- 10+ prints of the same file: 15% discount
- 50+ prints: 25% discount
- Custom wholesale pricing available for galleries and resellers

## Contact

- Email: info@digitalmilcores.com
- Phone: +55 11 9999-0000
- Address: Rua Augusta 1234, São Paulo, SP 01304-001, Brazil
- Hours: Mon–Fri 9:00–18:00 BRT
`;

const LlmsTxt = () => (
  <pre
    style={{
      whiteSpace: "pre-wrap",
      fontFamily: "monospace",
      padding: "2rem",
      maxWidth: "800px",
      margin: "0 auto",
    }}
  >
    {llmsContent}
  </pre>
);

export default LlmsTxt;
