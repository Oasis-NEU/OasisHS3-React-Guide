// File purpose: show how Tailwind can restyle the same JSX.
import SectionHeader from '../components/SectionHeader.jsx'

// Variant bundles keep class strings together so we can switch themes easily.
const variants = {
  a: {
    // Hero container styles for the main banner.
    // Utilities: relative positions children; overflow-hidden clips overflow;
    // rounded-3xl rounds corners; border adds outline; bg sets background;
    // p-8 adds padding; shadow-sm adds light shadow.
    heroClass:
      'relative overflow-hidden rounded-3xl border border-[#f0d2a5] bg-[#fff5e4] p-8 shadow-sm',
    // Headline styles for the banner title.
    // Utilities: text-3xl sets size; font-bold sets weight;
    // tracking-tight tightens spacing; text sets color.
    headlineClass: 'text-3xl font-bold tracking-tight text-[#14333a]',
    // Eyebrow label styles (small label above the title).
    // Utilities: text-xs size; font-semibold weight; uppercase transforms text;
    // tracking adds spacing; text sets color.
    eyebrowClass:
      'text-xs font-semibold uppercase tracking-[0.3em] text-[#7a5230]',
    // Body text styles for the short paragraph.
    // Utilities: max-w-lg limits line length; text-sm sets size; text sets color.
    bodyClass: 'max-w-lg text-sm text-[#395b5f]',
    // Button styles for the call-to-action.
    // Utilities: rounded-full pill shape; bg sets background;
    // px/py set padding; text-sm size; font-semibold weight;
    // text sets color; shadow-sm adds light shadow.
    buttonClass:
      'rounded-full bg-[#14333a] px-5 py-2 text-sm font-semibold text-[#f7e7c9] shadow-sm',
    // Card styles for the three variant tiles.
    // Utilities: rounded-2xl corners; border adds outline; bg sets background;
    // p-4 adds padding; text-sm sets size; text sets color.
    cardClass:
      'rounded-2xl border border-[#f0d2a5] bg-white p-4 text-sm text-[#395b5f]',
  },
  // Same layout, darker palette for contrast.
  b: {
    heroClass:
      'relative overflow-hidden rounded-3xl border border-[#14333a] bg-[#14333a] p-8 text-[#f7e7c9] shadow-sm',
    headlineClass: 'text-3xl font-bold tracking-tight text-[#f7e7c9]',
    eyebrowClass:
      'text-xs font-semibold uppercase tracking-[0.3em] text-[#f7e7c9]',
    bodyClass: 'max-w-lg text-sm text-[#e6f6f1]',
    buttonClass:
      'rounded-full bg-[#f7e7c9] px-5 py-2 text-sm font-semibold text-[#14333a] shadow-sm',
    cardClass:
      'rounded-2xl border border-[#14333a] bg-[#0f2c32] p-4 text-sm text-[#e6f6f1]',
  },
  // Same layout with a gradient background palette.
  c: {
    heroClass:
      'relative overflow-hidden rounded-3xl border border-[#d3e6de] bg-gradient-to-br from-[#d7efe9] via-[#fff5e4] to-[#fbe0c2] p-8 shadow-sm',
    headlineClass: 'text-3xl font-bold tracking-tight text-[#14333a]',
    eyebrowClass:
      'text-xs font-semibold uppercase tracking-[0.3em] text-[#7a5230]',
    bodyClass: 'max-w-lg text-sm text-[#395b5f]',
    buttonClass:
      'rounded-full bg-[#14635b] px-5 py-2 text-sm font-semibold text-[#f7e7c9] shadow-sm',
    cardClass:
      'rounded-2xl border border-[#d3e6de] bg-[#f6fbf9] p-4 text-sm text-[#395b5f]',
  },
}

// Pick the active style set (live demo switch).
// const active = variants.a
// const active = variants.b
const active = variants.c

export default function TailwindDemo() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Tailwind"
        title="Style Variants"
        subtitle="Same JSX, different class strings."
      />

      <section className={active.heroClass}>
        {/* Flex layout: stack on small screens, row on medium screens. */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className={active.eyebrowClass}>Hero Variant</p>
            <h3 className={active.headlineClass}>OASIS Design Modes</h3>
            <p className={active.bodyClass}>
              Switch the class constants above. The markup stays the same.
            </p>
          </div>
          <button className={active.buttonClass}>Toggle style</button>
        </div>
      </section>

      {/* Grid becomes 3 columns on medium screens. */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className={active.cardClass}>
          <p className="text-xs uppercase tracking-[0.2em] text-[#7a5230]">
            Variant A
          </p>
          <p className="mt-2">Warm palette, soft borders.</p>
        </div>
        <div className={active.cardClass}>
          <p className="text-xs uppercase tracking-[0.2em] text-[#7a5230]">
            Variant B
          </p>
          <p className="mt-2">Dark palette, high contrast.</p>
        </div>
        <div className={active.cardClass}>
          <p className="text-xs uppercase tracking-[0.2em] text-[#7a5230]">
            Variant C
          </p>
          <p className="mt-2">Gradient background, airy cards.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-[#e3d2b3] bg-[#fff9ef] p-5 text-sm text-[#3a5a5a]">
        This page uses the same JSX for every variant. Only the class strings
        change.
      </div>
    </div>
  )
}
