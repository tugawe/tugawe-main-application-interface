'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function BusinessDetailsForm() {
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    phone: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Business details:', formData);
      setIsLoading(false);
      // Navigate to next step
    }, 1500);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-500 uppercase tracking-wide">eatery</p>
        <h1 className="text-4xl font-light text-blue-600">Business details</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="name"
            required
            className="w-full px-4 py-3 text-sm border-b border-gray-300 focus:border-blue-500 outline-none transition-colors bg-transparent placeholder:text-gray-400"
          />
        </div>

        {/* Branch Input */}
        <div>
          <label htmlFor="branch" className="sr-only">
            Branch
          </label>
          <input
            id="branch"
            name="branch"
            type="text"
            value={formData.branch}
            onChange={handleChange}
            placeholder="branch"
            required
            className="w-full px-4 py-3 text-sm border-b border-gray-300 focus:border-blue-500 outline-none transition-colors bg-transparent placeholder:text-gray-400"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="phone"
            required
            className="w-full px-4 py-3 text-sm border-b border-gray-300 focus:border-blue-500 outline-none transition-colors bg-transparent placeholder:text-gray-400"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            required
            className="w-full px-4 py-3 text-sm border-b border-gray-300 focus:border-blue-500 outline-none transition-colors bg-transparent placeholder:text-gray-400"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Submit"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            )}
          </button>
        </div>
      </form>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-500">
        <p>Step 2 of 3</p>
      </div>
    </div>
  );
}
