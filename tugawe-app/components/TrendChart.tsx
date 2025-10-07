'use client'

const trendData = [
  { week: 'Week 1', positive: 65, negative: 35 },
  { week: 'Week 2', positive: 72, negative: 28 },
  { week: 'Week 3', positive: 58, negative: 42 },
  { week: 'Week 4', positive: 68, negative: 32 },
]

export default function TrendChart() {
  const maxValue = 100
  
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 h-full border border-white/10 flex flex-col">
      <h3 className="text-white text-xl font-semibold mb-4">Trend over time</h3>
      
      {/* Chart Area */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 flex items-stretch gap-2">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between text-white/60 text-xs py-2">
            <span>100</span>
            <span>80</span>
            <span>60</span>
            <span>40</span>
            <span>20</span>
            <span>0</span>
          </div>

          {/* Chart */}
          <div className="flex-1 flex flex-col">
            <svg 
              viewBox="0 0 360 180" 
              className="w-full flex-1"
              preserveAspectRatio="none"
            >
              {/* Grid lines */}
              {[0, 20, 40, 60, 80, 100].map((value) => (
                <line
                  key={value}
                  x1="0"
                  y1={180 - (value / 100) * 180}
                  x2="360"
                  y2={180 - (value / 100) * 180}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              ))}

              {/* Positive trend line */}
              <polyline
                points={trendData.map((d, i) => {
                  const x = (i / (trendData.length - 1)) * 360
                  const y = 180 - (d.positive / maxValue) * 180
                  return `${x},${y}`
                }).join(' ')}
                fill="none"
                stroke="rgba(255, 255, 255, 0.9)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Negative trend line */}
              <polyline
                points={trendData.map((d, i) => {
                  const x = (i / (trendData.length - 1)) * 360
                  const y = 180 - (d.negative / maxValue) * 180
                  return `${x},${y}`
                }).join(' ')}
                fill="none"
                stroke="rgba(148, 163, 184, 0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              {trendData.map((d, i) => {
                const x = (i / (trendData.length - 1)) * 360
                const yPos = 180 - (d.positive / maxValue) * 180
                const yNeg = 180 - (d.negative / maxValue) * 180
                return (
                  <g key={i}>
                    <circle cx={x} cy={yPos} r="3" fill="rgba(255, 255, 255, 0.9)" />
                    <circle cx={x} cy={yNeg} r="3" fill="rgba(148, 163, 184, 0.8)" />
                  </g>
                )
              })}
            </svg>

            {/* X-axis labels */}
            <div className="flex justify-between text-white/70 text-xs mt-2">
              {trendData.map((d, i) => (
                <span key={i} className="font-medium">{d.week}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
