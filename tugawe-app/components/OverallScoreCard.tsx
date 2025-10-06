'use client';

import React from 'react';
import { Share2, Star } from 'lucide-react';

interface OverallScoreCardProps {
  score?: number;
  maxScore?: number;
  percentage?: number;
}

export default function OverallScoreCard({ 
  score = 2.5, 
  maxScore = 5.0, 
  percentage = 55 
}: OverallScoreCardProps) {
  const filledStars = Math.floor(score);
  const hasHalfStar = score % 1 >= 0.5;
  const totalStars = 5;

  return (
    <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-lg font-semibold">Overall CSAT Score</h3>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        {/* Score Text */}
        <div className="text-center">
          <div className="text-white text-sm mb-2">Average</div>
          <div className="text-white text-4xl font-bold">
            {score}/{maxScore} - {percentage}%
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex gap-2">
          {[...Array(totalStars)].map((_, index) => {
            const isFilled = index < filledStars;
            const isHalf = index === filledStars && hasHalfStar;

            return (
              <div key={index} className="relative">
                {isHalf ? (
                  <div className="relative">
                    <Star className="w-8 h-8 text-white/30" />
                    <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                      <Star className="w-8 h-8 text-yellow-300 fill-yellow-300" />
                    </div>
                  </div>
                ) : (
                  <Star
                    className={`w-8 h-8 ${
                      isFilled
                        ? 'text-yellow-300 fill-yellow-300'
                        : 'text-white/30'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Share Button */}
        <button className="mt-6 px-6 py-2 bg-white text-blue-600 rounded-full text-sm font-medium hover:bg-white/90 transition-colors flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>
    </div>
  );
}
