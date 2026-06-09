export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] text-[#171717] mb-5">
            I build AI products that solve real business problems — end to end.
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-[#4d4d4d] mb-8 max-w-2xl">
Currently at Chewy, where I took a full AI simulation and coaching platform from concept to production — solo.

          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm font-medium bg-[#171717] text-white px-5 py-3 rounded-md hover:bg-[#333] transition-colors"
            >
              View case studies
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
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
  );
}
