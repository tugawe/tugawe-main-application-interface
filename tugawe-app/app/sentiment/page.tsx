import DashboardLayout from '@/components/DashboardLayout';
import SentimentSidebar from '@/components/SentimentSidebar';
import TrendChart from '@/components/TrendChart';
import SentimentChart from '@/components/SentimentChart';
import AnalyticsNavigation from '@/components/AnalyticsNavigation';

export default function SentimentAnalysisPage() {
  return (
    <DashboardLayout>
      {/* Main Sentiment Analysis Content */}
      <div className="flex gap-6 pb-24">
        {/* Sidebar */}
        <SentimentSidebar />

        {/* Main Content Area */}
        <div className="flex-1 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8">
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
      </div>

      {/* Bottom Navigation */}
      <AnalyticsNavigation />
    </DashboardLayout>
  );
}
