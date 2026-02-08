// File purpose: app layout and top-level routing.
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import RouterDemo from './pages/RouterDemo.jsx'
import RouterTopic from './pages/RouterTopic.jsx'
import PropsDemo from './pages/PropsDemo.jsx'
import HooksDemo from './pages/HooksDemo.jsx'
import TailwindDemo from './pages/TailwindDemo.jsx'
import NotFound from './pages/NotFound.jsx'

// Navigation items live in one list so the header can map over them.
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/router', label: 'Router' },
  { to: '/props', label: 'Props' },
  { to: '/hooks', label: 'Hooks' },
  { to: '/tailwind', label: 'Tailwind' },
]

// NavLink gives us isActive so the current page can be styled differently.
const navLinkClass = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition ${
    isActive
      ? 'bg-[#14333a] text-[#f7e7c9]'
      : 'text-[#14333a] hover:bg-[#e7f2ee]'
  }`

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7e7c9] via-[#f6f1e7] to-[#d7efe9] text-[#102a2d]">
      {/* Page shell: header, routed content, footer. */}
      <header className="border-b border-[#e4d2b3] bg-[#fdf7ec]/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7a5230]">
              OASIS
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-[#14333a]">
              React Guide
            </h1>
          </div>
          <nav className="flex flex-wrap gap-2">
            {/* NavLink props: "to" sets the path and className styles the link. */}
            {/* Map navItems to links; key keeps them stable. */}
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        {/* Route table: "path" is the URL, "element" is the component to render. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/router" element={<RouterDemo />} />
          {/* :topic is a URL param used inside RouterTopic. */}
          <Route path="/router/:topic" element={<RouterTopic />} />
          <Route path="/props" element={<PropsDemo />} />
          <Route path="/hooks" element={<HooksDemo />} />
          <Route path="/tailwind" element={<TailwindDemo />} />
          {/* Catch-all route for unknown paths. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="border-t border-[#d3e6de] bg-[#f6fbf9]">
        <div className="mx-auto w-full max-w-6xl px-6 py-6 text-sm text-[#3a5a5a]">
          OASIS React Guide
        </div>
      </footer>
    </div>
  )
}

export default App
