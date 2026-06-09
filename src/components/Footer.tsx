export default function Footer() {
  return (
    <footer className="py-8 bg-[#171717] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
            <span className="text-white text-[10px] font-semibold">JM</span>
          </div>
          <span className="text-xs text-white/40">
            © {new Date().getFullYear()} Jon Meisburg
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/jonmeisburg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 hover:text-white/80 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jonmeisburg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/40 hover:text-white/80 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:jonmeisburg@gmail.com"
            className="text-xs text-white/40 hover:text-white/80 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
