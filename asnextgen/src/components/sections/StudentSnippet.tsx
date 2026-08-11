"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const benefits = [
  "Real client and internal project experience",
  "Named mentor from day one",
  "Certificate verified against a public project registry",
  "Priority interviews for full-time roles after completion",
  "Portfolio-building guidance throughout the programme",
  "Skills in production engineering, not tutorials",
];

export function StudentSnippet() {
  return (
    <section className="py-28 px-6 overflow-hidden" id="students-preview">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="font-mono text-xs tracking-widest uppercase text-gold">
                For college students
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-bold text-4xl md:text-5xl text-foam mb-5 leading-tight"
            >
              Build More Than<br />a Resume.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate text-lg mb-8 leading-relaxed">
              A selective, mentor-led programme that turns academic knowledge into
              production-ready engineering skills — working on real systems, not exercises.
            </motion.p>
            <motion.div variants={stagger(0.06)} className="flex flex-col gap-3 mb-8">
              {benefits.map((b) => (
                <motion.div key={b} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-emerald flex-shrink-0 mt-0.5" />
                  <span className="text-slate text-sm">{b}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                href="/student-opportunities"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-gradient text-void font-semibold hover:brightness-110 hover:shadow-gold hover:-translate-y-0.5 transition-all duration-200"
              >
                Learn More & Apply
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-2xl bg-ink border border-white/8 p-8"
          >
            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber/6 border border-amber/20 mb-6">
              <AlertCircle size={17} className="text-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foam text-sm font-semibold mb-0.5">Compensation Policy</p>
                <p className="text-slate text-sm">
                  This is a <strong className="text-foam">non-stipend, unpaid</strong> learning-focused
                  programme. You receive mentorship, live project work and a verified certificate —
                  not a salary.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1 mb-6">
              {[
                { label: "Eligibility", value: "College students only" },
                { label: "Commitment", value: "Minimum 20 hours / week" },
                { label: "Format", value: "Remote, mentor-led" },
                { label: "Duration", value: "Project-based (2–6 months)" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between py-3 border-b border-white/6 last:border-0">
                  <span className="text-slate text-sm">{row.label}</span>
                  <span className="text-foam text-sm font-medium">{row.value}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-dim text-xs leading-relaxed">
              By joining, you agree to a minimum 20-hour weekly commitment.
              Roles are allocated based on aptitude and availability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
