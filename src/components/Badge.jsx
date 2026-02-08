// File purpose: small label component used in cards.
// Map tone names to styles so badges stay consistent.
const toneMap = {
  sand: 'bg-[#fff4de] text-[#7a5230] ring-[#f0c98a]',
  tide: 'bg-[#e6f6f1] text-[#14635b] ring-[#9ad8c6]',
  dusk: 'bg-[#e9eff6] text-[#2a3f55] ring-[#a7bfd8]',
}

export default function Badge({ label, tone = 'sand' }) {
  // Fallback to sand if tone is missing.
  const classes = toneMap[tone] ?? toneMap.sand
  // label prop is the text inside the badge.
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${classes}`}
    >
      {label}
    </span>
  )
}
