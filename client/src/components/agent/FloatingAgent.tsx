"use client";

export default function FloatingAgent() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="h-14 w-14 rounded-full bg-accent text-background shadow-glow flex items-center justify-center transition hover:scale-110 active:scale-95">
        <span className="font-display text-xl">IA</span>
      </button>
    </div>
  );
}
