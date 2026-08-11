"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Briefcase, X, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { jobs, Job, JobType } from "@/data/jobs";

const typeColors: Record<JobType, string> = {
  Internship: "bg-gold/10 text-gold border-gold/25",
  "Full-Time": "bg-emerald/10 text-emerald border-emerald/25",
  Associate: "bg-blue-500/10 text-blue-400 border-blue-500/25",
};

function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-ink border border-white/8 hover:border-gold/20 transition-all duration-300 overflow-hidden">
      <button
        className="w-full text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${typeColors[job.type]}`}>
              {job.type}
            </span>
            <span className="text-xs text-slate font-mono flex items-center gap-1">
              <MapPin size={11} /> {job.location}
            </span>
          </div>
          <h3 className="font-display font-semibold text-foam text-lg group-hover:text-gold-light transition-colors">
            {job.title}
          </h3>
          <p className="text-slate text-sm mt-0.5 font-mono">{job.domain}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-wrap gap-1.5">
            {job.skills.slice(0, 3).map((s) => (
              <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-void border border-white/8 text-slate-dim">
                {s}
              </span>
            ))}
          </div>
          <div className="text-slate flex-shrink-0">
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-white/8 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-dim mb-3">Responsibilities</h4>
            <ul className="flex flex-col gap-2">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2 text-slate text-sm">
                  <span className="text-gold mt-1 flex-shrink-0">—</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-dim mb-3">Requirements</h4>
            <ul className="flex flex-col gap-2">
              {job.requirements.map((r) => (
                <li key={r} className="flex items-start gap-2 text-slate text-sm">
                  <span className="text-gold mt-1 flex-shrink-0">—</span>
                  {r}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-void text-sm font-semibold hover:brightness-110 transition-all"
            >
              Apply for this Role
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<JobType | "All">("All");

  const filtered = jobs.filter((j) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      j.title.toLowerCase().includes(q) ||
      j.domain.toLowerCase().includes(q) ||
      j.skills.some((s) => s.toLowerCase().includes(q));
    const matchType = typeFilter === "All" || j.type === typeFilter;
    return matchSearch && matchType;
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-ink border-b border-white/8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="font-mono text-xs tracking-widest uppercase text-gold">Open roles</span>
          </div>
          <h1 className="font-display font-bold text-5xl text-foam mb-5">Careers at AS NEXTGEN</h1>
          <p className="text-slate text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            We're building real products and we need people who want to build with us.
          </p>

          {/* Search + filter */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-dim" />
              <input
                type="search"
                placeholder="Search roles or skills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-void border border-white/10 text-foam text-sm placeholder-slate-dim focus:outline-none focus:border-gold/40 transition-colors"
                aria-label="Search jobs"
              />
            </div>
            {(["All", "Internship", "Full-Time", "Associate"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                  typeFilter === t
                    ? "bg-gold-gradient text-void border-transparent"
                    : "border-white/10 text-slate hover:text-foam bg-transparent"
                }`}
                aria-pressed={typeFilter === t}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job cards */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate">No roles match your search.</p>
              <button onClick={() => { setSearch(""); setTypeFilter("All"); }} className="mt-3 text-gold text-sm hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            filtered.map((job) => <JobCard key={job.id} job={job} />)
          )}
        </div>
      </section>
    </>
  );
}
