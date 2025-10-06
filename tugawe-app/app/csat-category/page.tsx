import DashboardLayout from '@/components/DashboardLayout'
import AnalyticsLayout from '@/components/AnalyticsLayout'
import GenericSidebar, { MenuItem } from '@/components/GenericSidebar'
import CSATByCategoryChart from '@/components/CSATByCategoryChart'
import OverallCSATScoreCard from '@/components/OverallCSATScoreCard'

const menuItems: MenuItem[] = [
  { id: 'score-distribution', label: 'Score distribution', href: '/csat' },
  { id: 'trend-over-time', label: 'Trend over time', href: '/csat' },
  { id: 'csat-by-category', label: 'CSAT by category', href: '/csat-category' },
  { id: 'key-insights', label: 'Key insights', href: '/csat-category' },
]

export default function CSATCategoryPage() {
  return (
    <DashboardLayout>
      <AnalyticsLayout
        sidebar={<GenericSidebar menuItems={menuItems} variant="glass" />}
      >
        <div className="grid grid-cols-2 gap-6 h-full">
          {/* CSAT by Category Chart */}
          <CSATByCategoryChart />

          {/* Overall CSAT Score Card */}
          <OverallCSATScoreCard />
        </div>
      </AnalyticsLayout>
    </DashboardLayout>
  )
}
