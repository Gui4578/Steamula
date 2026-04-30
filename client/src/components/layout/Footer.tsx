import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/30 py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-display text-lg tracking-wide">Steamula</p>
            <p className="text-xs text-text-muted">© 2026 Steamula. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-text-muted">
            <a href="#" className="hover:text-white transition">Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos</a>
            <a href="#" className="hover:text-white transition">Contato</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
