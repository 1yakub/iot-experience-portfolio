'use client'

import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import FeaturesSection from '../components/home/FeaturesSection'
import TechnologiesSection from '../components/home/TechnologiesSection'
import ReviewSection from '../components/home/ReviewSection'
import CallToAction from '../components/home/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TechnologiesSection />
      <ReviewSection />
      <CallToAction />
    </main>
  )
}
