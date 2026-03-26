import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type AnimalCategoryCardProps = {
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

export function AnimalCategoryCard({
  label,
  title,
  description,
  image,
  alt,
  href,
}: AnimalCategoryCardProps) {
  return (
    <Link
      to={href}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[rgba(59,42,30,0.08)] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2"
      aria-label={`${label} - ${title}`}
    >
      <div className="relative h-[280px] overflow-hidden sm:h-[320px]">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,8,0.72)] via-[rgba(20,12,8,0.14)] to-transparent" />

        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brown-900)] backdrop-blur-sm">
          {label}
        </span>

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
          <h3 className="max-w-[14ch] font-heading text-[2rem] leading-[0.95] tracking-[0.03em] text-white sm:text-[2.25rem]">
            {title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-7 text-[var(--color-brown-700)]">
          {description}
        </p>

        <div className="mt-auto pt-8">
          <div className="flex items-center justify-between border-t border-[rgba(59,42,30,0.08)] pt-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-brown-700)]">
                Explorar categoria
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-brown-900)]">
                Ver plantel completo
              </p>
            </div>

            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(59,42,30,0.10)] bg-[var(--color-brown-900)] text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-brown-900)]">
              <ArrowUpRight size={18} strokeWidth={2} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}