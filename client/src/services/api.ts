import type { Game } from "@/types/game";

export const api = {
  getGames: async (): Promise<Game[]> => {
    return [
      {
        id: "1",
        title: "Cyberpunk 2077",
        description: "Futuristic RPG",
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.webp",
        createdAt: "2020-12-10",
      },
      {
        id: "2",
        title: "Elden Ring",
        description: "Souls-like",
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp",
        createdAt: "2022-02-25",
      },
      {
        id: "3",
        title: "Hades II",
        description: "Roguelike action",
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co8n4q.webp",
        createdAt: "2024-05-06",
      },
      {
        id: "4",
        title: "Hollow Knight: Silksong",
        description: "Metroidvania",
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w0s.webp",
        createdAt: "2026-01-01",
      },
    ];
  },
};
