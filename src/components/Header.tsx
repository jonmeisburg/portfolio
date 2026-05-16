"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md bg-[#171717] flex items-center justify-center">
            <span className="text-white text-sm font-semibold">JM</span>
          </div>
          <span className="text-sm font-medium tracking-tight text-[#171717] group-hover:text-[#5e6ad2] transition-colors">
            Jon Meisburg
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717] transition-colors">
            Work
          </a>
          <a href="#tutorials" className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717] transition-colors">
            Tutorials
          </a>
          <a href="#about" className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717] transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717] transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium bg-[#171717] text-white px-4 py-2 rounded-md hover:bg-[#333] transition-colors"
          >
            Let&apos;s build something
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 bg-[#171717] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#171717] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[#171717] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[rgba(0,0,0,0.06)] bg-white">
          <nav className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#work" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717]">Work</a>
            <a href="#tutorials" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717]">Tutorials</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717]">About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717]">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}