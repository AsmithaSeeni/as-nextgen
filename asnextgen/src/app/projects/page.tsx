"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";
import { projects, ProjectCategory } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StageBadge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { scaleIn, stagger } from "@/lib/motion";

const categories: ("All" | ProjectCategory)[] = ["All", "Platform", "Enterprise", "Utility"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = filter === "All" || p.category === filter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [filter, search]);

  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-20 px-6 bg-ink border-b border-white/8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Upcoming projects"
            title="What We're Building"
            description="Eight projects in various stages of research, design and development. Progress values are updated as work advances."
          />

          {/* Search + filter bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-dim" />
              <input
                type="search"
                placeholder="Search projects or tech stack..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-void border border-white/10 text-foam text-sm placeholder-slate-dim focus:outline-none focus:border-gold/40 transition-colors"
                aria-label="Search projects"
              />
            </div>
            <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                    filter === cat
                      ? "bg-gold-gradient text-void border-transparent"
                      : "border-white/10 text-slate hover:text-foam hover:border-white/20 bg-transparent"
                  }`}
                  aria-pressed={filter === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-slate text-lg">No projects match your search.</p>
              <button
                onClick={() => { setSearch(""); setFilter("All"); }}
                className="mt-4 text-gold text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="group flex flex-col rounded-2xl bg-ink border border-white/8 hover:border-gold/25 hover:shadow-gold-sm transition-all duration-300 overflow-hidden"
                  >
                    {/* Visual placeholder */}
                    <div className="h-32 bg-ink-3 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-grid opacity-20" />
                      <span className="relative font-display font-bold text-3xl text-gold/10 group-hover:text-gold/20 transition-colors">
                        {project.name.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3 p-5 flex-1">
                      <div className="flex items-center justify-between">
                        <StageBadge stage={project.stage} />
                        <span className="font-mono text-[10px] text-slate-dim">{project.category}</span>
                      </div>

                      <h3 className="font-display font-semibold text-foam text-base group-hover:text-gold-light transition-colors leading-snug">
                        {project.name}
                      </h3>

                      <p className="text-slate text-xs leading-relaxed flex-1 line-clamp-3">
                        {project.description}
                      </p>

                      <ProgressBar value={project.progress} showLabel />

                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 3).map((t) => (
                          <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-void border border-white/8 text-slate-dim">
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="mt-1 text-gold text-xs font-semibold font-mono hover:text-gold-light transition-colors inline-flex items-center gap-1"
                      >
                        View Details →
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
