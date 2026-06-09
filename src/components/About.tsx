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
              AI Product Manager — design to production
            </h2>

            {/* Opening Anchor */}
            <p className="text-lg text-[#171717] font-medium leading-relaxed mb-6">
              I&apos;m Jon Meisburg. I help organizations turn AI capabilities
              into products that solve real problems.
            </p>

            {/* Core Perspective */}
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed mb-6">
              <p>
                I believe the hardest part of AI isn&apos;t the model — it&apos;s
                the bridge between what the technology can do and what people
                actually need. My approach starts with the outcome: what changes
                for the user, the team, or the business if this works? From
                there, I work backward through experience design, technical
                architecture, and adoption strategy. I don&apos;t optimize for
                demos — I optimize for systems that get used.
              </p>
            </div>

            {/* Supporting Evidence */}
            <div className="space-y-4 text-[#4d4d4d] leading-relaxed mb-6">
              <p>
                Most recently, I designed and built an{" "}
                <strong className="text-[#171717]">AI-powered roleplay platform</strong>
                {" "}for customer-facing teams — a system that lets learners
                practice realistic conversations, receive coaching-style
                feedback, and build confidence before applying skills on the
                job. I led the learning experience design, scenario design,
                feedback design, and prototype development end to end.
              </p>
              <p>
                I also built a{" "}
                <strong className="text-[#171717]">retrieval-constrained knowledge navigator</strong>
                {" "}for policy-accurate guidance, and AI-powered automation
                pipelines for content generation and QA workflows. Before
                focusing on AI, I spent 10+ years at Expedia Group and
                Microsoft shipping production systems at scale.
              </p>
            </div>

            {/* Personal Dimension */}
            <p className="text-[#4d4d4d] leading-relaxed mb-6">
              Outside of work, I&apos;m a lifelong learner who enjoys the craft
              of building — whether it&apos;s a new AI workflow, a knowledge
              system, or a better way to make coffee. I live in Seattle and
              spend my free time exploring how AI is reshaping the way we think
              about work, creativity, and learning.
            </p>

            {/* Skills */}
            <div className="mt-8 pt-8 border-t border-[rgba(0,0,0,0.06)]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#808080] mb-4">
                What I Build With
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI Prototyping",
                  "Learning Experience Design",
                  "Prompt Engineering",
                  "RAG & Vector Search",
                  "AI Agents & Workflows",
                  "React / TypeScript",
                  "OpenAI APIs",
                  "AWS (Lambda, DynamoDB, S3)",
                  "CopilotKit",
                  "Next.js",
                  "System Design",
                  "Stakeholder Collaboration",
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
