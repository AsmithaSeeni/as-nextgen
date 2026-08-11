import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({ value, className, showLabel = false }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs text-slate font-mono">Progress</span>
          <span className="text-xs font-mono text-gold">{clamped}%</span>
        </div>
      )}
      <div className="h-1.5 bg-ink-3 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gold-gradient transition-all duration-700"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
