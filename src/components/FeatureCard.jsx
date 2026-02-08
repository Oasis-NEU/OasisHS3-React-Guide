// File purpose: reusable card component used across pages.
import Badge from './Badge.jsx'

// Map tone names to class sets so color is controlled by props.
const toneMap = {
  sand: 'border-[#f0d2a5] bg-[#fff7e8]',
  tide: 'border-[#a5d9cb] bg-[#ebf8f5]',
  dusk: 'border-[#b2c7dd] bg-[#edf3f9]',
}

// Props control content (title/description) and tone (colors).
export default function FeatureCard({
  title,
  description,
  tag = 'Demo',
  tone = 'sand',
  icon = 'RC',
}) {
  // Default props provide safe fallbacks.
  // Pick styles based on the tone prop, with a fallback.
  const classes = toneMap[tone] ?? toneMap.sand

  return (
    <article
      className={`flex h-full flex-col gap-4 rounded-2xl border p-6 shadow-sm ${classes}`}
    >
      {/* Component decides how props become UI. */}
      <div className="flex items-center justify-between">
        {/* Icon box uses the icon prop text. */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14333a] text-xs font-bold uppercase tracking-[0.2em] text-[#f7e7c9]">
          {icon}
        </div>
        {/* Badge uses the tag prop for text and tone for color. */}
        <Badge
          label={tag}
          tone={tone === 'sand' ? 'sand' : tone === 'tide' ? 'tide' : 'dusk'}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#14333a]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#395b5f]">
          {description}
        </p>
      </div>
    </article>
  )
}
