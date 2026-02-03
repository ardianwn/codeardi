import type { ContactInfo, NavItem } from '@/types'

export const navItems: NavItem[] = [
  { name: 'Beranda', href: '#home' },
  { name: 'Layanan', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Harga', href: '#pricing' },
  { name: 'Kontak', href: '#contact' },
]

export const contactInfo: ContactInfo = {
  address: 'Jakarta, Indonesia',
  phone: '+62 812-3456-7890',
  email: 'info@codeardi.com',
  whatsapp: '6281234567890'
}

export const socialLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
  linkedin: '#'
}

export const companyInfo = {
  name: 'CodeArdi',
  shortName: 'CA',
  tagline: 'Digital Solution Consultant',
  description: 'Digital Solution Consultant yang membantu bisnis Anda bertransformasi digital. Dari konsultasi strategi teknologi hingga implementasi sistem yang scalable dan efisien.'
}
