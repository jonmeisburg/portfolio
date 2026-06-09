export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#171717]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="badge bg-white/10 text-white/80 mb-4">Contact</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-white mb-4">
            Let&apos;s build something
          </h2>
          <p className="text-lg text-[#808080] leading-relaxed mb-10">
            If you&apos;ve got an interesting problem to solve, a role you think
            I&apos;d be a fit for, or just want to connect, send me a note. I
            enjoy talking with people who are building things.
          </p>

          {/* Contact methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <a
              href="mailto:jonmeisburg@gmail.com"
              className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-white/50 mb-0.5">Email</div>
                <div className="text-sm text-white font-medium group-hover:text-[#7170ff] transition-colors">jonmeisburg@gmail.com</div>
              </div>
            </a>
            <a
              href="tel:+12065026222"
              className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-white/50 mb-0.5">Phone</div>
                <div className="text-sm text-white font-medium group-hover:text-[#7170ff] transition-colors">206-502-6222</div>
              </div>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="mt-6 text-sm text-[#808080] flex items-center justify-center gap-2">
            <span>or find me on</span>
            <a
              href="https://linkedin.com/in/jonmeisburg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7170ff] hover:text-white transition-colors font-medium inline-flex items-center gap-1.5"
            >
              <svg
                width="14"
                height="14"
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
          </div>
        </div>
      </div>
    </section>
  );
}
