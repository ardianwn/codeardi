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

  const socialIcons = [
    { icon: FaFacebookF, href: socialLinks.facebook, label: 'Facebook' },
    { icon: FaTwitter, href: socialLinks.twitter, label: 'Twitter' },
    { icon: FaInstagram, href: socialLinks.instagram, label: 'Instagram' },
    { icon: FaLinkedinIn, href: socialLinks.linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-5"></div>
      
      {/* Decorative Blobs */}
      <div className="blob blob-primary w-[400px] h-[400px] -top-48 -right-48 opacity-10"></div>
      <div className="blob blob-accent w-[300px] h-[300px] bottom-0 -left-32 opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">{companyInfo.shortName}</span>
              </div>
              <span className="text-2xl font-bold text-white">{companyInfo.name}</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 bg-gray-800/50 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow"
                  aria-label={social.label}
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              {t.footer.services}
            </h3>
            <ul className="space-y-3">
              {['Landing Page', 'Company Profile', 'E-Commerce', 'CMS Website', 'POS System', 'Custom Software'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              {t.footer.contactUs || 'Hubungi Kami'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600/20 transition-colors">
                  <FaMapMarkerAlt className="text-primary-400 text-sm" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600/20 transition-colors">
                  <FaPhone className="text-primary-400 text-sm" />
                </div>
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600/20 transition-colors">
                  <FaEnvelope className="text-primary-400 text-sm" />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600/20 transition-colors">
                  <FaWhatsapp className="text-green-400 text-sm" />
                </div>
                <a 
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  {t.footer.whatsappChat}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {companyInfo.name}. {t.footer.allRightsReserved}.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                {t.footer.privacyPolicy}
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                {t.footer.termsOfService}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
