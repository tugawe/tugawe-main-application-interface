import DashboardLayout from '@/components/DashboardLayout'
import AnalyticsLayout from '@/components/AnalyticsLayout'
import GenericSidebar, { MenuItem } from '@/components/GenericSidebar'
import TrendAnalysisTable from '@/components/TrendAnalysisTable'
import WordCloudCard from '@/components/WordCloudCard'

const menuItems: MenuItem[] = [
  { id: 'frequency-ranking', label: 'Frequency ranking', href: '/analytics' },
  { id: 'trend-analysis', label: 'Trend analysis', href: '/trend-analysis' },
  { id: 'analysis-insight', label: 'Analysis insight', href: '/trend-analysis' },
]

export default function TrendAnalysisPage() {
  return (
    <DashboardLayout>
      <AnalyticsLayout
        sidebar={<GenericSidebar menuItems={menuItems} variant="glass" />}
      >
        <div className="grid grid-cols-2 gap-6 h-full">
          {/* Trend Analysis Table */}
          <TrendAnalysisTable />

          {/* Word Cloud */}
          <WordCloudCard />
        </div>
      </AnalyticsLayout>
    </DashboardLayout>
  )
}
