interface SummaryBlockProps {
  children: React.ReactNode;
}

const SummaryBlock = ({ children }: SummaryBlockProps) => (
  <aside
    aria-label="Resumo"
    className="rounded-2xl bg-secondary border-l-4 border-primary/50 p-5 mb-10 shadow-sm"
  >
    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2" style={{ fontFamily: "var(--font-body)" }}>
      ✨ Resumo
    </p>
    <p className="text-foreground/80 leading-relaxed font-medium">{children}</p>
  </aside>
);

export default SummaryBlock;
