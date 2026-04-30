import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-background shadow-glow",
  secondary:
    "rounded-full border border-border px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-text-muted transition hover:text-white",
  ghost:
    "rounded-full border border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-text-muted hover:border-border hover:text-white",
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={`${variants[variant]} ${className ?? ""}`} {...props} />
  );
}
