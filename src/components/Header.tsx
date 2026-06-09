"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded-full overflow-hidden shadow-border">
            <Image
              src="/headshot.png"
              alt="Jon Meisburg"
              width={28}
              height={28}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <span className="text-base font-semibold tracking-tight text-[#171717] group-hover:text-[#5e6ad2] transition-colors">
            Jon Meisburg
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717] transition-colors">
            Case Studies
          </a>
          <a href="#tutorials" className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717] transition-colors">
            Speaking &amp; Writing
          </a>
          <a href="#about" className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717] transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717] transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[rgba(0,0,0,0.06)] bg-white">
          <nav className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#work" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717]">Case Studies</a>
            <a href="#tutorials" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717]">Speaking &amp; Writing</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717]">About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#4d4d4d] hover:text-[#171717]">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
