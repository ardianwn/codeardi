'use client'

import { useLanguage } from '@/lib/language-context'
import type { PortfolioItem } from '@/types'
import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface PortfolioCardProps {
  item: PortfolioItem
  index?: number
}

export default function PortfolioCard({ item, index = 0 }: PortfolioCardProps) {
  const { locale } = useLanguage()
  
  const handleClick = () => {
    window.open(item.link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div 
      onClick={handleClick}
      className="group card-base overflow-hidden cursor-pointer animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 sm:h-64 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-top group-hover:scale-110 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
          <div className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span>{locale === 'id' ? 'Lihat Demo' : 'View Demo'}</span>
            <FaExternalLinkAlt className="text-sm" />
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary-700 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-soft">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium group-hover:bg-primary-50 group-hover:text-primary-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
