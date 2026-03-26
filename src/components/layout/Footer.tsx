import { siteData } from "../../data/site";
import { Container } from "./Container";
import { Camera, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#120a06] py-14">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          
          {/* MARCA */}
          <div className="max-w-sm">
            <p className="block font-brand text-[1.95rem] font-bold leading-none tracking-[0.04em] text-[var(--color-gold)] sm:text-[2.15rem]">
        
              {siteData.brand}
            </p>

            <p className="mt-4 text-sm leading-6 text-white/60">
              Cabanha dedicada ao Pônei Brasileiro, com trabalho orientado por
              seleção, apresentação e continuidade em pista e criação.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-white/35">
              Viamão • Gramado
            </p>

            <p className="mt-4 text-xs text-white/40">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-col items-start gap-6 md:items-end">
            
            {/* CTA */}
            <a
              href={`https://wa.me/${siteData.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-sm font-medium text-white transition hover:opacity-80"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              Falar sobre disponibilidade
              <span className="h-px w-10 bg-[var(--color-gold)]" />
            </a>

            {/* SOCIAL */}
            <div className="flex items-center gap-6 text-sm text-white/60">
              
              <a
                href={siteData.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Camera size={16} strokeWidth={1.5} />
                Instagram
              </a>

              <a
                href={`https://wa.me/${siteData.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>

          </div>
        </div>
      </Container>
    </footer>
  );
}