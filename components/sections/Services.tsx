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
    <section id="services" className="section-padding relative overflow-hidden bg-gray-50" aria-labelledby="services-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white/50 to-gray-50"></div>
      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      
      {/* Decorative Elements */}
      <div className="blob blob-primary w-[400px] h-[400px] -top-48 -left-48 opacity-10"></div>
      <div className="blob blob-primary w-[300px] h-[300px] bottom-0 right-0 opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="section-header animate-slide-up">
          <div className="badge badge-primary mb-4">
            <span>{locale === 'id' ? 'Layanan Kami' : 'Our Services'}</span>
          </div>
          <h2 id="services-heading" className="section-title">
            {t.services.title}
          </h2>
          <p className="section-description">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
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
