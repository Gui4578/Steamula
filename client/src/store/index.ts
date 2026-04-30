import { create } from "zustand";
import type { Game } from "@/types/game";

type GameState = {
  games: Game[];
  setGames: (games: Game[]) => void;
};

export const useGameStore = create<GameState>((set) => ({
  games: [],
  setGames: (games) => set({ games }),
}));
