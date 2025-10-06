'use client'

interface SentimentData {
  label: string
  value: number
  color: string
}

interface SentimentChartProps {
  data?: SentimentData[]
}

export default function SentimentChart({ data }: SentimentChartProps) {
  // Default dummy data
  const defaultSentimentData: SentimentData[] = [
    { label: 'Positive', value: 65, color: 'rgb(59, 130, 246)' }, // blue-500
    { label: 'Negative', value: 20, color: 'rgb(30, 41, 59)' }, // slate-800/dark
    { label: 'Neutral', value: 15, color: 'rgb(243, 244, 246)' }, // gray-100/light
  ]

  // Use provided data or fallback to dummy data
  const sentimentData = data && data.length > 0 ? data : defaultSentimentData
  const total = sentimentData.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90; // Start from top

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 h-full flex flex-col border border-white/10">
      <h3 className="text-white text-xl font-semibold mb-6">
        Sentiment<br />distribution
      </h3>
      
      <div className="flex-1 flex flex-col items-center justify-center min-h-0">
        {/* Donut Chart */}
        <div className="relative w-40 h-40 mb-6 flex-shrink-0">
          <svg viewBox="0 0 200 200" className="transform -rotate-90">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="40"
            />
            
            {sentimentData.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const angle = (percentage / 100) * 360;
              const radius = 80;
              const circumference = 2 * Math.PI * radius;
              const dashArray = (angle / 360) * circumference;
              const dashOffset = -currentAngle * (circumference / 360);
              
              const segment = (
                <circle
                  key={index}
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="none"
                  stroke={item.color}
                  strokeWidth="40"
                  strokeDasharray={`${dashArray} ${circumference}`}
                  strokeDashoffset={dashOffset}
                  className="transition-all duration-300 hover:opacity-80"
                />
              );
              
              currentAngle += angle;
              return segment;
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="space-y-2.5 w-full">
          {sentimentData.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-white text-sm font-medium flex-1">{item.label}</span>
              <span className="text-white/80 text-sm font-semibold">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
