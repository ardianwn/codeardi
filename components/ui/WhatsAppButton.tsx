'use client'

import { contactInfo } from '@/constants/site'
import { useLanguage } from '@/lib/language-context'
import { getWhatsAppUrl } from '@/lib/utils'
import { useState } from 'react'
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
        <button
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-pulse hover:animate-none"
          aria-label="Chat via WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </button>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 animate-fade-in">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
              {t.whatsapp.tooltip}
              <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
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
  const [isVisible, setIsVisible] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)
  const { t } = useLanguage()

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
          className="bg-white rounded-full shadow-lg p-3 hover:shadow-xl transition-all"
          aria-label="Open WhatsApp chat"
        >
          <FaWhatsapp className="text-green-500 text-2xl" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-24 right-6 z-40 w-80 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-green-500 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <FaWhatsapp className="text-green-500 text-2xl" />
            </div>
            <div>
              <div className="text-white font-bold">CodeArdi</div>
              <div className="text-green-100 text-sm">{t.whatsapp.online}</div>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:bg-green-600 rounded-full p-1 transition-colors"
            aria-label="Close chat"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 bg-gray-50">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-800 mb-2">
              {t.whatsapp.greeting}
            </p>
            <p className="text-gray-600 text-sm">
              {t.whatsapp.description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t">
          <button
            onClick={handleChat}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <FaWhatsapp className="text-xl" />
            <span>{t.whatsapp.startChat}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
