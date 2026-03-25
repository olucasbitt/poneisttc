import { mares } from "../../data/mares";
import { Section } from "../layout/Section";
import { AnimalCard } from "../ui/AnimalCard";
import { SectionTitle } from "../ui/SectionTitle";

export function Mares() {
  return (
    <Section id="matrizes" className="bg-[var(--color-cream)]">
      <SectionTitle
        eyebrow="Matrizes"
        title="Linhas maternas com espaço para produção, feminilidade e legado."
        description="A apresentação das matrizes foi refinada para transmitir solidez genética e fortalecer a percepção de qualidade do plantel."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {mares.map((animal) => (
          <AnimalCard key={animal.id} {...animal} />
        ))}
      </div>
    </Section>
  );
}
