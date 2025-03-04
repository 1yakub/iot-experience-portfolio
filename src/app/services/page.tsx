'use client'

import HeroSection from '@/components/services/HeroSection'
import ServicesGrid from '@/components/services/ServicesGrid'
import CTASection from '@/components/services/CTASection'

export default function Services() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesGrid />
      <CTASection />
    </div>
  )
} 