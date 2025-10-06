'use client'

import { ReactNode } from 'react'

interface AnalyticsLayoutProps {
  children: ReactNode
  sidebar: ReactNode
  className?: string
}

export default function AnalyticsLayout({
  children,
  sidebar,
  className = '',
}: AnalyticsLayoutProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-[auto_1fr] gap-6 h-[calc(100vh-180px)]">
          {/* Sidebar */}
          {sidebar}

          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
