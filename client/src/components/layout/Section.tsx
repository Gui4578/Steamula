import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  actions?: ReactNode;
};

export default function Section({ title, subtitle, children, actions }: SectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            {subtitle}
          </p>
          <h2 className="font-display text-2xl text-text-primary">{title}</h2>
        </div>
        {actions}
      </div>
      {children}
    </section>
  );
}
