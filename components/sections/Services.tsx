'use client'

import ServiceCard from '@/components/ui/ServiceCard'
import { servicesData } from '@/constants/services'
import { useLanguage } from '@/lib/language-context'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function Services() {
  const { t, locale } = useLanguage()
  const services = servicesData[locale]
  const [showAll, setShowAll] = useState(false)
  
  const displayedServices = showAll ? services : services.slice(0, 6)
  const hasMore = services.length > 6

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
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
