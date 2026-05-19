import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          {/* Photo column */}
          <div className="md:col-span-2">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-border-card relative">
              <Image
                src="/headshot.png"
                alt="Jon Meisburg"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Text column */}
          <div className="md:col-span-3">
            <span className="badge bg-[#ebf5ff] text-[#0068d6] mb-4">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-[#171717] mb-6">
              Applied AI, built for real people
            </h2>
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed">
              <p className="text-lg">
                I&apos;m a Senior Applied AI Systems Engineer at Chewy, where I build
                AI-powered coaching, workflow automation, and performance support
                systems used by thousands of agents daily. My work sits at the
                intersection of real-time voice AI, retrieval architectures, and
                production pipeline design.
              </p>
              <p>
                Most recently, I built the{" "}
                <strong className="text-[#171717]">Chewy Customer Simulator</strong>,
                a Realtime API-powered roleplay platform that cut projected
                platform spend by 80% and reduced agent time-to-competence from
                6 weeks to 2.5. I also built the{" "}
                <strong className="text-[#171717]">Phoenix SOP Navigator</strong>,
                a retrieval-constrained AI system for policy-accurate guidance,
                and Codex-powered automation pipelines that handle content
                generation, QA, and developer handoff.
              </p>
              <p>
                Before Chewy, I spent 7+ years at Expedia Group and 3 years at
                Microsoft shipping learning and performance systems at scale. My
                edge: 15+ years designing systems for how people actually learn,
                adopt tools, and change behavior. Most AI engineers build for
                specs. I build for humans — so the systems I ship actually get
                used.
              </p>
              <p>
                I&apos;m especially interested in applied AI roles that move beyond
                experimentation into production systems — voice AI, RAG
                pipelines, agent workflows, and AI-enabled operational
                transformation.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8 pt-8 border-t border-[rgba(0,0,0,0.06)]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#808080] mb-4">
                What I Build With
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "OpenAI Realtime API",
                  "RAG & Vector Search",
                  "AI Agents & Workflows",
                  "Voice AI",
                  "Codex & AI Coding Tools",
                  "Python / TypeScript",
                  "FastAPI",
                  "PostgreSQL",
                  "Redis",
                  "Docker / AWS ECS",
                  "Prompt Engineering",
                  "System Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="badge bg-[#fafafa] text-[#4d4d4d] shadow-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-8 pt-8 border-t border-[rgba(0,0,0,0.06)]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#808080] mb-4">
                Education & Credentials
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-[#171717]">
                    University of Washington
                  </div>
                  <div className="text-xs text-[#808080]">
                    Certificate in Software Product Management — AI Product
                    Development, Go-to-Market Strategy
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#171717]">
                    Oregon State University
                  </div>
                  <div className="text-xs text-[#808080]">
                    Postgraduate Computer Science — Data Structures, Algorithms,
                    Discrete Mathematics, OOP
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#171717]">
                    Anthropic, Microsoft, Google, DeepLearning.AI
                  </div>
                  <div className="text-xs text-[#808080]">
                    AI Fluency, Generative AI, AI for Everyone — multiple
                    certifications
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 pt-8 border-t border-[rgba(0,0,0,0.06)] flex flex-wrap gap-4">
              <a
                href="https://linkedin.com/in/jonmeisburg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717] flex items-center gap-2 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
                    fill="currentColor"
                  />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/jonmeisburg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717] flex items-center gap-2 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    fill="currentColor"
                  />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
