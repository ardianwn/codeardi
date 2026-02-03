import { Locale } from '@/lib/i18n-config'
import type { Service } from '@/types'
import {
    FaBuilding,
    FaChartLine,
    FaCogs,
    FaDatabase,
    FaLaptopCode,
    FaLightbulb,
    FaMobileAlt,
    FaShoppingCart
} from 'react-icons/fa'

export const servicesData: Record<Locale, Service[]> = {
  id: [
    {
      icon: FaLightbulb,
      title: 'Digital Consulting',
      description: 'Konsultasi strategi digital dan teknologi untuk mengakselerasi transformasi bisnis Anda.',
      features: ['Tech Stack Recommendation', 'Digital Strategy', 'Business Analysis']
    },
    {
      icon: FaChartLine,
      title: 'Digital Transformation',
      description: 'Roadmap dan implementasi transformasi digital lengkap untuk modernisasi bisnis Anda.',
      features: ['Process Automation', 'System Integration', 'Change Management']
    },
    {
      icon: FaLaptopCode,
      title: 'Landing Page',
      description: 'Website satu halaman yang menarik dan responsif untuk promosi produk atau jasa Anda.',
      features: ['Desain Modern', 'SEO Friendly', 'Fast Loading']
    },
    {
      icon: FaBuilding,
      title: 'Company Profile',
      description: 'Website profil perusahaan yang profesional untuk meningkatkan kredibilitas bisnis Anda.',
      features: ['Multi Halaman', 'Galeri Foto', 'Kontak Form']
    },
    {
      icon: FaDatabase,
      title: 'CMS Website',
      description: 'Website dengan sistem manajemen konten yang mudah dikelola tanpa coding.',
      features: ['Admin Panel', 'Easy to Update', 'User Management']
    },
    {
      icon: FaShoppingCart,
      title: 'E-Commerce',
      description: 'Toko online lengkap dengan sistem pembayaran dan manajemen produk.',
      features: ['Shopping Cart', 'Payment Gateway', 'Order Management']
    },
    {
      icon: FaCogs,
      title: 'POS System',
      description: 'Sistem Point of Sale untuk manajemen penjualan dan inventory bisnis Anda.',
      features: ['Sales Management', 'Inventory Control', 'Reporting']
    },
    {
      icon: FaMobileAlt,
      title: 'Custom Software',
      description: 'Solusi software custom end-to-end sesuai kebutuhan spesifik bisnis Anda.',
      features: ['Scalable Architecture', 'API Integration', 'Cloud Ready']
    }
  ],
  en: [
    {
      icon: FaLightbulb,
      title: 'Digital Consulting',
      description: 'Digital and technology strategy consulting to accelerate your business transformation.',
      features: ['Tech Stack Recommendation', 'Digital Strategy', 'Business Analysis']
    },
    {
      icon: FaChartLine,
      title: 'Digital Transformation',
      description: 'Complete digital transformation roadmap and implementation for business modernization.',
      features: ['Process Automation', 'System Integration', 'Change Management']
    },
    {
      icon: FaLaptopCode,
      title: 'Landing Page',
      description: 'Attractive and responsive single-page website for promoting your products or services.',
      features: ['Modern Design', 'SEO Friendly', 'Fast Loading']
    },
    {
      icon: FaBuilding,
      title: 'Company Profile',
      description: 'Professional corporate website to enhance your business credibility.',
      features: ['Multi Pages', 'Photo Gallery', 'Contact Form']
    },
    {
      icon: FaDatabase,
      title: 'CMS Website',
      description: 'Website with an easy-to-manage content management system without coding.',
      features: ['Admin Panel', 'Easy to Update', 'User Management']
    },
    {
      icon: FaShoppingCart,
      title: 'E-Commerce',
      description: 'Complete online store with payment system and product management.',
      features: ['Shopping Cart', 'Payment Gateway', 'Order Management']
    },
    {
      icon: FaCogs,
      title: 'POS System',
      description: 'Point of Sale system for managing sales and inventory of your business.',
      features: ['Sales Management', 'Inventory Control', 'Reporting']
    },
    {
      icon: FaMobileAlt,
      title: 'Custom Software',
      description: 'End-to-end custom software solutions tailored to your specific business needs.',
      features: ['Scalable Architecture', 'API Integration', 'Cloud Ready']
    }
  ]
}

// Keep legacy export for backward compatibility
export const services = servicesData.id
