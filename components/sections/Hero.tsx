'use client'

import { useLanguage } from '@/lib/language-context'
import { FaCode, FaRocket, FaStar } from 'react-icons/fa'

export default function Hero() {
  const { t } = useLanguage()

  const stats = [
    { value: '50+', label: t.hero.stats.projects },
    { value: '100%', label: t.hero.stats.satisfaction },
    { value: '24/7', label: t.hero.stats.support }
  ]

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center" aria-label="Hero Section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full">
              <FaStar className="text-primary-600" />
              <span className="text-primary-700 font-medium">{t.hero.badge}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t.hero.title}
              <span className="text-primary-600">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.hero.description}
            </p>

            <nav className="flex flex-col sm:flex-row gap-4" aria-label="Call to action">
              <a
                href="#pricing"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-200 font-medium text-center shadow-lg hover:shadow-xl"
              >
                {t.hero.viewPricing}
              </a>
              <a
                href="#portfolio"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all duration-200 font-medium text-center"
              >
                {t.hero.viewPortfolio}
              </a>
            </nav>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCode className="text-primary-600 text-2xl" />
                  <div className="h-4 bg-gray-200 rounded flex-1"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <FaRocket className="text-primary-600 text-xl" />
                  <div className="h-10 w-24 bg-primary-600 rounded-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300 rounded-full opacity-30 animate-pulse delay-75"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
