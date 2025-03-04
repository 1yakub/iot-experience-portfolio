'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { number: "500+", label: "Projects Completed", icon: "🚀" },
  { number: "50+", label: "Happy Clients", icon: "🌟" },
  { number: "10+", label: "Years Experience", icon: "⚡" },
  { number: "24/7", label: "Support", icon: "💪" },
];

export default function StatsSection() {
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

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    color: i % 2 === 0 ? '#0984E3' : '#00B894'
  }))

  return (
    <section className="relative py-20 bg-[#2D3436] overflow-hidden">
      {/* Animated Particles */}
      {isClient && particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color
          }}
          initial={{ 
            x: getRandomPosition(),
            y: getRandomPosition(),
            opacity: 0 
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
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "100+", label: "Active Projects" },
            { number: "50+", label: "Global Partners" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/80 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 