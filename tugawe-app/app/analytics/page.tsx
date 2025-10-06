import DashboardLayout from '@/components/DashboardLayout'
import AnalyticsLayout from '@/components/AnalyticsLayout'
import GenericSidebar, { MenuItem } from '@/components/GenericSidebar'
import FrequencyRanking from '@/components/FrequencyRanking'
import WordCloud from '@/components/WordCloud'

const menuItems: MenuItem[] = [
  { id: 'frequency-ranking', label: 'Frequency ranking', href: '/analytics' },
  { id: 'trend-analysis', label: 'Trend analysis', href: '/trend-analysis' },
  { id: 'analysis-insight', label: 'Analysis insight', href: '/analytics' },
]

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <AnalyticsLayout
        sidebar={<GenericSidebar menuItems={menuItems} variant="gradient" />}
      >
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Frequency Ranking - Takes 2 columns */}
            <div className="lg:col-span-2">
              <FrequencyRanking />
            </div>

            {/* Word Cloud - Takes 1 column */}
            <div className="lg:col-span-1">
              <WordCloud />
            </div>
          </div>
        </div>
      </AnalyticsLayout>
    </DashboardLayout>
  )
}
