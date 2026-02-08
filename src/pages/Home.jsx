// File purpose: landing page with a quick overview of the guide.
import FeatureCard from '../components/FeatureCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

// Quick stats for the summary cards (rendered from data).
const highlights = [
  { label: 'Routes', value: '6' },
  { label: 'Hooks', value: '4' },
  { label: 'Variants', value: '3' },
]

// Navigation cards built from data so we can update content in one place.
const features = [
  {
    title: 'React Router',
    description: 'Routes are declared in App.jsx and matched by URL.',
    tag: 'Router',
    tone: 'tide',
    icon: 'RT',
  },
  {
    title: 'Hooks',
    description: 'Each card on the Hooks page shows a hook in use.',
    tag: 'Hooks',
    tone: 'sand',
    icon: 'HK',
  },
  {
    title: 'Props',
    description: 'Cards are rendered from a data array using props.',
    tag: 'Props',
    tone: 'dusk',
    icon: 'PR',
  },
  {
    title: 'Tailwind',
    description: 'Swap class strings to change the look instantly.',
    tag: 'Style',
    tone: 'dusk',
    icon: 'TW',
  },
]

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7a5230]">
            OASIS
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#14333a]">
            React Guide
          </h2>
          <p className="text-base text-[#3a5a5a]">
            Small pages that show the UI and the reason behind it.
          </p>
        </div>
        <div className="rounded-3xl border border-[#e3d2b3] bg-[#fff9ef] p-6 shadow-sm">
          {/* SectionHeader is reusable; props set the text. */}
          <SectionHeader
            eyebrow="How It Works"
            title="This Page"
            subtitle="One layout, one data list."
          />
          <ul className="mt-4 space-y-2 text-sm text-[#3a5a5a]">
            <li>Feature cards come from the features array in this file.</li>
            <li>Each card uses the same FeatureCard component.</li>
            <li>Change the array and the UI updates.</li>
          </ul>
          {/* Render highlights from the array. */}
          {/* Key helps React track each item across renders. */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#f0d2a5] bg-white px-4 py-3 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5230]">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-[#14333a]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        {/* Reuse the same header component with different props. */}
        <SectionHeader
          eyebrow="Sections"
          title="Navigate"
          subtitle="Each page has a short explanation and a working example."
        />
        {/* Render feature cards from the array. */}
        {/* Same component, different props for each card. */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Spread each feature object into FeatureCard props. */}
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
    </div>
  )
}
