import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, GraduationCap, Clock, MapPin, Award, Briefcase, Users } from "lucide-react";
import { jobs } from "@/data/jobs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Student Opportunities",
  description:
    "Join the AS NEXTGEN student internship programme. Build real skills, work on live projects and get a verified certificate.",
};

const benefits = [
  { icon: Briefcase, title: "Real Projects", description: "Work on live client and internal systems — not tutorials or mock exercises." },
  { icon: Users, title: "Named Mentor", description: "A senior team member is assigned to guide you from day one." },
  { icon: Award, title: "Verified Certificate", description: "Your certificate is verified against a public project registry." },
  { icon: GraduationCap, title: "Priority Hiring", description: "Interns who complete the programme get priority interviews for full-time roles." },
  { icon: CheckCircle2, title: "Portfolio Work", description: "Real contributions to real systems become your strongest portfolio pieces." },
  { icon: Clock, title: "Flexible Remote", description: "Work remotely from your college, on your schedule — 20+ hours per week." },
];

const domains = [
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "Mobile Development",
];

export default function StudentOpportunitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-ink border-b border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold/5 blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="font-mono text-xs tracking-widest uppercase text-gold">For College Students</span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-foam mb-5 leading-tight">
            Build More Than<br />
            <span className="text-gold-gradient">a Resume.</span>
          </h1>
          <p className="text-slate text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A selective, mentor-led programme that turns academic knowledge into
            production-ready engineering skills — working on real systems, not exercises.
          </p>

          {/* Compensation banner — prominently visible */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-amber/8 border border-amber/25 text-amber text-sm font-medium mb-10">
            <AlertCircle size={16} className="flex-shrink-0" />
            Non-Stipend / Unpaid Learning-Focused Internship
          </div>

          <div>
            <Link
              href="#apply"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-void font-semibold text-base hover:brightness-110 hover:shadow-gold hover:-translate-y-0.5 transition-all"
            >
              Apply Now
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="font-mono text-xs tracking-widest uppercase text-gold">What you get</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foam">
              More than an internship certificate.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-ink border border-white/8 hover:border-gold/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/8 border border-gold/15 flex items-center justify-center">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foam mb-1 group-hover:text-gold-light transition-colors">{title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + Policy */}
      <section className="py-20 px-6 bg-ink border-y border-white/8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-void border border-white/8 p-8">
            <h2 className="font-display font-semibold text-2xl text-foam mb-6">Eligibility</h2>
            <ul className="flex flex-col gap-4">
              {[
                { icon: GraduationCap, text: "College students only — any year of study" },
                { icon: Clock, text: "Minimum 20 hours per week commitment" },
                { icon: MapPin, text: "Open to students from India, Hungary and internationally" },
                { icon: Briefcase, text: "Any degree in Computer Science, IT or related field" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-slate text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-amber/5 border border-amber/20 p-8">
            <h2 className="font-display font-semibold text-2xl text-foam mb-2">Compensation Policy</h2>
            <p className="text-slate-dim text-xs font-mono uppercase tracking-wide mb-5">Important — please read</p>
            <p className="text-slate text-sm leading-relaxed mb-4">
              This is a <strong className="text-foam">non-stipend, unpaid</strong> learning-focused programme.
              We do not pay a salary or allowance.
            </p>
            <p className="text-slate text-sm leading-relaxed mb-4">
              What you receive in exchange:
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {["Hands-on experience with real production systems", "Named mentorship", "Verified completion certificate", "Priority consideration for paid roles post-graduation"].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald flex-shrink-0 mt-0.5" />
                  <span className="text-slate">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-24 px-6" id="apply">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="font-mono text-xs tracking-widest uppercase text-gold">Open positions</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foam">Choose your domain</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="flex items-center justify-between p-5 rounded-xl bg-ink border border-white/8 hover:border-gold/25 transition-all group"
              >
                <div>
                  <p className="font-display font-semibold text-foam text-sm group-hover:text-gold-light transition-colors">{job.title}</p>
                  <p className="text-slate text-xs mt-0.5 font-mono">{job.domain} · {job.location}</p>
                </div>
                <Link
                  href="/contact"
                  className="text-gold text-xs font-semibold font-mono hover:text-gold-light transition-colors"
                >
                  Apply →
                </Link>
              </div>
            ))}
          </div>

          {/* Application note */}
          <div className="rounded-2xl bg-ink border border-white/8 p-8 text-center">
            <h3 className="font-display font-semibold text-foam text-xl mb-3">Ready to apply?</h3>
            <p className="text-slate text-sm mb-6 max-w-lg mx-auto">
              Send us a message through the contact page. Include your domain of interest, availability, a short introduction and any relevant links (GitHub, portfolio, LinkedIn).
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-gradient text-void font-semibold hover:brightness-110 hover:shadow-gold transition-all"
            >
              Send Your Application
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
