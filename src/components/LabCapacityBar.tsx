import { Progress } from "@/components/ui/progress";

interface LabCapacityBarProps {
  percent: number;
  label?: string;
}

const getColor = (p: number) => {
  if (p < 60) return "text-green-700";
  if (p < 85) return "text-yellow-700";
  return "text-red-700";
};

const getStatus = (p: number) => {
  if (p < 60) return "Disponível";
  if (p < 85) return "Alta demanda";
  return "Lotado";
};

const LabCapacityBar = ({ percent, label = "Ocupação do laboratório" }: LabCapacityBarProps) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-xs font-semibold">
      <span className="text-muted-foreground">{label}</span>
      <span className={getColor(percent)}>{getStatus(percent)} · {percent}%</span>
    </div>
    <Progress value={percent} className="h-2" />
  </div>
);

export default LabCapacityBar;
