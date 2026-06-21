import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProcessTimeline from "@/components/ProcessTimeline";
import { CheckCircle2 } from "lucide-react";
import TeamCard from "@/components/TeamCard";
import SocialCTABar from "@/components/SocialCTABar";
import { useRevealOnScroll } from "@/hooks/use-intersection";
import { Star, Shield, Award, ArrowRight, Camera, Sparkles } from "lucide-react";

const services = [
  {
    icon: "🖼️",
    title: "Revelação Fotográfica",
    description: "Cada revelação passa por um processo fotoquímico profissional. O mesmo princípio que sempre garantiu que as cores fossem mais vivas, os detalhes precisos e o resultado durável por décadas.",
    specs: ["Tamanhos variados", "Papel super brilho ou fosco", "Formato Polaroid"],
    priceRange: "R$ 26,90",
    badge: "Especialidade",
    href: "/services/giclee",
    popular: true,
  },
  {
    icon: "🎨",
    title: "Restauração Fotográfica",
    description: "Revivemos fotos antigas, danificadas ou desbotadas com retoque digital manual.",
    specs: ["Análise individualizada", "Retoque manual de alta precisão", "Aprovação prévia incluída"],
    priceRange: "R$ 150",
    badge: "Exclusivo",
    href: "/services/restoration",
    popular: false,
  },
];

const team = [
  { name: "Carlos Mendes", role: "Diretor de Cor",     bio: "25 anos de experiência em colorimetria e calibração de equipamentos fotográficos profissionais.", initials: "CM" },
  { name: "Ana Ferreira",  role: "Restauradora Chefe", bio: "Especialista em restauração digital, formada em conservação e restauro pela ECA-USP.", initials: "AF" },
  { name: "Lucas Alves",   role: "Técnico de Impressão", bio: "Expert em impressão fine art com domínio completo dos perfis ICC e papéis de algodão.", initials: "LA" },
];

const testimonials = [
  { text: "Eu não tenho nem o que falar sobre essa qualidade. Atendimento impecável! Foram entregues ainda antes do prazo, com menos de uma semana desde o pagamento. Fotos de qualidade e sem nenhum defeito. Só elogios!", author: "Taitiana P.", stars: 5 },
  { text: "As fotos ficaram perfeitas — realmente não é apenas aquele papel de foto impresso, a qualidade é perfeita assim como eram as de antigamente!", author: "Vitoria O.", stars: 5 },
  { text: "Ficaram perfeitas, com cores vivas e bastante nitidez. Recomendo a todos, pois nas lojas cobram os olhos da cara para revelar fotos. Vendedor muito atencioso — assim que efetuei a compra ele logo me chamou para enviar as fotos.", author: "Cristiane B.", stars: 5 },
  { text: "Meu Deus que lindo, amei! Material de primeira, chegou super rápido, pessoal muito atencioso — e com certeza terei outras compras, pois amo revelar minhas lembranças.", author: "Cicera S.", stars: 5 },
  { text: "Sempre revelo minhas fotos nessa loja, boa qualidade, envio rápido e bom atendimento. Acredito que já foram mais de 500 fotos!", author: "Araujo C.", stars: 5 },
  { text: "Sensacional! Impressão perfeita! Entrega muito rápida. Minha gratidão em especial ao vendedor Bruno, que me respondia quase instantaneamente e me direcionou em cada passo. Parabéns!", author: "Elisabete J.", stars: 5 },
];

/* Polaroid person photos — revealed-print aesthetic */
const personPhotos = [
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=220&h=280&q=80",
    label: "Formatura",
    rotate: "-rotate-6",
    pos: "top-4 -left-8",
    delay: "0.5s",
    anim: "animate-float",
    size: "w-28 h-32",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=220&h=280&q=80",
    label: "Retrato",
    rotate: "rotate-8",
    pos: "-bottom-4 -right-8",
    delay: "1.2s",
    anim: "animate-float-delay",
    size: "w-28 h-32",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=220&h=280&q=80",
    label: "Casamento",
    rotate: "-rotate-3",
    pos: "-bottom-2 left-6",
    delay: "2s",
    anim: "animate-float",
    size: "w-24 h-28",
  },
  {
    src: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=220&h=280&q=80",
    label: "Família",
    rotate: "rotate-3",
    pos: "top-2 right-10",
    delay: "2.8s",
    anim: "animate-float-delay",
    size: "w-24 h-28",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=220&h=280&q=80",
    label: "Aniversário",
    rotate: "rotate-5",
    pos: "top-24 -right-6",
    delay: "1.7s",
    anim: "animate-float",
    size: "w-24 h-28",
  },
];

const Index = () => {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/12 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/8 blur-3xl animate-float-delay" />
          <div className="absolute top-1/3 left-1/4 w-56 h-56 rounded-full bg-[hsl(240,88%,58%)]/8 blur-2xl animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container relative py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <div className="text-center lg:text-left">
              <Badge
                variant="outline"
                className="mb-6 border-primary/40 font-semibold gap-1.5 px-4 py-1.5 text-xs tracking-wide text-primary"
              >
                <Sparkles className="h-3 w-3" />
                Laboratório Fotográfico Online
              </Badge>

              <h1
                style={{ fontFamily: "var(--font-display)" }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
              >
                Suas <span className="text-gradient">memórias</span> merecem durar para sempre
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Há mais de 40 anos revelamos momentos. Do filme ao digital, o que não mudou é o cuidado
                com cada foto que passa pelas nossas mãos.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button asChild size="lg" className="gap-2 text-base px-8">
                  <Link to="/pricing">
                    Ver serviços <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 text-base px-8">
                  <Link to="/about">Fale conosco</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-primary" /> Revelação Fotográfica</span>
                <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-primary" /> 40 anos de experiência</span>
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-yellow-400 fill-yellow-400" /> 4,9 / 5 estrelas</span>
              </div>
            </div>

            {/* Right: Photography collage */}
            <div className="relative hidden lg:flex items-center justify-center min-h-[500px]">
              {/* Spinning ring decorations */}
              <div className="absolute w-80 h-80 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
              <div className="absolute w-96 h-96 rounded-full border border-accent/15 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "20s" }} />

              {/* Main dark photo frame */}
              <div className="relative z-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 rotate-2 animate-float-slow">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(218,70%,8%)] via-[hsl(218,60%,12%)] to-[hsl(218,70%,6%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(45,100%,30%)]/20 via-transparent to-transparent" />
                {/* Grid of small photos */}
                <div className="absolute inset-3 grid grid-cols-2 gap-1.5 opacity-90">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1529686342540-1b43aec0df75?auto=format&fit=crop&w=150&h=180&q=75"
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.className += ' bg-gradient-to-br from-rose-400 to-pink-600'; }}
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=150&h=180&q=75"
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.className += ' bg-gradient-to-br from-sky-300 to-blue-500'; }}
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=150&h=180&q=75"
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.className += ' bg-gradient-to-br from-amber-300 to-orange-500'; }}
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=150&h=180&q=75"
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.className += ' bg-gradient-to-br from-violet-300 to-purple-500'; }}
                    />
                  </div>
                </div>
                {/* Lab badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-sm rounded-xl p-2.5">
                  <p className="text-yellow-300 text-[10px] font-mono tracking-widest uppercase">Digital Mil Cores</p>
                  <p className="text-white/50 text-[9px] font-mono">Lab · São Paulo · Est. 2010</p>
                </div>
                <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm rounded-lg p-1.5">
                  <Camera className="h-4 w-4 text-white/70" />
                </div>
              </div>

              {/* Person photo polaroids */}
              {personPhotos.map((p) => (
                <div
                  key={p.label}
                  className={`absolute ${p.pos} z-20 ${p.size} bg-white shadow-xl rounded-md ${p.rotate} overflow-hidden ${p.anim}`}
                  style={{ animationDelay: p.delay }}
                >
                  <div className="w-full" style={{ height: "75%" }}>
                    <img
                      src={p.src}
                      alt={p.label}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.style.display = 'none';
                        const parent = el.parentElement!;
                        parent.style.background = 'linear-gradient(135deg, #ddd 0%, #bbb 100%)';
                      }}
                    />
                  </div>
                  <div className="px-2 pt-1 text-center">
                    <p className="text-[9px] text-gray-500 font-mono tracking-tight">{p.label}</p>
                  </div>
                </div>
              ))}

              {/* Star decorations */}
              <div className="absolute top-8 right-2 z-30 animate-float" style={{ animationDelay: "0.8s" }}>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 opacity-80" />
              </div>
              <div className="absolute bottom-14 left-0 z-30 animate-float" style={{ animationDelay: "1.8s" }}>
                <Star className="h-3.5 w-3.5 text-primary fill-primary opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="container py-24">
        <div className="text-center mb-14 reveal">
          <Badge variant="secondary" className="mb-3 px-4 py-1">Nossos Serviços</Badge>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl font-bold mb-3">
            A melhor qualidade ainda passa pela química
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No mundo digital, a maioria das impressões vai direto do arquivo para o papel. Na Digital Mil Cores, não.
            Tecnologia digital na captura. Processo analógico na entrega. O melhor dos dois mundos, para que sua foto
            seja tão boa quanto o momento que ela guarda.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col sm:flex-row bg-card border ${s.popular ? "border-primary ring-2 ring-primary" : "border-border"} rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300`}
            >
              {s.popular && (
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow z-10">
                  Mais Popular
                </span>
              )}

              {/* Painel esquerdo com ícone e preço */}
              <div className="sm:w-52 flex-shrink-0 flex flex-col items-center justify-center gap-3 p-8 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-b sm:border-b-0 sm:border-r border-border">
                <span className="text-6xl">{s.icon}</span>
                {s.badge && (
                  <Badge variant="secondary" className="text-xs">{s.badge}</Badge>
                )}
                <div className="text-center mt-1">
                  <p className="text-xs text-muted-foreground">A partir de</p>
                  <p style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-bold text-primary">{s.priceRange}</p>
                </div>
              </div>

              {/* Conteúdo direito */}
              <div className="flex flex-col flex-1 p-7 gap-5">
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)" }} className="text-xl font-bold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {s.specs.map((spec, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Button asChild className="self-start gap-2 mt-auto">
                  <Link to={s.href}>Ver detalhes <ArrowRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="ghost" className="gap-2">
            <Link to="/pricing">Ver tabela de preços completa <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Processo de produção */}
      <section className="bg-secondary/40 border-y border-border py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <Badge variant="secondary" className="mb-3 px-4 py-1">Do envio à entrega</Badge>
              <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl font-bold mb-4">
                Como funciona o processo
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cada pedido passa por um rigoroso fluxo de produção para garantir que sua impressão chegue
                exatamente como você imaginou — ou melhor.
              </p>
              <Button asChild variant="outline">
                <Link to="/studio-tour">Ver o laboratório</Link>
              </Button>
            </div>
            <div className="reveal-right">
              <ProcessTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="container py-24">
        <div className="text-center mb-14 reveal">
          <Badge variant="secondary" className="mb-3 px-4 py-1">Depoimentos</Badge>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl font-bold mb-3">
            O que nossos clientes dizem
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 5)} bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-xs font-semibold text-primary">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-secondary/40 border-y border-border py-24">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <Badge variant="secondary" className="mb-3 px-4 py-1">Nossa Equipe</Badge>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl font-bold mb-3">
              Especialistas por trás de cada impressão
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Cada membro da equipe é apaixonado por fotografia e comprometido com a excelência técnica.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <div key={member.name} className={`reveal reveal-delay-${i + 1}`}>
                <TeamCard {...member} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="ghost" className="gap-2">
              <Link to="/about">Conhecer a equipe completa <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Social */}
      <section className="container py-24">
        <SocialCTABar
          heading="Pronto para preservar suas memórias?"
          subheading="Compre pela Shopee, TikTok Shop, ou fale diretamente com a nossa equipe no Instagram e WhatsApp."
        />
      </section>

      <SiteFooter />
    </>
  );
};

export default Index;
