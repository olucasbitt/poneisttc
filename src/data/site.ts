import type { SiteData } from "../types";

export const siteData: SiteData = {
  brand: "Pôneis",
  brandHighlight: "TTC",
  headline: "Genética premium para quem valoriza presença, docilidade e legado.",
  subheadline:
    "Uma vitrine refinada para apresentar garanhões, matrizes e a força genética da TTC com autoridade, sofisticação e apelo comercial.",
  location: "Rio Grande do Sul, Brasil",
  about: [
    "A Pôneis TTC constrói sua trajetória com foco em seleção criteriosa, padrão racial e valorização da experiência em torno do Pônei Brasileiro.",
    "Seu posicionamento une tradição do campo, presença em pista e uma estética de marca premium, pensada para destacar garanhões e matrizes com clareza e valor percebido.",
    "A landing foi estruturada para crescer junto com o plantel, permitindo alimentar novos animais, conquistas e informações oficiais sem perder consistência visual."
  ],
  geneticsPillars: [
    {
      title: "Funcionalidade",
      description:
        "Estrutura corporal equilibrada, locomoção correta e aptidão para um manejo seguro e eficiente."
    },
    {
      title: "Morfologia",
      description:
        "Harmonia de conjunto, expressão racial e presença marcante como base da seleção."
    },
    {
      title: "Temperamento",
      description:
        "Docilidade e previsibilidade como atributos essenciais para valor comercial e experiência do cliente."
    }
  ],
  metrics: [
    { label: "Expointer", value: "2021" },
    { label: "Expointer", value: "2022" },
    { label: "Pilares genéticos", value: "3" }
  ],
  contact: {
    whatsapp: "5551999999999",
    instagram: "https://instagram.com/poneisttc"
  },
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Premiações", href: "#premiacoes" },
    { label: "Genética", href: "#genetica" },
    { label: "Garanhões", href: "#garanhoes" },
    { label: "Matrizes", href: "#matrizes" }
  ]
};
