import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { AnimalCategoryCard } from "../ui/AnimalCategoryCard";

export function Animals() {
  return (
    <Section id="animais" className="bg-[var(--color-cream)]">
      <SectionTitle
        eyebrow="Plantel"
        title="Garanhões e matrizes organizados com clareza e valor."
        description="A TTC estrutura seu plantel a partir de duas bases fundamentais — reprodutores e matrizes — com foco em leitura genética, consistência e potencial de produção."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <AnimalCategoryCard
          label="Garanhões"
          title="Presença, estrutura e transmissão"
          description="Reprodutores selecionados pela força de linhagem, expressão racial e capacidade de transmitir padrão com consistência."
          image="/images/garanhao.jpg"
          alt="Garanhões TTC"
          href="/garanhoes"
        />

        <AnimalCategoryCard
          label="Matrizes"
          title="Base produtiva e continuidade genética"
          description="Fêmeas que sustentam o plantel com qualidade materna, feminilidade e consistência de produção ao longo das gerações."
          image="/images/matriz.jpg"
          alt="Matrizes TTC"
          href="/matrizes"
        />
      </div>
    </Section>
  );
}