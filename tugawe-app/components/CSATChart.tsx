'use client'

interface ChartData {
  category: string;
  value: number;
  color: string;
}

export default function CSATChart() {
  const data: ChartData[] = [
    { category: 'Food', value: 3.0, color: 'bg-blue-300' },
    { category: 'Value', value: 4.5, color: 'bg-blue-300' },
    { category: 'Service', value: 4.5, color: 'bg-blue-300' },
    { category: 'Ambience', value: 2.5, color: 'bg-blue-300' },
  ];

  const maxValue = 6.0;

  return (
    <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 h-full">
      <h3 className="text-white text-lg font-semibold mb-6">CSAT by category</h3>
      
      <div className="flex items-end justify-around h-64 gap-4">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between h-full text-white/60 text-xs mr-2">
          <span>6.0</span>
          <span>5.0</span>
          <span>4.0</span>
          <span>3.0</span>
          <span>2.0</span>
          <span>1.0</span>
          <span>0.0</span>
        </div>

        {/* Bars */}
        {data.map((item, index) => {
          const heightPercentage = (item.value / maxValue) * 100;
          
          return (
            <div key={index} className="flex flex-col items-center flex-1 max-w-[80px]">
              <div className="w-full h-64 flex items-end">
                <div
                  className={`w-full ${item.color} rounded-t-lg transition-all duration-500 hover:opacity-80`}
                  style={{ height: `${heightPercentage}%` }}
                />
              </div>
              <span className="text-white/80 text-xs mt-3">{item.category}</span>
            </div>
          );
        })}
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="absolute left-0 right-0 border-t border-white/10"
            style={{ top: `${(i / 6) * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}
