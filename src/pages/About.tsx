import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TeamCard from "@/components/TeamCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import SocialCTABar from "@/components/SocialCTABar";
import { useRevealOnScroll } from "@/hooks/use-intersection";
import { Shield, Award, Heart, Users } from "lucide-react";

const team = [
  { name: "Carlos Mendes", role: "Diretor de Cor", bio: "25 anos de experiência em colorimetria e calibração de equipamentos fotográficos profissionais. Formado em Artes Visuais pela FAAP.", initials: "CM" },
  { name: "Ana Ferreira", role: "Restauradora Chefe", bio: "Especialista em restauração digital, formada em conservação e restauro pela ECA-USP. Já restaurou mais de 3.000 fotografias históricas.", initials: "AF" },
  { name: "Lucas Alves", role: "Técnico de Impressão", bio: "Expert em impressão fine art com domínio completo dos perfis ICC, papéis de algodão e tecnologia de tinta arquivística.", initials: "LA" },
  { name: "Paula Costa", role: "Atendimento e Qualidade", bio: "Responsável por garantir que cada cliente tenha a melhor experiência, do pedido à entrega.", initials: "PC" },
];

const values = [
  { icon: Shield, title: "Qualidade Arquivística", desc: "Usamos apenas materiais com garantia de durabilidade superior a 100 anos em condições ideais de armazenamento." },
  { icon: Heart, title: "Amor pelas Memórias", desc: "Sabemos que cada foto representa um momento único. Tratamos cada trabalho com o cuidado que ele merece." },
  { icon: Award, title: "Excelência Técnica", desc: "Nossa equipe é formada por especialistas com décadas de experiência em fotografia e artes visuais." },
  { icon: Users, title: "Atendimento Humano", desc: "Nada de chatbots. Você fala diretamente com quem vai cuidar do seu pedido." },
];

const milestones = [
  { year: "2010", event: "Fundação do laboratório em São Paulo com foco em impressão Giclée." },
  { year: "2013", event: "Lançamento do serviço de restauração fotográfica digital." },
  { year: "2016", event: "Expansão para todo o Brasil com envio de alta segurança." },
  { year: "2019", event: "Certificação ICC para perfis de cor em 8 papéis fine art." },
  { year: "2022", event: "Lançamento dos fotolivros lay-flat com papel 300g arquivístico." },
  { year: "2024", event: "Mais de 50.000 pedidos entregues e 4,9 estrelas de avaliação média." },
];

const About = () => {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-secondary/30 to-background py-20 text-center">
        <div className="container max-w-3xl">
          <Badge variant="outline" className="mb-4 text-primary border-primary/40 font-semibold">Nossa História</Badge>
          <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Laboratório criado por quem ama fotografia
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desde 2010, a Digital Mil Cores preserva histórias através da impressão fotográfica de qualidade
            arquivística. Somos o laboratório que trata cada foto como se fosse nossa.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="container py-20">
        <div className="text-center mb-14 reveal">
          <Badge variant="secondary" className="mb-3">Nosso Manifesto</Badge>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold text-foreground mb-3">
            O que nos move
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={v.title} className={`reveal reveal-delay-${i + 1} bg-card border border-border rounded-2xl p-6 text-center`}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <p style={{ fontFamily: "var(--font-display)" }} className="font-semibold text-foreground mb-2">{v.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline história */}
      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="reveal-left">
              <Badge variant="secondary" className="mb-3">Nossa Trajetória</Badge>
              <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold text-foreground mb-4">
                15 anos preservando histórias
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Começamos como um laboratório de bairro com uma única impressora Giclée. Hoje atendemos
                clientes em todo o Brasil, mas mantemos o mesmo cuidado artesanal do primeiro dia.
              </p>
            </div>
            <div className="relative pl-8 reveal-right">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              <ol className="space-y-6">
                {milestones.map((m, i) => (
                  <li key={m.year} className="relative">
                    <span className="absolute -left-9 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {m.year.slice(2)}
                    </span>
                    <p className="text-xs text-primary font-bold mb-0.5">{m.year}</p>
                    <p className="text-sm text-foreground/80">{m.event}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="container py-20">
        <div className="text-center mb-14 reveal">
          <Badge variant="secondary" className="mb-3">A Equipe</Badge>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold text-foreground mb-3">
            Quem cuida das suas fotos
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Uma equipe pequena, dedicada e apaixonada. Cada pedido é tratado pessoalmente por um especialista.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={member.name} className={`reveal reveal-delay-${i + 1}`}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </section>

      {/* Processo */}
      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-14 reveal">
            <Badge variant="secondary" className="mb-3">Como Trabalhamos</Badge>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold text-foreground mb-3">
              Do arquivo à sua parede
            </h2>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <SocialCTABar
          heading="Venha nos conhecer melhor"
          subheading="Tire suas dúvidas, conheça o laboratório ou peça um orçamento pelo canal que preferir."
        />
      </section>

      <SiteFooter />
    </>
  );
};

export default About;
