'use client'

import HeroSection from '@/components/contact/HeroSection'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Form */}
      <div className="bg-white">
        <ContactForm />
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50">
        <ContactInfo />
      </div>
    </main>
  )
} 