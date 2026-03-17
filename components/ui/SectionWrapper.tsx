import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "6xl" | "7xl";
}

export function SectionWrapper({
  children,
  className,
  maxWidth = "6xl",
}: SectionWrapperProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6",
        maxWidth === "6xl" && "max-w-6xl",
        maxWidth === "7xl" && "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}
