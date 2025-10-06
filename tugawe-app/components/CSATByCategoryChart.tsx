'use client'

interface CategoryData {
  category: string
  score: number
  maxScore: number
}

const categories: CategoryData[] = [
  { category: 'Food', score: 2.5, maxScore: 5 },
  { category: 'Value', score: 4.0, maxScore: 5 },
  { category: 'Service', score: 4.0, maxScore: 5 },
  { category: 'Ambience', score: 1.5, maxScore: 5 },
]

export default function CSATByCategoryChart() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full">
      <h2 className="text-xl font-semibold text-white mb-8">CSAT by category</h2>
      
      <div className="h-[300px] flex items-end justify-around gap-6">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between h-full text-xs text-white/60 pr-2">
          <span>5.0</span>
          <span>4.0</span>
          <span>3.0</span>
          <span>2.0</span>
          <span>1.0</span>
          <span>0</span>
        </div>

        {/* Bars */}
        <div className="flex-1 h-full flex items-end justify-around gap-4">
          {categories.map((item) => {
            const heightPercent = (item.score / item.maxScore) * 100
            
            return (
              <div key={item.category} className="flex flex-col items-center gap-3 flex-1">
                {/* Bar */}
                <div className="w-full h-full flex items-end justify-center">
                  <div
                    className="w-16 bg-white/30 backdrop-blur-sm rounded-t-lg transition-all hover:bg-white/40"
                    style={{ height: `${heightPercent}%` }}
                  />
                </div>
                
                {/* Label */}
                <span className="text-sm text-white/80">{item.category}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute left-0 right-0 border-t border-white/10"
            style={{ top: `${i * 20}%` }}
          />
        ))}
      </div>
    </div>
  )
}
