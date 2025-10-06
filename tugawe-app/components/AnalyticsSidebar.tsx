'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AnalyticsSidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

export default function AnalyticsSidebar({ 
  activeItem = 'Frequency ranking', 
  onItemClick 
}: AnalyticsSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    { id: 'frequency-ranking', label: 'Frequency ranking' },
    { id: 'trend-analysis', label: 'Trend analysis' },
    { id: 'analysis-insight', label: 'Analysis insight' },
  ];

  return (
    <div 
      className={`bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white transition-all duration-300 rounded-2xl p-6 ${
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

        {/* Expand Label at Bottom */}
        {isExpanded && (
          <div className="mt-auto pt-6 border-t border-white/20">
            <button 
              onClick={() => setIsExpanded(false)}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>expand</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
