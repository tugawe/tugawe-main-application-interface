'use client'

import { 
  Star, 
  PieChart, 
  Share2, 
  BarChart3, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Search,
  ChevronLeft,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

export default function AnalyticsNavigation() {
  const navigationItems = [
    { icon: Star, label: 'Frequency Ranking' },
    { icon: MessageSquare, label: 'Trending Words', active: true },
    { icon: TrendingUp, label: 'Trends' },
    { icon: BarChart3, label: 'Analysis' },
    { icon: PieChart, label: 'Charts' },
    { icon: Users, label: 'Users' },
    { icon: Share2, label: 'Share' },
    { icon: Search, label: 'Search' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Navigation Items */}
        <div className="flex items-center gap-6 overflow-x-auto">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  item.active
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
                {item.active && (
                  <span className="text-xs whitespace-nowrap hidden md:block">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
}
