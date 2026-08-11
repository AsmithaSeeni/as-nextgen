"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the problem, users and business objectives through structured research.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create user flows, system architecture and interface designs that solve the right problems.",
  },
  {
    number: "03",
    title: "Engineer",
    description: "Build scalable, secure and maintainable software with engineering discipline.",
  },
  {
    number: "04",
    title: "Validate",
    description: "Test performance, usability and reliability before any code ships to users.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy to production with proper monitoring, documentation and handover.",
  },
  {
    number: "06",
    title: "Evolve",
    description: "Continuously improve the product based on usage data and stakeholder feedback.",
  },
];

export function HowWeWork() {
  return (
    <section className="py-28 px-6 overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="How we work"
          title="From Idea to Production"
          description="A structured engineering process that delivers predictable, quality results."
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Timeline track */}
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid grid-cols-6 gap-4"
            >
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Node */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-ink-3 border-2 border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                    <span className="font-mono text-xs font-bold text-gold">{step.number}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foam text-base mb-2 group-hover:text-gold-light transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate text-xs leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:hidden flex flex-col gap-0"
        >
          {steps.map((step, i) => (
            <motion.div key={step.number} variants={fadeUp} className="flex gap-5">
              {/* Track */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-ink-3 border-2 border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs font-bold text-gold">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 w-px bg-gradient-to-b from-gold/20 to-transparent mt-2" />
                )}
              </div>
              {/* Content */}
              <div className="pb-10">
                <h3 className="font-display font-semibold text-foam text-lg mb-1.5">{step.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
