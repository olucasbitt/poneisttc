import { stallions } from "../data/stallions";
import { Section } from "../components/layout/Section";
import { AnimalCard } from "../components/ui/AnimalCard";

export default function Stallions() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-brown-900)]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,12,8,0.92)_0%,rgba(32,22,15,0.82)_100%)]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20 text-white md:py-24">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">
            Plantel TTC
          </p>

			<h1 className="max-w-[12ch] font-heading text-[2.9rem] uppercase leading-[0.95] tracking-[0.03em] md:text-[4.5rem]">
			  Garanhões
			</h1>

          <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">
            Reprodutores apresentados com foco em presença, estrutura,
            profundidade genética e potencial de transmissão dentro do plantel.
          </p>

          <div className="mt-2 flex items-center gap-4">
            <div className="h-px w-16 bg-[var(--color-gold)]" />
            <span className="text-sm text-white/70">
              {stallions.length} animais listados
            </span>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stallions.map((animal) => (
            <AnimalCard key={animal.id} {...animal} />
          ))}
        </div>
      </Section>
    </>
  );
}