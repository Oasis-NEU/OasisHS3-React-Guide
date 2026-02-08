// File purpose: show how props turn data into UI.
import Badge from '../components/Badge.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

// Full dataset for the main explanation.
// Each object becomes one card when we map over the array.
// This is plain data, not JSX.
const featuresA = [
  {
    title: 'Title comes from data',
    description: 'This heading is the title value in the array.',
    tag: 'Data',
    tone: 'sand',
    icon: 'DT',
  },
  {
    title: 'Props control styles',
    description: 'tone and tag decide the colors and badge.',
    tag: 'Style',
    tone: 'tide',
    icon: 'ST',
  },
  {
    title: 'Map renders the list',
    description: 'features.map() returns one card per object.',
    tag: 'Map',
    tone: 'dusk',
    icon: 'MP',
  },
]

// Shorter dataset for a quick pass.
// Switching data changes the UI without changing JSX.
const featuresB = [
  {
    title: 'Alternate dataset',
    description: 'Same component, different objects, new UI.',
    tag: 'Swap',
    tone: 'tide',
    icon: 'SW',
  },
  {
    title: 'Shorter list',
    description: 'Fewer objects mean fewer cards on screen.',
    tag: 'Trim',
    tone: 'sand',
    icon: 'TR',
  },
]

// Switch the dataset used below to demo different outputs.
// const features = featuresA
const features = featuresA

export default function PropsDemo() {
  return (
    <div className="space-y-8">
      {/* SectionHeader props set the heading text. */}
      <SectionHeader
        eyebrow="Props"
        title="Same Component, New Data"
        subtitle="This grid is built from an array." 
      />

      <div className="rounded-2xl border border-[#e3d2b3] bg-[#fff9ef] p-5">
        <p className="text-sm text-[#3a5a5a]">
          We map over the features array and pass each object into a card.
          Look for{' '}
          <code className="rounded bg-white px-2 py-1">
            {'features.map(...)'}
          </code>{' '}
          and{' '}
          <code className="rounded bg-white px-2 py-1">
            {'<FeatureCard {...feature} />'}
          </code>{' '}
          below.
        </p>
        {/* Badges show which props affect style. */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge label="tone" tone="sand" />
          <Badge label="tag" tone="tide" />
          <Badge label="icon" tone="dusk" />
        </div>
      </div>

      {/* One card per object. */}
      {/* Spread each object into props on the card. */}
      {/* Use a stable key so React can track each card. */}
      {/* Each object becomes props inside FeatureCard. */}
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  )
}
