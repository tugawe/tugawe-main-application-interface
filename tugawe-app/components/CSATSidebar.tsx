'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CSATSidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

export default function CSATSidebar({ 
  activeItem = 'Trend over time', 
  onItemClick 
}: CSATSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    { id: 'score-distribution', label: 'Score distribution' },
    { id: 'trend-over-time', label: 'Trend over time' },
    { id: 'csat-by-category', label: 'CSAT by category' },
    { id: 'key-insights', label: 'Key insights' },
  ];

  return (
    <div 
      className={`bg-gradient-to-br from-blue-500 to-blue-600 text-white transition-all duration-300 rounded-2xl p-6 ${
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
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick?.(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeItem === item.label
                  ? 'bg-white/20 font-medium'
                  : 'hover:bg-white/10'
              }`}
            >
              {isExpanded ? (
                <span className="text-sm">{item.label}</span>
              ) : (
                <span className="text-xs">
                  {item.label.split(' ').map(word => word[0]).join('')}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Expand Label */}
        {isExpanded && (
          <div className="mt-auto pt-4 border-t border-white/20">
            <button className="flex items-center gap-2 text-sm hover:text-white/80 transition-colors">
              <ChevronLeft className="w-4 h-4" />
              <span>expand</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
