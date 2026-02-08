// File purpose: router overview with clickable topic links.
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'

// Topic data with URL slugs that will appear in the path.
const topics = [
  {
    slug: 'basics',
    label: 'Routes live in App.jsx',
    detail: 'Each Route maps a URL to a component.',
  },
  {
    slug: 'params',
    label: 'URL params',
    detail: 'This page reads :topic with useParams.',
  },
  {
    slug: 'nested',
    label: 'Nested routes',
    detail: 'Use Outlet when you add child routes.',
  },
]

// const topics = [
//   { slug: 'loader', label: 'Data loaders', detail: 'Show data loading flows.' },
//   { slug: 'error', label: 'Error routes', detail: 'Render error boundaries.' },
// ]

export default function RouterDemo() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Router"
        title="Router Basics"
        subtitle="Routes are defined in App.jsx. This list is just data."
      />

      {/* Link does client-side navigation. */}
      {/* This keeps the app running without a full reload. */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Map topic data into link cards. */}
        {/* Build each URL using the slug field. */}
        {/* Key uses the slug so React can track each card. */}
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            to={`/router/${topic.slug}`}
            className="rounded-2xl border border-[#d3e6de] bg-[#f6fbf9] p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#14635b]">
              {topic.label}
            </p>
            <p className="mt-2 text-sm text-[#395b5f]">{topic.detail}</p>
          </Link>
        ))}
      </div>

      <div className="rounded-2xl border border-[#e3d2b3] bg-[#fff9ef] p-5 text-sm text-[#3a5a5a]">
        Click a topic to go to /router/:topic. The next page uses useParams
        to read the topic value.
      </div>
    </div>
  )
}
