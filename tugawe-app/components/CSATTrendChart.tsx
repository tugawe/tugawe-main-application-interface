'use client'

const trendData = [
  { month: 'Jan', value: 2.3 },
  { month: 'Feb', value: 2.8 },
  { month: 'Mar', value: 3.5 },
  { month: 'Apr', value: 2.9 },
  { month: 'May', value: 3.8 },
  { month: 'Jun', value: 4.5 },
];

export default function CSATTrendChart() {
  const maxValue = 5.0;
  const minValue = 0;
  
  return (
    <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 h-full">
      <h3 className="text-white text-lg font-semibold mb-8">Trend over time</h3>
      
      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-white/60 text-xs">
          <span>5.0</span>
          <span>4.0</span>
          <span>3.0</span>
          <span>2.0</span>
          <span>1.0</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full relative">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <div
              key={value}
              className="absolute left-0 right-0 border-t border-white/10"
              style={{ bottom: `${((value - minValue) / (maxValue - minValue)) * 100}%` }}
            />
          ))}

          {/* Line chart */}
          <svg className="absolute inset-0 w-full h-full" style={{ height: 'calc(100% - 2rem)' }}>
            {/* Trend line with smooth curve */}
            <path
              d={trendData.map((d, i) => {
                const x = (i / (trendData.length - 1)) * 100;
                const y = 100 - ((d.value - minValue) / (maxValue - minValue)) * 100;
                return i === 0 ? `M ${x}%,${y}%` : `L ${x}%,${y}%`;
              }).join(' ')}
              fill="none"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="2"
              className="drop-shadow-lg"
            />

            {/* Data points */}
            {trendData.map((d, i) => {
              const x = (i / (trendData.length - 1)) * 100;
              const y = 100 - ((d.value - minValue) / (maxValue - minValue)) * 100;
              return (
                <circle
                  key={i}
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r="4"
                  fill="rgba(255, 255, 255, 0.9)"
                  className="drop-shadow-md"
                />
              );
            })}
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-white/70 text-xs pt-4">
            {trendData.map((d, i) => (
              <span key={i}>{d.month}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
