import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { StageBadge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-12 px-6 bg-ink border-b border-white/8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-slate text-sm hover:text-foam transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            All Projects
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <StageBadge stage={project.stage} />
            <span className="font-mono text-xs text-slate-dim">{project.category}</span>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-foam mb-4 leading-tight">
            {project.name}
          </h1>
          <p className="text-slate text-lg leading-relaxed mb-8 max-w-2xl">{project.longDescription}</p>

          {/* Progress */}
          <div className="max-w-sm">
            <ProgressBar value={project.progress} showLabel />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 flex flex-col gap-10">
            {/* Problem */}
            <div>
              <h2 className="font-display font-semibold text-xl text-foam mb-3">The Problem</h2>
              <p className="text-slate leading-relaxed">{project.problem}</p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="font-display font-semibold text-xl text-foam mb-3">Our Solution</h2>
              <p className="text-slate leading-relaxed">{project.solution}</p>
            </div>

            {/* Expected capabilities */}
            <div>
              <h2 className="font-display font-semibold text-xl text-foam mb-4">Expected Capabilities</h2>
              <ul className="flex flex-col gap-3">
                {project.expectedCapabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-slate text-sm">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Roadmap */}
            <div>
              <h2 className="font-display font-semibold text-xl text-foam mb-4">Development Roadmap</h2>
              <ol className="flex flex-col gap-3">
                {project.roadmap.map((item, i) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="font-mono text-xs text-gold mt-0.5 w-5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-slate text-sm">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-ink border border-white/8 p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-dim mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-full bg-ink-3 border border-white/8 text-slate">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-ink border border-white/8 p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-dim mb-4">Status</h3>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate">Stage</span>
                  <span className="text-foam font-medium">{project.stage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Progress</span>
                  <span className="text-gold font-mono font-semibold">{project.progress}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Category</span>
                  <span className="text-foam font-medium">{project.category}</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gold-gradient text-void text-sm font-semibold hover:brightness-110 transition-all"
            >
              Interested? Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
