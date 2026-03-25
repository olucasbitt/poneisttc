import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--color-brown-900)] text-white"
    >
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/ttc.png"
        >
          <source src="/videos/hero-poneis.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,14,10,0.82)_0%,rgba(20,14,10,0.70)_34%,rgba(20,14,10,0.34)_64%,rgba(20,14,10,0.46)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,14,10,0.18)_0%,rgba(20,14,10,0.06)_26%,rgba(20,14,10,0.32)_100%)]" />
      </div>

      <Container className="relative py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:min-h-[calc(82vh-80px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[rgba(212,175,55,0.35)] bg-[rgba(212,175,55,0.08)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Pôneis TTC
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-6xl lg:text-[4.5rem]">
              Presença, docilidade e genética de valor.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 md:text-lg md:leading-8">
              Uma seleção voltada a quem busca beleza morfológica,
              temperamento confiável e qualidade genética com valor em pista e
              reprodução.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#garanhoes">Ver garanhões</Button>
              <Button href="#matrizes" variant="secondary">
                Ver matrizes
              </Button>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="max-w-[380px] rounded-[24px] border border-white/10 bg-black/15 p-6">
              <span className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-gold)]/90">
                Essência TTC
              </span>

              <div className="mt-5 space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="font-display text-[1.45rem] leading-tight tracking-[-0.015em] text-white/95">
                    Seleção genética
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Morfologia, expressão racial e consistência de linhagem.
                  </p>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <h3 className="font-display text-[1.45rem] leading-tight tracking-[-0.015em] text-white/95">
                    Temperamento confiável
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Equilíbrio para manejo, apresentação e convívio.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-[1.45rem] leading-tight tracking-[-0.015em] text-white/95">
                    Valor de pista e reprodução
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Seleção pensada para presença, funcionalidade e legado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}