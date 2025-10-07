'use client'

interface CategoryData {
  category: string
  score: number
  maxScore?: number
  color?: string
}

interface CSATByCategoryChartProps {
  data?: CategoryData[]
}

export default function CSATByCategoryChart({ data }: CSATByCategoryChartProps) {
  // Default dummy data matching the design
  const defaultCategories: CategoryData[] = [
    { category: 'Food', score: 2.5, maxScore: 5, color: 'rgba(147, 197, 253, 0.7)' },
    { category: 'Value', score: 3.5, maxScore: 5, color: 'rgba(147, 197, 253, 0.7)' },
    { category: 'Service', score: 3.0, maxScore: 5, color: 'rgba(147, 197, 253, 0.7)' },
    { category: 'Ambience', score: 1.0, maxScore: 5, color: 'rgba(147, 197, 253, 0.7)' },
  ]

  // Use provided data or fallback to dummy data
  const categories = data && data.length > 0 ? data : defaultCategories
  const maxScore = categories[0]?.maxScore || 5

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 h-full border border-white/10 flex flex-col">
      <h3 className="text-white text-xl font-semibold mb-4">CSAT by category</h3>
      
      {/* Chart Container */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 flex items-stretch gap-2">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between text-white/60 text-xs py-1">
            <span>5.0</span>
            <span>4.0</span>
            <span>3.0</span>
            <span>2.0</span>
            <span>1.0</span>
            <span>0</span>
          </div>
          
          {/* Chart area with grid and bars */}
          <div className="flex-1 relative">
            {/* Horizontal grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border-t border-white/10" />
              ))}
            </div>
            
            {/* Bar Chart */}
            <div className="absolute inset-0 flex items-end justify-around gap-3 px-4">
              {categories.map((item, index) => {
                const heightPercent = (item.score / maxScore) * 100
                
                return (
                  <div 
                    key={index}
                    className="flex flex-col items-center gap-2"
                    style={{ height: '100%' }}
                  >
                    {/* Spacer to push bar down */}
                    <div className="flex-1" />
                    
                    {/* Bar */}
                    <div
                      className="w-full rounded-t-lg transition-all duration-300 hover:opacity-80 relative"
                      style={{
                        height: `${heightPercent}%`,
                        backgroundColor: item.color || 'rgba(147, 197, 253, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        minHeight: '2px'
                      }}
                    >
                      {/* Value label on top of bar */}
                      <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-white/80 text-xs font-medium whitespace-nowrap">
                        {item.score.toFixed(1)}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
        {/* X-axis labels row aligned with 0 */}
        <div className="flex items-stretch gap-2 mt-2">
          {/* Spacer for Y-axis - matches Y-axis label width */}
          <div className="flex flex-col justify-between text-white/60 text-xs py-1 opacity-0">
            <span>5.0</span>
          </div>
          
          {/* X-axis labels */}
          <div className="flex-1 flex justify-around px-4">
            {categories.map((item, index) => (
              <div key={index} className="flex-1 flex justify-center">
                <span className="text-white/70 text-sm font-medium">{item.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
