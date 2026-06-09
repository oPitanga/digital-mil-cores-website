import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  className?: string;
}

const TeamCard = ({ name, role, bio, initials, className = "" }: TeamCardProps) => (
  <Card className={`border-border hover:shadow-md transition-shadow ${className}`}>
    <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
      <Avatar className="w-16 h-16">
        <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div>
        <p style={{ fontFamily: "var(--font-display)" }} className="font-semibold text-foreground">{name}</p>
        <p className="text-xs text-primary font-semibold uppercase tracking-wide mt-0.5">{role}</p>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
    </CardContent>
  </Card>
);

export default TeamCard;
