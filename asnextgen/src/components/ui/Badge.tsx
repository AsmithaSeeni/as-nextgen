import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "green" | "amber" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-ink-3 text-slate border border-white/8",
    gold: "bg-gold/10 text-gold border border-gold/25",
    green: "bg-emerald/10 text-emerald border border-emerald/25",
    amber: "bg-amber/10 text-amber border border-amber/25",
    outline: "bg-transparent text-slate border border-white/15",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

interface StageBadgeProps {
  stage: string;
}

export function StageBadge({ stage }: StageBadgeProps) {
  const map: Record<string, "default" | "gold" | "green" | "amber"> = {
    Researching: "default",
    Planning: "amber",
    Designing: "gold",
    "In Development": "green",
    Testing: "green",
    Completed: "green",
  };
  return <Badge variant={map[stage] ?? "default"}>{stage}</Badge>;
}
