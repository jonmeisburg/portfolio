export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="mb-6">
            <span className="badge bg-[#ebf5ff] text-[#0068d6]">
              Open to opportunities
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] text-[#171717] mb-6">
            I build applied AI systems — tools, workflows, and agents that actually ship.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl leading-relaxed text-[#4d4d4d] mb-8 max-w-2xl">
            Applied AI engineer who goes beyond prototypes. I design, build, and deploy AI-powered systems — from real-time voice agents to retrieval pipelines to workflow automation. My background in learning systems means I build for real users, not just demos.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm font-medium bg-[#171717] text-white px-5 py-3 rounded-md hover:bg-[#333] transition-colors"
            >
              See my work
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="#tutorials"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#171717] px-5 py-3 rounded-md shadow-border hover:shadow-border-hover transition-shadow bg-white"
            >
              Watch tutorials
            </a>
          </div>

          {/* Quick credibility signals */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[#808080]">
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v2m0 10v2m-7-7h2m10 0h2m-1.5-5.5L11 5m-6 6-1.5 1.5m0-9L5 5m6 6 1.5 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>
              Applied AI systems
            </span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h3m4-12h3a1 1 0 011 1v10a1 1 0 01-1 1h-3m-1-4l3-3-3-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
              OpenAI · RAG · Voice AI
            </span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Microsoft &amp; Expedia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}