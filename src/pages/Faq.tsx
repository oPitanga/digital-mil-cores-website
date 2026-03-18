import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";
import JsonLd from "@/components/JsonLd";

const faqs = [
  { q: "O que é impressão Giclée?", a: "Giclée é um processo de impressão inkjet de alta fidelidade que utiliza tintas pigmentadas de 12 cores a 2400 dpi em mídias de qualidade arquivística, como algodão e tela. O termo vem da palavra francesa 'gicler' (pulverizar). As impressões Giclée possuem durabilidade de mais de 100 anos contra desbotamento sob condições de iluminação de museu." },
  { q: "Quais formatos de arquivo vocês aceitam?", a: "Aceitamos TIFF (preferido), JPEG, PNG e PSD. Para melhores resultados, envie arquivos a 300 dpi no tamanho final de impressão, no espaço de cores Adobe RGB ou sRGB. Arquivos de 16 bits são aceitos e recomendados para reprodução de fine art." },
  { q: "Qual o prazo de entrega?", a: "O envio padrão dentro de São Paulo leva 1–2 dias úteis. Entregas em todo o Brasil levam de 3 a 7 dias úteis, dependendo da localização. Todas as impressões são enviadas em tubos rígidos ou envelopes planos com proteção." },
  { q: "Vocês oferecem prova de cor?", a: "Sim. Oferecemos prova digital (PDF com simulação de saída) inclusa em cada pedido, e prova física (impressão na mídia selecionada) por um adicional de R$35. Provas físicas são recomendadas para tiragens de edição e exposições." },
  { q: "Qual é a política de devolução?", a: "Se uma impressão apresentar defeito de fabricação (bandas, desvio de cor, dano na mídia), reimprimimos sem custo ou emitimos reembolso integral. Reclamações devem ser enviadas em até 7 dias após a entrega com evidência fotográfica do defeito." },
  { q: "Vocês conseguem reproduzir cores Pantone?", a: "Conseguimos aproximar cores Pantone dentro da gama do nosso sistema de tintas pigmentadas. Para correspondência crítica de cores, recomendamos solicitar uma prova física primeiro. Fornecemos um relatório de comparação de gamut mediante solicitação." },
  { q: "Vocês oferecem preços para grandes quantidades?", a: "Sim. Pedidos de 10+ impressões do mesmo arquivo recebem 15% de desconto. Pedidos de 50+ impressões recebem 25% de desconto. Entre em contato para preços atacadistas personalizados para galerias, estúdios e revendedores." },
  { q: "Qual é o tamanho máximo de impressão?", a: "Nossa largura máxima de impressão é de 1118 mm (44 polegadas). Para mídia em rolo, não há limite de comprimento — já produzimos impressões panorâmicas de mais de 5 metros. Mídia em folha está disponível até 1118 × 1626 mm." },
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Perguntas Frequentes</h1>
        <SummaryBlock>
          Respostas para as perguntas mais comuns sobre os serviços de impressão da Digital Mil Cores, requisitos de arquivo,
          envio, prova de cor, política de devolução e preços para grandes quantidades. Todas as especificações técnicas estão
          atualizadas até janeiro de 2026.
        </SummaryBlock>

        <section aria-labelledby="faq-list">
          <h2 id="faq-list" className="sr-only">Perguntas e Respostas</h2>
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
