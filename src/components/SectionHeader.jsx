// File purpose: reusable section header used on every page.
// eyebrow/title/subtitle are props that control the text.
export default function SectionHeader({ eyebrow = 'Demo', title, subtitle }) {
  // Default eyebrow text is used if no prop is passed.
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7a5230]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold text-[#14333a]">{title}</h2>
      {/* Only render subtitle if it exists to keep layout clean. */}
      {subtitle ? (
        <p className="max-w-2xl text-sm text-[#395b5f]">{subtitle}</p>
      ) : null}
    </div>
  )
}
