// File purpose: simple 404 page for unknown routes.
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="rounded-3xl border border-[#e3d2b3] bg-[#fff9ef] p-10 text-center">
      <h2 className="text-2xl font-bold text-[#14333a]">Page not found</h2>
      <p className="mt-3 text-sm text-[#395b5f]">
        This route is not defined in App.jsx yet.
      </p>
      {/* Link goes back home without a full reload. */}
      <Link
        to="/"
        className="mt-6 inline-flex rounded-full bg-[#14333a] px-5 py-2 text-sm font-semibold text-[#f7e7c9]"
      >
        Go home
      </Link>
    </div>
  )
}
