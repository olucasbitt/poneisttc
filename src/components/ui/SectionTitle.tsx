type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  invert = false
}: SectionTitleProps) {
  const titleColor = invert ? "text-white" : "text-[var(--color-brown-900)]";
  const bodyColor = invert ? "text-white/78" : "text-[var(--color-brown-700)]";

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`font-serif text-3xl md:text-5xl ${titleColor}`}>{title}</h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${bodyColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
