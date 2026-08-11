import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Solutions } from "@/components/sections/Solutions";
import { Terminal } from "@/components/sections/Terminal";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { StudentSnippet } from "@/components/sections/StudentSnippet";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Solutions />
      <Terminal />
      <HowWeWork />
      <ProjectShowcase />
      <StudentSnippet />
      <GlobalPresence />
      <ContactCTA />
    </>
  );
}
