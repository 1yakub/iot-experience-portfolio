'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import CTAButton from '@/components/shared/CTAButton'

const pricingTiers = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for small businesses starting their IoT journey",
    features: [
      "Up to 5 IoT devices",
      "Basic monitoring dashboard",
      "Email support",
      "Monthly reports",
      "Basic automation rules"
    ],
    recommended: false
  },
  {
    name: "Professional",
    price: "999",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Up to 20 IoT devices",
      "Advanced analytics dashboard",
      "Priority support",
      "Weekly reports",
      "Advanced automation",
      "Custom integrations"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale IoT solutions for large organizations",
    features: [
      "Unlimited IoT devices",
      "Custom dashboard",
      "24/7 dedicated support",
      "Real-time analytics",
      "Advanced security",
      "API access",
      "Custom development"
    ],
    recommended: false
  }
]

const steps = [
  {
    number: 1,
    title: "Choose Your Plan",
    description: "Select the package that best fits your needs and scale"
  },
  {
    number: 2,
    title: "Consultation",
    description: "Meet with our experts to discuss your specific requirements"
  },
  {
    number: 3,
    title: "Implementation",
    description: "We set up your IoT infrastructure and train your team"
  },
  {
    number: 4,
    title: "Go Live",
    description: "Launch your IoT solution and start monitoring in real-time"
  }
]

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Implementation time varies based on your needs. Typically, our Starter package can be up and running within 1-2 weeks, while Enterprise solutions may take 4-8 weeks."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes! You can upgrade your plan at any time. We'll help you transition smoothly to your new package with minimal disruption."
  },
  {
    question: "Do you provide training?",
    answer: "Absolutely. All our packages include comprehensive training for your team to ensure you get the most out of your IoT solution."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer various levels of support based on your package, ranging from email support to 24/7 dedicated assistance for Enterprise clients."
  }
]

export default function GetStarted() {
  const [selectedTier, setSelectedTier] = useState<string>("Professional")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#2D3436] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 text-white/80 text-sm font-medium mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <span className="flex h-2 w-2 rounded-full bg-[#00B894] animate-pulse"></span>
              <span className="tracking-wider uppercase">Get Started</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="block text-white mb-2">Transform Your Business</span>
              <span className="bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent">
                With IoT Solutions
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
              Choose the perfect plan for your business and start your IoT journey today. Our expert team will guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the package that best suits your needs. All plans include our core features with different levels of support and customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.name}
                className={`bg-white p-8 border-4 ${
                  selectedTier === tier.name
                    ? 'border-[#0984E3]'
                    : 'border-[#2D3436]'
                } relative ${
                  tier.recommended ? 'md:-mt-8' : ''
                }`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#00B894] text-white px-4 py-1 text-sm font-medium">
                      RECOMMENDED
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-gray-600">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-[#00B894] mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedTier(tier.name)}
                  className={`neobrutalist w-full ${
                    selectedTier === tier.name
                      ? 'bg-gradient-to-r from-[#0984E3] to-[#00B894] text-white'
                      : 'bg-white text-[#2D3436]'
                  } group`}
                >
                  Select Plan
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-[#2D3436] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our streamlined process ensures a smooth transition to your new IoT solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                className="bg-white border-4 border-[#2D3436] p-6"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-[#0984E3] mb-4">
                  {step.number.toString().padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-4 border-[#2D3436] bg-white"
              >
                <button
                  className="w-full px-6 py-4 text-left font-bold flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 border-t-4 border-[#2D3436]">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2D3436] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Start Your IoT Journey?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <CTAButton 
                href="/contact" 
                variant="secondary"
                size="lg"
                darkBg
                icon="calendar"
              >
                Schedule a Demo
              </CTAButton>
              
              <CTAButton 
                href="/portfolio" 
                variant="outline"
                size="lg"
                darkBg
                icon="explore"
              >
                View Success Stories
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 