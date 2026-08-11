"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";
import { company } from "@/data/company";

function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setCount(target); return; }

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, animate }: { stat: typeof company.stats[0]; animate: boolean }) {
  const num = useCountUp(stat.numeric, 1200, animate);
  const suffix = stat.value.replace(String(stat.numeric), "");

  return (
    <motion.div variants={fadeUp} className="flex flex-col items-center text-center px-6 py-8">
      <span className="font-display font-bold text-4xl md:text-5xl text-gold-gradient mb-2">
        {num}{suffix}
      </span>
      <span className="text-slate text-sm font-mono tracking-wide">{stat.label}</span>
    </motion.div>
  );
}

export function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-4 px-6 bg-ink border-y border-white/8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-3 divide-x divide-white/8"
        >
          {company.stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} animate={visible} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
