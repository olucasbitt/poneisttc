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
    <article className="group overflow-hidden rounded-[28px] border border-[rgba(59,42,30,0.08)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      
      {/* IMAGEM CONTROLADA */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,8,0.55)] via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brown-900)]">
          {category}
        </span>
      </div>

      {/* CONTEÚDO MAIS ENXUTO */}
      <div className="p-6">
        
        {/* NOME */}
        <h3 className="text-[22px] font-semibold leading-tight text-[var(--color-brown-900)]">
          {name}
        </h3>

        {/* LINHAGEM (MAIS LIMPA) */}
        {(sire || dam) && (
          <div className="mt-3 text-sm text-[var(--color-brown-700)]">
            {sire && <p><span className="text-black/70">Pai:</span> {sire}</p>}
            {dam && <p><span className="text-black/70">Mãe:</span> {dam}</p>}
          </div>
        )}

        {/* TAGS */}
        {highlights?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full bg-[rgba(212,175,55,0.12)] px-3 py-1 text-[11px] text-[var(--color-brown-900)]"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        {/* DESCRIÇÃO CURTA */}
        {description && (
          <p className="mt-4 text-sm leading-6 text-[var(--color-brown-700)] line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}