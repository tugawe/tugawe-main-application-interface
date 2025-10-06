'use client'

import { ReactNode } from 'react'

interface ChartCardProps {
  title: string
  children: ReactNode
  className?: string
}

export default function ChartCard({ title, children, className = '' }: ChartCardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full ${className}`}>
      <h2 className="text-xl font-semibold text-white mb-6">{title}</h2>
      <div className="h-[calc(100%-3rem)]">
        {children}
      </div>
    </div>
  )
}
