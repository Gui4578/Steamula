import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function LibraryPage() {
  return (
    <Container className="py-14">
      <Section title="Biblioteca" subtitle="Sua coleção">
        <div className="rounded-lg border border-border/60 bg-surface/80 p-8">
          <p className="text-sm text-text-muted">
            Sua biblioteca será preenchida assim que o backend estiver pronto.
            Prepare-se para filtros avançados e pesquisa inteligente.
          </p>
        </div>
      </Section>
    </Container>
  );
}
