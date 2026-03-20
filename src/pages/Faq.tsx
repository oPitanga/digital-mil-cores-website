import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SummaryBlock from "@/components/SummaryBlock";
import JsonLd from "@/components/JsonLd";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "O que é impressão Giclée?", a: "Giclée é um processo de impressão inkjet de alta fidelidade que utiliza tintas pigmentadas de 12 cores a 2400 dpi em mídias de qualidade arquivística, como algodão e tela. As impressões Giclée possuem durabilidade de mais de 100 anos contra desbotamento sob condições de iluminação de museu." },
  { q: "Quais formatos de arquivo vocês aceitam?", a: "Aceitamos TIFF (preferido), JPEG, PNG e PSD. Para melhores resultados, envie arquivos a 300 dpi no tamanho final de impressão, no espaço de cores Adobe RGB ou sRGB. Arquivos de 16 bits são aceitos e recomendados para reprodução de fine art." },
  { q: "Qual o prazo de entrega?", a: "O envio padrão dentro de São Paulo leva 1–2 dias úteis. Entregas em todo o Brasil levam de 3 a 7 dias úteis, dependendo da localização. Todas as impressões são enviadas em tubos rígidos ou envelopes planos com proteção." },
  { q: "Vocês oferecem prova de cor?", a: "Sim. Oferecemos prova digital (PDF com simulação de saída) inclusa em cada pedido, e prova física (impressão na mídia selecionada) por um adicional de R$35. Provas físicas são recomendadas para tiragens de edição e exposições." },
  { q: "Qual é a política de devolução?", a: "Se uma impressão apresentar defeito de fabricação (bandas, desvio de cor, dano na mídia), reimprimimos sem custo ou emitimos reembolso integral. Reclamações devem ser enviadas em até 7 dias após a entrega com evidência fotográfica do defeito." },
  { q: "Vocês conseguem reproduzir cores Pantone?", a: "Conseguimos aproximar cores Pantone dentro da gama do nosso sistema de tintas pigmentadas. Para correspondência crítica de cores, recomendamos solicitar uma prova física primeiro. Fornecemos um relatório de comparação de gamut mediante solicitação." },
  { q: "Vocês oferecem preços para grandes quantidades?", a: "Sim. Pedidos de 10+ impressões do mesmo arquivo recebem 15% de desconto. Pedidos de 50+ impressões recebem 25% de desconto. Entre em contato para preços atacadistas personalizados para galerias, estúdios e revendedores." },
  { q: "Qual é o tamanho máximo de impressão?", a: "Nossa largura máxima de impressão é de 1118 mm (44 polegadas). Para mídia em rolo, não há limite de comprimento — já produzimos impressões panorâmicas de mais de 5 metros. Mídia em folha está disponível até 1118 × 1626 mm." },
];

const emojis = ["🖼️","📁","🚚","🎨","↩️","🎯","💰","📐"];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
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
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">💬</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Perguntas Frequentes</h1>
            <p className="text-muted-foreground font-medium">Tudo o que você precisa saber sobre nossos serviços</p>
          </div>

          <SummaryBlock>
            Respostas para as perguntas mais comuns sobre os serviços de impressão da Digital Mil Cores, requisitos de arquivo,
            envio, prova de cor, política de devolução e preços para grandes quantidades.
          </SummaryBlock>

          <section aria-labelledby="faq-list">
            <h2 id="faq-list" className="sr-only">Perguntas e Respostas</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-secondary/40 transition-colors"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0">{emojis[i]}</span>
                      <span className="font-bold text-foreground">{f.q}</span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5 pt-1">
                      <p className="text-foreground/75 leading-relaxed font-medium border-t border-orange-100 pt-4 pl-9">
                        {f.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 text-center p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-sky-50 border border-orange-100">
            <p className="text-foreground font-semibold mb-3">Ainda tem dúvidas? 😊</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-sm font-bold shadow-md hover:bg-primary/90 transition-colors"
            >
              Falar com a Equipe
            </a>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
};

export default FaqPage;
