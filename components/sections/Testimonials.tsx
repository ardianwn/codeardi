'use client'

import { testimonials } from '@/constants/testimonials'
import { useLanguage } from '@/lib/language-context'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa'

export default function Testimonials() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.testimonials.description}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative bg-white rounded-3xl shadow-xl p-8 sm:p-12 md:p-16">
          {/* Content with fade transition */}
          <div 
            key={activeIndex}
            className="animate-fade-in"
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
                <FaQuoteLeft className="text-primary-600 text-2xl" />
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xl" />
              ))}
            </div>

            {/* Testimonial Text */}
            <div className="text-center mb-8">
              <p className="text-gray-800 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
                "{currentTestimonial.text}"
              </p>
            </div>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h3>
              <p className="text-gray-600">
                {currentTestimonial.role} at {currentTestimonial.company}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {currentTestimonial.flag} {currentTestimonial.country}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-gray-600 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-gray-600 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  setActiveIndex(index)
                }
              }}
              disabled={isAnimating}
              className={`h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                index === activeIndex ? 'bg-primary-600 w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
