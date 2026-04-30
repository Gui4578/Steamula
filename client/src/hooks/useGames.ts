import { useEffect, useState } from "react";
import { gameService } from "@/services/game.service";
import type { Game } from "@/types/game";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const data = await gameService.getGames();
        if (active) {
          setGames(data);
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : "Falha ao carregar jogos");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  return { games, loading, error };
};
