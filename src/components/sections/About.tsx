import { siteData } from "../../data/site";
import { Section } from "../layout/Section";
import { SectionTitle } from "../ui/SectionTitle";

export function About() {
  return (
    <Section id="sobre" className="bg-[var(--color-cream)]">
      <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Sobre a cabanha"
            title="Seleção, território e presença construídas com consistência."
            description="A Cabanha TTC atua com foco no Pônei Brasileiro, reunindo animais e estrutura em uma base conectada ao campo, à funcionalidade e à apresentação."
          />

          <div className="mt-8 max-w-2xl space-y-5 text-[var(--color-brown-700)]">
            <p className="leading-8">
              A TTC desenvolve seu trabalho a partir de uma base ligada ao campo e
              à seleção criteriosa, com presença em <strong>Viamão</strong> e{" "}
              <strong>Gramado</strong>, dois contextos que reforçam identidade,
              manejo e leitura de valor.
            </p>

            <p className="leading-8">
              A cabanha reúne animais apresentados com atenção à morfologia,
              temperamento e consistência, sempre com foco em uma construção séria
              de plantel e percepção de qualidade no longo prazo.
            </p>

            <p className="leading-8">
              Mais do que exibir exemplares, a TTC busca consolidar uma presença
              que una seleção, cuidado e apresentação, valorizando cada animal
              dentro e fora de pista.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          

          <div className="rounded-[32px] border border-[rgba(212,175,55,0.12)] bg-[var(--color-brown-900)] p-8 text-white shadow-premium">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Base da cabanha
            </span>

            <div className="mt-5 space-y-5">
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-[1.45rem] font-medium leading-tight tracking-[-0.015em] text-white/95">
                  Pônei Brasileiro
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Seleção guiada por expressão racial, funcionalidade e presença.
                </p>
              </div>

              <div className="border-b border-white/10 pb-4">
                <h3 className="text-[1.45rem] font-medium leading-tight tracking-[-0.015em] text-white/95">
                  Animais e estrutura
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Um trabalho construído com atenção ao plantel, ao manejo e à
                  apresentação de cada exemplar.
                </p>
              </div>

              <div>
                <h3 className="text-[1.45rem] font-medium leading-tight tracking-[-0.015em] text-white/95">
                  Critério e permanência
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Uma cabanha orientada por consistência, cuidado e valor
                  construído no tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}