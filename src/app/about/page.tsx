'use client'

import HeroSection from '@/components/about/HeroSection'
import MissionSection from '@/components/about/MissionSection'
import MilestonesSection from '@/components/about/MilestonesSection'
import TeamSection from '@/components/about/TeamSection'
import ValuesSection from '@/components/about/ValuesSection'
import CTASection from '@/components/about/CTASection'

export default function About() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <MilestonesSection />
      <TeamSection />
      <ValuesSection />
      <CTASection />
    </div>
  )
} 