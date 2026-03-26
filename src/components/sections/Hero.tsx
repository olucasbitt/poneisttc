import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { siteData } from "../../data/site";

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

        <div className="absolute inset-0 bg-black/70" />
      </div>

      <Container className="relative py-20 lg:py-28">
        <div className="max-w-4xl">
          
          {/* LABEL */}
          <p className="text-[11px] uppercase tracking-[0.4em] text-[var(--color-gold)]/80">
            {siteData.location}
          </p>

          {/* TITLE */}
          <h1 className="mt-6 text-4xl font-light leading-[1.1] tracking-[-0.02em] md:text-6xl lg:text-[4.4rem]">
            Seleção genética
            <span className="block font-semibold">
              construída com{" "}
              <span className="text-[var(--color-gold)]">
                critério
              </span>
            </span>
          </h1>

          {/* LINE */}
          <div className="mt-8 h-[1px] w-24 bg-[var(--color-gold)] opacity-70" />

          {/* TEXT */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
            Cada animal apresentado carrega uma linha de decisão clara.
            Estrutura, temperamento e presença reunidos com consistência ao longo do tempo.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="#genetica">
              Explorar genética
            </Button>

            <Button
              href={`https://wa.me/${siteData.contact.whatsapp}`}
              variant="secondary"
            >
              Falar direto no WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}