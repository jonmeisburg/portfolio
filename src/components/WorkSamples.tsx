const projects = [
  {
    title: "AI Voice Agent Simulator",
    description: "Real-time voice simulation using OpenAI Realtime API. Agents practice customer conversations against a lifelike AI opponent — deployed, used daily in production training.",
    tags: ["Voice AI", "Realtime API", "Agents"],
    type: "Case Study",
  },
  {
    title: "RAG Knowledge Navigator",
    description: "Retrieval-augmented generation pipeline that surfaces the right information at the right time. Built for real-time agent support during live customer interactions.",
    tags: ["RAG", "Vector Search", "Retrieval"],
    type: "Case Study",
  },
  {
    title: "AI Workflow Automation",
    description: "Automated end-to-end workflows using AI coding agents — content generation, quality review, deployment pipelines. Cut production time by 60%.",
    tags: ["Codex", "Agents", "Automation"],
    type: "Case Study",
  },
  {
    title: "AI Coach & Feedback System",
    description: "Automated performance coaching that analyzes interactions and surfaces actionable improvement suggestions. Closed the feedback loop without human review bottlenecks.",
    tags: ["AI Coaching", "Analytics", "Feedback Loops"],
    type: "Case Study",
  },
];

export default function WorkSamples() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="badge bg-[#ebf5ff] text-[#0068d6] mb-4">Work Samples</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-[#171717] mb-4">
            Systems I&apos;ve built and shipped
          </h2>
          <p className="text-lg text-[#4d4d4d] leading-relaxed">
            Not prototypes. Not slide decks. Working AI systems deployed in production — with real users and measurable outcomes.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href="#"
              className="group block rounded-xl bg-white shadow-border-card hover:shadow-border-hover transition-shadow duration-200 overflow-hidden"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-[#fafafa] border-b border-[rgba(0,0,0,0.04)] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-[#171717] flex items-center justify-center mx-auto mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-xs text-[#808080] font-mono">Project thumbnail</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-[#5e6ad2] font-mono uppercase tracking-wide">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#4d4d4d] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="badge bg-[#fafafa] text-[#4d4d4d] shadow-border text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links row */}
                <div className="flex items-center gap-4 pt-3 border-t border-[rgba(0,0,0,0.04)]">
                  <span className="text-xs font-medium text-[#5e6ad2] flex items-center gap-1.5 group-hover:gap-2 transition-all">
                    View case study
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-xs font-medium text-[#808080] flex items-center gap-1.5 hover:text-[#171717] transition-colors">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M5 4h2a3 3 0 013 3v6M9 4l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    GitHub
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}