interface SummaryBlockProps {
  children: React.ReactNode;
}

const SummaryBlock = ({ children }: SummaryBlockProps) => (
  <aside
    aria-label="Summary"
    className="rounded-md bg-summary border-l-2 border-primary/40 p-5 mb-10"
  >
    <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary/70 mb-2">Summary</p>
    <p className="text-foreground leading-relaxed">{children}</p>
  </aside>
);

export default SummaryBlock;
