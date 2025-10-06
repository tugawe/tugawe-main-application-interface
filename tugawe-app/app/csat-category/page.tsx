import DashboardLayout from '@/components/DashboardLayout'
import CSATAnalysisSidebar from '@/components/CSATAnalysisSidebar'
import CSATByCategoryChart from '@/components/CSATByCategoryChart'
import OverallCSATScoreCard from '@/components/OverallCSATScoreCard'

export default function CSATCategoryPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-[auto_2fr_1fr] gap-6 h-[calc(100vh-180px)]">
            {/* Sidebar */}
            <CSATAnalysisSidebar />

            {/* CSAT by Category Chart */}
            <CSATByCategoryChart />

            {/* Overall CSAT Score Card */}
            <OverallCSATScoreCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
