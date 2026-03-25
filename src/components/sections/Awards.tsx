import { awards } from "../../data/awards";
import { Section } from "../layout/Section";
import { AwardCard } from "../ui/AwardCard";
import { SectionTitle } from "../ui/SectionTitle";

export function Awards() {
  return (
    <Section id="premiacoes" className="bg-white">
      <SectionTitle
        eyebrow="Pista"
        title="Resultados que refletem consistência de seleção."
        description="Animais apresentados em pista, com resultados que refletem consistência de seleção."
	/>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {awards.map((award) => (
          <AwardCard key={`${award.year}-${award.title}`} {...award} />
        ))}
      </div>
    </Section>
  );
}