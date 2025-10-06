'use client'

import Image from 'next/image'

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      {/* Left Column - Dining Table Centered at 80% Height */}
      <div className="flex items-center justify-center">
        <div className="relative overflow-hidden rounded-2xl shadow-lg w-full h-[80%]">
          <Image
            src="/dining-table.jpg"
            alt="Beautiful dining setup with ocean view"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right Column - Two Images Stacked */}
      <div className="grid grid-rows-2 gap-4">
        {/* User Image - Top */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="relative w-full h-full min-h-[200px]">
            <Image
              src="/user.jpg"
              alt="Person enjoying the experience"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bag Image - Bottom */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="relative w-full h-full min-h-[200px]">
            <Image
              src="/bag.jpg"
              alt="Stylish bag"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
