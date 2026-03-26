import { siteData } from "../../data/site";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";

export function Contact() {
  return (
    <Section id="contato" className="bg-[var(--color-brown-900)]">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_35%,rgba(0,0,0,0.22)_100%)] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)] sm:rounded-[32px] sm:p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-70px] top-[-50px] h-44 w-44 rounded-full bg-[var(--color-gold)]/12 blur-3xl" />
          <div className="absolute bottom-[-90px] left-[-40px] h-52 w-52 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_32%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] opacity-60" />
        </div>

        <div className="relative grid gap-8 sm:gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)] sm:text-[11px] sm:tracking-[0.28em]">
              Contato
            </span>

            <h2 className="mt-4 max-w-3xl text-[1.95rem] font-semibold leading-[1.03] tracking-[-0.03em] text-white sm:text-[2.2rem] md:text-[3rem]">
              Entre em contato para conhecer o plantel da TTC.
            </h2>

            <p className="mt-5 max-w-[42rem] text-[15px] leading-7 text-white/85 md:text-lg md:leading-8">
              A cabanha está à disposição para apresentar os animais,
              compartilhar informações e conduzir cada conversa com clareza,
              atenção e seriedade.
            </p>

            <div className="mt-6 h-px w-12 bg-[var(--color-gold)] opacity-90" />

            <p className="mt-5 max-w-xl text-sm italic leading-7 text-white/70">
              Um plantel construído com critério merece uma apresentação à altura.
            </p>
          </div>

          <div className="flex items-start lg:justify-end lg:pl-10">
            <Button
              href={`https://wa.me/${siteData.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}