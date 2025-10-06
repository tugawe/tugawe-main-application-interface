'use client';

import React, { ReactNode, useState } from 'react';
import Image from 'next/image';

interface AuthLayoutProps {
  children: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export default function AuthLayout({ 
  children, 
  imageSrc = '/dining-table.jpg',
  imageAlt = 'Beautiful dining setup with ocean view'
}: AuthLayoutProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image/Background */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          {!imageError ? (
            // Try to load the actual image
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ) : (
            // Fallback gradient if image doesn't exist
            <div className="relative w-full h-full bg-gradient-to-br from-sky-300 via-blue-400 to-blue-600">
              {/* Overlay pattern to mimic ocean/sky */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-sky-200 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-blue-700 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/10 text-9xl">🍽️</div>
              </div>
            </div>
          )}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-end p-12">
          <div className="text-white space-y-3">
            <div className="flex items-center gap-2 text-sm opacity-90">
              <div className="w-8 h-px bg-white"></div>
              <span className="uppercase tracking-wider">Premium Dining Experience</span>
            </div>
            <h2 className="text-4xl font-light leading-tight">
              Savor Every<br />Moment
            </h2>
            <p className="text-blue-50 text-sm max-w-xs leading-relaxed">
              Where exceptional cuisine meets breathtaking views
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}
