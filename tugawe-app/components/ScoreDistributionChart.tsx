'use client'

interface ScoreData {
  label: string
  value: number
  color?: string
}

interface ScoreDistributionChartProps {
  data?: ScoreData[]
}

export default function ScoreDistributionChart({ data }: ScoreDistributionChartProps) {
  // Default dummy data for the bar chart (scores 1-5)
  const defaultScores: ScoreData[] = [
    { label: '1', value: 15, color: 'rgba(147, 197, 253, 0.7)' },
    { label: '2', value: 25, color: 'rgba(147, 197, 253, 0.7)' },
    { label: '3', value: 30, color: 'rgba(147, 197, 253, 0.7)' },
    { label: '4', value: 10, color: 'rgba(147, 197, 253, 0.7)' },
    { label: '5', value: 50, color: 'rgba(147, 197, 253, 0.7)' },
  ]

  // Use provided data or fallback to dummy data
  const scores = data && data.length > 0 ? data : defaultScores
  const maxValue = Math.max(...scores.map(s => s.value))

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 h-full border border-white/10 flex flex-col">
      <div className="mb-4">
        <h3 className="text-white text-xl font-semibold">Score distribution</h3>
        <p className="text-white/60 text-sm mt-1">customers % rating</p>
      </div>
      
      {/* Chart Container */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 flex items-stretch gap-2">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between text-white/60 text-xs py-2">
            <span>50</span>
            <span>40</span>
            <span>30</span>
            <span>20</span>
            <span>10</span>
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
            <div className="absolute inset-0 flex items-end justify-around gap-2 px-2 pb-8">
              {scores.map((score, index) => (
                <div 
                  key={index}
                  className="flex-1 flex flex-col items-center gap-2 h-full"
                >
                  {/* Bar container */}
                  <div className="flex-1 w-full flex items-end justify-center">
                    <div
                      className="w-full max-w-[60px] rounded-t-lg transition-all duration-300 hover:opacity-80 relative"
                      style={{
                        height: `${(score.value / maxValue) * 100}%`,
                        backgroundColor: score.color,
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        minHeight: '4px'
                      }}
                    >
                      {/* Value label on top of bar */}
                      <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-white/80 text-xs font-medium whitespace-nowrap">
                        {score.value}%
                      </span>
                    </div>
                  </div>
                  
                  {/* X-axis label */}
                  <span className="text-white/70 text-sm font-medium">{score.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
