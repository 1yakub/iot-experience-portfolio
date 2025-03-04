'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { number: '10B+', label: 'Connected IoT Devices', icon: '📱' },
  { number: '99.9%', label: 'Uptime Guarantee', icon: '⚡' },
  { number: '60%', label: 'Reduced Energy Costs', icon: '💰' },
  { number: '500+', label: 'IoT Projects Delivered', icon: '🚀' },
]

export default function StatsSection() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isClient, setIsClient] = useState(false)
  const [particles, setParticles] = useState<
    Array<{ id: number; size: number; color: string }>
  >([])

  useEffect(() => {
    setIsClient(true)

    // Generate particles only on the client side
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      color: i % 2 === 0 ? '#0984E3' : '#00B894',
    }))
    setParticles(newParticles)

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const getRandomPosition = () => {
    if (!isClient) return 0
    return Math.random() * dimensions.width
  }

  const iotMetrics = [
    { label: 'Data Points Processed Daily', value: '50TB+' },
    { label: 'Average Response Time', value: '<10ms' },
    { label: 'Device Onboarding Time', value: '5 min' },
    { label: 'Battery Life Extension', value: '3x' },
    { label: 'Predictive Maintenance Accuracy', value: '95%' },
    { label: 'Cloud Storage Optimization', value: '40%' },
  ]

  return (
    <section className='relative py-20 bg-[#2D3436] overflow-hidden'>
      {/* Animated Particles - Only render on client side */}
      {isClient &&
        particles.map((particle) => (
          <motion.div
            key={particle.id}
            className='absolute rounded-full'
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
            }}
            initial={{
              x: getRandomPosition(),
              y: getRandomPosition(),
              opacity: 0,
            }}
            animate={{
              x: [getRandomPosition(), getRandomPosition()],
              y: [getRandomPosition(), getRandomPosition()],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          className='max-w-3xl mx-auto text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center space-x-2 text-white text-sm font-medium mb-4 bg-white/10 px-4 py-2 rounded-full border border-white/20'
          >
            <span className='flex h-2 w-2 rounded-full bg-[#00B894] animate-pulse'></span>
            <span className='tracking-wider uppercase'>IoT by the Numbers</span>
          </motion.div>
          <motion.h2
            className='text-4xl font-bold mb-6 bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Measurable IoT Impact
          </motion.h2>
          <motion.p
            className='text-xl text-white/80'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our IoT solutions deliver quantifiable results with real-world
            business impact
          </motion.p>
        </motion.div>

        {/* Main Stats */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16'>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className='bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className='text-4xl mb-4'>{stat.icon}</div>
              <motion.div
                className='text-4xl lg:text-5xl font-bold text-white mb-2'
                initial={{ scale: 1 }}
                whileInView={{
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                  },
                }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className='text-white/70'>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* IoT Performance Metrics */}
        <motion.div
          className='max-w-6xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className='text-2xl font-bold text-center mb-8 text-white'>
            IoT Performance Metrics
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {iotMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className='flex items-center'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className='w-3 h-3 rounded-full bg-gradient-to-r from-[#0984E3] to-[#00B894] mr-3'></div>
                <div className='flex-1'>
                  <div className='text-sm text-white/60'>{metric.label}</div>
                  <div className='text-xl font-bold text-white'>
                    {metric.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Data Visualization - Only render on client side */}
          {isClient && (
            <motion.div
              className='mt-10 h-24 flex items-end space-x-1'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {Array.from({ length: 30 }).map((_, i) => {
                const height = 30 + Math.sin(i * 0.3) * 20 + Math.random() * 20
                return (
                  <motion.div
                    key={i}
                    className='flex-1 bg-gradient-to-t from-[#0984E3] to-[#00B894] rounded-t'
                    style={{ height: `${height}%` }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.02 }}
                  />
                )
              })}
            </motion.div>
          )}
          <div className='text-center mt-4 text-white/60 text-sm'>
            Real-time IoT data processing visualization
          </div>
        </motion.div>
      </div>
    </section>
  )
}
