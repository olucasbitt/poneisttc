export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type Award = {
  year: string;
  title: string;
  description: string;
};

export type Animal = {
  id: string;
  name: string;
  image: string;
  category: "Garanhão" | "Matriz";
  sire?: string;
  dam?: string;
  lineage?: string[];
  highlights: string[];
  description: string;
};

export type SiteData = {
  brand: string;
  brandHighlight: string;
  headline: string;
  subheadline: string;
  location: string;
  about: string[];
  geneticsPillars: {
    title: string;
    description: string;
  }[];
  metrics: Metric[];
  contact: {
    whatsapp: string;
    instagram: string;
  };
  nav: NavItem[];
};
