export default function Featured() {
  return (
    <section className="py-16 md:py-20 bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <span className="badge bg-[#171717] text-white mb-4">
            Featured
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#171717] mb-3">
            In the wild
          </h2>
          <p className="text-base text-[#4d4d4d] leading-relaxed">
            Speaking, writing, building, and winning in public.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Hackathon */}
          <a
            href="https://www.youtube.com/watch?v=3FOpcTXLvA4"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white shadow-border hover:shadow-border-hover transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium text-[#5e6ad2] font-mono uppercase tracking-wide">
                Award
              </span>
            </div>
            <h3 className="text-base font-semibold text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
              App Growth Award — Expedia Group Hackathon
            </h3>
            <p className="text-sm text-[#4d4d4d] leading-relaxed">
              Competed as PM across 182 teams. Built Thumb-Stopping Deals, an
              algorithm that finds flight deals and auto-generates social
              content for influencers. Watch the pitch.
            </p>
          </a>

          {/* ATD Speaking */}
          <a
            href="https://www.youtube.com/watch?v=wqUnIhoj5pM"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white shadow-border hover:shadow-border-hover transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium text-[#5e6ad2] font-mono uppercase tracking-wide">
                Speaking
              </span>
            </div>
            <h3 className="text-base font-semibold text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
              ATD AI in L&D — Advanced Session
            </h3>
            <p className="text-sm text-[#4d4d4d] leading-relaxed">
              Live case study: how I designed and evolved the Customer Simulator
              from a GPT prototype to a production Realtime API system.
              Design-first, not code-first.
            </p>
          </a>

          {/* DevLearn */}
          <a
            href="https://www.youtube.com/watch?v=BSd42Ic16kw"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white shadow-border hover:shadow-border-hover transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium text-[#5e6ad2] font-mono uppercase tracking-wide">
                Speaking
              </span>
            </div>
            <h3 className="text-base font-semibold text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
              DevLearn 2018
            </h3>
            <p className="text-sm text-[#4d4d4d] leading-relaxed">
              Selected to present at one of the largest conferences for
              eLearning professionals. Session on emerging learning
              technologies and engagement design.
            </p>
          </a>

          {/* Podcast */}
          <a
            href="https://www.youtube.com/watch?v=-12O4Cp6lYc"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white shadow-border hover:shadow-border-hover transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium text-[#5e6ad2] font-mono uppercase tracking-wide">
                Podcast
              </span>
            </div>
            <h3 className="text-base font-semibold text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
              How AI Agents Will Change Computing
            </h3>
            <p className="text-sm text-[#4d4d4d] leading-relaxed">
              November 2023 — deep dive on Bill Gates' vision for AI agents,
              app disruption, healthcare, education, and the societal shifts
              ahead. Early thinking, before agents went mainstream.
            </p>
          </a>

          {/* Tutorial */}
          <a
            href="https://www.linkedin.com/pulse/building-second-brain-obsidian-codex-jon-meisburg-7qhec/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white shadow-border hover:shadow-border-hover transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium text-[#5e6ad2] font-mono uppercase tracking-wide">
                Tutorial
              </span>
            </div>
            <h3 className="text-base font-semibold text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
              Building a Second Brain with Obsidian & Codex
            </h3>
            <p className="text-sm text-[#4d4d4d] leading-relaxed">
              Inspired by Andrej Karpathy's LLM Knowledge Bases post. A
              practical guide to turning your notes into a queryable
              knowledge base using AI coding tools.
            </p>
          </a>

          {/* Product Design */}
          <a
            href="https://drive.google.com/file/d/1-jAmoedl87OlMmem8i9C3bnI1rUFvM0W/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white shadow-border hover:shadow-border-hover transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium text-[#5e6ad2] font-mono uppercase tracking-wide">
                Case Study
              </span>
            </div>
            <h3 className="text-base font-semibold text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
              Google Product Design Certificate
            </h3>
            <p className="text-sm text-[#4d4d4d] leading-relaxed">
              UX research, Figma prototyping, and high-fidelity design for
              social good. View case studies from the certification program.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
