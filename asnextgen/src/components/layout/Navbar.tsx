"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/student-opportunities", label: "Student Opportunities" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-void/90 backdrop-blur-xl border-b border-white/8 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="AS NEXTGEN Home"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-gold/20 group-hover:ring-gold/50 transition-all duration-200">
              <Image
                src="/logo.jpeg"
                alt="AS NEXTGEN Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="leading-none">
              <div className="font-display font-bold text-foam text-base tracking-tight">
                A/S NEXTGEN
              </div>
              <div className="text-slate text-[10px] font-mono tracking-wide mt-0.5">
                Pvt Ltd
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative group",
                    isActive ? "text-gold" : "text-slate hover:text-foam"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-gold-gradient transition-all duration-200",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-void text-sm font-semibold hover:brightness-110 hover:shadow-gold hover:-translate-y-0.5 transition-all duration-200"
            >
              Start a Project
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-foam rounded-lg hover:bg-ink-2 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-void flex flex-col transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/8">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-gold/20">
              <Image src="/logo.jpeg" alt="AS NEXTGEN Logo" fill className="object-cover" />
            </div>
            <span className="font-display font-bold text-foam text-base">A/S NEXTGEN</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-slate hover:text-foam rounded-lg hover:bg-ink-2 transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-1 p-6" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-2xl font-display font-semibold py-3 border-b border-white/6 transition-colors duration-200",
                  isActive ? "text-gold" : "text-foam hover:text-gold-light"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/8">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-gold-gradient text-void font-semibold text-base hover:brightness-110 transition-all"
          >
            Start a Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
