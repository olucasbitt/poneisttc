import { awards } from "../../data/awards";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";

type Award = {
  year: string | number;
  title: string;
  event?: string;
  category?: string;
};

function FeaturedAwardCard({ award }: { award: Award }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-[rgba(212,175,55,0.18)] bg-[var(--color-brown-900)] p-7 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.24)]">
      
      {/* glow */}
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[var(--color-gold)]/8 blur-3xl" />

      {/* selo */}
      <span className="relative z-10 inline-flex items-center rounded-full border border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.08)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
        Grande premiação
      </span>

      {/* ano */}
      <div className="relative z-10 mt-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
          {award.year}
        </span>
      </div>

      {/* NOME DO ANIMAL */}
      <h3 className="relative z-10 mt-6 text-[1.9rem] font-serif leading-[1.05] tracking-[-0.02em] text-[var(--color-gold)]">
        {award.name}
      </h3>

      {/* TÍTULO */}
      <p className="relative z-10 mt-3 text-[1.1rem] leading-6 text-white/90">
        {award.title}
      </p>

      {/* EVENTO */}
      <p className="relative z-10 mt-4 text-sm leading-6 text-white/65">
        {award.description}
      </p>
    </article>
  );
}

function CompactAwardCard({ award }: { award: Award }) {
  return (
    <article className="group relative overflow-hidden rounded-[22px] border border-[rgba(92,63,42,0.10)] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
      
      {/* detalhe lateral */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-[var(--color-gold)] opacity-0 transition-all duration-300 group-hover:opacity-100" />

      {/* topo */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
          {award.year}
        </span>
      </div>

      {/* nome do animal */}
      <h3 className="mt-4 text-[1.3rem] font-medium leading-[1.15] tracking-[-0.01em] text-[var(--color-brown-900)]">
        {award.name}
      </h3>

      {/* título */}
      <p className="mt-2 text-sm leading-6 text-[var(--color-brown-700)]">
        {award.title}
      </p>

      {/* evento */}
      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--color-brown-500)]">
        {award.description}
      </p>
    </article>
  );
}

export function Awards() {
  const featuredAwards = awards.slice(0, 2);
  const remainingAwards = awards.slice(2);

  return (
    <Section id="premiacoes" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <SectionTitle
            eyebrow="Pista"
            title="Reconhecimento que acompanha a trajetória da cabanha."
            description="As conquistas em pista refletem preparo, apresentação e a qualidade dos animais conduzidos pela TTC ao longo do tempo."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {featuredAwards.map((award) => (
              <FeaturedAwardCard
                key={`${award.year}-${award.title}`}
                award={award}
              />
            ))}
          </div>

          {remainingAwards.length > 0 && (
            <>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-[rgba(92,63,42,0.12)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-brown-500)]">
                  Outras premiações
                </span>
                <div className="h-px flex-1 bg-[rgba(92,63,42,0.12)]" />
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {remainingAwards.map((award) => (
                  <CompactAwardCard
                    key={`${award.year}-${award.title}`}
                    award={award}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="lg:sticky lg:top-24">
         <div className="w-full lg:max-w-[320px] xl:max-w-[360px] lg:ml-auto">
            <div className="mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                Destaque em pista
              </span>

              <h3 className="mt-3 text-[1.5rem] font-medium leading-tight tracking-[-0.02em] text-[var(--color-brown-900)]">
                Kapela da Manuana
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-brown-600)]">
                A atual Grande Campeã Nacional em sua melhor forma, pronta para
                defender o título.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[22px] border border-[rgba(92,63,42,0.12)] bg-[var(--color-cream)] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              <video
                className="aspect-[9/16] w-full object-contain bg-black"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/ttc.png"
              >
                <source src="/videos/pista.mp4" type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.22)_100%)]" />
            </div>

            <p className="mt-4 text-sm leading-6 text-[var(--color-brown-500)]">
              Uma pequena cheia de charme, expressão e presença em pista.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}