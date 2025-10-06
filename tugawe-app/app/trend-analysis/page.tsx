import DashboardLayout from '@/components/DashboardLayout'
import AnalyticsSidebar from '@/components/AnalyticsSidebar'
import TrendAnalysisTable from '@/components/TrendAnalysisTable'
import WordCloudCard from '@/components/WordCloudCard'

export default function TrendAnalysisPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-[auto_1fr] gap-6 h-[calc(100vh-180px)]">
            {/* Sidebar */}
            <AnalyticsSidebar />

            {/* Main content */}
            <div className="grid grid-cols-2 gap-6">
              {/* Trend Analysis Table */}
              <TrendAnalysisTable />

              {/* Word Cloud */}
              <WordCloudCard />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
