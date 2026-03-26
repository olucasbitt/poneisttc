import type { Animal } from "../../types";

export function AnimalCard({
  name,
  image,
  category,
  sire,
  dam,
  highlights,
  description,
}: Animal) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(59,42,30,0.08)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-premium sm:rounded-[28px]">
      <div className="relative h-[260px] w-full overflow-hidden sm:h-[320px]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,8,0.72)] via-[rgba(20,12,8,0.12)] to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brown-900)] backdrop-blur-sm">
          {category}
        </span>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <p className="text-[9px] uppercase tracking-[0.24em] text-white/65">
            Seleção TTC
          </p>

          <h3 className="mt-2 font-heading text-[1.6rem] leading-[1] tracking-[0.02em] text-white sm:text-[1.8rem]">
            {name}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {(sire || dam) && (
          <div className="rounded-[18px] border border-[rgba(59,42,30,0.08)] bg-[var(--color-cream)]/80 px-4 py-4">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brown-700)]">
              Pedigree
            </p>

            <div className="grid gap-2 text-sm leading-6 text-[var(--color-brown-700)]">
              {sire && (
                <p className="flex flex-wrap gap-x-2">
                  <span className="uppercase tracking-[0.08em] text-[var(--color-brown-700)]/75">
                    Pai
                  </span>
                  <span className="font-medium text-[var(--color-brown-900)]">
                    {sire}
                  </span>
                </p>
              )}

              {dam && (
                <p className="flex flex-wrap gap-x-2">
                  <span className="uppercase tracking-[0.08em] text-[var(--color-brown-700)]/75">
                    Mãe
                  </span>
                  <span className="font-medium text-[var(--color-brown-900)]">
                    {dam}
                  </span>
                </p>
              )}
            </div>
          </div>
        )}

        {highlights?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-[rgba(212,175,55,0.18)] bg-[rgba(212,175,55,0.10)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.05em] text-[var(--color-brown-900)]"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        {description && (
          <p className="mt-4 text-sm leading-7 text-[var(--color-brown-700)] line-clamp-4">
            {description}
          </p>
        )}

        <div className="mt-auto pt-6">
          <div className="border-t border-[rgba(59,42,30,0.08)] pt-5">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[var(--color-gold)]/70" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-brown-700)]">
                Plantel TTC
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}