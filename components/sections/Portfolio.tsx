'use client'

import PortfolioCard from '@/components/ui/PortfolioCard'
import { portfolioItems } from '@/constants/portfolio'
import { useLanguage } from '@/lib/language-context'
import { FaArrowRight } from 'react-icons/fa'

export default function Portfolio() {
  const { t, locale } = useLanguage()

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden bg-white" aria-labelledby="portfolio-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Decorative Elements */}
      <div className="blob blob-primary w-[350px] h-[350px] -top-32 right-0 opacity-10"></div>
      <div className="blob blob-primary w-[400px] h-[400px] -bottom-32 -left-32 opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="section-header animate-slide-up">
          <div className="badge badge-primary mb-4">
            <span>{locale === 'id' ? 'Portfolio' : 'Portfolio'}</span>
          </div>
          <h2 id="portfolio-heading" className="section-title">
            {t.portfolio.title}
          </h2>
          <p className="section-description">
            {t.portfolio.description}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 lg:mt-20 text-center animate-fade-in">
          <div className="inline-block rounded-2xl p-8 sm:p-10">
            <p className="text-gray-700 mb-6 text-lg">
              {t.portfolio.moreProjects}
            </p>
            <a href="#contact" className="btn-primary group">
              {t.portfolio.contactUs}
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
