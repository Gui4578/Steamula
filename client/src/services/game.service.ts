import { api } from "./api";
import type { Game } from "@/types/game";

export const gameService = {
  getGames: async (): Promise<Game[]> => {
    return api.getGames();
  },
};
