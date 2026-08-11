"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const terminalLines = [
  { text: "$ ./initialize --digital-experience", type: "cmd" },
  { text: "> Checking page load ............ [OK]", type: "ok" },
  { text: "> Checking connection security ... [OK]", type: "ok" },
  { text: "> Checking environment ........... [OK]", type: "ok" },
  { text: "> Checking font loading .......... [OK]", type: "ok" },
  { text: "> Checking script execution ...... [OK]", type: "ok" },
  { text: "> Checking responsive layout ..... [OK]", type: "ok" },
  { text: "", type: "blank" },
  { text: "SYSTEM STATUS: ALL GREEN", type: "status" },
];

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisibleLines(terminalLines.length);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= terminalLines.length) clearInterval(interval);
    }, 280);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="System check"
          title="Everything is running."
          description="A live simulation of this page's frontend environment — not a real infrastructure check, but a real frontend status report."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-2xl overflow-hidden border border-white/8 bg-[#0C0F1A] shadow-card"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-5 py-3.5 bg-ink-2 border-b border-white/8">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-amber/70" />
            <span className="w-3 h-3 rounded-full bg-emerald/70" />
            <span className="ml-auto font-mono text-xs text-slate">
              system_check.sh — visual simulation
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm leading-8 min-h-[320px]">
            {terminalLines.map((line, i) => {
              if (i >= visibleLines) return null;
              return (
                <div
                  key={i}
                  className={
                    line.type === "cmd"
                      ? "text-gold-light"
                      : line.type === "ok"
                      ? "text-slate"
                      : line.type === "status"
                      ? "text-emerald font-bold"
                      : ""
                  }
                >
                  {line.type === "ok" ? (
                    <>
                      <span>{line.text.replace("[OK]", "")}</span>
                      <span className="text-emerald font-semibold">[OK]</span>
                    </>
                  ) : line.type === "blank" ? (
                    <>&nbsp;</>
                  ) : (
                    line.text
                  )}
                  {i === visibleLines - 1 && i < terminalLines.length - 1 && (
                    <span className="inline-block w-2 h-4 bg-gold ml-1 animate-blink align-middle" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
