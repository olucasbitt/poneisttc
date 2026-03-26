import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteData } from "../../data/site";
import { Container } from "./Container";

function BrandLockup() {
  return (
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
      <div className="relative shrink-0">
        <span className="block font-brand text-[1.95rem] font-bold leading-none tracking-[0.04em] text-[var(--color-gold)] sm:text-[2.15rem]">
          TTC
        </span>
        <span className="absolute -bottom-1 left-0 h-px w-full bg-[var(--color-gold)]/18" />
      </div>

      <span className="h-5 w-px shrink-0 bg-[rgba(212,175,55,0.28)] sm:h-6" />

      <div className="min-w-0">
        <span className="block truncate text-[8px] uppercase leading-none tracking-[0.18em] text-white/50 sm:text-[9px] sm:tracking-[0.24em] md:text-[10px] md:tracking-[0.3em] md:text-white/55">
          Genética de campeões
        </span>
      </div>
    </div>
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
      className="sticky top-0 z-50 border-b border-[#2a1d14] bg-[#140e0a]"
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="min-w-0"
            aria-label="Ir para o topo"
          >
            <BrandLockup />
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
              className="inline-flex items-center gap-3 rounded-full border border-[rgba(212,175,55,0.4)] px-5 py-2.5 text-sm font-medium text-[var(--color-gold)] transition duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-brown-900)]"
            >
              <MessageCircle size={16} strokeWidth={1.6} />
              Falar sobre disponibilidade
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-2xl text-white transition hover:bg-white/5 lg:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-[#2a1d14] transition-all duration-300 lg:hidden ${
            open ? "max-h-[32rem] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {siteData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5 hover:text-white"
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
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-brown-900)]"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            Falar no WhatsApp
          </a>
        </div>
      </Container>
    </header>
  );
}