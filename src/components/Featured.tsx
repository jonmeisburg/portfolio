export default function Featured() {
  return (
    <section className="py-16 md:py-20 bg-[#fafafa]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#171717] mb-3">
            Speaking & Writing
          </h2>
          <p className="text-base text-[#4d4d4d] leading-relaxed">
            Ideas I've built into talks, essays, and products. All public.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Talks */}
          <h3 className="col-span-full text-sm font-medium text-[#808080] uppercase tracking-wider pt-4">
            Talks & Presentations
          </h3>

          {/* ATD Speaking */}
          <a
            href="https://www.youtube.com/watch?v=wqUnIhoj5pM"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white shadow-border hover:shadow-border-hover transition-all duration-200"
          >
            <h3 className="text-base font-semibold text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
              ATD AI in Practice — Advanced Session
            </h3>
            <p className="text-sm text-[#4d4d4d] leading-relaxed">
              Live case study on designing AI roleplay practice from concept to functional prototype. Design-first approach to AI-powered learning experiences.
            </p>
          </a>

          {/* DevLearn */}
          <a
            href="https://www.youtube.com/watch?v=BSd42Ic16kw"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white shadow-border hover:shadow-border-hover transition-all duration-200"
          >
            <h3 className="text-base font-semibold text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
              DevLearn 2018 — Emerging Tech Session
            </h3>
            <p className="text-sm text-[#4d4d4d] leading-relaxed">
              Selected to present at DevLearn on emerging AI and simulation technologies for operational teams. Watch the talk.
            </p>
          </a>

          {/* Hackathon */}
          <a
            href="https://www.youtube.com/watch?v=3FOpcTXLvA4"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white shadow-border hover:shadow-border-hover transition-all duration-200"
          >
            <h3 className="text-base font-semibold text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
              App Growth Award — Expedia Group Hackathon
            </h3>
            <p className="text-sm text-[#4d4d4d] leading-relaxed">
              Competed as PM across 182 teams. Built Thumb-Stopping Deals: an algorithm that finds flight deals and auto-generates creator content. Watch the pitch.
            </p>
          </a>

          {/* Videos & Writing */}
          <h3 className="col-span-full text-sm font-medium text-[#808080] uppercase tracking-wider pt-4">
            Podcasts, Articles & Tutorials
          </h3>

          {/* Podcast */}
          <a
            href="https://www.youtube.com/watch?v=-12O4Cp6lYc"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white shadow-border hover:shadow-border-hover transition-all duration-200"
          >
            <h3 className="text-base font-semibold text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
              How AI Agents Will Change Computing
            </h3>
            <p className="text-sm text-[#4d4d4d] leading-relaxed">
              November 2023 — deep dive on Bill Gates' vision for AI agents, app disruption, healthcare, education, and the societal shifts ahead. Early thinking, before agents went mainstream.
            </p>
          </a>

          {/* Second Brain Article */}
          <a
            href="https://www.linkedin.com/pulse/building-second-brain-obsidian-codex-jon-meisburg-7qhec/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-white shadow-border hover:shadow-border-hover transition-all duration-200"
          >
            <h3 className="text-base font-semibold text-[#171717] mb-2 group-hover:text-[#5e6ad2] transition-colors leading-snug">
              Building a Second Brain with Obsidian & Codex
            </h3>
            <p className="text-sm text-[#4d4d4d] leading-relaxed">
              Practical guide to turning your notes into a queryable knowledge base using AI coding tools. Inspired by Andrej Karpathy's LLM Knowledge Bases post.
            </p>
          </a>

          {/* YouTube Placeholder */}
          <div className="group block p-5 rounded-xl border-2 border-[#d8dce6] border-dashed bg-white/50 transition-colors">
            <h3 className="text-base font-semibold text-[#6b7280] mb-2 leading-snug line-clamp-2">
              Coming soon — AI Tutorials on YouTube
            </h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Step-by-step walkthroughs building practical AI systems. Watch for it here.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
