type Tier = "standard" | "express" | "rush";

const config: Record<Tier, { dot: string; label: string; days: string }> = {
  standard: { dot: "bg-green-500", label: "Padrão", days: "5–7 dias úteis" },
  express:  { dot: "bg-yellow-400", label: "Expresso", days: "2–3 dias úteis" },
  rush:     { dot: "bg-red-500", label: "Urgente", days: "1 dia útil" },
};

interface DeliveryBadgeProps {
  tier: Tier;
  className?: string;
}

const DeliveryBadge = ({ tier, className = "" }: DeliveryBadgeProps) => {
  const { dot, label, days } = config[tier];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${className}`}>
      <span className={`w-2 h-2 rounded-full ${dot} shrink-0`} />
      <span>{label}</span>
      <span className="text-muted-foreground font-normal">· {days}</span>
    </span>
  );
};

export default DeliveryBadge;
