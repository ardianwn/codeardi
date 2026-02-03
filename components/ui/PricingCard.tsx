'use client'

import { useLanguage } from '@/lib/language-context'
import { formatPrice } from '@/lib/utils'
import type { PricingPlan } from '@/types'
import { FaCheck, FaStar, FaWhatsapp } from 'react-icons/fa'

interface PricingCardProps {
  plan: PricingPlan
  index?: number
  onWhatsAppClick: () => void
}

export default function PricingCard({ plan, index = 0, onWhatsAppClick }: PricingCardProps) {
  const { t } = useLanguage()

  return (
    <div
      className={`group relative animate-slide-up ${
        plan.popular ? 'lg:scale-105 lg:z-10' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-glow">
            <FaStar className="text-yellow-300 text-xs" />
            <span>{t.pricing.popular}</span>
          </div>
        </div>
      )}

      <div
        className={`relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
          plan.popular 
            ? 'shadow-glow-lg ring-2 ring-primary-500' 
            : 'shadow-soft hover:shadow-soft-xl hover:-translate-y-1'
        }`}
      >
        {/* Top Gradient Bar */}
        <div className={`h-1.5 bg-gradient-to-r ${
          plan.popular 
            ? 'from-primary-500 via-primary-600 to-accent-500' 
            : 'from-gray-200 to-gray-300 group-hover:from-primary-400 group-hover:to-primary-500'
        } transition-colors duration-300`}></div>

        <div className="p-8">
          {/* Plan Name */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {plan.name}
          </h3>
          <p className="text-gray-600 mb-6 min-h-[48px]">
            {plan.description}
          </p>

          {/* Price */}
          <div className="mb-8">
            {plan.price === 'Custom' ? (
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold gradient-text">{t.pricing.custom}</span>
              </div>
            ) : (
              <>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    {formatPrice(plan.price)}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-1 font-medium">
                  {t.pricing.oneTimePayment}
                </div>
              </>
            )}
          </div>

          {/* Features */}
          <ul className="space-y-3.5 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                  plan.popular 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-600'
                } transition-colors`}>
                  <FaCheck className="text-xs" />
                </div>
                <span className="text-gray-700 leading-snug">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={onWhatsAppClick}
            className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 ${
              plan.popular
                ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-glow'
                : 'bg-gray-100 text-gray-900 hover:bg-primary-600 hover:text-white group-hover:bg-primary-600 group-hover:text-white'
            }`}
          >
            <FaWhatsapp className="text-xl" />
            <span>{t.pricing.askViaWhatsApp}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
