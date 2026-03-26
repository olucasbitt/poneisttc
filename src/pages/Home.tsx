import { About } from "../components/sections/About";
import { Awards } from "../components/sections/Awards";
import { Contact } from "../components/sections/Contact";
import { Genetics } from "../components/sections/Genetics";
import { Hero } from "../components/sections/Hero";
import { Animals } from "../components/sections/Animals"; 

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Genetics />
	  <Animals />
      <Awards />
	  <Contact />
      
    </>
  );
}
