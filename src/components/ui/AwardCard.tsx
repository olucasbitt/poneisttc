import type { Award } from "../../types";

function CompactAwardCard({ award }: { award: Award }) {
  const isMajor =
    award.title.toLowerCase().includes("grande campeã") ||
    award.title.toLowerCase().includes("grande campeão");

  return (
    <article className="group relative overflow-hidden rounded-[18px] border border-[rgba(92,63,42,0.10)] bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] sm:rounded-[22px] sm:p-6">
      
      {/* glow sutil */}
      <div className="pointer-events-none absolute right-[-20px] top-[-20px] h-20 w-20 rounded-full bg-[var(--color-gold)]/8 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* barra lateral */}
      <div className="absolute top-0 left-0 h-full w-[3px] bg-[var(--color-gold)] opacity-0 transition-all duration-300 group-hover:opacity-100" />

      {/* topo */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)] sm:text-[11px] sm:tracking-[0.24em]">
          {award.year}
        </span>

        {isMajor && (
          <span className="rounded-full border border-[rgba(212,175,55,0.35)] bg-[rgba(212,175,55,0.10)] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
            Destaque
          </span>
        )}
      </div>

      {/* nome */}
      <h3 className="mt-3 text-[1.2rem] font-medium leading-[1.15] tracking-[-0.01em] text-[var(--color-brown-900)] sm:mt-4 sm:text-[1.3rem]">
        {award.name}
      </h3>

      {/* título */}
      <p className="mt-2 text-sm leading-6 text-[var(--color-brown-700)]">
        {award.title}
      </p>

      {/* evento */}
      <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[var(--color-brown-500)] sm:mt-4 sm:text-xs sm:tracking-[0.18em]">
        {award.description}
      </p>
    </article>
  );
}