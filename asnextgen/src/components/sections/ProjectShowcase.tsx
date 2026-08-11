"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StageBadge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { stagger, scaleIn, viewportOnce } from "@/lib/motion";

// Show only top 3 featured projects
const featured = projects.slice(1, 4); // HMS, School ERP, Portfolio Builder

export function ProjectShowcase() {
  return (
    <section className="py-28 px-6 bg-ink border-t border-white/8" id="projects-preview">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Upcoming projects"
          title="Building the Future, One System at a Time"
          description="A look at what we're currently engineering — across healthcare, education and platform tooling."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12"
        >
          {featured.map((project) => (
            <motion.div
              key={project.slug}
              variants={scaleIn}
              className="group flex flex-col rounded-2xl bg-void border border-white/8 hover:border-gold/25 hover:shadow-gold-sm transition-all duration-300 overflow-hidden"
            >
              {/* Card visual placeholder */}
              <div className="h-40 bg-ink-3 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative z-10 font-display font-bold text-4xl text-gold/10 group-hover:text-gold/20 transition-colors">
                  {project.name.split(" ").map(w => w[0]).join("").slice(0, 3)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>

              <div className="flex flex-col gap-3 p-6 flex-1">
                <div className="flex items-center justify-between">
                  <StageBadge stage={project.stage} />
                  <span className="font-mono text-xs text-slate-dim">{project.category}</span>
                </div>

                <h3 className="font-display font-semibold text-foam text-lg group-hover:text-gold-light transition-colors">
                  {project.name}
                </h3>

                <p className="text-slate text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <ProgressBar value={project.progress} showLabel />

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.slice(0, 3).map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-ink-3 border border-white/8 text-slate-dim">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/30 text-gold font-semibold hover:bg-gold/10 hover:border-gold/50 transition-all duration-200"
          >
            View All 8 Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
