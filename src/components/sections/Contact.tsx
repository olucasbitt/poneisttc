import { siteData } from "../../data/site";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { SectionTitle } from "../ui/SectionTitle";

export function Contact() {
  return (
    <Section id="contato" className="bg-[var(--color-brown-900)]">
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] p-8 shadow-premium md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionTitle
              eyebrow="Contato"
              title="Solicite informações e apresente o plantel com mais força comercial."
              description="A base desta landing foi estruturada para evoluir com fotos reais, história oficial, premiações validadas e novos animais."
              invert
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              href={`https://wa.me/${siteData.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </Button>
            <Button
              href={siteData.contact.instagram}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Ver Instagram
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
