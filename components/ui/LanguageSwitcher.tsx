'use client'

import { localeFlags, localeNames, locales, type Locale } from '@/lib/i18n-config'
import { useLanguage } from '@/lib/language-context'
import { useState } from 'react'
import { FaCheck, FaGlobe } from 'react-icons/fa'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-primary-50 transition-all duration-200 group"
        aria-label="Change language"
      >
        <FaGlobe className="text-gray-500 group-hover:text-primary-600 transition-colors" />
        <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
          {localeFlags[locale]} {localeNames[locale].split(' ')[0]}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-soft-xl border border-gray-100 py-2 z-50 animate-slide-down">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`w-full text-left px-4 py-2.5 hover:bg-primary-50 transition-all flex items-center gap-3 group ${
                  locale === loc ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                }`}
              >
                <span className="text-xl">{localeFlags[loc]}</span>
                <span className="font-medium flex-1">{localeNames[loc]}</span>
                {locale === loc && (
                  <FaCheck className="text-primary-600 text-sm" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
