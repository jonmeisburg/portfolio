"use client";

import Link from "next/link";

export default function WorkSamples() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <span className="badge bg-[#ebf5ff] text-[#0068d6] mb-4">
            Work Samples
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-[#171717] mb-4">
            Systems I&apos;ve built and shipped
          </h2>
          <p className="text-lg text-[#4d4d4d] leading-relaxed">
            Not prototypes. Working AI systems deployed in production with real
            users and measurable outcomes.
          </p>
        </div>

        {/* Featured project — full width */}
        <Link
          href="/work/customer-simulator"
          className="group block rounded-xl bg-white shadow-border-card hover:shadow-border-hover transition-all duration-300 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Thumbnail */}
            <div className="md:col-span-2 aspect-video md:aspect-auto thumb-voice flex items-center justify-center relative">
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-2 border border-white/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2a3 3 0 00-3 3v14a3 3 0 006 0V5a3 3 0 00-3-3z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 10v2a7 7 0 01-7 7m-7-9v2a7 7 0 007 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xs text-white/40 font-mono">Customer Simulator</span>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-[#5e6ad2] font-mono uppercase tracking-wide">Case Study</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#171717] mb-3 group-hover:text-[#5e6ad2] transition-colors">
                AI Roleplay Practice Platform
              </h3>
              <p className="text-sm md:text-base text-[#4d4d4d] leading-relaxed mb-4">
                Designed and prototyped an AI-powered practice experience for
                customer-facing teams — realistic conversations, coaching
                feedback, and repeatable learning at scale.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Learning Design", "AI Prototyping", "Coaching Systems"].map((tag) => (
                  <span key={tag} className="badge bg-[#fafafa] text-[#4d4d4d] shadow-border text-[11px]">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-[#5e6ad2] flex items-center gap-1.5 group-hover:gap-2 transition-all">
                  Read full case study
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <a
                  href="https://github.com/jonmeisburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#808080] flex items-center gap-1.5 hover:text-[#171717] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M5 4h2a3 3 0 013 3v6M9 4l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
