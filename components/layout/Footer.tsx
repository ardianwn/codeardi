'use client'

import { companyInfo, contactInfo, socialLinks } from '@/constants/site'
import { useLanguage } from '@/lib/language-context'
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.pricing, href: '#pricing' }
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">{companyInfo.shortName}</span>
              </div>
              <span className="text-xl font-bold text-white">{companyInfo.name}</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-3">
              <a 
                href={socialLinks.facebook} 
                className="bg-gray-800 hover:bg-primary-600 p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href={socialLinks.twitter} 
                className="bg-gray-800 hover:bg-primary-600 p-2 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href={socialLinks.instagram} 
                className="bg-gray-800 hover:bg-primary-600 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href={socialLinks.linkedin} 
                className="bg-gray-800 hover:bg-primary-600 p-2 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-primary-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Landing Page
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Company Profile
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  CMS Website
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  POS System
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Custom Software
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="text-primary-500 mt-1 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-500 mt-1 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-400 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaWhatsapp className="text-primary-500 mt-1 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t.footer.whatsappChat}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. {t.footer.allRightsReserved}.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-primary-400 transition-colors">
                {t.footer.privacyPolicy}
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                {t.footer.termsOfService}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
