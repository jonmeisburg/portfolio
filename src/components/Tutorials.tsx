const tutorials = [
  {
    title: "Building a Real-Time Voice Agent with OpenAI Realtime API",
    description: "Walk through how I built a production voice simulation tool — from API setup to streaming audio to deployment. Not a tutorial app — a real system.",
    duration: "12 min",
    tags: ["Voice AI", "Realtime API", "Streaming"],
  },
  {
    title: "Automating Workflows with AI Coding Agents",
    description: "How I use Codex and other AI agents to automate end-to-end workflows — from generation to review to deployment. 60% time reduction, no hype.",
    duration: "8 min",
    tags: ["Codex", "Agents", "Automation"],
  },
  {
    title: "Building a RAG Pipeline That Actually Works in Production",
    description: "Step-by-step: chunking strategies, embedding selection, retrieval tuning, and the stuff nobody talks about — like latency budgets and failure modes.",
    duration: "15 min",
    tags: ["RAG", "Vector Search", "Production"],
  },
];

export default function Tutorials() {
  return (
    <section id="tutorials" className="py-24 md:py-32 bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="badge bg-[#171717] text-white mb-4">Tutorials</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-[#171717] mb-4">
            Watch me build it, not just talk about it
          </h2>
          <p className="text-lg text-[#4d4d4d] leading-relaxed">
            Every tutorial is a real build of a real system. No theory, no slides — just working code and the decisions behind it.
          </p>
        </div>

        {/* Tutorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tutorials.map((tutorial, i) => (
            <a
              key={i}
              href="#"
              className="group block rounded-xl bg-white shadow-border-card hover:shadow-border-hover transition-shadow duration-200 overflow-hidden"
            >
              {/* Video placeholder */}
              <div className="aspect-video video-placeholder flex items-center justify-center" />

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-[#808080] flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 2v6l4 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2"/></svg>
                    {tutorial.duration}
                  </span>
                </div>
                <h3 className="text-base font-semibold tracking-[-0.02em] text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
                  {tutorial.title}
                </h3>
                <p className="text-sm text-[#4d4d4d] leading-relaxed mb-3">
                  {tutorial.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {tutorial.tags.map((tag, j) => (
                    <span key={j} className="text-[11px] font-medium text-[#808080] bg-[#fafafa] px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}