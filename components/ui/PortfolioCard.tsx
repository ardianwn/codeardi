'use client'

import type { PortfolioItem } from '@/types'
import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface PortfolioCardProps {
  item: PortfolioItem
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const handleClick = () => {
    window.open(item.link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 shadow-lg">
              <span>Lihat Demo</span>
              <FaExternalLinkAlt />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-sm text-primary-600 font-medium mb-2">
          {item.category}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {item.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
