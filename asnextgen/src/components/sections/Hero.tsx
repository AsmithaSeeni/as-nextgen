"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { company } from "@/data/company";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

// Animated SVG grid + node background
function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/4 blur-[120px]" />
      {/* Floating nodes */}
      {[
        { cx: 15, cy: 25, delay: 0 },
        { cx: 75, cy: 15, delay: 1.2 },
        { cx: 85, cy: 60, delay: 0.8 },
        { cx: 20, cy: 70, delay: 2 },
        { cx: 50, cy: 85, delay: 0.4 },
        { cx: 60, cy: 30, delay: 1.6 },
      ].map((node, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold/30 animate-float"
          style={{
            left: `${node.cx}%`,
            top: `${node.cy}%`,
            animationDelay: `${node.delay}s`,
            animationDuration: `${6 + i}s`,
          }}
        />
      ))}
      {/* Corner lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden"
    >
      <HeroBg />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/25 bg-gold/8 text-gold font-mono text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
              Next-Generation Digital Engineering
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foam mb-6 leading-[1.05] tracking-tight"
          >
            Turning Dreams Into{" "}
            <span className="text-gold-gradient">Digital Reality.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-slate text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            We design and engineer high-performance web applications, mobile
            products, enterprise platforms and future-ready digital systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-20"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-gradient text-void font-semibold hover:brightness-110 hover:shadow-gold hover:-translate-y-0.5 transition-all duration-200"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/12 text-foam font-semibold hover:bg-ink-2 hover:border-white/20 transition-all duration-200"
            >
              Explore Our Work
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={stagger(0.08)}
            className="grid grid-cols-3 divide-x divide-white/8 border border-white/8 rounded-2xl bg-ink/60 backdrop-blur-sm overflow-hidden"
          >
            {company.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="flex flex-col items-center px-8 py-5"
              >
                <span className="font-display font-bold text-3xl text-gold-gradient mb-1">
                  {stat.value}
                </span>
                <span className="text-slate text-xs font-mono tracking-wide text-center">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-dim">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
