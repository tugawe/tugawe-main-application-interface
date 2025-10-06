'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout';
import AnalyticsSidebar from '@/components/AnalyticsSidebar';
import FrequencyRanking from '@/components/FrequencyRanking';
import WordCloud from '@/components/WordCloud';
import TrendAnalysisTable from '@/components/TrendAnalysisTable';
import AnalysisInsight from '@/components/AnalysisInsight';
import BottomNavigation from '@/components/BottomNavigation';

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('Frequency ranking')

  const handleSectionChange = (sectionId: string) => {
    // Map section IDs to labels
    const sectionMap: Record<string, string> = {
      'frequency-ranking': 'Frequency ranking',
      'trend-analysis': 'Trend analysis',
      'analysis-insight': 'Analysis insight'
    }
    setActiveSection(sectionMap[sectionId] || 'Frequency ranking')
  }

  return (
    <DashboardLayout>
      <div className="flex gap-6 pb-24 h-[95vh] px-6 pt-6">
        {/* Analytics Sidebar */}
        <AnalyticsSidebar 
          activeItem={activeSection}
          onItemClick={handleSectionChange}
        />

        {/* Main Content Area with Blue Gradient Background */}
        <div className="flex-1 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl p-8 overflow-hidden">
          {/* Frequency Ranking View */}
          {activeSection === 'Frequency ranking' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
              <div className="h-full overflow-y-auto hide-scrollbar">
                <FrequencyRanking />
              </div>
              <div className="h-full overflow-y-auto hide-scrollbar">
                <WordCloud />
              </div>
            </div>
          )}

          {/* Trend Analysis View */}
          {activeSection === 'Trend analysis' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
              <div className="h-full overflow-y-auto hide-scrollbar">
                <TrendAnalysisTable />
              </div>
              <div className="h-full overflow-y-auto hide-scrollbar">
                <WordCloud />
              </div>
            </div>
          )}

          {/* Analysis Insight View */}
          {activeSection === 'Analysis insight' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
              <div className="h-full overflow-y-auto hide-scrollbar">
                <AnalysisInsight />
              </div>
              <div className="h-full overflow-y-auto hide-scrollbar">
                <WordCloud />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </DashboardLayout>
  );
}
