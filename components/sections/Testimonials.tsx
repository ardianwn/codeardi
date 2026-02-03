'use client'

import { testimonials } from '@/constants/testimonials'
import { useLanguage } from '@/lib/language-context'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa'

export default function Testimonials() {
  const { t, locale } = useLanguage()
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

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial()
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [isAnimating])

  const currentTestimonial = testimonials[activeIndex]

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-white" aria-labelledby="testimonials-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Decorative Elements */}
      <div className="blob blob-primary w-[400px] h-[400px] top-1/4 -right-32 opacity-10"></div>
      <div className="blob blob-primary w-[300px] h-[300px] bottom-1/4 -left-32 opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="section-header animate-slide-up">
          <div className="badge badge-primary mb-4">
            <span>{locale === 'id' ? 'Testimoni Klien' : 'Client Testimonials'}</span>
          </div>
          <h2 id="testimonials-heading" className="section-title">
            {t.testimonials.title}
          </h2>
          <p className="section-description">
            {t.testimonials.description}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative glass rounded-2xl p-6 sm:p-8 lg:p-10 shadow-soft-xl max-w-4xl mx-auto">
          {/* Content with fade transition */}
          <div 
            key={activeIndex}
            className="animate-fade-in"
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center shadow-soft rotate-3">
                <FaQuoteLeft className="text-primary-600 text-xl" />
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg drop-shadow-sm" />
              ))}
            </div>

            {/* Testimonial Text */}
            <div className="text-center mb-8">
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto italic">
                "{currentTestimonial.text}"
              </p>
            </div>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-gray-900">{currentTestimonial.name}</h3>
              <p className="text-gray-600 text-sm">
                {currentTestimonial.role} at {currentTestimonial.company}
              </p>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                <span className="text-base">{currentTestimonial.flag}</span>
                <span>{currentTestimonial.country}</span>
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="absolute left-2 lg:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-lg shadow-soft hover:shadow-lg transition-all flex items-center justify-center text-gray-600 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-sm transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="absolute right-2 lg:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-lg shadow-soft hover:shadow-lg transition-all flex items-center justify-center text-gray-600 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-sm transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-1.5 mt-6">
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
              className={`h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                index === activeIndex ? 'bg-primary-600 w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
