'use client'

import PortfolioCard from '@/components/ui/PortfolioCard'
import { portfolioItems } from '@/constants/portfolio'
import { useLanguage } from '@/lib/language-context'

export default function Portfolio() {
  const { t } = useLanguage()

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.portfolio.description}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            {t.portfolio.moreProjects}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
          >
            {t.portfolio.contactUs}
          </a>
        </div>
      </div>
    </section>
  )
}
