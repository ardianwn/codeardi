'use client'

import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import { companyInfo } from '@/constants/site'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const handleNavClick = () => setIsOpen(false)

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.contact, href: '#contact' }
  ]

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-xl border-b border-gray-100/50 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
              <span className="text-white font-bold text-xl">{companyInfo.shortName}</span>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute text-white font-bold text-xl">{companyInfo.shortName}</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">{companyInfo.name}</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium rounded-lg hover:bg-primary-50 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 rounded-full group-hover:w-1/2 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <a
              href="#pricing"
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-glow hover:-translate-y-0.5"
            >
              {t.nav.getStarted}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all ml-auto"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-slide-down border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 font-medium px-4 py-3 rounded-xl"
                  onClick={handleNavClick}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
              <div className="px-4 pt-2">
                <a
                  href="#pricing"
                  className="block w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-semibold text-center shadow-lg"
                  onClick={handleNavClick}
                >
                  {t.nav.getStarted}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
