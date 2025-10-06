'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface MenuItem {
  id: string
  label: string
  href?: string
}

interface GenericSidebarProps {
  menuItems: MenuItem[]
  variant?: 'gradient' | 'glass'
  showExpandLabel?: boolean
}

export default function GenericSidebar({
  menuItems,
  variant = 'glass',
  showExpandLabel = true,
}: GenericSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const pathname = usePathname()

  const isActive = (item: MenuItem) => {
    if (item.href) {
      return pathname === item.href
    }
    return false
  }

  const baseClass = variant === 'gradient'
    ? 'bg-gradient-to-br from-blue-500 to-blue-600'
    : 'bg-white/5 backdrop-blur-sm'

  return (
    <div
      className={`${baseClass} text-white transition-all duration-300 rounded-2xl p-6 ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-end mb-6 p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isExpanded ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>

        {/* Menu Items */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const active = isActive(item)
            const content = (
              <>
                {isExpanded ? (
                  <span className="text-sm">{item.label}</span>
                ) : (
                  <div className="w-2 h-2 rounded-full bg-current mx-auto" />
                )}
              </>
            )

            const className = `w-full text-left px-4 py-3 rounded-lg transition-colors ${
              active
                ? 'bg-white/20 font-medium'
                : 'hover:bg-white/10'
            }`

            if (item.href) {
              return (
                <Link key={item.id} href={item.href} className={className}>
                  {content}
                </Link>
              )
            }

            return (
              <button key={item.id} className={className}>
                {content}
              </button>
            )
          })}
        </nav>

        {/* Expand Label */}
        {showExpandLabel && !isExpanded && (
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
