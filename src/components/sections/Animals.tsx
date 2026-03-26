import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { SectionTitle } from "../ui/SectionTitle";

export function Animals() {
  return (
    <Section id="animais" className="bg-white">
      <SectionTitle
        eyebrow="Plantel"
        title="Animais organizados por função, linhagem e continuidade."
        description="A TTC apresenta seu plantel a partir de duas bases centrais — garanhões e matrizes — valorizando a leitura de cada animal dentro da estrutura da cabanha."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* GARANHÕES */}
        <article className="group overflow-hidden rounded-[24px] border border-[rgba(59,42,30,0.08)] bg-[var(--color-cream)] transition duration-300 hover:-translate-y-1 hover:shadow-premium">
          <div className="relative h-[280px] overflow-hidden sm:h-[320px]">
            <img
              src="/images/garanhao.jpg"
              alt="Garanhões TTC"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,8,0.62)] via-[rgba(20,12,8,0.08)] to-transparent" />

            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/88 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brown-900)] backdrop-blur-sm">
              Garanhões
            </span>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <h3 className="text-[1.7rem] font-medium leading-[1.05] tracking-[-0.02em] text-white sm:text-[1.95rem]">
                Reprodutores com força de presença e transmissão.
              </h3>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-sm leading-7 text-[var(--color-brown-700)]">
              Uma leitura voltada à expressão racial, estrutura, potência e
              clareza de padrão. Nesta página, os garanhões podem ser
              apresentados com mais profundidade, incluindo família, pedigree,
              resultados e potencial de produção.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-[rgba(212,175,55,0.12)] px-3 py-1 text-[11px] font-medium text-[var(--color-brown-900)]">
                Linhagens
              </span>
              <span className="rounded-full bg-[rgba(212,175,55,0.12)] px-3 py-1 text-[11px] font-medium text-[var(--color-brown-900)]">
                Pedigree
              </span>
              <span className="rounded-full bg-[rgba(212,175,55,0.12)] px-3 py-1 text-[11px] font-medium text-[var(--color-brown-900)]">
                Transmissão
              </span>
            </div>

            <div className="mt-6">
              <Button href="/garanhoes">Ver garanhões</Button>
            </div>
          </div>
        </article>

        {/* MATRIZES */}
        <article className="group overflow-hidden rounded-[24px] border border-[rgba(59,42,30,0.08)] bg-[var(--color-cream)] transition duration-300 hover:-translate-y-1 hover:shadow-premium">
          <div className="relative h-[280px] overflow-hidden sm:h-[320px]">
            <img
              src="/images/matriz.jpg"
              alt="Matrizes TTC"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,8,0.62)] via-[rgba(20,12,8,0.08)] to-transparent" />

            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/88 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brown-900)] backdrop-blur-sm">
              Matrizes
            </span>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <h3 className="text-[1.7rem] font-medium leading-[1.05] tracking-[-0.02em] text-white sm:text-[1.95rem]">
                Famílias maternas com produção, feminilidade e legado.
              </h3>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-sm leading-7 text-[var(--color-brown-700)]">
              As matrizes ocupam um papel central na continuidade do plantel.
              Nesta página, a apresentação pode aprofundar famílias, produção,
              qualidade materna e a base construída ao longo do tempo dentro da
              cabanha.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-[rgba(212,175,55,0.12)] px-3 py-1 text-[11px] font-medium text-[var(--color-brown-900)]">
                Famílias
              </span>
              <span className="rounded-full bg-[rgba(212,175,55,0.12)] px-3 py-1 text-[11px] font-medium text-[var(--color-brown-900)]">
                Produção
              </span>
              <span className="rounded-full bg-[rgba(212,175,55,0.12)] px-3 py-1 text-[11px] font-medium text-[var(--color-brown-900)]">
                Legado
              </span>
            </div>

            <div className="mt-6">
              <Button href="/matrizes">Ver matrizes</Button>
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}