export default function TrustStrip() {
  return (
    <div className="py-6 border-t border-b border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#808080]">
            Previously at
          </span>
          <div className="h-4 w-px bg-[rgba(0,0,0,0.08)] hidden md:block" />
          <span className="text-sm font-medium text-[#171717]">
            Microsoft
          </span>
          <span className="text-sm font-medium text-[#171717]">
            Expedia
          </span>
        </div>
      </div>
    </div>
  );
}
