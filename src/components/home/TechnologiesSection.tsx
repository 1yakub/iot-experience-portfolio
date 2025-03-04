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
        height: window.innerHeight
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
    { name: 'IoT Sensors', icon: '📡', color: '#0984E3' },
    { name: 'Cloud Computing', icon: '☁️', color: '#00B894' },
    { name: 'AI & ML', icon: '🤖', color: '#6C5CE7' },
    { name: 'Data Analytics', icon: '📊', color: '#FF7675' },
    { name: 'Edge Computing', icon: '💻', color: '#FD79A8' },
    { name: 'Blockchain', icon: '🔗', color: '#20BF6B' }
  ]

  return (
    <section className="py-20 bg-[#2D3436] relative overflow-hidden">
      {/* Background Animation */}
      {isClient && technologies.map((tech, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-10"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            backgroundColor: tech.color
          }}
          initial={{ 
            x: getRandomPosition(),
            y: getRandomPosition(),
            scale: 0
          }}
          animate={{
            x: [
              getRandomPosition(),
              getRandomPosition()
            ],
            y: [
              getRandomPosition(),
              getRandomPosition()
            ],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-white/80 text-sm font-medium mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#00B894] animate-pulse"></span>
            <span className="tracking-wider uppercase">Our Technologies</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Cutting-Edge Solutions
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Leveraging the latest technologies to build innovative IoT solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <motion.div 
                  className="text-4xl mb-4"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <div className="h-1 w-12 mx-auto rounded-full" style={{ backgroundColor: tech.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 