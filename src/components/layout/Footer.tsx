import { siteData } from "../../data/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#120a06] py-14">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          
          {/* MARCA + CONTEXTO */}
          <div className="max-w-sm">
            <p className="text-xl text-white">
              {siteData.brand}{" "}
              <span className="text-[var(--color-gold)]">
                {siteData.brandHighlight}
              </span>
            </p>

            <p className="mt-4 text-sm leading-6 text-white/60">
              Pônei Brasileiro com presença em pista, seleção consistente e base
              em Viamão e Gramado.
            </p>

            <p className="mt-4 text-xs text-white/40">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>

          {/* CTA + LINKS */}
          <div className="flex flex-col items-start gap-6 md:items-end">
            
            {/* CTA DISCRETO */}
           <a
			  href={`https://wa.me/${siteData.contact.whatsapp}`}
			  target="_blank"
			  rel="noreferrer"
			  className="inline-flex items-center gap-3 text-sm font-medium text-white transition hover:opacity-80"
			>
			  Conhecer as pôneis
			  <span className="h-px w-10 bg-[var(--color-gold)]" />
			</a>

            {/* LINKS */}
            <div className="flex items-center gap-4 text-sm text-white/60">
              <a
                href={siteData.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Instagram
              </a>

              <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />

              <a
                href={`https://wa.me/${siteData.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}