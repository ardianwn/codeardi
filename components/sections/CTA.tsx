'use client'

import { contactInfo } from '@/constants/site'
import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/utils'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'

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
    <section className="section-padding pb-12 relative overflow-hidden bg-gray-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white/50 to-gray-50"></div>
      <div className="absolute inset-0 dot-pattern opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 dot-pattern opacity-10"></div>
          <div className="blob blob-accent w-[200px] h-[200px] -top-24 -right-24 opacity-30"></div>
          <div className="blob blob-accent w-[150px] h-[150px] -bottom-16 -left-16 opacity-20"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-6 right-10 w-14 h-14 bg-white/10 rounded-xl rotate-12 hidden lg:block animate-float"></div>
          <div className="absolute bottom-8 left-12 w-12 h-12 bg-white/10 rounded-lg -rotate-12 hidden lg:block animate-float-delay"></div>
          
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-sm font-medium text-white mb-4 inline-block">
              <span>{locale === 'id' ? 'Butuh Sesuatu yang Unik?' : 'Need Something Unique?'}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              {t.pricing.customFeature.title}
            </h2>
            <p className="text-base sm:text-lg text-primary-100 mb-6 max-w-2xl mx-auto leading-relaxed">
              {t.pricing.customFeature.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleConsultation}
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <FaWhatsapp className="text-xl text-green-600" />
                <span>{t.pricing.customFeature.button}</span>
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
