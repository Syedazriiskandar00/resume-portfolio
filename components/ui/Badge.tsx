import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "bg-surface-100 text-surface-800",
        variant === "accent" &&
          "bg-accent-400/20 text-accent-600",
        className
      )}
    >
      {children}
    </span>
  );
}
