'use client';

import React from 'react';

const sentimentData = [
  { label: 'Positive', value: 65, color: 'rgb(59, 130, 246)' }, // blue-500
  { label: 'Negative', value: 20, color: 'rgb(30, 41, 59)' }, // slate-800
  { label: 'Neutral', value: 15, color: 'rgb(226, 232, 240)' }, // slate-200
];

export default function SentimentChart() {
  const total = sentimentData.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90; // Start from top

  return (
    <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col">
      <h3 className="text-white text-lg font-semibold mb-6">
        Sentiment<br />distribution
      </h3>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Donut Chart */}
        <div className="relative w-48 h-48 mb-8">
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
        <div className="space-y-3 w-full">
          {sentimentData.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-white text-sm flex-1">{item.label}</span>
              <span className="text-white/70 text-sm">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
