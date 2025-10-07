'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ScoreDistributionChart from '@/components/ScoreDistributionChart'
import MonthlyTrendChart from '@/components/MonthlyTrendChart'
import KeyInsightsPanel from '@/components/KeyInsightsPanel'
import OverallCSATCard from '@/components/OverallCSATCard'
import CSATByCategoryChart from '@/components/CSATByCategoryChart'
import OverallCSATScoreCard from '@/components/OverallCSATScoreCard'
import TrendChart from '@/components/TrendChart'
import SentimentChart from '@/components/SentimentChart'

const menuItems = [
  { id: 'score-distribution', label: 'Score distribution' },
  { id: 'trend-over-time', label: 'Trend over time' },
  { id: 'csat-by-category', label: 'CSAT by category' },
  { id: 'key-insights', label: 'Key insights' },
  { id: 'sentiment', label: 'Sentiment' },
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
        <div className="flex-1 overflow-hidden flex flex-col min-h-0">
          {/* Score Distribution View - Matching Mockup */}
          {activeView === 'score-distribution' && (
            <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl p-8 h-full flex flex-col min-h-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full min-h-0">
                {/* Score Distribution Chart - Left Side */}
                <div className="flex flex-col min-h-0">
                  <ScoreDistributionChart />
                </div>

                {/* Overall CSAT Card - Right Side */}
                <div className="flex flex-col min-h-0">
                  <OverallCSATCard />
                </div>
              </div>
            </div>
          )}

          {/* Trend Over Time View - Matching Mockup */}
          {activeView === 'trend-over-time' && (
            <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl p-8 h-full flex flex-col min-h-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full min-h-0">
                {/* Monthly Trend Chart - Left Side */}
                <div className="flex flex-col min-h-0">
                  <MonthlyTrendChart />
                </div>

                {/* Overall CSAT Card - Right Side */}
                <div className="flex flex-col min-h-0">
                  <OverallCSATCard />
                </div>
              </div>
            </div>
          )}

          {/* CSAT by Category View */}
          {activeView === 'csat-by-category' && (
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 h-full flex flex-col min-h-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full min-h-0">
                <div className="flex flex-col min-h-0">
                  <CSATByCategoryChart />
                </div>
                <div className="flex flex-col min-h-0">
                  <OverallCSATScoreCard score={2.5} maxScore={5.0} percentage={55} />
                </div>
              </div>
            </div>
          )}

          {/* Key Insights View */}
          {activeView === 'key-insights' && (
            <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl p-8 h-full flex flex-col min-h-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full min-h-0">
                {/* Key Insights Panel - Left Side */}
                <div className="flex flex-col min-h-0">
                  <KeyInsightsPanel />
                </div>

                {/* Overall CSAT Card - Right Side */}
                <div className="flex flex-col min-h-0">
                  <OverallCSATCard />
                </div>
              </div>
            </div>
          )}

          {/* Sentiment View */}
          {activeView === 'sentiment' && (
            <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl p-8 h-full flex flex-col min-h-0">
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 h-full min-h-0">
                {/* Trend Chart - Left Side (Wider) */}
                <div className="flex flex-col min-h-0">
                  <TrendChart />
                </div>

                {/* Sentiment Distribution Chart - Right Side */}
                <div className="flex flex-col min-h-0">
                  <SentimentChart />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
