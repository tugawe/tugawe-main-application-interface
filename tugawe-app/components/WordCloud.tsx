'use client';

import React from 'react';

const words = [
  { text: 'Fresh', size: 'text-2xl' },
  { text: 'Delicious', size: 'text-3xl' },
  { text: 'Friendly', size: 'text-xl' },
  { text: 'Crowded', size: 'text-lg' },
  { text: 'Slow', size: 'text-xl' },
  { text: 'Clean', size: 'text-2xl' },
  { text: 'Amazing', size: 'text-3xl' },
];

export default function WordCloud() {
  return (
    <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col">
      <h3 className="text-white text-lg font-semibold mb-6">Word cloud</h3>
      
      <div className="flex-1 flex flex-wrap items-center justify-center gap-4 content-center">
        {words.map((word, index) => (
          <span
            key={index}
            className={`${word.size} text-white/90 font-light hover:text-white hover:scale-110 transition-all cursor-pointer`}
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>
  );
}
