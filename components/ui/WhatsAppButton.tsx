'use client'

import { contactInfo } from '@/constants/site'
import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { FaTimes, FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const { t } = useLanguage()

  const handleClick = () => {
    const url = getWhatsAppUrl(contactInfo.whatsapp, t.whatsapp.defaultMessage)
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Pulse Ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        <button
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          aria-label="Chat via WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </button>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 animate-fade-in">
            <div className="bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm whitespace-nowrap shadow-xl">
              {t.whatsapp.tooltip}
              <div className="absolute top-full right-5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-900"></div>
            </div>
          </div>
        )}
      </div>

      {/* WhatsApp Bubble Notification */}
      <WhatsAppNotification />
    </>
  )
}

function WhatsAppNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const { t } = useLanguage()

  // Show notification after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleChat = () => {
    const url = getWhatsAppUrl(contactInfo.whatsapp, t.whatsapp.defaultMessage)
    window.open(url, '_blank')
  }

  if (!isVisible) return null

  if (isMinimized) {
    return (
      <div className="fixed bottom-24 right-6 z-40 animate-fade-in">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-white rounded-full shadow-xl p-3 hover:shadow-2xl transition-all hover:scale-110 border border-gray-100"
          aria-label="Open WhatsApp chat"
        >
          <FaWhatsapp className="text-green-500 text-2xl" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-[340px] animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <FaWhatsapp className="text-green-500 text-2xl" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">CodeArdi</div>
              <div className="text-green-100 text-sm flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                {t.whatsapp.online}
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all"
            aria-label="Close chat"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="bg-white rounded-xl p-4 shadow-soft border border-gray-100">
            <p className="text-gray-800 mb-2 font-medium">
              {t.whatsapp.greeting}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t.whatsapp.description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-gray-100">
          <button
            onClick={handleChat}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp className="text-xl" />
            <span>{t.whatsapp.startChat}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
