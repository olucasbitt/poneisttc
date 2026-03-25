import type { Metric } from "../../types";

export function MetricCard({ label, value }: Metric) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
      <div className="text-3xl font-semibold text-white md:text-4xl">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/60">{label}</div>
    </div>
  );
}
