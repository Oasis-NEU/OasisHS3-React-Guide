// File purpose: show a route param and render matching content.
import { Link, useParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'

// Lookup table for slug -> content so the URL controls the text.
const topicInfo = {
  basics: {
    title: 'Route Basics',
    summary: 'App.jsx maps each path to a component.',
    tip: 'Add a new Route in App.jsx to create another page.',
  },
  params: {
    title: 'URL Params',
    summary: 'useParams() reads the :topic value from the URL.',
    tip: 'Try typing a new slug in the address bar.',
  },
  nested: {
    title: 'Nested Routes',
    summary: 'Nested routes render inside a layout route.',
    tip: 'Use <Outlet /> to show child routes in a layout.',
  },
}

export default function RouterTopic() {
  // Read the :topic value from the URL (this is the param).
  const { topic } = useParams()
  // Fallback if the slug is missing or unknown.
  const info = topicInfo[topic] ?? {
    title: 'Unknown Topic',
    summary: 'This slug is not in the topicInfo map yet.',
    tip: 'Add a new key in topicInfo to customize it.',
  }

  return (
    <div className="space-y-6">
      {/* Use data from topicInfo to fill the header. */}
      {/* SectionHeader props come from the topicInfo lookup. */}
      <SectionHeader
        eyebrow="Router"
        title={info.title}
        subtitle={info.summary}
      />
      <div className="rounded-2xl border border-[#d3e6de] bg-[#f6fbf9] p-5 text-sm text-[#395b5f]">
        Tip: {info.tip}
      </div>
      {/* Link navigates without a full reload. */}
      <Link
        to="/router"
        className="inline-flex items-center rounded-full border border-[#c7a77e] px-4 py-2 text-sm font-semibold text-[#7a5230]"
      >
        Back to topics
      </Link>
    </div>
  )
}
