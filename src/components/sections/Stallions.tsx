import { stallions } from "../../data/stallions";
import { Section } from "../layout/Section";
import { AnimalCard } from "../ui/AnimalCard";
import { SectionTitle } from "../ui/SectionTitle";

export function Stallions() {
  return (
    <Section id="garanhoes" className="bg-white">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Garanhões"
          title="Reprodutores apresentados com imponência e clareza."
          description="Uma seção criada para valorizar profundidade genética, linhagens fortes e potencial de transmissão."
        />

        <div className="max-w-sm rounded-[28px] bg-[var(--color-cream)] p-6">
          <p className="text-sm leading-7 text-[var(--color-brown-700)]">
            Ideal para inserir mais animais, fotos oficiais, resultados e descrições técnicas conforme as informações forem chegando do proprietário.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-8">
        {stallions.map((animal) => (
          <AnimalCard key={animal.id} {...animal} />
        ))}
      </div>
    </Section>
  );
}
