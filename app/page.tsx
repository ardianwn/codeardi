import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import CTA from '@/components/sections/CTA'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import Pricing from '@/components/sections/Pricing'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
