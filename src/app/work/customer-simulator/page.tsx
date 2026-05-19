import Link from "next/link";

export const metadata = {
  title: "Customer Simulator — Jon Meisburg",
  description:
    "Real-time voice simulation using OpenAI Realtime API. Agents practice customer conversations against a lifelike AI opponent — deployed and used daily in production training.",
};

export default function CustomerSimulatorPage() {
  return (
    <div className="min-h-screen">
      {/* Sticky back nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[rgba(0,0,0,0.06)]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#4d4d4d] hover:text-[#171717] transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10 4L6 8l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="pt-16 pb-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl">
              <span className="badge bg-[#ebf5ff] text-[#0068d6] mb-4">
                Case Study
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] text-[#171717] mb-4">
                Customer Simulator
              </h1>
              <p className="text-lg md:text-xl text-[#4d4d4d] leading-relaxed mb-10">
                A real-time voice simulation system built on OpenAI&apos;s
                Realtime API. Agents practice customer conversations against a
                lifelike AI opponent — deployed daily in production training.
              </p>

              {/* Metrics row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "80%", label: "Cost reduction" },
                  { value: "2,000+", label: "Agents trained" },
                  { value: "2.5x", label: "Faster to competence" },
                  { value: "Daily", label: "Production use" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-xl bg-[#fafafa] shadow-border"
                  >
                    <div className="text-2xl md:text-3xl font-semibold text-[#171717] tracking-[-0.02em]">
                      {metric.value}
                    </div>
                    <div className="text-xs text-[#808080] mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 border-t border-[rgba(0,0,0,0.06)]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <span className="badge bg-[#fafafa] text-[#808080] shadow-border mb-4">
                  The Problem
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#171717] mb-6">
                  Training customer agents at scale is expensive and slow
                </h2>
                <div className="space-y-4 text-[#4d4d4d] leading-relaxed">
                  <p>
                    Traditional agent training relies on human role-players —
                    costly, inconsistent, and impossible to scale. Agents
                    graduate unprepared for real customer conversations,
                    driving up handle time and error rates.
                  </p>
                  <p>
                    The existing simulation platform cost $800K annually
                    and required 6 weeks to get new hires to baseline
                    competence. Leaders needed a system that could train
                    more agents, faster, without sacrificing quality.
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-[#fafafa] shadow-border-card aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-[#171717] flex items-center justify-center mx-auto mb-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2a3 3 0 00-3 3v14a3 3 0 006 0V5a3 3 0 00-3-3z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 10v2a7 7 0 01-7 7m-7-9v2a7 7 0 007 7"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-xs text-[#808080] font-mono">
                    Project screenshot placeholder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 border-t border-[rgba(0,0,0,0.06)]">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="badge bg-[#ebf5ff] text-[#0068d6] mb-4">
              The Solution
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#171717] mb-6 max-w-2xl">
              An AI opponent that sounds and behaves like a real customer
            </h2>
            <p className="text-lg text-[#4d4d4d] leading-relaxed mb-10 max-w-2xl">
              Built on OpenAI&apos;s Realtime API, the simulator generates
              dynamic voice conversations that adapt to the agent&apos;s
              responses. No scripts. No pre-recorded audio. Every practice
              session is unique.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Real-time voice synthesis",
                  desc: "Natural-sounding customer voices with emotional range — frustration, confusion, urgency.",
                },
                {
                  title: "Dynamic scenario generation",
                  desc: "AI generates unique situations on demand. Agents never practice the same conversation twice.",
                },
                {
                  title: "Adaptive difficulty",
                  desc: "System adjusts complexity based on agent performance, pushing them just past their comfort zone.",
                },
                {
                  title: "Live coaching feedback",
                  desc: "Post-session analysis identifies missed opportunities, tone issues, and policy gaps.",
                },
                {
                  title: "Production integration",
                  desc: "Embedded into the daily training workflow. Agents use it as part of their regular rotation.",
                },
                {
                  title: "Scalable architecture",
                  desc: "Handles thousands of concurrent sessions without human intervention or scheduling.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-white shadow-border-card"
                >
                  <h3 className="text-base font-semibold text-[#171717] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#4d4d4d] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture / How It Works */}
        <section className="py-16 border-t border-[rgba(0,0,0,0.06)] bg-[#fafafa]">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="badge bg-[#171717] text-white mb-4">
              Architecture
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#171717] mb-10">
              How it works
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Agent initiates practice session",
                  desc: "From the training dashboard, the agent selects a scenario type and hits start. No scheduling, no human setup.",
                },
                {
                  step: "02",
                  title: "AI generates a live customer profile",
                  desc: "The system creates a unique customer with a backstory, emotional state, and specific problem — all in real time.",
                },
                {
                  step: "03",
                  title: "Voice conversation begins",
                  desc: "Using OpenAI Realtime API, the agent hears a natural voice and responds as they would on a real call.",
                },
                {
                  step: "04",
                  title: "AI adapts in real time",
                  desc: "The customer persona shifts based on how well the agent handles the conversation — escalating, calming, or introducing new variables.",
                },
                {
                  step: "05",
                  title: "Session ends, feedback generated",
                  desc: "Within seconds, the agent sees what they did well, what they missed, and specific coaching points.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ebf5ff] flex items-center justify-center">
                    <span className="text-xs font-semibold text-[#0068d6] font-mono">
                      {item.step}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-base font-semibold text-[#171717] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4d4d4d] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 border-t border-[rgba(0,0,0,0.06)]">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="badge bg-[#fafafa] text-[#808080] shadow-border mb-4">
              Tech Stack
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#171717] mb-8">
              What I built with
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "OpenAI Realtime API",
                "Python / FastAPI",
                "WebRTC",
                "PostgreSQL",
                "Redis",
                "Docker",
                "AWS ECS",
                "React / TypeScript",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="badge bg-[#fafafa] text-[#171717] shadow-border text-sm px-3 py-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 border-t border-[rgba(0,0,0,0.06)] bg-[#171717]">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="badge bg-white/10 text-white/80 mb-4">
              Results
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-white mb-4">
              Outcomes that matter
            </h2>
            <p className="text-lg text-[#808080] leading-relaxed mb-10 max-w-2xl">
              The system replaced a $800K annual training platform and
              became the primary practice tool for over 2,000 agents.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  metric: "80%",
                  label: "Platform cost reduction",
                  detail: "From $800K to $160K annually by replacing human role-players with AI simulation.",
                },
                {
                  metric: "6 → 2.5",
                  label: "Weeks to competence",
                  detail: "New hires reach performance baseline in under 3 weeks instead of 6.",
                },
                {
                  metric: "2,000+",
                  label: "Agents trained",
                  detail: "Scaled across the support org with no additional human trainers.",
                },
                {
                  metric: "+CSAT",
                  label: "New hires outperform tenured",
                  detail: "Post-training CSAT scores from new agents exceeded historical tenured baselines.",
                },
              ].map((result) => (
                <div
                  key={result.label}
                  className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="text-3xl font-semibold text-white tracking-[-0.02em] mb-1">
                    {result.metric}
                  </div>
                  <div className="text-sm font-medium text-[#7170ff] mb-2">
                    {result.label}
                  </div>
                  <p className="text-sm text-[#808080] leading-relaxed">
                    {result.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 border-t border-[rgba(0,0,0,0.06)]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#171717] mb-4">
                See what&apos;s next
              </h2>
              <p className="text-lg text-[#4d4d4d] leading-relaxed mb-8">
                This is one of several AI systems I&apos;ve built and shipped.
                Check out the others or get in touch if you want to talk shop.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-medium bg-[#171717] text-white px-5 py-3 rounded-md hover:bg-[#333] transition-colors"
                >
                  View all work
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10m0 0L9 4m4 4L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <a
                  href="mailto:jonmeisburg@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#171717] px-5 py-3 rounded-md shadow-border hover:shadow-border-hover transition-shadow bg-white"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-[rgba(0,0,0,0.06)]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-[#171717] flex items-center justify-center">
              <span className="text-white text-[10px] font-semibold">JM</span>
            </div>
            <span className="text-xs text-[#808080]">
              © {new Date().getFullYear()} Jon Meisburg
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/jonmeisburg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#808080] hover:text-[#171717] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jonmeisburg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#808080] hover:text-[#171717] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
