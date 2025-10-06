'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, TrendingUp, TrendingDown } from 'lucide-react';

interface RankingItem {
  rank: number;
  word: string;
  mentions: number;
  trend: number;
}

const rankingData: RankingItem[] = [
  { rank: 1, word: 'Delicious', mentions: 45, trend: 12 },
  { rank: 2, word: 'Friendly', mentions: 38, trend: 8 },
  { rank: 3, word: 'Fresh', mentions: 31, trend: 15 },
  { rank: 4, word: 'Amazing', mentions: 29, trend: 7 },
  { rank: 5, word: 'Slow', mentions: 23, trend: -5 },
  { rank: 6, word: 'Clean', mentions: 22, trend: 4 },
];

export default function FrequencyRanking() {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 min-h-full border border-white/10">
      <h3 className="text-white text-lg font-semibold mb-6">Frequency ranking</h3>
      
      <div className="space-y-4">
        {rankingData.map((item) => (
          <div key={item.rank} className="flex items-center gap-4 text-white">
            {/* Rank */}
            <div className="w-8 text-sm opacity-60">
              #{item.rank}
            </div>
            
            {/* Word */}
            <div className="flex-1 text-base font-medium">
              {item.word}
            </div>
            
            {/* Mentions */}
            <div className="text-sm opacity-80">
              {item.mentions} mentions
            </div>
            
            {/* Trend with proper colors */}
            <div className="flex items-center gap-1 min-w-[60px]">
              {item.trend > 0 ? (
                <>
                  <TrendingUp className="w-4 h-4 text-green-300" />
                  <span className="text-sm text-green-300">{item.trend}%</span>
                </>
              ) : (
                <>
                  <TrendingDown className="w-4 h-4 text-red-300" />
                  <span className="text-sm text-red-300">{Math.abs(item.trend)}%</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
