"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import GameCard from "@/components/game/GameCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useGames } from "@/hooks/useGames";

export default function HomePage() {
  const { games, loading, error } = useGames();

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2b3567,transparent_55%)] opacity-60" />
        <Container className="relative grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <Badge>Biblioteca inteligente</Badge>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              A nova forma de explorar sua biblioteca Steam.
            </h1>
            <p className="max-w-xl text-base text-text-muted sm:text-lg">
              Steamula 2.0 reorganiza sua coleção, destaca lançamentos e
              prepara o caminho para um assistente IA que aprende com seus
              hábitos de jogo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Ver biblioteca</Button>
              <Button variant="secondary">Explorar demos</Button>
            </div>
          </div>
          <div className="rounded-lg border border-border/80 bg-surface/80 p-6 shadow-card">
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-muted">Resumo rápido</p>
              <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-success">
                Online
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { label: "Jogos monitorados", value: "148" },
                { label: "Sugestões de IA", value: "12" },
                { label: "Tempo otimizado", value: "32h" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-md border border-border/60 bg-surface-soft/80 px-4 py-3"
                >
                  <span className="text-sm text-text-muted">{item.label}</span>
                  <span className="font-display text-lg">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container className="space-y-16 py-14">
        <Section
          title="Destaques para sua próxima sessão"
          subtitle="Curadoria Steamula"
          actions={<Button variant="ghost">Ver catálogo</Button>}
        >
          {loading && (
            <div className="rounded-lg border border-border/60 bg-surface/60 p-6 text-sm text-text-muted">
              Carregando jogos...
            </div>
          )}
          {error && (
            <div className="rounded-lg border border-accent/40 bg-accent/10 p-6 text-sm text-accent">
              {error}
            </div>
          )}
          {!loading && !error && (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          )}
        </Section>

        <Section title="Assistente IA de biblioteca" subtitle="Em preparação">
          <div className="grid gap-6 rounded-lg border border-border/60 bg-surface/80 p-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <h3 className="font-display text-2xl">
                Seu copiloto para descobrir o próximo jogo ideal.
              </h3>
              <p className="text-sm text-text-muted">
                A próxima fase traz um assistente que recomenda experiências
                com base no seu histórico e nas tendências do seu grupo.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Sugestões diárias", "Resumos inteligentes", "Alertas pessoais"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-border/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-text-muted"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="rounded-lg border border-border/60 bg-gradient-to-br from-surface-soft via-surface to-background p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
                Snapshot IA
              </p>
              <p className="mt-4 text-sm text-text-muted">
                "Hoje é o momento perfeito para continuar seu progresso em
                Cyberpunk 2077. Você tem 3 missões paralelas prontas e uma nova
                expansão disponível."
              </p>
              <Button className="mt-6 w-full">Ativar em breve</Button>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
