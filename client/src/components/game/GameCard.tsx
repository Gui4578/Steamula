import type { Game } from "@/types/game";

type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-border/80 bg-surface/80 shadow-card transition hover:-translate-y-1 hover:border-accent/60">
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={game.imageUrl ?? "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.webp"}
          alt={game.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="font-display text-lg">{game.title}</h3>
        <p className="text-sm text-text-muted line-clamp-2">
          {game.description ?? "Uma nova jornada aguarda na Steamula 2.0."}
        </p>
        <div className="flex items-center justify-between text-xs text-text-muted">
          <span>Assistente IA pronto</span>
          <span className="rounded-full bg-accent/15 px-3 py-1 text-accent">
            Demo
          </span>
        </div>
      </div>
    </article>
  );
}
