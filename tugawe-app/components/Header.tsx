'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-gray-700 font-medium text-sm">
          Tugawe Feedback
        </div>

        {/* Sign In Link */}
        <Link
          href="/signin"
          className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
}
