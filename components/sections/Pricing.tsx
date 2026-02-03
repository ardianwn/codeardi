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
    <section id="pricing" className="section-padding relative overflow-hidden bg-gray-50" aria-labelledby="pricing-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white/50 to-gray-50"></div>
      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      
      {/* Decorative Elements */}
      <div className="blob blob-primary w-[500px] h-[500px] top-0 -right-64 opacity-10"></div>
      <div className="blob blob-primary w-[400px] h-[400px] bottom-1/4 -left-48 opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="section-header animate-slide-up">
          <div className="badge badge-primary mb-4">
            <span>{locale === 'id' ? 'Harga Transparan' : 'Transparent Pricing'}</span>
          </div>
          <h2 id="pricing-heading" className="section-title">
            {t.pricing.title}
          </h2>
          <p className="section-description">
            {t.pricing.description}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedPlans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              index={index}
              onWhatsAppClick={() => handleWhatsAppClick(plan.name)} 
            />
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="text-center mt-12 lg:mt-16 animate-fade-in">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary group"
            >
              <span>{showAll ? (locale === 'id' ? 'Tampilkan Lebih Sedikit' : 'Show Less') : (locale === 'id' ? 'Tampilkan Lebih Banyak' : 'Show More')}</span>
              {showAll ? <FaChevronUp className="transition-transform group-hover:-translate-y-0.5" /> : <FaChevronDown className="transition-transform group-hover:translate-y-0.5" />}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
