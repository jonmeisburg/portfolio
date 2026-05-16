export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Photo column */}
          <div className="md:col-span-2">
            <div className="aspect-[4/5] rounded-xl bg-[#fafafa] shadow-border flex items-center justify-center">
              <span className="text-sm text-[#808080] font-mono">Photo</span>
            </div>
          </div>

          {/* Text column */}
          <div className="md:col-span-3">
            <span className="badge bg-[#ebf5ff] text-[#0068d6] mb-4">About</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-[#171717] mb-6">
              Applied AI, built for real people
            </h2>
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed">
              <p className="text-lg">
                I build AI systems that ship — voice agents, retrieval pipelines, workflow automation. Not prototypes. Not slide decks. Working systems with real users and measurable outcomes.
              </p>
              <p>
                My edge: I spent 13+ years designing systems for how people actually learn, adopt tools, and change behavior. Most AI engineers build for specs. I build for humans. That means the tools I ship actually get used — because they&apos;re designed around real user behavior from day one.
              </p>
              <p>
                I think about AI the way I think about any tool: does it solve a real problem, and will someone actually use it? If the answer isn&apos;t clear, I build a small experiment first. If it works, I ship it. If it doesn&apos;t, I learn and move on.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8 pt-8 border-t border-[rgba(0,0,0,0.06)]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#808080] mb-4">What I Build With</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "OpenAI API & Realtime",
                  "RAG & Vector Search",
                  "AI Agents & Workflows",
                  "Voice AI",
                  "Codex & AI Coding Tools",
                  "Python / TypeScript",
                  "Prompt Engineering",
                  "System Design",
                ].map((skill) => (
                  <span key={skill} className="badge bg-[#fafafa] text-[#4d4d4d] shadow-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 pt-8 border-t border-[rgba(0,0,0,0.06)] flex flex-wrap gap-4">
              <a href="#" className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717] flex items-center gap-2 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="currentColor"/></svg>
                LinkedIn
              </a>
              <a href="#" className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717] flex items-center gap-2 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}