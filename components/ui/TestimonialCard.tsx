'use client'

import type { Testimonial } from '@/types'
import { FaStar } from 'react-icons/fa'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 flex-1 leading-relaxed">
        "{testimonial.text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="font-bold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-600">
            {testimonial.role} at {testimonial.company}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {testimonial.flag} {testimonial.country}
          </div>
        </div>
      </div>
    </div>
  )
}
