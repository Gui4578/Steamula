import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "@/lib/db";
import { buildCatalogContext, buildSystemPrompt } from "@/lib/agent";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { message, history, context } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: "Mensagem vazia" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY não configurada" },
        { status: 500 }
      );
    }

    const games = await prisma.game.findMany({
      where: { isVisible: true },
      select: {
        id: true,
        title: true,
        genre: true,
        price: true,
        discount: true,
        tags: true,
        rating: true,
        shortDesc: true,
        platforms: true,
      },
      orderBy: { rating: "desc" },
      take: 60,
    });

    const catalogContext = buildCatalogContext(games);
    const systemPrompt = buildSystemPrompt(
      context
        ? `${catalogContext}\n\nO usuário está atualmente visualizando: ${context}`
        : catalogContext
    );

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-lite",
      systemInstruction: systemPrompt,
    });

    // Build history for multi-turn chat
    const chatHistory = (history ?? [])
      .slice(-10) // Keep last 10 messages for context window efficiency
      .map((msg: { role: string; content: string }) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      }));

    const chat = model.startChat({ history: chatHistory });
    const result = await chat.sendMessage(message);
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[Agent API Error]", err);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
