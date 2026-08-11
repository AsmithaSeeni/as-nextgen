"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { company } from "@/data/company";

export function ContactCTA() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="font-mono text-xs tracking-widest uppercase text-gold">Get in touch</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-5xl text-foam mb-5 leading-tight"
          >
            Let&apos;s Build Something<br />
            <span className="text-gold-gradient">Meaningful.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-slate text-lg mb-10 leading-relaxed">
            Whether you have a project to discuss, a question to ask, or just want to see if we&apos;re
            the right fit — reach out. We reply to every message.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-void font-semibold text-base hover:brightness-110 hover:shadow-gold hover:-translate-y-0.5 transition-all duration-200"
            >
              Start a Conversation
              <ArrowRight size={17} />
            </Link>
            <a
              href={`mailto:${company.contact.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/12 text-foam font-semibold text-base hover:bg-ink-2 hover:border-white/20 transition-all duration-200"
            >
              <Mail size={17} />
              Send an Email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
