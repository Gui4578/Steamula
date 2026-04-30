import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function AuthPage() {
  return (
    <Container className="py-14">
      <div className="mx-auto grid w-full max-w-4xl gap-10 rounded-lg border border-border/60 bg-surface/80 p-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Steamula ID
          </p>
          <h1 className="font-display text-3xl">
            Acesse sua biblioteca inteligente.
          </h1>
          <p className="text-sm text-text-muted">
            Esta é apenas a camada visual. Na fase 2, o login será conectado ao
            backend com autenticação real.
          </p>
          <div className="rounded-lg border border-border/60 bg-surface-soft/80 p-6 text-sm text-text-muted">
            <p>
              Em breve: login social, sincronização com Steam e sugestões de IA.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-text-muted">
              Email
            </label>
            <input
              type="email"
              placeholder="voce@steamula.com"
              className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-text-primary focus:border-accent focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-text-muted">
              Senha
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-text-primary focus:border-accent focus:outline-none"
            />
          </div>
          <Button className="w-full">Entrar</Button>
          <div className="flex items-center justify-between text-xs text-text-muted">
            <span>Esqueceu a senha?</span>
            <span>Registrar agora</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
