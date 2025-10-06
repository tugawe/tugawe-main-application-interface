'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const menuItems = [
  { id: 1, label: 'Score distribution', active: false },
  { id: 2, label: 'Trend over time', active: false },
  { id: 3, label: 'CSAT by category', active: true },
  { id: 4, label: 'Key insights', active: false },
]

export default function CSATAnalysisSidebar() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div
      className={`bg-white/5 backdrop-blur-sm transition-all duration-300 h-full rounded-2xl ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      <div className="p-4 h-full flex flex-col">
        {/* Toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-end text-white/60 hover:text-white transition-colors mb-8"
        >
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        {/* Menu items */}
        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                item.active
                  ? 'bg-white/10 text-white'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              {isExpanded ? (
                <span className="text-sm font-medium">{item.label}</span>
              ) : (
                <div className="w-2 h-2 rounded-full bg-current mx-auto" />
              )}
            </button>
          ))}
        </nav>

        {/* Expand text at bottom */}
        {!isExpanded && (
          <div className="mt-auto">
            <button
              onClick={() => setIsExpanded(true)}
              className="text-white/40 hover:text-white/60 text-xs transition-colors"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              expand
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
