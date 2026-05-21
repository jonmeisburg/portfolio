import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl">
          {/* Headshot */}
          <div className="mb-6">
            <div className="w-[72px] h-[72px] rounded-full overflow-hidden shadow-border border-2 border-white">
              <Image
                src="/headshot.png"
                alt="Jon Meisburg"
                width={72}
                height={72}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] text-[#171717] mb-5">
            I build applied AI systems — tools, workflows, and agents that actually ship.
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-[#4d4d4d] mb-8 max-w-2xl">
            Senior AI Engineer at Chewy. Built production systems used by 2,000+ agents daily. Specialized in OpenAI Realtime API, RAG pipelines, and agent workflows.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm font-medium bg-[#171717] text-white px-5 py-3 rounded-md hover:bg-[#333] transition-colors"
            >
              See my work
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="mailto:jonmeisburg@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#171717] px-5 py-3 rounded-md shadow-border hover:shadow-border-hover transition-shadow bg-white"
            >
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
