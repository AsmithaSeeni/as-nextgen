import type { Metadata } from "next";
import { Solutions } from "@/components/sections/Solutions";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AS NEXTGEN builds web applications, mobile apps, enterprise software, AI systems, SaaS platforms and drives digital transformation.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 px-6 bg-ink border-b border-white/8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our expertise"
            title="Engineering Solutions That<br/>Move Businesses Forward"
            description="Six specialisations. One delivery standard. Built to scale with your business."
          />
        </div>
      </section>

      <Solutions />
      <HowWeWork />
      <ContactCTA />
    </>
  );
}
