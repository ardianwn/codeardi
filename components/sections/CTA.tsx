'use client'

import { contactInfo } from '@/constants/site'
import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/utils'
import { FaWhatsapp } from 'react-icons/fa'

export default function CTA() {
  const { t, locale } = useLanguage()

  const handleConsultation = () => {
    const message = locale === 'id'
      ? 'Halo, saya ingin konsultasi untuk custom website. Bisakah dibantu?'
      : 'Hello, I would like a consultation for a custom website. Can you help?'
    const url = getWhatsAppUrl(contactInfo.whatsapp, message)
    window.open(url, '_blank')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.pricing.customFeature.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.pricing.customFeature.description}
          </p>
          <button
            onClick={handleConsultation}
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={24} />
            <span>{t.pricing.customFeature.button}</span>
          </button>
        </div>
      </div>
    </section>
  )
}
