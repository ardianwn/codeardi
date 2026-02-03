'use client'

import { useLanguage } from '@/lib/language-context'
import { FaArrowRight, FaCode, FaPlay, FaRocket, FaStar } from 'react-icons/fa'

export default function Hero() {
  const { t } = useLanguage()

  const stats = [
    { value: '50+', label: t.hero.stats.projects },
    { value: '100%', label: t.hero.stats.satisfaction },
    { value: '24/7', label: t.hero.stats.support }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white" aria-label="Hero Section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"></div>
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      
      {/* Decorative Blobs */}
      <div className="blob blob-primary w-[500px] h-[500px] -top-48 -right-48 animate-float-slow opacity-20"></div>
      <div className="blob blob-primary w-[400px] h-[400px] top-1/2 -left-48 animate-float-delay opacity-15"></div>
      <div className="blob blob-primary w-[300px] h-[300px] -bottom-24 right-1/4 animate-float opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-slide-up">
              <div className="badge badge-primary inline-flex">
                <span>{t.hero.badge}</span>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight animate-slide-up animation-delay-100">
              {t.hero.title}
              <span className="gradient-text block mt-2">{t.hero.titleHighlight}</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl animate-slide-up animation-delay-200">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <nav className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up animation-delay-300" aria-label="Call to action">
              <a href="#pricing" className="btn-primary group">
                {t.hero.viewPricing}
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#portfolio" className="btn-secondary group">
                <FaPlay className="text-sm" />
                {t.hero.viewPortfolio}
              </a>
            </nav>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 animate-slide-up animation-delay-500">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative animate-slide-left animation-delay-200 hidden lg:block">
            {/* Main Card */}
            <div className="relative z-10 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl p-1 shadow-glow-lg animate-float-slow">
              <div className="bg-white rounded-[22px] p-8 space-y-6">
                {/* Code Editor Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">index.tsx</div>
                </div>
                
                {/* Code Lines */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaCode className="text-primary-600 text-xl" />
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full flex-1"></div>
                  </div>
                  <div className="space-y-2 pl-8">
                    <div className="h-3 bg-primary-100 rounded-full w-4/5"></div>
                    <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                    <div className="h-3 bg-gray-100 rounded-full w-3/4"></div>
                    <div className="h-3 bg-primary-100 rounded-full w-5/6"></div>
                  </div>
                </div>
                
                {/* Action Area */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                      <FaRocket className="text-primary-600 text-sm" />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Ready to deploy</span>
                  </div>
                  <div className="h-10 w-28 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Deploy →</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-soft-lg p-4 animate-float animation-delay-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <FaStar className="text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">5.0 Rating</div>
                  <div className="text-xs text-gray-500">50+ reviews</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-soft-lg p-4 animate-float animation-delay-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <FaRocket className="text-primary-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Fast Delivery</div>
                  <div className="text-xs text-gray-500">2-4 weeks</div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary-100/50 via-transparent to-transparent -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft hidden md:flex flex-col items-center gap-2">
        <span className="text-xs text-gray-500 font-medium">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-500 rounded-full animate-slide-up"></div>
        </div>
      </div>
    </section>
  )
}
