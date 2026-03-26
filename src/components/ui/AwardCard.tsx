function CompactAwardCard({ award }: { award: Award }) {
  const isMajor =
    award.title.toLowerCase().includes("grande campeã") ||
    award.title.toLowerCase().includes("grande campeão");

  return (
    <article className="group relative overflow-hidden rounded-[22px] border border-[rgba(92,63,42,0.10)] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
      
      {/* detalhe premium */}
      <div className="absolute top-0 left-0 h-full w-[3px] bg-[var(--color-gold)] opacity-0 transition-all duration-300 group-hover:opacity-100" />

      {/* topo */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
          {award.year}
        </span>

        {isMajor && (
          <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-gold)]">
            Destaque
          </span>
        )}
      </div>

      {/* nome (protagonista) */}
      <h3 className="mt-4 text-[1.3rem] font-medium leading-[1.15] tracking-[-0.01em] text-[var(--color-brown-900)]">
        {award.name}
      </h3>

      {/* título */}
      <p className="mt-2 text-sm leading-6 text-[var(--color-brown-700)]">
        {award.title}
      </p>

      {/* evento */}
      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--color-brown-500)]">
        {award.description}
      </p>
    </article>
  );
}