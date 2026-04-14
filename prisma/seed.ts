import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";

config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set.");
}

const prisma = new PrismaClient({ datasourceUrl: databaseUrl });

async function main() {
  const gameCount = await prisma.game.count();
  if (gameCount > 0) return;

  await prisma.game.createMany({
    data: [
      {
        title: "Cyberpunk 2077",
        description: "Futuristic RPG",
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.webp",
      },
      {
        title: "Elden Ring",
        description: "Souls-like",
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp",
      },
      {
        title: "Hades II",
        description: "Roguelike action",
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co8n4q.webp",
      },
      {
        title: "Hollow Knight: Silksong",
        description: "Metroidvania",
        imageUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5w0s.webp",
      },
    ],
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
