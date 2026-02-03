import type { Metadata } from 'next'

export const siteMetadata = {
  title: 'CodeArdi - Digital Solution Consultant & Web Development',
  description: 'Digital Solution Consultant yang menyediakan konsultasi teknologi, digital transformation, dan pembuatan website profesional (landing page, e-commerce, POS system, aplikasi web custom). Solusi digital lengkap untuk mengakselerasi bisnis Anda.',
  keywords: [
    'digital solution consultant',
    'konsultan teknologi',
    'digital transformation',
    'jasa pembuatan website',
    'web development',
    'konsultasi digital',
    'technology consultant',
    'business automation',
    'landing page',
    'company profile',
    'cms website',
    'e-commerce',
    'pos system',
    'aplikasi web',
    'sistem informasi',
    'software consultant',
    'IT consulting',
    'digital strategy',
    'website profesional',
    'toko online'
  ],
  author: 'CodeArdi',
  siteUrl: 'https://codeardi.com',
  image: '/og-image.jpg',
  twitterHandle: '@codeardi',
  locale: 'id_ID',
}

export const generateMetadata = (): Metadata => {
  return {
    title: {
      default: siteMetadata.title,
      template: `%s | ${siteMetadata.author}`
    },
    description: siteMetadata.description,
    keywords: siteMetadata.keywords,
    authors: [{ name: siteMetadata.author }],
    creator: siteMetadata.author,
    publisher: siteMetadata.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteMetadata.siteUrl),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      locale: siteMetadata.locale,
      url: siteMetadata.siteUrl,
      title: siteMetadata.title,
      description: siteMetadata.description,
      siteName: siteMetadata.author,
      images: [
        {
          url: siteMetadata.image,
          width: 1200,
          height: 630,
          alt: siteMetadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetadata.title,
      description: siteMetadata.description,
      creator: siteMetadata.twitterHandle,
      images: [siteMetadata.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  }
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteMetadata.author,
  description: siteMetadata.description,
  url: siteMetadata.siteUrl,
  logo: `${siteMetadata.siteUrl}/logo.png`,
  image: `${siteMetadata.siteUrl}${siteMetadata.image}`,
  telephone: '+62-812-3456-7890',
  email: 'info@codeardi.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.2088,
    longitude: 106.8456,
  },
  priceRange: 'Rp 2.000.000 - Rp 15.000.000',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '50',
  },
  sameAs: [
    'https://facebook.com/codeardi',
    'https://twitter.com/codeardi',
    'https://instagram.com/codeardi',
    'https://linkedin.com/company/codeardi',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Landing Page',
          description: 'Website satu halaman yang menarik dan responsif untuk promosi produk atau jasa',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Company Profile',
          description: 'Website profil perusahaan yang profesional untuk meningkatkan kredibilitas bisnis',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CMS Website',
          description: 'Website dengan sistem manajemen konten yang mudah dikelola',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Commerce',
          description: 'Toko online lengkap dengan sistem pembayaran dan manajemen produk',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'POS System',
          description: 'Sistem Point of Sale untuk manajemen penjualan dan inventory bisnis',
        },
      },
    ],
  },
}
