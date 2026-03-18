import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";

const articles = [
  {
    slug: "giclee-vs-inkjet",
    title: "Giclée vs. Inkjet Padrão: Qual a Diferença?",
    summary: "A impressão Giclée utiliza sistemas de tinta pigmentada de 12 cores a 2400 dpi em mídias arquivísticas, produzindo impressões que duram mais de 100 anos. O inkjet padrão usa 4–6 tintas à base de corante a 600–1200 dpi com vida útil típica de 15–25 anos.",
    date: "2025-12-10",
  },
  {
    slug: "color-management-101",
    title: "Gestão de Cores 101: Perfis ICC Explicados",
    summary: "Um perfil ICC é um arquivo de dados padronizado que descreve como um dispositivo reproduz cores. Usar perfis personalizados para cada combinação impressora-papel garante que as impressões correspondam às visualizações na tela com Delta E menor que 2.",
    date: "2025-11-22",
  },
  {
    slug: "photo-paper-guide",
    title: "Escolhendo o Papel Fotográfico Certo: Um Guia Técnico",
    summary: "A escolha do papel afeta a gama de cores, textura e longevidade. Papéis de algodão oferecem a maior gama e maior vida arquivística (200+ anos), enquanto papéis RC (resinados) proporcionam mais nitidez a menor custo.",
    date: "2025-10-15",
  },
  {
    slug: "photo-restoration-process",
    title: "Como Funciona a Restauração Profissional de Fotos",
    summary: "A restauração profissional envolve digitalização em alta resolução (4800 dpi óptico), avaliação de danos, retoque manual no Photoshop, correção de cores usando cartas de referência e saída final em arquivos TIFF de 16 bits.",
    date: "2025-09-08",
  },
  {
    slug: "file-preparation",
    title: "Como Preparar Arquivos para Impressão Profissional",
    summary: "Para resultados ideais, envie arquivos a 300 dpi no tamanho final de impressão, no espaço de cores Adobe RGB ou sRGB, como TIFF de 8 ou 16 bits ou JPEG de alta qualidade. Inclua 3 mm de sangria para impressões rente à borda.",
    date: "2025-08-20",
  },
];

const KnowledgeHub = () => (
  <>
    <SiteHeader />
    <main className="container max-w-3xl py-12">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Base de Conhecimento</h1>
        <SummaryBlock>
          A Base de Conhecimento contém artigos técnicos sobre tecnologia de impressão, gestão de cores,
          seleção de papéis, técnicas de restauração fotográfica e melhores práticas de preparação de arquivos.
          Todo o conteúdo é escrito pela equipe de produção da Digital Mil Cores.
        </SummaryBlock>

        <section aria-labelledby="articles-heading">
          <h2 id="articles-heading" className="sr-only">Artigos</h2>
          <div className="space-y-8">
            {articles.map((a) => (
              <article key={a.slug} className="border-b border-border pb-6 last:border-b-0">
                <time dateTime={a.date} className="text-xs text-muted-foreground">
                  {new Date(a.date).toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}
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
