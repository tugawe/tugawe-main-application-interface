'use client'

import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react'

interface InsightItem {
  type: 'positive' | 'negative' | 'neutral'
  title: string
  description: string
  impact: string
}

const insights: InsightItem[] = [
  {
    type: 'positive',
    title: 'Strong Positive Feedback',
    description: 'Words like "Delicious", "Fresh", and "Amazing" are trending upward by 15%. Customer satisfaction with food quality is at an all-time high.',
    impact: '+15% increase in positive mentions'
  },
  {
    type: 'positive',
    title: 'Service Quality Improving',
    description: 'Friendly service mentions increased by 8% this month. Staff interactions are being consistently praised in recent reviews.',
    impact: '38 mentions total'
  },
  {
    type: 'negative',
    title: 'Speed Concerns Improving',
    description: '"Slow" mentions decreased by 5%, showing significant improvement in service speed. Continue monitoring and maintain current pace.',
    impact: '23 mentions remaining'
  },
  {
    type: 'neutral',
    title: 'Cleanliness Maintained',
    description: 'Clean environment consistently mentioned with positive trend. Maintaining hygiene standards is contributing to customer satisfaction.',
    impact: '+4% steady growth'
  },
  {
    type: 'positive',
    title: 'Food Freshness Highlighted',
    description: '"Fresh" keyword jumped to #1 rank with 51 mentions, indicating strong ingredient quality perception among customers.',
    impact: '+12% month over month'
  },
  {
    type: 'neutral',
    title: 'Price Perception Stable',
    description: 'Value-related mentions remain stable. Customers find pricing reasonable for the quality provided.',
    impact: 'Neutral sentiment maintained'
  }
]

export default function AnalysisInsight() {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 min-h-full border border-white/10">
      <h3 className="text-white text-xl font-semibold mb-6">Analysis insight</h3>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div 
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                {insight.type === 'positive' ? (
                  <CheckCircle className="w-6 h-6 text-green-300" />
                ) : insight.type === 'negative' ? (
                  <AlertCircle className="w-6 h-6 text-red-300" />
                ) : (
                  <TrendingUp className="w-6 h-6 text-blue-300" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="text-white font-semibold text-base mb-2">
                  {insight.title}
                </h4>
                <p className="text-white/80 text-sm mb-3">
                  {insight.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    insight.type === 'positive' 
                      ? 'bg-green-500/20 text-green-300'
                      : insight.type === 'negative'
                      ? 'bg-red-500/20 text-red-300'
                      : 'bg-blue-500/20 text-blue-300'
                  }`}>
                    {insight.impact}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
