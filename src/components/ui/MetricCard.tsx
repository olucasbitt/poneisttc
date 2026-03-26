import type { Metric } from "../../types";

export function MetricCard({ label, value }: Metric) {
  return (
    <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] sm:rounded-[26px] sm:px-6">
      
      {/* glow sutil */}
      <div className="pointer-events-none absolute right-[-20px] top-[-20px] h-20 w-20 rounded-full bg-[var(--color-gold)]/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* valor */}
      <div className="text-[1.9rem] font-semibold leading-none tracking-[-0.02em] text-white sm:text-[2.2rem] md:text-[2.6rem]">
        {value}
      </div>

      {/* label */}
      <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/70">
        {label}
      </div>
    </div>
  );
}