import { useEffect, useRef, useState, type ReactNode } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";
import { siteData } from "../../data/site";
import { Container } from "./Container";
import { Link } from "react-router-dom";

function BrandLockup() {
  return (
    <div className="flex items-center gap-4">
      <img
        src="/images/logo-ttc.png"
        alt="TTC Pôneis"
        className="h-11 w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
      />

      <div className="h-6 w-px bg-[var(--color-gold)]/40" />

      <div className="flex flex-col leading-tight">
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
          TTC Pôneis
        </span>

        <span className="text-[10px] uppercase tracking-[0.22em] text-white/60">
          Genética de campeões
        </span>
      </div>
    </div>
  );
}

function isRouteLink(href: string) {
  return href.startsWith("/") && !href.includes("#");
}

function renderNavLink(
  href: string,
  className: string,
  children: ReactNode,
  onClick?: () => void
) {
  if (isRouteLink(href)) {
    return (
      <Link to={href} onClick={onClick} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);

  function closeMenus() {
    setOpen(false);
    setMobileSubmenuOpen(null);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        closeMenus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleMobileSubmenuToggle(label: string) {
    setMobileSubmenuOpen((prev) => (prev === label ? null : label));
  }

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-50 border-b border-[rgba(212,175,55,0.14)] bg-[linear-gradient(180deg,rgba(30,21,15,0.98)_0%,rgba(20,14,10,0.96)_70%,rgba(16,11,8,0.98)_100%)] shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            onClick={closeMenus}
            className="min-w-0"
            aria-label="Ir para a página inicial"
          >
            <BrandLockup />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            <nav className="flex items-center gap-0.5">
              {siteData.nav.map((item) => (
                <div key={item.label} className="group relative">
                  {renderNavLink(
                    item.href,
                    "relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/85 transition duration-300 hover:text-white",
                    <>
                      {item.label}
                      {item.children && <ChevronDown size={16} strokeWidth={1.8} />}
                      <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-[var(--color-gold)] transition-transform duration-300 group-hover:scale-x-100" />
                    </>
                  )}

                  {item.children && (
                    <div className="pointer-events-none absolute left-0 top-full z-50 min-w-[220px] translate-y-2 rounded-2xl border border-[#2a1d14] bg-[#1b130e] p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <div key={`${item.label}-${child.href}`}>
                          {renderNavLink(
                            child.href,
                            "block rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white",
                            child.label
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <a
              href={`https://wa.me/${siteData.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--color-gold)] px-5 py-2.5 text-sm font-medium text-[var(--color-brown-900)] transition duration-300 hover:brightness-110"
            >
              <MessageCircle size={16} strokeWidth={1.8} />
              Falar sobre disponibilidade
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              const next = !open;
              setOpen(next);
              if (!next) setMobileSubmenuOpen(null);
            }}
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
            open ? "max-h-[40rem] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {siteData.nav.map((item) => {
              const isSubmenuOpen = mobileSubmenuOpen === item.label;

              if (item.children) {
                return (
                  <div key={item.label} className="rounded-xl">
                    <div className="flex items-center">
                      <div className="flex-1">
                        {renderNavLink(
                          item.href,
                          "block rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5 hover:text-white",
                          item.label,
                          closeMenus
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleMobileSubmenuToggle(item.label)}
                        aria-label={
                          isSubmenuOpen
                            ? `Fechar submenu de ${item.label}`
                            : `Abrir submenu de ${item.label}`
                        }
                        aria-expanded={isSubmenuOpen}
                        className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:bg-white/5 hover:text-white"
                      >
                        <ChevronDown
                          size={18}
                          strokeWidth={1.8}
                          className={`transition-transform duration-300 ${
                            isSubmenuOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isSubmenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
                        {item.children.map((child) => (
                          <div key={`${item.label}-${child.href}`}>
                            {renderNavLink(
                              child.href,
                              "rounded-xl px-4 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white",
                              child.label,
                              closeMenus
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={item.href}>
                  {renderNavLink(
                    item.href,
                    "rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5 hover:text-white",
                    item.label,
                    closeMenus
                  )}
                </div>
              );
            })}
          </nav>

          <a
            href={`https://wa.me/${siteData.contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenus}
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