interface SummaryBlockProps {
  children: React.ReactNode;
}

const SummaryBlock = ({ children }: SummaryBlockProps) => (
  <aside
    aria-label="Summary"
    className="rounded-lg bg-summary p-5 mb-8 border border-border"
  >
    <p className="text-sm font-medium font-display text-primary mb-1">TL;DR</p>
    <p className="text-foreground leading-relaxed">{children}</p>
  </aside>
);

export default SummaryBlock;
