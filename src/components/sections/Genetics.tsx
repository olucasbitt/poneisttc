import { siteData } from "../../data/site";
import { Section } from "../layout/Section";
import { PillarCard } from "../ui/PillarCard";
import { SectionTitle } from "../ui/SectionTitle";

export function Genetics() {
  return (
    <Section id="genetica" className="bg-[var(--color-cream)]">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Seleção"
          title="Critérios que orientam a formação do plantel."
          description="A TTC conduz sua seleção a partir de fundamentos que ajudam a manter unidade, funcionalidade e clareza de padrão ao longo do tempo."
        />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {siteData.geneticsPillars.map((pillar) => (
          <PillarCard key={pillar.title} {...pillar} />
        ))}
      </div>
    </Section>
  );
}