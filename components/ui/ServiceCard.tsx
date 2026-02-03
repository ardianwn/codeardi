import { useLanguage } from '@/lib/language-context'
import type { Service } from '@/types'
import { FaArrowRight } from 'react-icons/fa'

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon
  const { locale } = useLanguage()

  return (
    <div
      className="group card-base card-hover p-6 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon Container */}
      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors duration-300">
        <Icon className="text-primary-600 text-xl" />
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
        {service.description}
      </p>

      <div className="space-y-2 mb-5">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <a
        href="#pricing"
        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm group/link"
      >
        <span>{locale === 'id' ? 'Lihat Harga' : 'View Pricing'}</span>
        <FaArrowRight className="text-xs transition-transform group-hover/link:translate-x-1" />
      </a>
    </div>
  )
}
