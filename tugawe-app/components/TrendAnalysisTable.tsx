'use client'

import { TrendingUp } from 'lucide-react'

interface TrendData {
  rank: number
  word: string
  mentions: number
  trend: number
}

const trendData: TrendData[] = [
  { rank: 1, word: 'Fresh', mentions: 51, trend: 12 },
  { rank: 2, word: 'Delicious', mentions: 45, trend: 8 },
  { rank: 3, word: 'Friendly', mentions: 38, trend: 15 },
  { rank: 4, word: 'Amazing', mentions: 29, trend: 7 },
  { rank: 5, word: 'Clean', mentions: 22, trend: 5 },
  { rank: 6, word: 'Expensive', mentions: 18, trend: -1 },
]

export default function TrendAnalysisTable() {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 min-h-full border border-white/10">
      <h2 className="text-xl font-semibold text-white mb-6">Trend analysis</h2>
      
      <div className="space-y-2">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 pb-3 border-b border-white/30 text-sm text-white/70 font-medium">
          <div>Word</div>
          <div>Mentions</div>
          <div>Period</div>
          <div className="text-right">Trend</div>
        </div>

        {/* Data rows */}
        {trendData.map((item) => (
          <div
            key={item.rank}
            className="grid grid-cols-4 gap-4 py-3 border-b border-white/10 items-center hover:bg-white/5 rounded-lg px-2 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-sm">#{item.rank}</span>
              <span className="text-white font-medium">{item.word}</span>
            </div>
            
            <div className="text-white/90 text-sm font-medium">
              {item.mentions}
            </div>
            
            <div className="text-white/80 text-sm">
              Last 30 days
            </div>
            
            <div className="flex items-center gap-1 justify-end">
              <TrendingUp 
                size={16} 
                className={item.trend >= 0 ? 'text-green-400' : 'text-red-400'}
                style={{ 
                  transform: item.trend < 0 ? 'rotate(180deg)' : 'none' 
                }}
              />
              <span 
                className={`text-sm font-medium ${
                  item.trend >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {item.trend >= 0 ? '+' : ''}{item.trend}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
