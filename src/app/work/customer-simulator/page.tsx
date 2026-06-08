import Link from "next/link";

export const metadata = {
  title: "AI Roleplay Practice — Jon Meisburg",
  description:
    "Designing an AI-powered roleplay experience for customer-facing teams. Safe practice, coaching feedback, and repeatable learning through AI simulation.",
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
                Designing AI Roleplay Practice for Customer-Facing Teams
              </h1>
              <p className="text-lg md:text-xl text-[#4d4d4d] leading-relaxed mb-8">
                How I designed a prototype AI-powered practice experience that
                lets learners rehearse realistic customer conversations, receive
                coaching-style feedback, and build confidence — all before
                applying skills on the job.
              </p>

              {/* Role badges */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Learning Experience Design",
                  "AI Prototype Development",
                  "Scenario & Feedback Design",
                  "Stakeholder Collaboration",
                ].map((role) => (
                  <span
                    key={role}
                    className="badge bg-[#fafafa] text-[#4d4d4d] shadow-border"
                  >
                    {role}
                  </span>
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
                  Customer-facing teams need realistic practice — before
                  customer experience is at risk
                </h2>
                <div className="space-y-4 text-[#4d4d4d] leading-relaxed">
                  <p>
                    In customer service environments, traditional e-learning
                    teaches policies and product knowledge — but none of it
                    prepares someone for what it actually feels like to handle
                    a frustrated customer, an urgent situation, or a complex
                    problem in real time.
                  </p>
                  <p>
                    Existing practice options were limited. Peer roleplay
                    required scheduling and facilitation. Live call shadowing
                    put the customer experience at risk while the learner was
                    still building competence. There was no scalable way to
                    give every agent realistic, repeatable practice with
                    consistent coaching feedback.
                  </p>
                  <p className="font-medium text-[#171717]">
                    The core challenge: how do you create a psychologically
                    safe space for deliberate practice — where learners can
                    fail without consequences, try again, and improve with
                    each attempt?
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-[#fafafa] shadow-border-card p-8 flex items-center">
                <div className="space-y-5">
                  {[
                    {
                      label: "Static e-learning",
                      issue: "Teaches knowledge, not conversation skills",
                    },
                    {
                      label: "Peer roleplay",
                      issue:
                        "Hard to schedule, inconsistent feedback quality",
                    },
                    {
                      label: "Live call shadowing",
                      issue:
                        "Customer experience is already at risk",
                    },
                    {
                      label: "The gap",
                      issue:
                        "No scalable way to practice realistic conversations safely",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-[#ebf5ff] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[10px] font-semibold text-[#0068d6]">
                          ✕
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#171717]">
                          {item.label}
                        </div>
                        <div className="text-xs text-[#808080]">
                          {item.issue}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Approach */}
        <section className="py-16 border-t border-[rgba(0,0,0,0.06)]">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="badge bg-[#ebf5ff] text-[#0068d6] mb-4">
              Design Approach
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#171717] mb-6 max-w-2xl">
              Five principles that shaped the learning experience
            </h2>
            <p className="text-lg text-[#4d4d4d] leading-relaxed mb-10 max-w-2xl">
              I grounded the design in established learning principles —
              adapted for what AI made newly possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Realistic practice",
                  desc: "Rather than multiple-choice scenarios or scripted branching, I designed an open-ended conversation experience where the AI customer responds dynamically — expressing emotion, asking unexpected questions, and reacting to the learner's choices the way a real customer would.",
                },
                {
                  num: "02",
                  title: "Psychological safety",
                  desc: "Deliberate practice requires a low-stakes environment where failure is part of the learning process. The design emphasized privacy, repeatability, and judgment-free feedback. Learners could practice as many times as they wanted.",
                },
                {
                  num: "03",
                  title: "Repeatable attempts",
                  desc: "I designed scenarios at progressive difficulty levels — from straightforward customer needs to complex, emotionally charged situations. Learners could start where they felt comfortable and advance as their confidence grew.",
                },
                {
                  num: "04",
                  title: "Coaching-style feedback",
                  desc: "After each session, the system generates a coaching report that scores performance against defined quality behaviors, highlights specific strengths with examples from the conversation, identifies growth areas with concrete suggestions, and recommends a next practice step.",
                },
                {
                  num: "05",
                  title: "Clear success criteria",
                  desc: "Learners need to know what 'good' looks like before they start. Each scenario includes transparent evaluation criteria — what behaviors are being assessed, what the expected path looks like, and what a strong performance demonstrates.",
                },
                {
                  num: "06",
                  title: "Manager tooling",
                  desc: "The most common bottleneck in roleplay training is creation and administration. I invested as much design attention in the manager experience — create, test, refine, assign, monitor — as in the learner experience. Adoption depends on both.",
                },
              ].map((principle) => (
                <div
                  key={principle.num}
                  className="p-6 rounded-xl bg-white shadow-border-card"
                >
                  <div className="text-xs font-semibold text-[#0068d6] font-mono mb-3">
                    {principle.num}
                  </div>
                  <h3 className="text-base font-semibold text-[#171717] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-[#4d4d4d] leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Decisions */}
        <section className="py-16 border-t border-[rgba(0,0,0,0.06)] bg-[#fafafa]">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="badge bg-[#171717] text-white mb-4">
              Design Decisions
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#171717] mb-10">
              Why I made the choices I did
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Why open-ended roleplay instead of branching scenarios?",
                  a: "Branching scenarios are predictable — after one or two attempts, the learner knows every path. An AI-driven conversation is different every time. The customer responds naturally, which keeps the practice challenging and transferable to real calls.",
                },
                {
                  q: "Why both chat and voice?",
                  a: "Different teams work in different channels. Chat develops written communication, de-escalation, and clear documentation. Voice develops pacing, tone, active listening, and empathy. Supporting both meant the prototype could serve a broader range of learning needs.",
                },
                {
                  q: "Why structured coaching feedback instead of a simple score?",
                  a: "A score alone tells a learner whether they passed or failed but gives them nothing to act on. I designed the feedback to be diagnostic — breaking performance down by specific behaviors, citing evidence from the conversation, and offering a clear path forward. This turns assessment into a learning tool.",
                },
                {
                  q: "Why invest in manager tooling from the start?",
                  a: "A great learner experience doesn't matter if managers can't or won't assign the practice. The create → test → refine → publish → assign → monitor workflow needed as much design attention as the learner workflow. Both sides of the platform had to work for either to succeed.",
                },
                {
                  q: "Why build a functional prototype instead of wireframes?",
                  a: "Building with real AI infrastructure — even in a limited form — surfaced design questions that static mockups never would: How fast should the AI respond? What happens when it misunderstands? How do you handle edge cases gracefully? These questions only emerged because the prototype was real.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ebf5ff] flex items-center justify-center">
                    <span className="text-sm font-semibold text-[#0068d6]">
                      ?
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-base font-semibold text-[#171717] mb-1">
                      {item.q}
                    </h3>
                    <p className="text-sm text-[#4d4d4d] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="py-16 border-t border-[rgba(0,0,0,0.06)]">
          <div className="max-w-[1200px] mx-auto px-6">
            <span className="badge bg-[#ebf5ff] text-[#0068d6] mb-4">
              What I Learned
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#171717] mb-4">
              Takeaways from designing AI-supported practice
            </h2>
            <p className="text-lg text-[#4d4d4d] leading-relaxed mb-10 max-w-2xl">
              This project taught me as much about AI product design as it did
              about learning experience design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  takeaway: "AI changes what's possible in learning design",
                  detail:
                    "Before this prototype, realistic conversation practice at scale wasn't feasible — it required human facilitators, scheduling, and subjective evaluation. AI simulation and evaluation removed those constraints, making it possible to give every learner unlimited, high-quality practice with consistent coaching.",
                },
                {
                  takeaway: "Feedback design is the hardest part",
                  detail:
                    "Getting the AI to simulate a realistic customer was relatively straightforward. Getting coaching feedback that was accurate, specific, fair, and actionable — aligned to real quality standards — required far more iteration. The prompt engineering and rubric design took more effort than any other component.",
                },
                {
                  takeaway: "Psychological safety is a feature",
                  detail:
                    "Early designs framed the experience as a scored simulation. User feedback quickly surfaced that this created anxiety rather than motivation. Reframing around practice, growth, and coaching — with clear messaging that attempts were private and repeatable — completely changed how learners engaged.",
                },
                {
                  takeaway: "Adoption is a two-sided design problem",
                  detail:
                    "I learned that both the learner and the manager experience needed equal design investment. A great practice experience doesn't matter if managers can't create, assign, and monitor it. The platform had to work for both personas or neither would use it.",
                },
              ].map((item) => (
                <div
                  key={item.takeaway}
                  className="p-6 rounded-xl bg-white shadow-border-card"
                >
                  <h3 className="text-base font-semibold text-[#171717] mb-2">
                    {item.takeaway}
                  </h3>
                  <p className="text-sm text-[#4d4d4d] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 border-t border-[rgba(0,0,0,0.06)] bg-[#fafafa]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-xs text-[#808080] leading-relaxed">
                <strong>Confidentiality note:</strong> This case study has been
                generalized for portfolio purposes. It does not include
                confidential information, customer data, internal tools,
                proprietary workflows, business results, screenshots, or
                company-owned training materials. Views are my own.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 border-t border-[rgba(0,0,0,0.06)]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#171717] mb-4">
                See what's next
              </h2>
              <p className="text-lg text-[#4d4d4d] leading-relaxed mb-8">
                This is one of several AI systems I've designed and built.
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
