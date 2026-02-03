'use client'

import PricingCard from '@/components/ui/PricingCard'
import { pricingData } from '@/constants/pricing'
import { contactInfo } from '@/constants/site'
import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/utils'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function Pricing() {
  const { t, locale } = useLanguage()
  const pricingPlans = pricingData[locale]
  const [showAll, setShowAll] = useState(false)
  
  const displayedPlans = showAll ? pricingPlans : pricingPlans.slice(0, 6)
  const hasMore = pricingPlans.length > 6

  const handleWhatsAppClick = (planName: string) => {
    const message = locale === 'id' 
      ? `Halo, saya tertarik dengan paket ${planName}. Bisakah dijelaskan lebih detail?`
      : `Hello, I'm interested in the ${planName} package. Could you explain it in more detail?`
    const url = getWhatsAppUrl(contactInfo.whatsapp, message)
    window.open(url, '_blank')
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.pricing.description}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPlans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              onWhatsAppClick={() => handleWhatsAppClick(plan.name)} 
            />
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              <span>{showAll ? (locale === 'id' ? 'Tampilkan Lebih Sedikit' : 'Show Less') : (locale === 'id' ? 'Tampilkan Lebih Banyak' : 'Show More')}</span>
              {showAll ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
