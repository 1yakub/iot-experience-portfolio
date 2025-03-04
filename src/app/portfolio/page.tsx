'use client'

import { useState } from 'react'
import HeroSection from '@/components/portfolio/HeroSection'
import ProjectsGrid from '@/components/portfolio/ProjectsGrid'
import CTASection from '@/components/portfolio/CTASection'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <ProjectsGrid activeCategory={activeCategory} />
      <CTASection />
    </div>
  )
} 