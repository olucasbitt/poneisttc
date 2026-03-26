import type { Animal } from "../../types";

export function AnimalCard({
  name,
  image,
  category,
  sire,
  dam,
  highlights,
  description
}: Animal) {
  return (
    <article className="group relative overflow-hidden rounded-[22px] border border-[rgba(59,42,30,0.08)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-premium sm:rounded-[28px]">
      <div className="relative h-[260px] w-full overflow-hidden sm:h-[300px]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,8,0.58)] via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/88 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brown-900)] backdrop-blur-sm">
          {category}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-[1.3rem] font-medium leading-[1.08] tracking-[-0.02em] text-[var(--color-brown-900)] sm:text-[1.5rem]">
          {name}
        </h3>

        {(sire || dam) && (
          <div className="mt-4 rounded-[16px] bg-[var(--color-cream)]/65 px-4 py-3">
            <div className="grid gap-2 text-sm leading-6 text-[var(--color-brown-700)]">
              {sire && (
                <p>
                  <span className="mr-2 text-[var(--color-brown-500)]">Pai</span>
                  <span className="font-medium text-[var(--color-brown-900)]">
                    {sire}
                  </span>
                </p>
              )}

              {dam && (
                <p>
                  <span className="mr-2 text-[var(--color-brown-500)]">Mãe</span>
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
                className="rounded-full bg-[rgba(212,175,55,0.12)] px-3 py-1 text-[11px] font-medium text-[var(--color-brown-900)]"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        {description && (
          <p className="mt-4 text-sm leading-6 text-[var(--color-brown-700)] line-clamp-3">
            {description}
          </p>
        )}

        <div className="mt-5 h-px w-12 bg-[var(--color-gold)]/70" />
      </div>
    </article>
  );
}