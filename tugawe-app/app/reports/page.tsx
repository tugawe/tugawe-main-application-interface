'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CSATTrendChart from '@/components/CSATTrendChart'
import CSATByCategoryChart from '@/components/CSATByCategoryChart'
import OverallCSATScoreCard from '@/components/OverallCSATScoreCard'

const menuItems = [
  { id: 'score-distribution', label: 'Score distribution' },
  { id: 'trend-over-time', label: 'Trend over time' },
  { id: 'csat-by-category', label: 'CSAT by category' },
  { id: 'key-insights', label: 'Key insights' },
]

export default function ReportsPage() {
  const [activeView, setActiveView] = useState('score-distribution')
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <DashboardLayout>
      <div className="flex gap-6 pb-24 h-[95vh] px-6 pt-6">
        {/* CSAT Sidebar */}
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
                  onClick={() => setActiveView(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeView === item.id
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

        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden">
          {/* Score Distribution & Trend Over Time View */}
          {(activeView === 'score-distribution' || activeView === 'trend-over-time') && (
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                {/* CSAT Trend Chart - Takes 2 columns */}
                <div className="lg:col-span-2">
                  <CSATTrendChart />
                </div>

                {/* Overall Score Card - Takes 1 column */}
                <div className="lg:col-span-1">
                  <OverallCSATScoreCard score={2.5} maxScore={5.0} percentage={55} />
                </div>
              </div>
            </div>
          )}

          {/* CSAT by Category View */}
          {activeView === 'csat-by-category' && (
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                {/* CSAT by Category Chart */}
                <div>
                  <CSATByCategoryChart />
                </div>

                {/* Overall CSAT Score Card */}
                <div>
                  <OverallCSATScoreCard score={2.5} maxScore={5.0} percentage={55} />
                </div>
              </div>
            </div>
          )}

          {/* Key Insights View */}
          {activeView === 'key-insights' && (
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                {/* CSAT Trend Chart */}
                <div className="lg:col-span-2">
                  <CSATTrendChart />
                </div>

                {/* Overall Score Card */}
                <div className="lg:col-span-1">
                  <OverallCSATScoreCard score={2.5} maxScore={5.0} percentage={55} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
