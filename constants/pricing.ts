import { Locale } from '@/lib/i18n-config'
import type { PricingPlan } from '@/types'

export const pricingData: Record<Locale, PricingPlan[]> = {
  id: [
    {
      name: 'Digital Consulting',
      price: '5.000.000',
      description: 'Konsultasi strategi digital & teknologi',
      features: [
        'Business & Tech Assessment',
        'Digital Strategy Roadmap',
        'Tech Stack Recommendation',
        'Process Improvement Analysis',
        'Implementation Guidelines',
        '3x Consultation Sessions',
        'Detailed Report & Documentation',
        'Follow-up Support 30 Hari'
      ],
      popular: false
    },
    {
      name: 'Digital Transformation',
      price: '25.000.000',
      description: 'End-to-end digital transformation project',
      features: [
        'Full Business Analysis',
        'Digital Transformation Roadmap',
        'Process Automation Design',
        'System Integration Planning',
        'Change Management Strategy',
        'Implementation & Training',
        'Project Management',
        'Ongoing Support 6 Bulan'
      ],
      popular: true
    },
    {
      name: 'Landing Page',
      price: '2.000.000',
      description: 'Perfect untuk promosi produk atau jasa',
      features: [
        'Desain Modern & Responsif',
        '1 Halaman Lengkap',
        'SEO Optimized',
        'Form Kontak',
        'Google Maps Integration',
        'Free Domain & Hosting 1 Tahun',
        'Revisi 3x',
        'Support 30 Hari'
      ],
      popular: false
    },
    {
      name: 'Company Profile',
      price: '4.500.000',
      description: 'Profesional untuk website perusahaan',
      features: [
        'Desain Premium & Responsif',
        'Hingga 7 Halaman',
        'SEO Optimized',
        'Admin Panel',
        'Galeri Foto & Video',
        'Blog System',
        'Free Domain & Hosting 1 Tahun',
        'Revisi 5x',
        'Support 60 Hari',
        'Google Analytics'
      ],
      popular: false
    },
    {
      name: 'CMS Website',
      price: '7.000.000',
      description: 'Website dengan sistem manajemen konten',
      features: [
        'Desain Custom & Responsif',
        'Unlimited Halaman',
        'Advanced SEO',
        'Full Admin Panel',
        'User Management',
        'Content Management System',
        'Media Library',
        'Free Domain & Hosting 1 Tahun',
        'Revisi Unlimited',
        'Support 90 Hari',
        'Training Gratis'
      ],
      popular: false
    },
    {
      name: 'E-Commerce',
      price: '10.000.000',
      description: 'Toko online lengkap & siap jual',
      features: [
        'Desain Modern E-Commerce',
        'Product Management',
        'Shopping Cart',
        'Payment Gateway Integration',
        'Order Management',
        'Inventory System',
        'Customer Management',
      'Shipping Integration',
      'Free Domain & Hosting 1 Tahun',
      'Revisi Unlimited',
      'Support 6 Bulan',
      'Training & Documentation'
    ],
    popular: false
  },
  {
    name: 'POS System',
    price: '15.000.000',
    description: 'Sistem kasir & inventory management',
    features: [
      'Web-Based POS',
      'Sales Management',
      'Inventory Control',
      'Employee Management',
      'Customer Database',
      'Reporting & Analytics',
      'Barcode Scanner Support',
      'Multi-Store Support',
      'Free Domain & Hosting 1 Tahun',
      'Revisi Unlimited',
      'Support 1 Tahun',
      'Training On-Site'
    ],
    popular: false
  },
  {
    name: 'Custom Web App',
    price: 'Custom',
    description: 'Aplikasi web sesuai kebutuhan Anda',
    features: [
      'Full Custom Development',
      'Database Design',
      'API Development',
      'User Authentication',
      'Role-Based Access',
      'Real-time Features',
      'Cloud Deployment',
      'Security Features',
      'Scalable Architecture',
      'Revisi Unlimited',
      'Support Negotiable',
      'Complete Documentation'
    ],
    popular: false
  }
  ],
  en: [
    {
      name: 'Digital Consulting',
      price: '5.000.000',
      description: 'Digital & technology strategy consulting',
      features: [
        'Business & Tech Assessment',
        'Digital Strategy Roadmap',
        'Tech Stack Recommendation',
        'Process Improvement Analysis',
        'Implementation Guidelines',
        '3x Consultation Sessions',
        'Detailed Report & Documentation',
        'Follow-up Support 30 Days'
      ],
      popular: false
    },
    {
      name: 'Digital Transformation',
      price: '25.000.000',
      description: 'End-to-end digital transformation project',
      features: [
        'Full Business Analysis',
        'Digital Transformation Roadmap',
        'Process Automation Design',
        'System Integration Planning',
        'Change Management Strategy',
        'Implementation & Training',
        'Project Management',
        'Ongoing Support 6 Months'
      ],
      popular: true
    },
    {
      name: 'Landing Page',
      price: '2.000.000',
      description: 'Perfect for product or service promotion',
      features: [
        'Modern & Responsive Design',
        '1 Complete Page',
        'SEO Optimized',
        'Contact Form',
        'Google Maps Integration',
        'Free Domain & Hosting 1 Year',
        '3x Revision',
        'Support 30 Days'
      ],
      popular: false
    },
    {
      name: 'Company Profile',
      price: '4.500.000',
      description: 'Professional corporate website',
      features: [
        'Premium & Responsive Design',
        'Up to 7 Pages',
        'SEO Optimized',
        'Admin Panel',
        'Photo & Video Gallery',
        'Blog System',
        'Free Domain & Hosting 1 Year',
        '5x Revision',
        'Support 60 Days',
        'Google Analytics'
      ],
      popular: false
    },
    {
      name: 'CMS Website',
      price: '7.000.000',
      description: 'Website with content management system',
      features: [
        'Custom & Responsive Design',
        'Unlimited Pages',
        'Advanced SEO',
        'Full Admin Panel',
        'User Management',
        'Content Management System',
        'Media Library',
        'Free Domain & Hosting 1 Year',
        'Unlimited Revision',
        'Support 90 Days',
        'Free Training'
      ],
      popular: false
    },
    {
      name: 'E-Commerce',
      price: '10.000.000',
      description: 'Complete online store ready to sell',
      features: [
        'Modern E-Commerce Design',
        'Product Management',
        'Shopping Cart',
        'Payment Gateway Integration',
        'Order Management',
        'Inventory System',
        'Customer Management',
        'Shipping Integration',
        'Free Domain & Hosting 1 Year',
        'Unlimited Revision',
        'Support 6 Months',
        'Training & Documentation'
      ],
      popular: false
    },
    {
      name: 'POS System',
      price: '15.000.000',
      description: 'Cashier & inventory management system',
      features: [
        'Web-Based POS',
        'Sales Management',
        'Inventory Control',
        'Employee Management',
        'Customer Database',
        'Reporting & Analytics',
        'Barcode Scanner Support',
        'Multi-Store Support',
        'Free Domain & Hosting 1 Year',
        'Unlimited Revision',
        'Support 1 Year',
        'On-Site Training'
      ],
      popular: false
    },
    {
      name: 'Custom Web App',
      price: 'Custom',
      description: 'Custom web application for your needs',
      features: [
        'Full Custom Development',
        'Database Design',
        'API Development',
        'User Authentication',
        'Role-Based Access',
        'Real-time Features',
        'Cloud Deployment',
        'Security Features',
        'Scalable Architecture',
        'Unlimited Revision',
        'Negotiable Support',
        'Complete Documentation'
      ],
      popular: false
    }
  ]
}

// Keep legacy export for backward compatibility
export const pricingPlans = pricingData.id
