'use client'

const trendData = [
  { week: 'Week 1', positive: 65, negative: 35 },
  { week: 'Week 2', positive: 72, negative: 28 },
  { week: 'Week 3', positive: 58, negative: 42 },
  { week: 'Week 4', positive: 68, negative: 32 },
];

export default function TrendChart() {
  const maxValue = 100;
  
  return (
    <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 h-full">
      <h3 className="text-white text-lg font-semibold mb-8">Trend over time</h3>
      
      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-white/60 text-xs">
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full relative">
          {/* Grid lines */}
          {[0, 20, 40, 60, 80, 100].map((value) => (
            <div
              key={value}
              className="absolute left-0 right-0 border-t border-white/10"
              style={{ bottom: `${(value / maxValue) * 100}%` }}
            />
          ))}

          {/* Line chart */}
          <svg className="absolute inset-0 w-full h-full" style={{ height: 'calc(100% - 2rem)' }}>
            {/* Positive trend line */}
            <polyline
              points={trendData.map((d, i) => {
                const x = (i / (trendData.length - 1)) * 100;
                const y = 100 - (d.positive / maxValue) * 100;
                return `${x}%,${y}%`;
              }).join(' ')}
              fill="none"
              stroke="rgba(96, 165, 250, 0.8)"
              strokeWidth="2"
              className="drop-shadow-lg"
            />
            
            {/* Negative trend line */}
            <polyline
              points={trendData.map((d, i) => {
                const x = (i / (trendData.length - 1)) * 100;
                const y = 100 - (d.negative / maxValue) * 100;
                return `${x}%,${y}%`;
              }).join(' ')}
              fill="none"
              stroke="rgba(148, 163, 184, 0.6)"
              strokeWidth="2"
              className="drop-shadow-lg"
            />

            {/* Data points */}
            {trendData.map((d, i) => {
              const x = (i / (trendData.length - 1)) * 100;
              const yPos = 100 - (d.positive / maxValue) * 100;
              const yNeg = 100 - (d.negative / maxValue) * 100;
              return (
                <g key={i}>
                  <circle cx={`${x}%`} cy={`${yPos}%`} r="4" fill="rgb(96, 165, 250)" />
                  <circle cx={`${x}%`} cy={`${yNeg}%`} r="4" fill="rgb(148, 163, 184)" />
                </g>
              );
            })}
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-white/70 text-xs pt-4">
            {trendData.map((d, i) => (
              <span key={i}>{d.week}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
