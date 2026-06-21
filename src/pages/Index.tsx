import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { CheckCircle2 } from "lucide-react";
import SocialCTABar from "@/components/SocialCTABar";
import { useRevealOnScroll } from "@/hooks/use-intersection";
import { Star, Shield, Award, ArrowRight, Sparkles } from "lucide-react";

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

const testimonials = [
  { text: "Eu não tenho nem o que falar sobre essa qualidade. Atendimento impecável! Foram entregues ainda antes do prazo, com menos de uma semana desde o pagamento. Fotos de qualidade e sem nenhum defeito. Só elogios!", author: "Taitiana P.", stars: 5 },
  { text: "As fotos ficaram perfeitas — realmente não é apenas aquele papel de foto impresso, a qualidade é perfeita assim como eram as de antigamente!", author: "Vitoria O.", stars: 5 },
  { text: "Ficaram perfeitas, com cores vivas e bastante nitidez. Recomendo a todos, pois nas lojas cobram os olhos da cara para revelar fotos. Vendedor muito atencioso — assim que efetuei a compra ele logo me chamou para enviar as fotos.", author: "Cristiane B.", stars: 5 },
  { text: "Meu Deus que lindo, amei! Material de primeira, chegou super rápido, pessoal muito atencioso — e com certeza terei outras compras, pois amo revelar minhas lembranças.", author: "Cicera S.", stars: 5 },
  { text: "Sempre revelo minhas fotos nessa loja, boa qualidade, envio rápido e bom atendimento. Acredito que já foram mais de 500 fotos!", author: "Araujo C.", stars: 5 },
  { text: "Sensacional! Impressão perfeita! Entrega muito rápida. Minha gratidão em especial ao vendedor Bruno, que me respondia quase instantaneamente e me direcionou em cada passo. Parabéns!", author: "Elisabete J.", stars: 5 },
];

/* Impressões fotográficas espalhadas — narrativa da Digital Mil Cores */
const heroPhotos = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=480&h=320&q=80",
    label: "Paisagem",
    fallback: "linear-gradient(135deg,#4CAF50,#1A5BB5)",
    rotate: "-4deg",
    pos: { left: 0, top: 16 },
    size: 220,
    imgH: 148,
    z: 10,
    anim: "animate-float-slow",
    delay: "0s",
  },
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191011?auto=format&fit=crop&w=400&h=320&q=80",
    label: "Família",
    fallback: "linear-gradient(135deg,#FF6600,#FFD700)",
    rotate: "3deg",
    pos: { left: "50%", top: "55%", translateX: "-30%", translateY: "-50%" },
    size: 205,
    imgH: 160,
    z: 30,
    anim: "animate-float",
    delay: "0.8s",
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=380&h=300&q=80",
    label: "Crianças",
    fallback: "linear-gradient(135deg,#E91E8C,#FF3300)",
    rotate: "5deg",
    pos: { right: 4, top: 0 },
    size: 188,
    imgH: 148,
    z: 20,
    anim: "animate-float-delay",
    delay: "1.4s",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&h=280&q=80",
    label: "Pedra Grande · Atibaia",
    fallback: "linear-gradient(135deg,#78909C,#37474F)",
    rotate: "-5deg",
    pos: { right: 0, bottom: 24 },
    size: 196,
    imgH: 138,
    z: 20,
    anim: "animate-float-slow",
    delay: "2.2s",
  },
];

const Index = () => {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Animated orbs — logo colors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl animate-float-slow" style={{ background: '#E91E8C18' }} />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-3xl animate-float-delay" style={{ background: '#00BCD418' }} />
          <div className="absolute top-1/3 left-1/4 w-56 h-56 rounded-full blur-2xl animate-float-slow" style={{ background: '#9C27B012', animationDelay: "2s" }} />
          <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full blur-2xl animate-float-delay" style={{ background: '#FF660010', animationDelay: "3s" }} />
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

            {/* Right: Impressões fotográficas espalhadas */}
            <div className="relative hidden lg:flex items-center justify-center min-h-[520px] w-full">

              {heroPhotos.map((p) => {
                const posStyle: React.CSSProperties = { position: 'absolute', zIndex: p.z };
                if (p.pos.left !== undefined)    posStyle.left  = p.pos.left;
                if (p.pos.right !== undefined)   posStyle.right = p.pos.right;
                if (p.pos.top !== undefined)     posStyle.top   = p.pos.top;
                if (p.pos.bottom !== undefined)  posStyle.bottom = p.pos.bottom;
                if (typeof p.pos.left === 'string')  posStyle.left  = p.pos.left;
                if (p.pos.translateX)            posStyle.transform = `rotate(${p.rotate}) translate(${p.pos.translateX ?? '0'}, ${p.pos.translateY ?? '0'})`;
                else                             posStyle.transform = `rotate(${p.rotate})`;

                return (
                  <div key={p.label} style={posStyle}>
                    <div className={`shadow-2xl ${p.anim}`} style={{ width: p.size, animationDelay: p.delay }}>
                      <div className="bg-white p-2.5 pb-6">
                        <div className="overflow-hidden" style={{ height: p.imgH }}>
                          <img
                            src={p.src}
                            alt={p.label}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              const wrap = img.parentElement!;
                              img.style.display = 'none';
                              wrap.style.background = p.fallback;
                            }}
                          />
                        </div>
                        <p className="text-[8px] text-gray-400 font-mono mt-2 text-center tracking-widest uppercase">
                          {p.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Dots coloridos */}
              <div className="absolute top-6 right-6 z-40 animate-float w-3.5 h-3.5 rounded-full" style={{ background: '#FFD700', animationDelay: "0.8s", opacity: 0.9 }} />
              <div className="absolute bottom-10 left-2 z-40 animate-float w-3 h-3 rounded-full"   style={{ background: '#E91E8C', animationDelay: "1.8s", opacity: 0.8 }} />
              <div className="absolute top-1/2 right-0 z-40 animate-float-delay w-2.5 h-2.5 rounded-full" style={{ background: '#00BCD4', animationDelay: "2.5s", opacity: 0.75 }} />
              <div className="absolute top-28 left-6 z-40 animate-float w-2 h-2 rounded-full"     style={{ background: '#9C27B0', animationDelay: "1.2s", opacity: 0.7 }} />
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
              {/* Faixa rainbow topo */}
              <div className="absolute inset-x-0 top-0 h-[3px] z-10" style={{ background: 'linear-gradient(90deg,#E91E8C,#FF6600,#FFD700,#00BCD4,#9C27B0)' }} />

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

      {/* Depoimentos */}
      <section className="container py-24">
        <div className="text-center mb-14 reveal">
          <Badge variant="secondary" className="mb-3 px-4 py-1">Depoimentos</Badge>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl font-bold mb-5">
            O que os nossos clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma foto não é um arquivo. É uma lembrança que você pode segurar. E quando ela é revelada
            com o cuidado que merece — com cor, nitidez e contraste reais — esse momento volta inteiro.
          </p>
          <p className="text-muted-foreground mt-3 font-semibold">É para isso que a gente existe.</p>
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
