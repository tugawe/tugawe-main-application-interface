import DashboardLayout from '@/components/DashboardLayout';
import AnalyticsSidebar from '@/components/AnalyticsSidebar';
import FrequencyRanking from '@/components/FrequencyRanking';
import WordCloud from '@/components/WordCloud';
import AnalyticsNavigation from '@/components/AnalyticsNavigation';

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      {/* Main Analytics Content */}
      <div className="flex gap-6 pb-24">
        {/* Sidebar */}
        <AnalyticsSidebar />

        {/* Main Content Area */}
        <div className="flex-1 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8">
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
      </div>

      {/* Bottom Navigation */}
      <AnalyticsNavigation />
    </DashboardLayout>
  );
}
