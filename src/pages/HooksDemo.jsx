// File purpose: demonstrate the core React hooks with small examples.
import { useEffect, useMemo, useRef, useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'

// Option B: swap useState for useReducer to show another state pattern.
// function reducer(state, action) {
//   if (action.type === 'inc') return { ...state, visitors: state.visitors + 1 }
//   if (action.type === 'dec') return { ...state, visitors: state.visitors - 1 }
//   return state
// }

export default function HooksDemo() {
  // useState returns [value, setter].
  // State values drive the UI and trigger re-renders.
  const [visitors, setVisitors] = useState(12)
  const [mode, setMode] = useState('Focus')
  const [seconds, setSeconds] = useState(0)
  // Ref holds a DOM element so we can focus it directly.
  const noteRef = useRef(null)

  // Effect starts the timer once and cleans it up on unmount.
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => (prev + 1) % 60)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  // Memo derives a value from state to avoid recalculating every render.
  // The dependency array tells React when to recompute.
  const score = useMemo(() => {
    const bonus = mode === 'Focus' ? 15 : 8
    return visitors * 3 + bonus + Math.min(seconds, 20)
  }, [visitors, mode, seconds])

  // Imperative DOM action via ref (focus the input).
  const focusInput = () => {
    if (noteRef.current) noteRef.current.focus()
  }

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Hooks"
        title="Core Hooks"
        subtitle="Each card shows a hook and what it does."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-[#f0d2a5] bg-[#fff7e8] p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5230]">
            useState
          </p>
          <h3 className="mt-2 text-lg font-semibold text-[#14333a]">
            Visitor Count
          </h3>
          <p className="mt-2 text-sm text-[#395b5f]">
            Buttons call setVisitors and React re-renders the count.
          </p>
          {/* Buttons update state through the setter function. */}
          <div className="mt-4 flex items-center gap-3">
            <button
              className="rounded-full border border-[#c7a77e] px-3 py-1 text-sm font-semibold text-[#7a5230]"
              onClick={() => setVisitors((prev) => Math.max(0, prev - 1))}
            >
              -
            </button>
            <span className="text-2xl font-bold text-[#14333a]">
              {visitors}
            </span>
            <button
              className="rounded-full bg-[#14333a] px-3 py-1 text-sm font-semibold text-[#f7e7c9]"
              onClick={() => setVisitors((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          {/* Toggle between two mode strings. */}
          <div className="mt-4">
            <button
              className="rounded-full border border-[#d3e6de] px-3 py-1 text-xs font-semibold text-[#14635b]"
              onClick={() =>
                setMode((prev) => (prev === 'Focus' ? 'Explore' : 'Focus'))
              }
            >
              Mode: {mode}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-[#b2c7dd] bg-[#edf3f9] p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2a3f55]">
            useEffect + useMemo
          </p>
          <h3 className="mt-2 text-lg font-semibold text-[#14333a]">
            Activity Score
          </h3>
          <p className="mt-2 text-sm text-[#395b5f]">
            useEffect runs the timer. useMemo derives the score.
          </p>
          <div className="mt-4 grid gap-3">
            <div className="rounded-xl bg-white px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7a5230]">
                Seconds
              </p>
              <p className="text-xl font-bold text-[#14333a]">{seconds}</p>
            </div>
            <div className="rounded-xl bg-white px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7a5230]">
                Score
              </p>
              <p className="text-xl font-bold text-[#14333a]">{score}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#a5d9cb] bg-[#ebf8f5] p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#14635b]">
            useRef
          </p>
          <h3 className="mt-2 text-lg font-semibold text-[#14333a]">
            Focus Input
          </h3>
          <p className="mt-2 text-sm text-[#395b5f]">
            useRef stores the input element without re-rendering.
          </p>
          <div className="mt-4 space-y-3">
            {/* ref connects the input element to noteRef. */}
            <input
              ref={noteRef}
              className="w-full rounded-xl border border-[#bfe3d9] bg-white px-3 py-2 text-sm"
              placeholder="Type a quick note"
            />
            <button
              className="w-full rounded-full bg-[#14635b] px-4 py-2 text-sm font-semibold text-[#e6f6f1]"
              onClick={focusInput}
            >
              Focus input
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
