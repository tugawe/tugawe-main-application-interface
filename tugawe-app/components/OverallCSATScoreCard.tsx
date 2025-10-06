'use client'

import { Star, Share2 } from 'lucide-react'

interface OverallCSATScoreCardProps {
  score?: number
  maxScore?: number
  percentage?: number
  rating?: string
}

export default function OverallCSATScoreCard({
  score = 2.5,
  maxScore = 5.0,
  percentage = 55,
  rating = 'Average'
}: OverallCSATScoreCardProps) {
  const filledStars = Math.floor(score)
  const hasHalfStar = score % 1 >= 0.5

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full flex flex-col">
      <h2 className="text-xl font-semibold text-white mb-8">Overall CSAT Score</h2>
      
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        {/* Rating label */}
        <div className="text-white/80 text-lg">{rating}</div>
        
        {/* Score */}
        <div className="text-5xl font-bold text-white">
          {score.toFixed(1)}/{maxScore.toFixed(1)} - {percentage}%
        </div>
        
        {/* Stars */}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <Star
              key={index}
              size={24}
              className={`${
                index <= filledStars
                  ? 'fill-white text-white'
                  : index === filledStars + 1 && hasHalfStar
                  ? 'fill-white/50 text-white'
                  : 'fill-transparent text-white/40'
              }`}
            />
          ))}
        </div>
        
        {/* Share button */}
        <button className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-sm font-medium transition-all flex items-center gap-2">
          <Share2 size={16} />
          Share
        </button>
      </div>
    </div>
  )
}
