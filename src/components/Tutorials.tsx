const tutorials = [
  {
    title: "Building a Real-Time Voice Agent with OpenAI Realtime API",
    description:
      "Walk through how I built a production voice simulation tool — from API setup to streaming audio to deployment. Not a tutorial app — a real system.",
    duration: "12 min",
    tags: ["Voice AI", "Realtime API", "Streaming"],
    thumbnailClass: "tutorial-thumb tutorial-thumb-1",
    youtubeUrl: "#",
  },
  {
    title: "Automating Workflows with AI Coding Agents",
    description:
      "How I use Codex and other AI agents to automate end-to-end workflows — from generation to review to deployment. 60% time reduction, no hype.",
    duration: "8 min",
    tags: ["Codex", "Agents", "Automation"],
    thumbnailClass: "tutorial-thumb tutorial-thumb-2",
    youtubeUrl: "#",
  },
  {
    title: "Building a RAG Pipeline That Actually Works in Production",
    description:
      "Step-by-step: chunking strategies, embedding selection, retrieval tuning, and the stuff nobody talks about — like latency budgets and failure modes.",
    duration: "15 min",
    tags: ["RAG", "Vector Search", "Production"],
    thumbnailClass: "tutorial-thumb tutorial-thumb-3",
    youtubeUrl: "#",
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
            Every tutorial is a real build of a real system. No theory, no
            slides — just working code and the decisions behind it.
          </p>
        </div>

        {/* Tutorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tutorials.map((tutorial, i) => (
            <div
              key={i}
              className="group block rounded-xl bg-white shadow-border-card hover:shadow-border-hover transition-all duration-300 overflow-hidden"
            >
              {/* Video placeholder with distinct visual */}
              <div
                className={`aspect-video flex items-center justify-center ${tutorial.thumbnailClass}`}
              >
                {/* Play button overlay */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 5v14l11-7z"
                      fill="white"
                      fillOpacity="0.9"
                    />
                  </svg>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-xs text-white font-mono">
                  {tutorial.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold tracking-[-0.02em] text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
                  {tutorial.title}
                </h3>
                <p className="text-sm text-[#4d4d4d] leading-relaxed mb-3">
                  {tutorial.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {tutorial.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[11px] font-medium text-[#808080] bg-[#fafafa] px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
