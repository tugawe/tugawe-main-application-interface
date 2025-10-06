import DashboardLayout from '@/components/DashboardLayout'
import AnalyticsLayout from '@/components/AnalyticsLayout'
import GenericSidebar, { MenuItem } from '@/components/GenericSidebar'
import TrendChart from '@/components/TrendChart'
import SentimentChart from '@/components/SentimentChart'

const menuItems: MenuItem[] = [
  { id: 'trend-over-time', label: 'Trend over time', href: '/sentiment' },
  { id: 'sentiment-by-category', label: 'Sentiment by category', href: '/sentiment' },
  { id: 'reviews-by-sentiment', label: 'Reviews by sentiment', href: '/sentiment' },
  { id: 'sentiment-insights', label: 'Sentiment insights', href: '/sentiment' },
]

export default function SentimentAnalysisPage() {
  return (
    <DashboardLayout>
      <AnalyticsLayout
        sidebar={<GenericSidebar menuItems={menuItems} variant="gradient" />}
      >
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Trend Chart - Takes 2 columns */}
            <div className="lg:col-span-2">
              <TrendChart />
            </div>

            {/* Sentiment Distribution Chart - Takes 1 column */}
            <div className="lg:col-span-1">
              <SentimentChart />
            </div>
          </div>
        </div>
      </AnalyticsLayout>
    </DashboardLayout>
  )
}
