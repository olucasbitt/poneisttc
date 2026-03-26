import { siteData } from "../../data/site";
import { Container } from "./Container";
import { MessageCircle } from "lucide-react";

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 12 17a4.5 4.5 0 0 0 0-9Zm0 2A2.5 2.5 0 1 1 12 15a2.5 2.5 0 0 1 0-5Zm4.75-2.88a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.25Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#120a06] py-14">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-sm">
            <p className="text-xl text-white">
              {siteData.brand}{" "}
              <span className="text-[var(--color-gold)]">
                {siteData.brandHighlight}
              </span>
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

          <div className="flex flex-col items-start gap-5 md:items-end">
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a
                href={siteData.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors duration-300 hover:text-[var(--color-gold)]"
              >
                <InstagramIcon />
                Instagram
              </a>

              <a
                href={`https://wa.me/${siteData.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors duration-300 hover:text-[var(--color-gold)]"
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