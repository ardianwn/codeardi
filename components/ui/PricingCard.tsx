'use client'

import { useLanguage } from '@/lib/language-context'
import { formatPrice } from '@/lib/utils'
import type { PricingPlan } from '@/types'
import { FaCheck, FaWhatsapp } from 'react-icons/fa'

interface PricingCardProps {
  plan: PricingPlan
  onWhatsAppClick: () => void
}

export default function PricingCard({ plan, onWhatsAppClick }: PricingCardProps) {
  const { t } = useLanguage()

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
        plan.popular ? 'ring-2 ring-primary-600 transform scale-105' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
          {t.pricing.popular}
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {plan.name}
        </h3>
        <p className="text-gray-600 mb-6">
          {plan.description}
        </p>

        <div className="mb-6">
          {plan.price === 'Custom' ? (
            <div className="text-4xl font-bold text-primary-600">
              {t.pricing.custom}
            </div>
          ) : (
            <>
              <div className="text-4xl font-bold text-gray-900">
                {formatPrice(plan.price)}
              </div>
              <div className="text-gray-600 mt-1">
                {t.pricing.oneTimePayment}
              </div>
            </>
          )}
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <FaCheck className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onWhatsAppClick}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
            plan.popular
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          <FaWhatsapp className="text-xl" />
          <span>{t.pricing.askViaWhatsApp}</span>
        </button>
      </div>
    </div>
  )
}
