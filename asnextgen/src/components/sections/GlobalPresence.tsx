"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { company } from "@/data/company";
import { stagger, scaleIn, viewportOnce } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

function LiveClock({ timezone, label }: { timezone: string; label: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const t = new Intl.DateTimeFormat("en-GB", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(t);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  return (
    <div className="mb-5">
      <div className="font-mono font-bold text-4xl text-gold-gradient tracking-tight mb-1">
        {time || "--:--:--"}
      </div>
      <div className="font-mono text-xs text-slate-dim tracking-widest uppercase">{label}</div>
    </div>
  );
}

export function GlobalPresence() {
  const offices = [company.contact.hungary, company.contact.india];

  return (
    <section className="py-28 px-6 bg-ink border-t border-white/8" id="offices">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Where we work"
          title="Engineering Across Borders"
          description="Two offices. One standard of delivery. Always know when you'll get a reply."
        />

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {offices.map((office) => (
            <motion.div
              key={office.label}
              variants={scaleIn}
              className="relative rounded-2xl bg-void border border-white/8 p-8 hover:border-gold/20 transition-all duration-300 group"
            >
              {/* Online indicator */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse-gold" />
                <span className="font-mono text-xs text-emerald">Online</span>
              </div>

              <div className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
                {office.label}
              </div>

              <LiveClock timezone={office.timezone} label={office.timezoneLabel} />

              <div className="flex flex-col gap-3 border-t border-white/8 pt-5">
                <div className="flex items-start gap-3 text-slate text-sm">
                  <MapPin size={15} className="flex-shrink-0 mt-0.5 text-slate-dim" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center gap-3 text-slate text-sm">
                  <Phone size={15} className="flex-shrink-0 text-slate-dim" />
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="hover:text-foam transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate text-sm">
                  <Clock size={15} className="flex-shrink-0 text-slate-dim" />
                  <span>{office.hours}</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-8 right-8 h-px bg-gold-gradient opacity-0 group-hover:opacity-50 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
