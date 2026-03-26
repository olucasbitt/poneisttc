import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "secondary" | "ghost";
  }
>;

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.04em] transition duration-300 sm:px-6";

  const variants = {
    primary:
      "bg-[var(--color-gold)] text-[var(--color-brown-900)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-soft",
    secondary:
      "border border-[rgba(212,175,55,0.35)] bg-white/5 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/10 hover:border-[rgba(212,175,55,0.5)]",
    ghost:
      "border border-[rgba(59,42,30,0.12)] bg-white text-[var(--color-brown-900)] hover:-translate-y-0.5 hover:bg-[var(--color-cream)] hover:shadow-soft"
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}