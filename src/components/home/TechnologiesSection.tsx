'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function TechnologiesSection() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
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

  const technologies = [
    {
      name: 'IoT Sensors & Actuators',
      icon: '📡',
      color: '#0984E3',
      description:
        'Smart sensors that collect real-time data from the physical world and actuators that enable automated responses.',
    },
    {
      name: 'Edge Computing',
      icon: '💻',
      color: '#00B894',
      description:
        'Process data closer to the source to reduce latency, bandwidth usage, and enable real-time decision making.',
    },
    {
      name: 'AI & Machine Learning',
      icon: '🤖',
      color: '#6C5CE7',
      description:
        'Intelligent algorithms that analyze IoT data to identify patterns, predict outcomes, and enable autonomous operations.',
    },
    {
      name: 'Digital Twin Technology',
      icon: '🔄',
      color: '#FF7675',
      description:
        'Virtual replicas of physical assets that simulate behavior and optimize performance in real-time.',
    },
    {
      name: 'Blockchain for IoT',
      icon: '🔗',
      color: '#FD79A8',
      description:
        'Secure, decentralized ledger technology that ensures data integrity and enables trusted device interactions.',
    },
    {
      name: 'MQTT & CoAP Protocols',
      icon: '📶',
      color: '#20BF6B',
      description:
        'Lightweight messaging protocols designed specifically for constrained IoT devices and networks.',
    },
    {
      name: 'IoT Security Frameworks',
      icon: '🔒',
      color: '#EB3B5A',
      description:
        'Comprehensive security solutions that protect connected devices, data, and communications from cyber threats.',
    },
    {
      name: 'Low-Power Hardware',
      icon: '⚡',
      color: '#F7B731',
      description:
        'Energy-efficient microcontrollers and components that extend battery life for remote IoT deployments.',
    },
  ]

  return (
    <section className='py-20 bg-[#2D3436] relative overflow-hidden'>
      {/* Background Animation */}
      {isClient &&
        technologies.map((tech, index) => (
          <motion.div
            key={index}
            className='absolute rounded-full opacity-10'
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              backgroundColor: tech.color,
            }}
            initial={{
              x: getRandomPosition(),
              y: getRandomPosition(),
              scale: 0,
            }}
            animate={{
              x: [getRandomPosition(), getRandomPosition()],
              y: [getRandomPosition(), getRandomPosition()],
              scale: [1, 1.2, 1],
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
            <span className='tracking-wider uppercase'>
              Cutting-Edge Technology
            </span>
          </motion.div>
          <motion.h2
            className='text-4xl font-bold mb-6 bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Advanced IoT Technologies
          </motion.h2>
          <motion.p
            className='text-xl text-white/80'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our IoT solutions leverage the latest technologies to deliver
            intelligent, secure, and scalable connected systems.
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all group'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className='flex flex-col items-center text-center'>
                <motion.div
                  className='w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4'
                  style={{ backgroundColor: tech.color }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className='text-xl font-bold text-white mb-3'>
                  {tech.name}
                </h3>
                <p className='text-white/70 text-sm'>{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Integration Diagram */}
        <motion.div
          className='mt-20 max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className='text-2xl font-bold text-center mb-8 text-white'>
            Integrated IoT Technology Stack
          </h3>

          <div className='relative'>
            {/* Stack Layers */}
            {[
              { name: 'Applications', color: '#0984E3', icon: '📱' },
              { name: 'Analytics & AI', color: '#00B894', icon: '📊' },
              { name: 'Cloud Platform', color: '#6C5CE7', icon: '☁️' },
              { name: 'Connectivity', color: '#FD79A8', icon: '📶' },
              { name: 'Edge Computing', color: '#FF7675', icon: '💻' },
              { name: 'Devices & Sensors', color: '#20BF6B', icon: '📡' },
            ].map((layer, index) => (
              <motion.div
                key={index}
                className='flex items-center mb-4 last:mb-0'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div
                  className='w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4'
                  style={{ backgroundColor: layer.color }}
                >
                  {layer.icon}
                </div>
                <div className='flex-1'>
                  <div
                    className='h-12 rounded-lg flex items-center px-4'
                    style={{ backgroundColor: `${layer.color}40` }}
                  >
                    <h4 className='font-bold text-white'>{layer.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Vertical Integration Line */}
            <motion.div
              className='absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#0984E3] to-[#20BF6B]'
              style={{ zIndex: -1 }}
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
