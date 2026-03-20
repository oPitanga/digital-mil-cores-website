import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";

const articles = [
  {
    slug: "giclee-vs-inkjet",
    emoji: "🖨️",
    title: "Giclée vs. Inkjet Padrão: Qual a Diferença?",
    summary: "A impressão Giclée utiliza sistemas de tinta pigmentada de 12 cores a 2400 dpi em mídias arquivísticas, produzindo impressões que duram mais de 100 anos. O inkjet padrão usa 4–6 tintas à base de corante a 600–1200 dpi com vida útil típica de 15–25 anos.",
    date: "2025-12-10",
    tag: "Tecnologia",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    slug: "color-management-101",
    emoji: "🎨",
    title: "Gestão de Cores 101: Perfis ICC Explicados",
    summary: "Um perfil ICC é um arquivo de dados padronizado que descreve como um dispositivo reproduz cores. Usar perfis personalizados para cada combinação impressora-papel garante que as impressões correspondam às visualizações na tela com Delta E menor que 2.",
    date: "2025-11-22",
    tag: "Cores",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    slug: "photo-paper-guide",
    emoji: "📄",
    title: "Escolhendo o Papel Fotográfico Certo: Um Guia Técnico",
    summary: "A escolha do papel afeta a gama de cores, textura e longevidade. Papéis de algodão oferecem a maior gama e maior vida arquivística (200+ anos), enquanto papéis RC (resinados) proporcionam mais nitidez a menor custo.",
    date: "2025-10-15",
    tag: "Materiais",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    slug: "photo-restoration-process",
    emoji: "🔧",
    title: "Como Funciona a Restauração Profissional de Fotos",
    summary: "A restauração profissional envolve digitalização em alta resolução (4800 dpi óptico), avaliação de danos, retoque manual no Photoshop, correção de cores usando cartas de referência e saída final em arquivos TIFF de 16 bits.",
    date: "2025-09-08",
    tag: "Restauração",
    tagColor: "bg-sky-100 text-sky-700",
  },
  {
    slug: "file-preparation",
    emoji: "💾",
    title: "Como Preparar Arquivos para Impressão Profissional",
    summary: "Para resultados ideais, envie arquivos a 300 dpi no tamanho final de impressão, no espaço de cores Adobe RGB ou sRGB, como TIFF de 8 ou 16 bits ou JPEG de alta qualidade. Inclua 3 mm de sangria para impressões rente à borda.",
    date: "2025-08-20",
    tag: "Arquivos",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
];

const KnowledgeHub = () => (
  <>
    <SiteHeader />
    <main className="container max-w-3xl py-12">
      <article>
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">📚</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Base de Conhecimento</h1>
          <p className="text-muted-foreground font-medium">Artigos técnicos escritos pela nossa equipe de especialistas</p>
        </div>

        <SummaryBlock>
          A Base de Conhecimento contém artigos técnicos sobre tecnologia de impressão, gestão de cores,
          seleção de papéis, técnicas de restauração fotográfica e melhores práticas de preparação de arquivos.
          Todo o conteúdo é escrito pela equipe de produção da Digital Mil Cores.
        </SummaryBlock>

        <section aria-labelledby="articles-heading">
          <h2 id="articles-heading" className="sr-only">Artigos</h2>
          <div className="space-y-4">
            {articles.map((a) => (
              <article
                key={a.slug}
                className="bg-white rounded-2xl border border-orange-100 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0 mt-1">{a.emoji}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${a.tagColor}`}>
                        {a.tag}
                      </span>
                      <time dateTime={a.date} className="text-xs text-muted-foreground font-medium">
                        {new Date(a.date).toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}
                      </time>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{a.title}</h3>
                    <p className="text-foreground/70 leading-relaxed font-medium text-sm">{a.summary}</p>
                  </div>
                </div>
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
