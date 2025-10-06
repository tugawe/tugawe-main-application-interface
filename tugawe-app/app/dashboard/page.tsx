import DashboardLayout from '@/components/DashboardLayout';
import Sidebar from '@/components/Sidebar';
import CSATChart from '@/components/CSATChart';
import OverallScoreCard from '@/components/OverallScoreCard';
import BottomNavigation from '@/components/BottomNavigation';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Main Dashboard Content */}
      <div className="flex gap-6 pb-24">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* CSAT Chart - Takes 2 columns */}
            <div className="lg:col-span-2">
              <CSATChart />
            </div>

            {/* Overall Score Card - Takes 1 column */}
            <div className="lg:col-span-1">
              <OverallScoreCard score={2.5} maxScore={5.0} percentage={55} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </DashboardLayout>
  );
}
