'use client';

import React from 'react';
import Image from 'next/image';

export default function ImageGrid() {
  return (
    <div className="grid grid-rows-2 gap-4 h-full">
      {/* Top Row - Single Large Image */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <div className="relative w-full h-full min-h-[300px]">
          {/* Dining Table Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-blue-400 to-blue-600">
            {/* Placeholder - Replace with actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <div className="text-6xl">🍽️</div>
                <p className="text-sm opacity-75">Dining Table Image</p>
              </div>
            </div>
          </div>
          {/* Uncomment when image is available */}
          {/* <Image
            src="/dining-table.jpg"
            alt="Beautiful dining setup with ocean view"
            fill
            className="object-cover"
          /> */}
        </div>
      </div>

      {/* Bottom Row - Two Images Side by Side */}
      <div className="grid grid-cols-2 gap-4">
        {/* Person Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="relative w-full h-full min-h-[200px]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-orange-400 to-amber-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-2">
                  <div className="text-5xl">👤</div>
                  <p className="text-xs opacity-75">Person Working</p>
                </div>
              </div>
            </div>
            {/* Uncomment when image is available */}
            {/* <Image
              src="/person-working.jpg"
              alt="Person working at cafe"
              fill
              className="object-cover"
            /> */}
          </div>
        </div>

        {/* Tote Bag Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="relative w-full h-full min-h-[200px]">
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-emerald-400 to-green-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-2">
                  <div className="text-5xl">👜</div>
                  <p className="text-xs opacity-75">Tote Bag</p>
                </div>
              </div>
            </div>
            {/* Uncomment when image is available */}
            {/* <Image
              src="/tote-bag.jpg"
              alt="Colorful tote bag"
              fill
              className="object-cover"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
