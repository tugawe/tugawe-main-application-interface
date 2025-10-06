'use client'

import { Star, Share2 } from 'lucide-react'

interface OverallCSATCardProps {
  rating?: number
  percentage?: number
  maxRating?: number
  onShare?: () => void
}

export default function OverallCSATCard({ 
  rating = 2.5, 
  percentage = 55, 
  maxRating = 5.0,
  onShare 
}: OverallCSATCardProps) {
  const handleShare = () => {
    if (onShare) {
      onShare()
    } else {
      // Default share behavior
      console.log('Sharing CSAT score...')
    }
  }

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full border border-white/10 flex flex-col min-h-0">
      <h3 className="text-white text-2xl font-semibold mb-8">
        Overall CSAT<br />Score
      </h3>
      
      <div className="flex-1 flex flex-col justify-center items-center space-y-8 min-h-0">
        {/* Average Label */}
        <div className="text-center">
          <p className="text-white/70 text-sm mb-2">Average</p>
          <p className="text-white text-4xl font-bold">
            {rating.toFixed(1)}/{maxRating.toFixed(1)} = {percentage}%
          </p>
        </div>

        {/* Star Rating */}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-8 h-8 ${
                star <= Math.round(rating)
                  ? 'fill-white text-white'
                  : 'text-white/30'
              }`}
            />
          ))}
        </div>

        {/* Share Button */}
        <button 
          onClick={handleShare}
          className="flex items-center gap-2 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-sm transition-colors border border-white/30"
        >
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>
    </div>
  )
}
