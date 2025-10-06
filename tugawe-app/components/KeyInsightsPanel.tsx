'use client'

interface KeyInsightsData {
  strengths?: string
  improvements?: string
  statistics?: string
}

interface KeyInsightsPanelProps {
  data?: KeyInsightsData
}

export default function KeyInsightsPanel({ data }: KeyInsightsPanelProps) {
  // Default dummy data
  const defaultInsights: KeyInsightsData = {
    strengths: "Service & value leads with 3.0/5.0",
    improvements: "Ambience lags with 1.0/5.0",
    statistics: "48/198 customer rate us as a 5.0 star eatery"
  }

  // Use provided data or fall back to defaults
  const insights = data || defaultInsights

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-full border border-white/10 flex flex-col min-h-0">
      <h3 className="text-white text-2xl font-semibold mb-8">Key insights</h3>
      
      <div className="space-y-8 flex-1 overflow-y-auto hide-scrollbar">
        {/* Strengths Section */}
        {insights.strengths && (
          <div className="space-y-3">
            <h4 className="text-white/90 text-lg font-semibold">Strengths</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              {insights.strengths}
            </p>
          </div>
        )}

        {/* Areas of Improvement Section */}
        {insights.improvements && (
          <div className="space-y-3">
            <h4 className="text-white/90 text-lg font-semibold">Areas of Improvement</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              {insights.improvements}
            </p>
          </div>
        )}

        {/* Statistics Section */}
        {insights.statistics && (
          <div className="space-y-3">
            <h4 className="text-white/90 text-lg font-semibold">Statistics</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              {insights.statistics}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
