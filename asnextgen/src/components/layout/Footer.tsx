import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { Instagram, Twitter, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const navColumns = [
  {
    title: "Navigate",
    links: [
      { href: "/", label: "Home" },
      { href: "/solutions", label: "Solutions" },
      { href: "/projects", label: "Projects" },
      { href: "/student-opportunities", label: "Student Opportunities" },
      { href: "/careers", label: "Careers" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { hungary, india, email, social } = company.contact;

  return (
    <footer className="border-t border-white/8 bg-ink pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-gold/20 group-hover:ring-gold/40 transition-all">
                <Image src="/logo.jpeg" alt="AS NEXTGEN Logo" fill className="object-cover" />
              </div>
              <div>
                <div className="font-display font-bold text-foam text-base">A/S NEXTGEN</div>
                <div className="text-slate text-[10px] font-mono tracking-wide">Pvt Ltd</div>
              </div>
            </Link>
            <p className="text-slate text-sm leading-relaxed mb-6 max-w-xs">
              Engineering high-performance digital products, enterprise platforms and
              next-generation software experiences.
            </p>
            <div className="flex gap-3">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-ink-2 border border-white/8 flex items-center justify-center text-slate hover:text-gold hover:border-gold/30 transition-all"
              >
                <Instagram size={15} />
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-xl bg-ink-2 border border-white/8 flex items-center justify-center text-slate hover:text-gold hover:border-gold/30 transition-all"
              >
                <Twitter size={15} />
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-ink-2 border border-white/8 flex items-center justify-center text-slate hover:text-gold hover:border-gold/30 transition-all"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h5 className="font-mono text-xs uppercase tracking-widest text-slate-dim mb-4">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate text-sm hover:text-foam transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h5 className="font-mono text-xs uppercase tracking-widest text-slate-dim mb-4">
              Contact
            </h5>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-2.5 text-slate text-sm hover:text-foam transition-colors group"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0 text-gold" />
                  <span className="break-all">{email}</span>
                </a>
              </li>
              <li>
                <div className="text-xs font-mono text-gold mb-1.5">{hungary.label}</div>
                <a
                  href={`tel:${hungary.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2.5 text-slate text-sm hover:text-foam transition-colors"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0" />
                  {hungary.phone}
                </a>
                <div className="flex items-start gap-2.5 text-slate text-xs mt-1.5">
                  <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                  <span>Őcsény, Hungary</span>
                </div>
              </li>
              <li>
                <div className="text-xs font-mono text-gold mb-1.5">{india.label}</div>
                <a
                  href={`tel:${india.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2.5 text-slate text-sm hover:text-foam transition-colors"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0" />
                  {india.phone}
                </a>
                <div className="flex items-start gap-2.5 text-slate text-xs mt-1.5">
                  <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                  <span>Tiruchirappalli, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-dim text-xs">
            © {year} AS NEXTGEN Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-slate-dim text-xs hover:text-slate transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-dim text-xs hover:text-slate transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
