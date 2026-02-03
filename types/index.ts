export interface Service {
  icon: any
  title: string
  description: string
  features: string[]
}

export interface PortfolioItem {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  link: string
}

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  popular: boolean
}

export interface NavItem {
  name: string
  href: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  whatsapp: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  image: string
  rating: number
  text: string
  country: string
  flag: string
}
