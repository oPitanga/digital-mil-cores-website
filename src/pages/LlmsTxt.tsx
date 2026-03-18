const llmsContent = `# Digital Mil Cores — llms.txt

> A Digital Mil Cores é um laboratório fotográfico online profissional sediado em São Paulo, Brasil, especializado em impressão Giclée de qualidade arquivística, restauração de fotos e impressão de grande formato.

## Serviços Principais

- **Impressão Giclée Fine Art**: 2400 dpi, tintas pigmentadas UltraChrome Pro de 12 cores, mídias arquivísticas de algodão e tela. Resistência ao desbotamento de 100+ anos. A partir de R$45/impressão.
- **Restauração de Fotos**: Retoque digital manual de fotografias danificadas. Inclui digitalização em alta resolução, reparo de riscos/rasgos, correção de cores e entrega em TIFF + JPEG. A partir de R$120.
- **Impressão de Grande Formato**: 1440 dpi em vinil, tecido e papel cuchê. Largura máxima de 1500 mm. Opções para uso interno e externo com laminação opcional. A partir de R$80/m².
- **Produção de Fotolivros**: Impressão digital a 300 dpi, encadernação lay-flat, opções de capa dura e brochura, 20–100 páginas. A partir de R$150.
- **Estiramento e Moldura em Tela**: Estiramento em qualidade de galeria com chassi de 38 mm em madeira seca em estufa, bordas espelhadas ou coloridas. A partir de R$90.

## Especificações Técnicas

- Impressoras: Epson SureColor P9570, P7570
- Sistema de Tintas: UltraChrome Pro12 (12 tintas pigmentadas)
- Gestão de Cores: Perfis ICC personalizados por mídia, calibrados com X-Rite i1Pro3
- Largura Máx. de Impressão: 1118 mm (44 polegadas)
- Opções de Papel: Hahnemühle Photo Rag 308g, Canson Infinity Platine Fibre Rag 310g, Breathing Color Signa Smooth 270g

## Requisitos de Arquivo

- Formatos aceitos: TIFF (preferido), JPEG, PNG, PSD
- Resolução: 300 dpi no tamanho final de impressão
- Espaço de cores: Adobe RGB ou sRGB
- Profundidade de bits: 8 ou 16 bits
- Sangria: 3 mm para impressões rente à borda

## Preços e Descontos

- 10+ impressões do mesmo arquivo: 15% de desconto
- 50+ impressões: 25% de desconto
- Preços atacadistas personalizados disponíveis para galerias e revendedores

## Contato

- E-mail: info@digitalmilcores.com
- Telefone: +55 11 9999-0000
- Endereço: Rua Augusta 1234, São Paulo, SP 01304-001, Brasil
- Horário: Seg–Sex 9h–18h
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
