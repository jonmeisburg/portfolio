"use client";

import Link from "next/link";
import Image from "next/image";

export default function WorkSamples() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.04em] text-[#171717] mb-4">
            Case Studies
          </h2>
          <p className="text-base text-[#808080] leading-relaxed italic">
            Note: A significant portion of my work is confidential. Available to share
            upon request.
          </p>
        </div>

        {/* Featured project — full width */}
        <Link
          href="/work/customer-simulator"
          className="group block rounded-xl bg-white shadow-border-card hover:shadow-border-hover transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Thumbnail — full image, no clipping */}
            <div className="md:col-span-2 bg-white p-4 rounded-tl-xl md:rounded-bl-xl">
              <Image
                src="/customer-simulator.png"
                alt="Customer Simulator case study screenshot"
                width={900}
                height={456}
                className="object-contain w-full h-auto block"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#171717] mb-3 group-hover:text-[#5e6ad2] transition-colors">
                Building an AI Simulation Platform for Customer Care — From Zero
              </h3>
              <p className="text-sm md:text-base text-[#4d4d4d] leading-relaxed mb-4">
                Designed and built a full AI-powered simulation platform that lets customer care agents practice realistic conversations with AI customers, receive personalized coaching, and track their improvement over time — replacing inconsistent manual roleplay with a repeatable, measurable practice system. Built solo, from concept to production.

              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Learning Design", "AI Prototyping", "Coaching Systems"].map((tag) => (
                  <span key={tag} className="badge bg-[#fafafa] text-[#4d4d4d] shadow-border text-[11px]">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-[#5e6ad2] flex items-center gap-1.5 group-hover:gap-2 transition-all">
                  Read full case study
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span
                  className="text-xs font-medium text-[#808080] flex items-center gap-1.5 hover:text-[#171717] transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    window.open("https://github.com/jonmeisburg", "_blank", "noopener,noreferrer");
                  }}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.stopPropagation();
                      e.preventDefault();
                      window.open("https://github.com/jonmeisburg", "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M5 4h2a3 3 0 013 3v6M9 4l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  GitHub
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
