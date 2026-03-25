type PillarCardProps = {
  title: string;
  description: string;
};

export function PillarCard({ title, description }: PillarCardProps) {
  return (
    <div className="rounded-[30px] border border-[rgba(59,42,30,0.08)] bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="h-px w-16 bg-[var(--color-gold)]" />
      <h3 className="mt-6 font-serif text-2xl text-[var(--color-brown-900)]">{title}</h3>
      <p className="mt-4 leading-7 text-[var(--color-brown-700)]">{description}</p>
    </div>
  );
}
