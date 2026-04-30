import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "accent" | "success" | "warning";
};

const toneStyles: Record<NonNullable<BadgeProps["tone"]>, string> = {
  accent: "bg-accent/15 text-accent border-accent/40",
  success: "bg-success/15 text-success border-success/40",
  warning: "bg-warning/15 text-warning border-warning/40",
};

export default function Badge({ children, tone = "accent" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}
