'use client'

interface TrendLineData {
  label: string
  data: number[]
  color: string
}

interface TrendOverTimeChartProps {
  weeks?: string[]
  trendLines?: TrendLineData[]
}

export default function TrendOverTimeChart({ weeks: weeksProp, trendLines: trendLinesProp }: TrendOverTimeChartProps) {
  // Default dummy data
  const defaultWeeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
  const defaultTrendLines: TrendLineData[] = [
    { label: 'Line 1', data: [85, 75, 70, 65], color: 'rgba(147, 197, 253, 0.8)' },
    { label: 'Line 2', data: [65, 58, 55, 50], color: 'rgba(96, 165, 250, 0.8)' },
    { label: 'Line 3', data: [45, 38, 35, 30], color: 'rgba(59, 130, 246, 0.8)' },
  ]

  // Use provided data or fallback to dummy data
  const weeks = weeksProp && weeksProp.length > 0 ? weeksProp : defaultWeeks
  const trendLines = trendLinesProp && trendLinesProp.length > 0 ? trendLinesProp : defaultTrendLines
  
  // Calculate SVG path for a smooth line using Bézier curves
  const createSmoothPath = (data: number[]) => {
    const width = 360
    const height = 180
    const maxValue = 100
    const xStep = width / (data.length - 1)
    
    let path = ''
    
    for (let i = 0; i < data.length; i++) {
      const x = i * xStep
      const y = height - (data[i] / maxValue) * height
      
      if (i === 0) {
        path += `M ${x} ${y}`
      } else {
        // Create smooth curve using cubic Bézier curve
        const prevX = (i - 1) * xStep
        const prevY = height - (data[i - 1] / maxValue) * height
        
        // Control points for smooth curve
        const cp1x = prevX + (x - prevX) / 3
        const cp1y = prevY
        const cp2x = prevX + (2 * (x - prevX)) / 3
        const cp2y = y
        
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`
      }
    }
    
    return path
  }

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
            
            {/* Render dynamic trend lines */}
            {trendLines.map((line, lineIndex) => (
              <g key={`line-${lineIndex}`}>
                <path
                  d={createSmoothPath(line.data)}
                  fill="none"
                  stroke={line.color}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Data points for this line */}
                {line.data.map((value, index) => (
                  <circle
                    key={`p${lineIndex}-${index}`}
                    cx={index * (360 / (line.data.length - 1))}
                    cy={180 - (value / 100) * 180}
                    r="3"
                    fill={line.color.replace('0.8', '0.9')}
                  />
                ))}
              </g>
            ))}
          </svg>
          
            {/* X-axis labels */}
            <div className="flex justify-between text-white/70 text-xs mt-2">
              {weeks.map((week, index) => (
                <span key={index} className="font-medium">{week}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
