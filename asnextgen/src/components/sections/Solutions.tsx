"use client";

import { motion } from "framer-motion";
import {
  Globe, Smartphone, Building2, Brain, Cloud, Zap,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stagger, fadeUp, scaleIn, viewportOnce } from "@/lib/motion";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Globe, Smartphone, Building2, Brain, Cloud, Zap,
};

export function Solutions() {
  return (
    <section className="py-28 px-6 bg-ink border-t border-white/8" id="solutions">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="What we build"
          title="Engineering Solutions That<br/>Move Businesses Forward"
          description="Six specialisations. One delivery standard. Built to scale."
        />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <motion.div
                key={service.id}
                variants={scaleIn}
                className="group relative flex flex-col gap-4 p-7 rounded-2xl bg-void border border-white/8 hover:border-gold/25 hover:bg-ink-2 transition-all duration-300 hover:shadow-gold-sm cursor-default"
              >
                {/* Number */}
                <span className="font-mono text-xs text-gold/40 tracking-widest">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-gold/8 border border-gold/15 flex items-center justify-center group-hover:bg-gold/12 transition-colors">
                  <Icon size={20} className="text-gold" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-semibold text-foam text-lg mb-2 group-hover:text-gold-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {service.stack.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-ink-3 border border-white/8 text-slate-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
