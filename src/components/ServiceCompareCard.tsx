import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ServiceCompareCardProps {
  icon: string;
  title: string;
  description: string;
  specs: string[];
  priceRange: string;
  badge?: string;
  href: string;
  popular?: boolean;
  className?: string;
}

const ServiceCompareCard = ({
  icon, title, description, specs, priceRange, badge, href, popular, className = ""
}: ServiceCompareCardProps) => (
  <Card className={`relative border-border flex flex-col transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${popular ? "ring-2 ring-primary" : ""} ${className}`}>
    {popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow">
        Mais Popular
      </span>
    )}
    <CardHeader className="pb-2">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="flex items-start justify-between gap-2">
        <h3 style={{ fontFamily: "var(--font-display)" }} className="text-lg font-semibold text-foreground leading-snug">
          {title}
        </h3>
        {badge && <Badge variant="secondary" className="text-xs shrink-0">{badge}</Badge>}
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardHeader>
    <CardContent className="flex flex-col flex-1 gap-4">
      <ul className="space-y-2 flex-1">
        {specs.map((s, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            {s}
          </li>
        ))}
      </ul>
      <div className="border-t border-border pt-4">
        <p className="text-xs text-muted-foreground mb-1">A partir de</p>
        <p style={{ fontFamily: "var(--font-display)" }} className="text-xl font-bold text-primary">{priceRange}</p>
      </div>
      <Button asChild className="w-full">
        <Link to={href}>Ver detalhes</Link>
      </Button>
    </CardContent>
  </Card>
);

export default ServiceCompareCard;
