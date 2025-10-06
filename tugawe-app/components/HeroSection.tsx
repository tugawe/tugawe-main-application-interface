'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="space-y-6">
      {/* Main Heading */}
      <div>
        <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight">
          Shape better<br />experiences
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-gray-600 text-base">
        Eateries, events & products
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 pt-2">
        <Link
          href="/signin"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors"
        >
          Get started
        </Link>
        <Link
          href="/onboarding"
          className="px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-300 transition-colors"
        >
          Learn more
        </Link>
      </div>
    </div>
  )
}
