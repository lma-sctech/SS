import type { ReactNode } from "react";

type CTAGroupProps = {
  children: ReactNode;
  align?: "left" | "right" | "center" | "between";
  compact?: boolean;
  className?: string;
};

const alignments = {
  left: "sm:justify-start",
  right: "sm:justify-end",
  center: "sm:justify-center",
  between: "sm:justify-between",
};

export function CTAGroup({ children, align = "left", compact = false, className = "" }: CTAGroupProps) {
  return (
    <div className={`flex w-full flex-col ${compact ? "gap-2" : "gap-3"} sm:w-auto sm:flex-row sm:flex-wrap sm:items-center ${alignments[align]} ${className}`}>
      {children}
    </div>
  );
}
