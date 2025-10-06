'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, ArrowRight } from 'lucide-react'

interface Feature {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'Acquire and analyze your customers feedback',
    description: '',
  },
  {
    title: 'Access to a 24 hour WhatsApp customer support chatbot',
    description: '',
  },
  {
    title: 'Access to your own pre-order menu and reservation system',
    description: '',
  },
]

export default function OnboardingContent() {
  const [activeTab, setActiveTab] = useState('eatery')
  const router = useRouter()

  const handleNext = () => {
    // Navigate to business details form
    router.push('/business-details')
  }

  return (
    <div className="space-y-12">
      {/* Tab Navigation */}
      <div className="flex gap-3">
        <button
          onClick={() => setActiveTab('eatery')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === 'eatery'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          eatery
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === 'events'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Events
        </button>
        <button
          onClick={() => setActiveTab('products')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === 'products'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Products
        </button>
      </div>

      {/* Main Heading */}
      <div>
        <h1 className="text-5xl font-light text-blue-600 leading-tight">
          Shape better<br />experiences
        </h1>
      </div>

      {/* Features List */}
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <Check className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div>
              <p className="text-gray-700 text-base leading-relaxed">
                {feature.title}
              </p>
              {feature.description && (
                <p className="text-gray-500 text-sm mt-1">
                  {feature.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination & Navigation */}
      <div className="flex items-center justify-between pt-8">
        {/* Pagination Dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-900"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
          aria-label="Next"
        >
          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  )
}
