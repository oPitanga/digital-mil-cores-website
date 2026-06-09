interface Step {
  icon: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  { icon: "📤", title: "Envio do Arquivo", description: "Upload de alta resolução com guia de preparo incluído." },
  { icon: "🎨", title: "Análise de Cor", description: "Calibração com perfis ICC para fidelidade cromática máxima." },
  { icon: "🖨️", title: "Impressão", description: "Impressão Giclée em impressoras de 12 canais com tintas arquivísticas." },
  { icon: "🔍", title: "Controle de Qualidade", description: "Inspeção visual e densitométrica antes de embalar." },
  { icon: "📦", title: "Embalagem Segura", description: "Embalagem rígida anti-umidade, pronta para transporte." },
  { icon: "🚚", title: "Entrega", description: "Envio para todo o Brasil com rastreamento em tempo real." },
];

interface ProcessTimelineProps {
  className?: string;
}

const ProcessTimeline = ({ className = "" }: ProcessTimelineProps) => (
  <div className={`relative ${className}`}>
    <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
    <ol className="space-y-8 pl-12">
      {steps.map((step, i) => (
        <li key={i} className="relative reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
          <span className="absolute -left-8 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm shadow-sm">
            {step.icon}
          </span>
          <div>
            <p className="font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>{step.title}</p>
            <p className="text-sm text-muted-foreground mt-0.5">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default ProcessTimeline;
