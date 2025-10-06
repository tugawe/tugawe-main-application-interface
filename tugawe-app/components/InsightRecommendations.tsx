'use client'

import { Lightbulb, Target, Users, Star } from 'lucide-react'

interface Recommendation {
  icon: 'lightbulb' | 'target' | 'users' | 'star'
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
}

const recommendations: Recommendation[] = [
  {
    icon: 'star',
    title: 'Capitalize on Strengths',
    description: 'Leverage positive feedback about food quality and freshness in marketing campaigns',
    priority: 'high'
  },
  {
    icon: 'users',
    title: 'Improve Service Speed',
    description: 'Address "slow" mentions by optimizing kitchen workflow and staff training',
    priority: 'high'
  },
  {
    icon: 'target',
    title: 'Focus Areas',
    description: 'Monitor price sensitivity and consider promotional offers during slow periods',
    priority: 'medium'
  },
  {
    icon: 'lightbulb',
    title: 'Customer Engagement',
    description: 'Encourage reviews highlighting friendly service to boost positive sentiment',
    priority: 'low'
  }
]

const iconMap = {
  lightbulb: Lightbulb,
  target: Target,
  users: Users,
  star: Star
}

export default function InsightRecommendations() {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 min-h-full border border-white/10">
      <h3 className="text-white text-xl font-semibold mb-6">Recommendations</h3>
      
      <div className="space-y-4">
        {recommendations.map((rec, index) => {
          const Icon = iconMap[rec.icon]
          return (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    rec.priority === 'high' 
                      ? 'bg-orange-500/20' 
                      : rec.priority === 'medium'
                      ? 'bg-blue-500/20'
                      : 'bg-green-500/20'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      rec.priority === 'high' 
                        ? 'text-orange-300' 
                        : rec.priority === 'medium'
                        ? 'text-blue-300'
                        : 'text-green-300'
                    }`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold text-base">
                      {rec.title}
                    </h4>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      rec.priority === 'high' 
                        ? 'bg-orange-500/20 text-orange-300'
                        : rec.priority === 'medium'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-green-500/20 text-green-300'
                    }`}>
                      {rec.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm">
                    {rec.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
