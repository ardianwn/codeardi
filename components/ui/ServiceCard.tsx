import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <div
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
        <Icon className="text-primary-600 text-3xl" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-6">
        {service.description}
      </p>

      <div className="space-y-2">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center text-sm text-gray-700">
            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
            {feature}
          </div>
        ))}
      </div>

      <a
        href="#pricing"
        className="mt-6 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
      >
        Lihat Harga
        <span className="ml-2 group-hover:ml-3 transition-all">→</span>
      </a>
    </div>
  )
}
