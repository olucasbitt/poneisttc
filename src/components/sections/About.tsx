import { siteData } from "../../data/site";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";

export function About() {
  return (
    <Section
      id="sobre"
      className="relative overflow-hidden bg-[var(--color-cream)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-80px] top-12 h-64 w-64 rounded-full bg-[var(--color-gold)]/5 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-60px] h-72 w-72 rounded-full bg-[var(--color-brown-900)]/5 blur-3xl" />
      </div>

      <div className="relative grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Sobre a cabanha"
            title="Uma base construída entre campo, seleção e continuidade."
            description="A Cabanha TTC desenvolve seu trabalho com foco no Pônei Brasileiro, reunindo animais, estrutura e manejo em uma proposta orientada por identidade, equilíbrio e consistência."
          />

          <div className="mt-6 h-[2px] w-16 bg-[var(--color-gold)] opacity-80" />

          <div className="mt-5 inline-flex items-center rounded-full border border-[rgba(92,63,42,0.12)] bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-brown-600)] shadow-sm backdrop-blur-sm">
            Viamão • Gramado • Pônei Brasileiro
          </div>

          <div className="mt-8 max-w-2xl space-y-6 text-[var(--color-brown-700)]">
            <p className="leading-[1.9]">
              A TTC se desenvolve a partir de uma base conectada ao campo, ao
              manejo diário e à leitura cuidadosa de cada animal. Em{" "}
              <span className="font-semibold text-[var(--color-brown-900)]">
                Viamão
              </span>{" "}
              e{" "}
              <span className="font-semibold text-[var(--color-brown-900)]">
                Gramado
              </span>
              , a cabanha encontra dois contextos que reforçam sua identidade e a
              forma como apresenta seu trabalho.
            </p>

            <p className="leading-[1.9]">
              O foco está na construção de um plantel coerente, guiado por
              morfologia, temperamento e funcionalidade. Cada escolha faz parte de
              um processo que busca manter unidade, qualidade e clareza de padrão.
            </p>

            <p className="leading-[1.9]">
              Mais do que reunir bons exemplares, a TTC organiza uma estrutura de
              criação e apresentação comprometida com seriedade, cuidado e
              continuidade, valorizando cada animal dentro de uma visão sólida de
              cabanha.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="max-w-xs text-sm italic leading-7 text-[var(--color-brown-500)]">
            Cada decisão de plantel precisa sustentar padrão, leitura e coerência
            ao longo do tempo.
          </div>

          <div className="rounded-[32px] border border-[rgba(212,175,55,0.15)] bg-[var(--color-brown-900)] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Estrutura da cabanha
            </span>

            

            <div className="mt-6 space-y-5">
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-[1.45rem] font-medium leading-tight tracking-[-0.015em] text-white/95">
                  Base no campo
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Um trabalho ligado à rotina, ao manejo e à observação constante.
                </p>
              </div>

              <div className="border-b border-white/10 pb-4">
                <h3 className="text-[1.45rem] font-medium leading-tight tracking-[-0.015em] text-white/95">
                  Construção de plantel
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Seleção organizada com foco em unidade, equilíbrio e qualidade.
                </p>
              </div>

              <div>
                <h3 className="text-[1.45rem] font-medium leading-tight tracking-[-0.015em] text-white/95">
                  Apresentação e continuidade
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Uma cabanha orientada por consistência na criação e na forma de
                  se posicionar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}