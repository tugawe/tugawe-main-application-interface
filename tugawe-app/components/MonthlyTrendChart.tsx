'use client'

interface MonthlyTrendData {
  month: string
  value: number
}

interface MonthlyTrendChartProps {
  data?: MonthlyTrendData[]
  maxValue?: number
}

export default function MonthlyTrendChart({ data, maxValue = 5.0 }: MonthlyTrendChartProps) {
  // Default dummy data
  const defaultData: MonthlyTrendData[] = [
    { month: 'Jan', value: 2.5 },
    { month: 'Feb', value: 2.8 },
    { month: 'Mar', value: 3.5 },
    { month: 'Apr', value: 3.8 },
    { month: 'May', value: 3.2 },
    { month: 'Jun', value: 2.9 },
  ]

  // Use provided data or fallback to dummy data
  const chartData = data && data.length > 0 ? data : defaultData
  const months = chartData.map(d => d.month)
  const dataPoints = chartData.map(d => d.value)
  
  // Generate smooth curve path using cubic Bezier curves for smoother transitions
  const createSmoothPath = (data: number[]) => {
    const width = 360
    const height = 180
    const xStep = width / (data.length - 1)
    
    let path = ''
    
    for (let i = 0; i < data.length; i++) {
      const x = i * xStep
      const y = height - ((data[i] / maxValue) * height)
      
      if (i === 0) {
        path += `M ${x} ${y}`
      } else {
        // Create smooth curve using cubic Bézier curve
        const prevX = (i - 1) * xStep
        const prevY = height - ((data[i - 1] / maxValue) * height)
        
        // Control points for smoother curve
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
            <span>5.0</span>
            <span>4.0</span>
            <span>3.0</span>
            <span>2.0</span>
            <span>1.0</span>
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
            {[0, 1, 2, 3, 4, 5].map((value) => (
              <line
                key={value}
                x1="0"
                y1={180 - (value / 5) * 180}
                x2="360"
                y2={180 - (value / 5) * 180}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            ))}
            
            {/* Smooth curve line */}
            <path
              d={createSmoothPath(dataPoints)}
              fill="none"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Data points */}
            {dataPoints.map((value, index) => {
              const x = index * (360 / (dataPoints.length - 1))
              const y = 180 - (value / 5.0) * 180
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="rgba(255, 255, 255, 0.9)"
                  stroke="rgba(147, 197, 253, 0.5)"
                  strokeWidth="2"
                />
              )
            })}
          </svg>
          
            {/* X-axis labels */}
            <div className="flex justify-between text-white/70 text-xs mt-2">
              {months.map((month, index) => (
                <span key={index} className="font-medium">{month}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
