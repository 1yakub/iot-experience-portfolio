'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CallToAction() {
  const [isClient, setIsClient] = useState(false)
  const [dots, setDots] = useState<Array<{ id: number; x: number; y: number }>>(
    []
  )
  const [lines, setLines] = useState<
    Array<{ id: number; x1: number; y1: number; x2: number; y2: number }>
  >([])

  useEffect(() => {
    setIsClient(true)

    // Generate random dots and lines only on client-side
    const newDots = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))

    const newLines = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
    }))

    setDots(newDots)
    setLines(newLines)
  }, [])

  return (
    <section className='py-20 bg-[#2D3436] relative overflow-hidden'>
      {/* Background Animation */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 bg-grid-pattern opacity-10' />

        {/* Connected Dots Animation - Only render on client side */}
        {isClient && (
          <svg className='absolute inset-0 w-full h-full' style={{ zIndex: 0 }}>
            <defs>
              <linearGradient
                id='dotGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='100%'
              >
                <stop offset='0%' stopColor='#0984E3' />
                <stop offset='100%' stopColor='#00B894' />
              </linearGradient>
            </defs>

            {/* Dots */}
            {dots.map((dot) => (
              <motion.circle
                key={dot.id}
                cx={`${dot.x}%`}
                cy={`${dot.y}%`}
                r='2'
                fill='url(#dotGradient)'
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  r: [2, 3, 2],
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Connection Lines */}
            {lines.map((line) => (
              <motion.line
                key={line.id}
                x1={`${line.x1}%`}
                y1={`${line.y1}%`}
                x2={`${line.x2}%`}
                y2={`${line.y2}%`}
                stroke='url(#dotGradient)'
                strokeWidth='0.5'
                strokeDasharray='5,5'
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </svg>
        )}
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center space-x-2 text-white text-sm font-medium mb-4 bg-white/10 px-4 py-2 rounded-full border border-white/20'
          >
            <span className='flex h-2 w-2 rounded-full bg-[#00B894] animate-pulse'></span>
            <span className='tracking-wider uppercase'>
              Start Your IoT Journey
            </span>
          </motion.div>

          <motion.h2
            className='text-4xl md:text-5xl font-bold text-white mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business with IoT?
          </motion.h2>

          <motion.p
            className='text-xl text-white/80 mb-10 max-w-3xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From smart devices to intelligent analytics, our IoT solutions help
            you collect, analyze, and act on real-time data to drive efficiency,
            innovation, and growth.
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href='/contact'
              className='bg-gradient-to-r from-[#0984E3] to-[#00B894] text-white font-medium px-8 py-4 rounded-full hover:shadow-lg transition-all hover:scale-105'
            >
              Schedule a Consultation
            </Link>
            <Link
              href='/portfolio'
              className='bg-white/10 text-white font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/20'
            >
              Explore IoT Case Studies
            </Link>
          </motion.div>

          {/* IoT Starter Kits */}
          <motion.div
            className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                name: 'IoT Starter Kit',
                description:
                  'Perfect for businesses just beginning their IoT journey',
                price: '$999',
                features: [
                  '5 IoT sensors',
                  'Cloud dashboard',
                  'Basic analytics',
                  'Email support',
                ],
              },
              {
                name: 'IoT Professional',
                description:
                  'Comprehensive solution for medium-sized deployments',
                price: '$2,499',
                features: [
                  '20 IoT sensors',
                  'Advanced dashboard',
                  'Real-time analytics',
                  '24/7 support',
                ],
              },
              {
                name: 'Enterprise IoT',
                description: 'Full-scale IoT ecosystem for large organizations',
                price: 'Custom',
                features: [
                  'Unlimited sensors',
                  'Custom dashboard',
                  'AI-powered analytics',
                  'Dedicated support team',
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all'
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <h3 className='text-xl font-bold text-white mb-2'>
                  {plan.name}
                </h3>
                <p className='text-white/60 text-sm mb-4'>{plan.description}</p>
                <div className='text-2xl font-bold text-white mb-4'>
                  {plan.price}
                </div>
                <ul className='space-y-2 mb-6'>
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className='flex items-start text-white/80 text-sm'
                    >
                      <svg
                        className='h-5 w-5 text-[#00B894] mr-2 flex-shrink-0'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href='/contact'
                  className='block text-center bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/20 transition-all border border-white/20'
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
