import type { PropsWithChildren } from "react";
import { Container } from "./Container";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  containerClassName?: string;
}>;

export function Section({
  id,
  className = "",
  containerClassName = "",
  children
}: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
