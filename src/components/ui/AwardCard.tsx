import type { Award } from "../../types";

export function AwardCard({ year, title, description }: Award) {
  return (
    <article className="group rounded-[18px] border border-[rgba(59,42,30,0.08)] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-premium">
  
		  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
			{year}
		  </span>

		  <h3 className="mt-3 text-[16px] font-semibold leading-snug text-black">
			{title}
		  </h3>

		  <p className="mt-2 text-xs text-[var(--color-brown-700)]">
			{description}
		  </p>
		</article>
  );
}