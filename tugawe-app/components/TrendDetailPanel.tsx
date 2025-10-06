'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

interface TrendDetail {
  period: string
  value: number
  change: number
}

const trendDetails: TrendDetail[] = [
  { period: 'Week 1', value: 42, change: 5 },
  { period: 'Week 2', value: 48, change: 14 },
  { period: 'Week 3', value: 51, change: 6 },
  { period: 'Week 4', value: 45, change: -12 },
]

const topTrendingWords = [
  { word: 'Fresh', trend: '+25%', status: 'rising' },
  { word: 'Quality', trend: '+18%', status: 'rising' },
  { word: 'Service', trend: '+12%', status: 'rising' },
  { word: 'Expensive', trend: '-8%', status: 'falling' },
]

export default function TrendDetailPanel() {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 min-h-full border border-white/10">
      <h3 className="text-white text-xl font-semibold mb-6">Trend Details</h3>
      
      <div className="space-y-6">
        {/* Weekly Trend Chart */}
        <div className="space-y-3">
          <h4 className="text-white/80 text-sm font-medium">Weekly Performance</h4>
          {trendDetails.map((item, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">{item.period}</span>
                <div className="flex items-center gap-2">
                  {item.change > 0 ? (
                    <TrendingUp className="w-4 h-4 text-green-300" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-300" />
                  )}
                  <span className={`text-sm font-medium ${
                    item.change > 0 ? 'text-green-300' : 'text-red-300'
                  }`}>
                    {item.change > 0 ? '+' : ''}{item.change}%
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-blue-300 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(item.value / 60) * 100}%` }}
                  />
                </div>
                <span className="text-white/70 text-sm">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Top Trending */}
        <div className="space-y-3">
          <h4 className="text-white/80 text-sm font-medium">Top Trending</h4>
          <div className="space-y-2">
            {topTrendingWords.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between bg-white/10 rounded-lg p-3"
              >
                <span className="text-white font-medium">{item.word}</span>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                  item.status === 'rising' 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-red-500/20 text-red-300'
                }`}>
                  {item.trend}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
