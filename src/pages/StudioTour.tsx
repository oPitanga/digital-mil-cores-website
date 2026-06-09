import { Badge } from "@/components/ui/badge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SocialCTABar from "@/components/SocialCTABar";
import { useRevealOnScroll } from "@/hooks/use-intersection";

/* Each area has a visual rendered with CSS art (100% reliable, no external deps) */
const AreaImage = ({ type }: { type: string }) => {
  if (type === "giclee") return (
    <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 flex-shrink-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(218,80%,6%)] via-[hsl(218,70%,10%)] to-[hsl(218,80%,6%)]" />
      {/* Print beam lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-px opacity-25"
          style={{
            top: `${15 + i * 7}%`,
            left: 0, right: 0,
            background: `linear-gradient(90deg, transparent, hsl(217,92%,${50 + i * 3}%), transparent)`,
          }}
        />
      ))}
      {/* Printer carriage */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3/4 h-8 bg-gradient-to-r from-slate-700 to-slate-500 rounded shadow-lg shadow-blue-400/20 flex items-center px-3 gap-2">
        <div className="flex gap-1">
          {['#3b82f6','#ec4899','#fbbf24','#34d399','#a78bfa','#f87171'].map((c) => (
            <div key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
      {/* Glow beam */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
      <span className="absolute bottom-2 right-3 text-blue-300/60 text-[10px] font-mono tracking-widest">Canon imagePROGRAF</span>
    </div>
  );

  if (type === "color") return (
    <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5">
      {/* Spectrum */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #ff4d4d 0%, #ff8c00 20%, #ffe100 40%, #4cde80 55%, #4da6ff 75%, #b44dff 100%)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/15" />
      {/* Color swatches */}
      <div className="absolute bottom-3 left-3 right-3 flex gap-1.5 h-7">
        {['#ff4d4d','#ff8c00','#ffe100','#4cde80','#4da6ff','#b44dff','#fff'].map((c) => (
          <div key={c} className="flex-1 rounded shadow-sm border border-white/20" style={{ backgroundColor: c }} />
        ))}
      </div>
      {/* Monitor frame */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-20 bg-black/40 rounded-lg border border-white/20 overflow-hidden">
        <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #4da6ff44, #b44dff44)' }} />
      </div>
      <span className="absolute top-2 right-3 text-white/60 text-[10px] font-mono tracking-widest">Eizo 99% Adobe RGB</span>
    </div>
  );

  if (type === "restoration") return (
    <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-amber-800/80 to-stone-950" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(255,210,100,0.25) 0%, transparent 70%)' }} />
      {/* Old photo cracking effect */}
      <div className="absolute inset-5 border-2 border-amber-600/30 rounded-sm" />
      <div className="absolute inset-7 bg-gradient-to-br from-amber-100/15 via-amber-200/10 to-transparent rounded-sm" />
      {/* Scratch lines */}
      <div className="absolute" style={{ top: '35%', left: '10%', width: '80%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,200,100,0.3), transparent)' }} />
      <div className="absolute" style={{ top: '55%', left: '20%', width: '60%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,200,100,0.2), transparent)' }} />
      {/* Wacom tablet icon */}
      <div className="absolute bottom-4 right-4 w-10 h-8 bg-slate-700/70 rounded border border-white/20 flex items-center justify-center">
        <div className="w-5 h-3 rounded-sm bg-slate-500/70 border border-white/20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
      <span className="absolute bottom-2 right-3 text-amber-300/70 text-[10px] font-mono tracking-widest">Wacom Cintiq Pro</span>
    </div>
  );

  /* packaging */
  return (
    <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
      {/* Box silhouettes */}
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        <div className="w-16 h-20 bg-white/12 rounded border border-white/20 shadow-inner flex flex-col overflow-hidden">
          <div className="h-1/2 bg-white/8 border-b border-white/15" />
          <div className="flex-1" />
        </div>
        <div className="w-12 h-16 bg-white/10 rounded border border-white/18 shadow-inner" />
        <div className="w-10 h-12 bg-white/8 rounded border border-white/15 shadow-inner" />
      </div>
      {/* Ribbon */}
      <div className="absolute left-1/2 -translate-x-1/2 top-3 w-px h-full bg-gradient-to-b from-primary/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
      <span className="absolute bottom-2 right-3 text-slate-300/70 text-[10px] font-mono tracking-widest">Embalagem Segura</span>
    </div>
  );
};

const areas = [
  {
    type: "giclee",
    title: "Sala de Impressão Giclée",
    desc: "Equipamentos Canon imagePROGRAF com 12 canais de tinta. Ambiente com controle de temperatura e umidade para máxima estabilidade das impressões.",
    specs: ["Temperatura: 20°C constante", "Umidade: 45–55%", "2 impressoras 44\"", "Calibração diária"],
  },
  {
    type: "color",
    title: "Estação de Colorimetria",
    desc: "Onde a magia da cor acontece. Monitores calibrados por espectrofotômetro e software profissional de gestão de cor.",
    specs: ["Monitor Eizo 99% Adobe RGB", "Calibração com i1Display Pro", "Perfis ICC proprietários", "D50 standard"],
  },
  {
    type: "restoration",
    title: "Ateliê de Restauração",
    desc: "Ambiente silencioso onde as restauradoras trabalham com ampliação 300% em tela e tablet Wacom para retoques precisíssimos.",
    specs: ["Tablets Wacom Cintiq", "Ampliação até 600%", "Arquivamento em NAS RAID", "Backup diário"],
  },
  {
    type: "packaging",
    title: "Área de Embalagem",
    desc: "Cada impressão é embalada individualmente com papel siliconado, proteção rígida e aviso de fragilidade.",
    specs: ["Proteção anti-umidade", "Tubo rígido para formatos maiores", "Lacre de segurança", "Rastreamento incluso"],
  },
];

const equipment = [
  { name: "Canon imagePROGRAF Pro-6100", type: "Impressão Giclée",  detail: "12 tintas, 44\", 2400 dpi" },
  { name: "Epson SC-P20000",             type: "Grande Formato",    detail: "10 tintas, 64\", 1440 dpi" },
  { name: "Eizo ColorEdge CG2730",       type: "Calibração de Cor", detail: "99% Adobe RGB, 4K" },
  { name: "X-Rite i1Pro 3",             type: "Espectrofotômetro", detail: "Calibração e perfis ICC" },
  { name: "Wacom Cintiq Pro 27",         type: "Restauração",       detail: "27\", 4K, pressão 8192 níveis" },
];

const StudioTour = () => {
  useRevealOnScroll();

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-secondary/30 to-background py-20 text-center">
        <div className="container max-w-3xl">
          <Badge variant="outline" className="mb-4 text-primary border-primary/40 font-semibold">Tour pelo Laboratório</Badge>
          <h1 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Transparência do início ao fim
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conheça cada área do nosso laboratório. Trabalhamos com equipamentos profissionais e
            processos rigorosos para garantir que sua impressão seja perfeita.
          </p>
        </div>
      </section>

      {/* Áreas */}
      <section className="container py-20">
        <div className="text-center mb-14 reveal">
          <Badge variant="secondary" className="mb-3">Nossas Instalações</Badge>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold mb-3">
            Cada área do laboratório
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada setor foi projetado para uma função específica com equipamentos profissionais e controle ambiental.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area, i) => (
            <div key={area.title} className={`reveal reveal-delay-${Math.min(i + 1, 4)} bg-card border border-border rounded-2xl p-6`}>
              <AreaImage type={area.type} />
              <h3 style={{ fontFamily: "var(--font-display)" }} className="text-xl font-bold mb-2">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{area.desc}</p>
              <div className="flex flex-wrap gap-2">
                {area.specs.map((s) => (
                  <span key={s} className="text-xs bg-secondary text-foreground/70 rounded-full px-3 py-1 font-medium">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipamentos */}
      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container">
          <div className="reveal mb-10">
            <Badge variant="secondary" className="mb-3">Equipamentos</Badge>
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-3xl font-bold mb-3">
              Hardware profissional
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Investimos continuamente em equipamentos de ponta para oferecer o melhor resultado possível.
            </p>
          </div>
          <div className="reveal overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary/60">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Equipamento</th>
                  <th className="px-4 py-3 font-semibold text-foreground text-left">Uso</th>
                  <th className="px-4 py-3 font-semibold text-foreground text-left hidden md:table-cell">Especificações</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((eq, i) => (
                  <tr key={eq.name} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                    <td className="px-4 py-3 font-medium text-foreground">{eq.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{eq.type}</td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{eq.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <SocialCTABar
          heading="Ficou com alguma dúvida?"
          subheading="Nossa equipe explica cada detalhe do processo. Fale conosco quando quiser."
        />
      </section>

      <SiteFooter />
    </>
  );
};

export default StudioTour;
