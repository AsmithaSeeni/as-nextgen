"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-4",
            align === "center" ? "justify-center" : ""
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="font-mono text-xs tracking-widest uppercase text-gold">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foam mb-4",
          titleClassName
        )}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {description && (
        <p className="text-slate text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
