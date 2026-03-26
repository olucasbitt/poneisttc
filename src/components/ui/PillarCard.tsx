type PillarCardProps = {
  title: string;
  description: string;
};

export function PillarCard({ title, description }: PillarCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-[rgba(59,42,30,0.08)] bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium sm:rounded-[30px] sm:p-8">
      
      {/* detalhe sutil de fundo */}
      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-[var(--color-gold)]/6 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* linha */}
      <div className="h-px w-14 bg-[var(--color-gold)] opacity-90" />

      {/* título */}
      <h3 className="mt-5 font-serif text-[1.35rem] leading-tight tracking-[-0.01em] text-[var(--color-brown-900)] sm:mt-6 sm:text-2xl">
        {title}
      </h3>

      {/* descrição */}
      <p className="mt-3 text-sm leading-7 text-[var(--color-brown-700)] sm:mt-4 sm:text-base">
        {description}
      </p>
    </div>
  );
}