import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--color-brown-900)] text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/ttc.png"
        >
          <source src="/videos/hero-poneis.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,14,10,0.88)_0%,rgba(20,14,10,0.72)_40%,rgba(20,14,10,0.30)_70%,rgba(20,14,10,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,14,10,0.2)_0%,rgba(20,14,10,0.05)_30%,rgba(20,14,10,0.45)_100%)]" />
      </div>

      <Container className="relative py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:min-h-[calc(82vh-80px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          
          {/* LEFT */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[rgba(212,175,55,0.35)] bg-[rgba(212,175,55,0.08)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-gold)] backdrop-blur-sm">
              Cabanha TTC • Pônei Brasileiro
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-6xl lg:text-[4.6rem]">
              Onde presença se constrói.
              <span className="block text-[var(--color-gold)]">
                E o valor permanece.
              </span>
            </h1>

            <div className="mt-6 h-[2px] w-20 bg-[var(--color-gold)] opacity-80" />

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
              Pôneis desenvolvidos com critério, equilíbrio e identidade.
              Um trabalho orientado por consistência e visão de longo prazo.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#garanhoes">Ver garanhões</Button>
              <Button href="#matrizes" variant="secondary">
                Ver matrizes
              </Button>
            </div>
          </div>

          {/* RIGHT — EDITORIAL */}
          <div className="lg:justify-self-end max-w-sm">
            <p className="text-[1.6rem] leading-relaxed text-white/85 font-light">
              Um trabalho construído no tempo, guiado por critério e sustentado por presença.
            </p>

            <div className="mt-6 h-[2px] w-16 bg-[var(--color-gold)] opacity-80" />

            <p className="mt-6 text-sm italic text-white/60">
              Viamão • Gramado
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}