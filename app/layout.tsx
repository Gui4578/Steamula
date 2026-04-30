import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingAgent from "@/components/agent/FloatingAgent";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Steamula | Descubra Seu Próximo Jogo Favorito",
  description:
    "A maior plataforma de jogos com IA integrada. Descubra, compre e jogue com recomendações personalizadas do SteamBot.",
  keywords: ["jogos", "steam", "plataforma", "gaming", "steamula"],
  openGraph: {
    title: "Steamula",
    description: "Plataforma de jogos com IA integrada",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body style={{ background: "var(--color-bg)" }}>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 56px)" }}>{children}</main>
        <Footer />
        <FloatingAgent />
      </body>
    </html>
  );
}
