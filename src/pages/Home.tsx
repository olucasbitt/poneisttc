import { About } from "../components/sections/About";
import { Awards } from "../components/sections/Awards";
import { Contact } from "../components/sections/Contact";
import { Genetics } from "../components/sections/Genetics";
import { Hero } from "../components/sections/Hero";
import { Mares } from "../components/sections/Mares";
import { Stallions } from "../components/sections/Stallions";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Awards />
      <Genetics />
      
    </>
  );
}
