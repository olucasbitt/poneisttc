import { useEffect, useRef, useState } from "react";
import { siteData } from "../../data/site";
import { Container } from "./Container";

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.05 4.94A9.94 9.94 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.49 1.33 5.01L2 22l5.13-1.3A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.06ZM12 20.13c-1.51 0-2.99-.4-4.29-1.16l-.31-.18-3.04.77.81-2.96-.2-.31A8.1 8.1 0 0 1 3.87 12c0-4.48 3.65-8.13 8.13-8.13 2.17 0 4.2.84 5.73 2.38A8.05 8.05 0 0 1 20.13 12c0 4.48-3.65 8.13-8.13 8.13Zm4.46-6.1c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.95-1.22-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.77-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.52.09.46-.07 1.4-.57 1.6-1.13.2-.56.2-1.04.14-1.13-.06-.09-.22-.14-.46-.26Z" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      ref={menuRef}
      style={{ backgroundColor: "#140e0a" }}
      className="sticky top-0 z-50 border-b border-[#2a1d14]"
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex items-center gap-4"
          >
            <span className="font-brand text-4xl font-semibold leading-none tracking-[0.12em] text-[var(--color-gold)]">
              TTC
            </span>

            <span className="hidden h-5 w-px bg-[rgba(212,175,55,0.28)] sm:block" />

            <span className="hidden text-[10px] uppercase tracking-[0.34em] text-white/55 sm:block">
              Genética Premium
            </span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            <nav className="flex items-center gap-0.5">
              {siteData.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative px-4 py-2 text-sm font-medium text-white/85 transition duration-300 hover:text-white"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-[var(--color-gold)] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <a
              href={`https://wa.me/${siteData.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-4 py-2.5 text-sm font-semibold text-[var(--color-brown-900)] transition duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-2xl text-white transition duration-300 hover:bg-white/5 lg:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-[#2a1d14] transition-all duration-300 ease-in-out lg:hidden ${
            open ? "max-h-[32rem] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {siteData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition duration-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`https://wa.me/${siteData.contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-brown-900)] transition duration-300 active:scale-95"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
        </div>
      </Container>
    </header>
  );
}