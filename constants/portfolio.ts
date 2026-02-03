import type { PortfolioItem } from '@/types'

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'E-Commerce Fashion',
    category: 'E-Commerce',
    description: 'Toko online fashion dengan payment gateway terintegrasi',
    image: '/portfolio/ecommerce.png',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    link: 'https://felicity-fashion.vercel.app/'
  },
  {
    title: 'Company Profile Tech',
    category: 'Company Profile',
    description: 'Website perusahaan teknologi dengan desain modern',
    image: '/portfolio/company-profile.png',
    tags: ['React', 'Tailwind', 'CMS'],
    link: 'https://tech-innovate-seven.vercel.app/'
  },
  {
    title: 'Restaurant POS',
    category: 'POS System',
    description: 'Sistem kasir untuk restoran dengan kitchen display',
    image: '/portfolio/pos-system.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://resto-pos-system.vercel.app/'
  },
  {
    title: 'Property Landing Page',
    category: 'Landing Page',
    description: 'Landing page untuk developer properti',
    image: '/portfolio/landing-page.png',
    tags: ['Next.js', 'Framer Motion', 'SEO'],
    link: 'https://emerald-residences-landing-page.vercel.app/'
  },
  {
    title: 'School Management',
    category: 'CMS Website',
    description: 'Sistem manajemen sekolah dengan portal siswa',
    image: '/portfolio/school-management.png',
    tags: ['React', 'Express', 'MySQL'],
    link: 'https://school-management-system-coral-alpha.vercel.app/'
  },
  {
    title: 'Booking System',
    category: 'Web Aplikasi',
    description: 'Aplikasi booking untuk layanan konsultasi',
    image: '/portfolio/booking-system.png',
    tags: ['Next.js', 'Prisma', 'NextAuth'],
    link: 'https://booking-system-web.vercel.app/'
  }
]
