import DashboardLayout from '@/components/DashboardLayout'
import AnalyticsLayout from '@/components/AnalyticsLayout'
import GenericSidebar, { MenuItem } from '@/components/GenericSidebar'
import CSATTrendChart from '@/components/CSATTrendChart'
import OverallCSATScoreCard from '@/components/OverallCSATScoreCard'

const menuItems: MenuItem[] = [
  { id: 'score-distribution', label: 'Score distribution', href: '/csat' },
  { id: 'trend-over-time', label: 'Trend over time', href: '/csat' },
  { id: 'csat-by-category', label: 'CSAT by category', href: '/csat-category' },
  { id: 'key-insights', label: 'Key insights', href: '/csat' },
]

export default function CSATPage() {
  return (
    <DashboardLayout>
      <AnalyticsLayout
        sidebar={<GenericSidebar menuItems={menuItems} variant="gradient" />}
      >
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* CSAT Trend Chart - Takes 2 columns */}
            <div className="lg:col-span-2">
              <CSATTrendChart />
            </div>

            {/* Overall Score Card - Takes 1 column */}
            <div className="lg:col-span-1">
              <OverallCSATScoreCard score={2.5} maxScore={5.0} percentage={55} />
            </div>
          </div>
        </div>
      </AnalyticsLayout>
    </DashboardLayout>
  )
}
