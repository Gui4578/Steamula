"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const navItems = [
  { label: "Início", to: "/" },
  { label: "Biblioteca", to: "/library" },
  { label: "Login", to: "/auth" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur">
      <Container className="flex items-center justify-between py-6">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-2xl bg-accent/20 text-accent shadow-glow flex items-center justify-center font-display text-xl">
            S
          </div>
          <div>
            <p className="font-display text-lg tracking-wide">Steamula</p>
            <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
              2.0
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`text-sm font-medium transition ${
                  isActive ? "text-accent" : "text-text-muted hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted transition hover:text-white">
            Loja
          </button>
          <button className="rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-background shadow-glow">
            Entrar
          </button>
        </div>
      </Container>
    </header>
  );
}
