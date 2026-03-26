import { awards } from "../../data/awards";
import type { Award } from "../../types";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";

function FeaturedAwardCard({ award }: { award: Award }) {
  return (
    <article className="group relative overflow-hidden rounded-[22px] border border-[rgba(212,175,55,0.18)] bg-[var(--color-brown-900)] p-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.2)] sm:rounded-[28px] sm:p-7 sm:shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[var(--color-gold)]/8 blur-3xl sm:h-28 sm:w-28" />

      <span className="relative z-10 inline-flex items-center rounded-full border border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.08)] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)] sm:text-[10px] sm:tracking-[0.28em]">
        Grande premiação
      </span>

      <div className="relative z-10 mt-4 sm:mt-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 sm:text-[11px] sm:tracking-[0.28em]">
          {award.year}
        </span>
      </div>

      <h3 className="relative z-10 mt-5 text-[1.55rem] font-serif leading-[1.05] tracking-[-0.02em] text-[var(--color-gold)] sm:mt-6 sm:text-[1.9rem]">
        {award.name}
      </h3>

      <p className="relative z-10 mt-2 text-base leading-6 text-white/90 sm:mt-3 sm:text-[1.1rem]">
        {award.title}
      </p>

      {award.description && (
        <p className="relative z-10 mt-3 text-sm leading-6 text-white/65 sm:mt-4">
          {award.description}
        </p>
      )}
    </article>
  );
}

function CompactAwardCard({ award }: { award: Award }) {
  return (
    <article className="group relative overflow-hidden rounded-[18px] border border-[rgba(92,63,42,0.10)] bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] sm:rounded-[22px] sm:p-6">
      <div className="absolute left-0 top-0 h-full w-[3px] bg-[var(--color-gold)] opacity-0 transition-all duration-300 group-hover:opacity-100" />

      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] sm:text-[11px] sm:tracking-[0.24em]">
          {award.year}
        </span>
      </div>

      <h3 className="mt-3 text-[1.15rem] font-medium leading-[1.15] tracking-[-0.01em] text-[var(--color-brown-900)] sm:mt-4 sm:text-[1.3rem]">
        {award.name}
      </h3>

      <p className="mt-1.5 text-sm leading-6 text-[var(--color-brown-700)] sm:mt-2">
        {award.title}
      </p>

      {award.description && (
        <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[var(--color-brown-500)] sm:mt-4 sm:text-xs sm:tracking-[0.18em]">
          {award.description}
        </p>
      )}
    </article>
  );
}

export function Awards() {
  const mobileFeaturedAward = awards.slice(0, 1);
  const desktopFeaturedAwards = awards.slice(0, 2);
  const mobileRemainingAwards = awards.slice(1);
  const desktopRemainingAwards = awards.slice(2);

  return (
    <Section id="premiacoes" className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <SectionTitle
            eyebrow="Pista"
            title="Reconhecimento que acompanha a trajetória da cabanha."
            description="As conquistas em pista refletem preparo, apresentação e a qualidade dos animais conduzidos pela TTC ao longo do tempo."
          />

          {/* Mobile: 1 destaque */}
          <div className="mt-8 grid gap-4 sm:gap-5 xl:hidden">
            {mobileFeaturedAward.map((award) => (
              <FeaturedAwardCard
                key={`${award.year}-${award.title}`}
                award={award}
              />
            ))}
          </div>

          {/* Desktop: 2 destaques */}
          <div className="mt-8 hidden gap-5 xl:grid xl:grid-cols-2">
            {desktopFeaturedAwards.map((award) => (
              <FeaturedAwardCard
                key={`${award.year}-${award.title}`}
                award={award}
              />
            ))}
          </div>

          {/* Mobile remaining */}
          {mobileRemainingAwards.length > 0 && (
            <div className="xl:hidden">
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-[rgba(92,63,42,0.12)]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-brown-500)] sm:text-[11px] sm:tracking-[0.28em]">
                  Outras premiações
                </span>
                <div className="h-px flex-1 bg-[rgba(92,63,42,0.12)]" />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {mobileRemainingAwards.map((award) => (
                  <CompactAwardCard
                    key={`${award.year}-${award.title}`}
                    award={award}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Desktop remaining */}
          {desktopRemainingAwards.length > 0 && (
            <div className="hidden xl:block">
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-[rgba(92,63,42,0.12)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-brown-500)]">
                  Outras premiações
                </span>
                <div className="h-px flex-1 bg-[rgba(92,63,42,0.12)]" />
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {desktopRemainingAwards.map((award) => (
                  <CompactAwardCard
                    key={`${award.year}-${award.title}`}
                    award={award}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-full lg:sticky lg:top-24 lg:max-w-[320px] lg:ml-auto xl:max-w-[360px]">
          <div className="mb-3 sm:mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)] sm:text-[11px] sm:tracking-[0.28em]">
              Destaque em pista
            </span>

            <h3 className="mt-2 text-[1.35rem] font-medium leading-tight tracking-[-0.02em] text-[var(--color-brown-900)] sm:mt-3 sm:text-[1.5rem]">
              Kapela da Manuana
            </h3>

            <p className="mt-2 text-sm leading-6 text-[var(--color-brown-600)]">
              A atual Grande Campeã Nacional em sua melhor forma, pronta para
              defender o título.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[18px] border border-[rgba(92,63,42,0.12)] bg-[var(--color-cream)] shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:rounded-[22px] sm:shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <video
              className="aspect-[9/16] w-full object-cover"
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

          <p className="mt-3 text-sm leading-6 text-[var(--color-brown-500)] sm:mt-4">
            Uma pequena cheia de charme, expressão e presença em pista.
          </p>
        </div>
      </div>
    </Section>
  );
}