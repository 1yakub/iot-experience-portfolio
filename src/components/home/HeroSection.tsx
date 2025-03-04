'use client'

import Link from 'next/link'
import {
  motion,
  TargetAndTransition,
  Transition,
  Variants,
  useAnimation,
} from 'framer-motion'
import CTAButton from '../shared/CTAButton'
import { useEffect, useState, useCallback, useMemo, useRef } from 'react'

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
  size: number
  color: string
  speed: number
}

interface Connection {
  from: number
  to: number
}

interface WindowSize {
  width: number
  height: number
}

interface Stat {
  number: string
  label: string
  icon: React.ReactNode
  color: string
}

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
  link: string
  benefits: readonly string[]
  color: string
}

interface ParticleAnimation {
  initial: { x: number; y: number; scale: number; opacity: number }
  animate: TargetAndTransition
  transition: Transition
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const

const PARTICLE_COUNT = 15
const PARTICLE_MIN_DURATION = 15
const PARTICLE_MAX_DURATION = 25
const PARTICLE_DELAY_INCREMENT = 0.5
const CONNECTION_DISTANCE = 150
const CONTAINER_ANIMATION_DURATION = 1

const DEFAULT_WINDOW_SIZE = {
  width: 1000,
  height: 1000,
} as const

const stats: readonly Stat[] = [
  {
    number: '10B+',
    label: 'Connected Devices',
    color: 'from-blue-400 to-cyan-400',
    icon: (
      <svg
        className='w-8 h-8 text-blue-400'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
        />
      </svg>
    ),
  },
  {
    number: '85%',
    label: 'Efficiency Increase',
    color: 'from-green-400 to-emerald-500',
    icon: (
      <svg
        className='w-8 h-8 text-green-400'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
        />
      </svg>
    ),
  },
] as const

const features: readonly Feature[] = [
  {
    title: 'Smart Home Automation',
    description:
      'Transform your living space with intelligent automation and connected devices.',
    icon: (
      <svg
        className='w-10 h-10 text-blue-400'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        />
      </svg>
    ),
    link: '/services#smart-home',
    benefits: ['Energy Efficiency', 'Remote Control', 'Smart Security'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Industrial IoT',
    description:
      'Optimize manufacturing processes with real-time data and analytics.',
    icon: (
      <svg
        className='w-10 h-10 text-purple-400'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
        />
      </svg>
    ),
    link: '/services#industrial',
    benefits: [
      'Process Automation',
      'Predictive Maintenance',
      'Real-time Monitoring',
    ],
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Smart City Solutions',
    description:
      'Build connected communities with intelligent urban infrastructure.',
    icon: (
      <svg
        className='w-10 h-10 text-emerald-400'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
        />
      </svg>
    ),
    link: '/services#smart-city',
    benefits: ['Traffic Management', 'Waste Management', 'Public Safety'],
    color: 'from-emerald-500 to-teal-600',
  },
] as const

const getRandomPosition = (max: number): number => {
  return Math.random() * max
}

const getRandomColor = (): string => {
  const colors = [
    'rgba(56, 189, 248, 0.8)', // sky blue
    'rgba(14, 165, 233, 0.8)', // blue
    'rgba(79, 70, 229, 0.8)', // indigo
    'rgba(168, 85, 247, 0.8)', // purple
    'rgba(236, 72, 153, 0.8)', // pink
    'rgba(16, 185, 129, 0.8)', // emerald
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

const generateParticles = (
  count: number,
  width: number,
  height: number
): Particle[] => {
  // Return empty array for server-side rendering
  if (typeof window === 'undefined') return []

  return Array.from({ length: count }, () => ({
    x: getRandomPosition(width),
    y: getRandomPosition(height),
    targetX: getRandomPosition(width),
    targetY: getRandomPosition(height),
    size: 3 + Math.random() * 5,
    color: getRandomColor(),
    speed: 2 + Math.random() * 3,
  }))
}

const generateConnections = (
  particleCount: number,
  maxConnections: number
): Connection[] => {
  const connections: Connection[] = []

  for (let i = 0; i < particleCount; i++) {
    const connectionCount = Math.floor(Math.random() * 3) + 1
    for (
      let j = 0;
      j < connectionCount && connections.length < maxConnections;
      j++
    ) {
      const to = Math.floor(Math.random() * particleCount)
      if (i !== to) {
        connections.push({ from: i, to })
      }
    }
  }

  return connections
}

const HeroSection: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [connections, setConnections] = useState<Connection[]>([])
  const [activeConnections, setActiveConnections] = useState<Connection[]>([])
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: DEFAULT_WINDOW_SIZE.width,
    height: DEFAULT_WINDOW_SIZE.height,
  })
  const [isClient, setIsClient] = useState(false)

  const networkRef = useRef<HTMLDivElement>(null)
  const dataTransferControls = useAnimation()

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true)

    // Update window size only on client
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Generate particles and connections only on client-side
    const newParticles = generateParticles(
      PARTICLE_COUNT,
      window.innerWidth,
      window.innerHeight
    )
    setParticles(newParticles)
    setConnections(generateConnections(PARTICLE_COUNT, PARTICLE_COUNT * 2))
  }, [])

  // Simulate data transfer animation
  useEffect(() => {
    if (!isClient) return

    let isMounted = true

    const animateDataTransfer = async () => {
      // Only run the animation loop if the component is still mounted
      while (isMounted) {
        await dataTransferControls.start({
          pathLength: [0, 1],
          opacity: [0.2, 0.8, 0.2],
          transition: { duration: 4, ease: 'easeInOut' },
        })
        // Use a fixed timeout instead of random to avoid hydration issues
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
    }

    // Small delay to ensure component is fully mounted
    const timeoutId = setTimeout(() => {
      if (isMounted) {
        animateDataTransfer()
      }
    }, 0)

    // Cleanup function to prevent memory leaks and animations after unmount
    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [dataTransferControls, isClient])

  const handleResize = useCallback(() => {
    if (!isClient) return

    const newSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    setWindowSize(newSize)
    const newParticles = generateParticles(
      PARTICLE_COUNT,
      newSize.width,
      newSize.height
    )
    setParticles(newParticles)
    setConnections(generateConnections(PARTICLE_COUNT, PARTICLE_COUNT * 2))
  }, [isClient])

  useEffect(() => {
    if (!isClient) return

    const newParticles = generateParticles(
      PARTICLE_COUNT,
      windowSize.width,
      windowSize.height
    )
    setParticles(newParticles)
    setConnections(generateConnections(PARTICLE_COUNT, PARTICLE_COUNT * 2))

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize, windowSize.width, windowSize.height, isClient])

  // Update active connections based on particle positions
  useEffect(() => {
    if (!isClient || particles.length === 0) return

    const interval = setInterval(() => {
      const active = connections.filter((conn) => {
        const p1 = particles[conn.from]
        const p2 = particles[conn.to]
        if (!p1 || !p2) return false

        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        return distance < CONNECTION_DISTANCE
      })

      setActiveConnections(active)
    }, 500)

    return () => clearInterval(interval)
  }, [particles, connections, isClient])

  const particleAnimations = useMemo<ParticleAnimation[]>(() => {
    if (!isClient || particles.length === 0) return []

    return particles.map((particle) => ({
      initial: {
        x: particle.x,
        y: particle.y,
        scale: 0,
        opacity: 0,
      },
      animate: {
        x: particle.targetX,
        y: particle.targetY,
        scale: 1,
        opacity: 0.8,
      },
      transition: {
        duration: particle.speed,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    }))
  }, [particles, isClient])

  // Render the component with client-side only animations
  return (
    <section className='relative min-h-screen bg-gradient-to-b from-black via-blue-950 to-indigo-950 overflow-hidden flex items-center py-20'>
      {/* Static content that's safe for SSR */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-black opacity-70'></div>
        <svg
          className='absolute inset-0 w-full h-full opacity-20'
          style={{ zIndex: 0 }}
        >
          <pattern
            id='circuit-pattern'
            x='0'
            y='0'
            width='100'
            height='100'
            patternUnits='userSpaceOnUse'
          >
            <path
              d='M0 50 H100 M50 0 V100 M25 25 H75 M25 75 H75'
              stroke='#4F46E5'
              strokeWidth='0.5'
              fill='none'
            />
            <circle cx='50' cy='50' r='3' fill='#4F46E5' />
            <circle cx='25' cy='25' r='2' fill='#4F46E5' />
            <circle cx='75' cy='25' r='2' fill='#4F46E5' />
            <circle cx='25' cy='75' r='2' fill='#4F46E5' />
            <circle cx='75' cy='75' r='2' fill='#4F46E5' />
          </pattern>
          <rect
            x='0'
            y='0'
            width='100%'
            height='100%'
            fill='url(#circuit-pattern)'
          />
        </svg>
      </div>

      {/* Dynamic content that should only render on client */}
      {isClient && (
        <div ref={networkRef} className='absolute inset-0 overflow-hidden'>
          <motion.div
            className='absolute inset-0'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            transition={{ duration: CONTAINER_ANIMATION_DURATION }}
          >
            {/* Connection Lines */}
            <svg className='absolute inset-0 w-full h-full'>
              {activeConnections.map((conn, i) => {
                const p1 = particles[conn.from]
                const p2 = particles[conn.to]
                if (!p1 || !p2) return null

                return (
                  <motion.line
                    key={`conn-${i}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke={p1.color}
                    strokeWidth={0.8}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 0.5 }}
                  />
                )
              })}

              {/* Data Transfer Animation */}
              {activeConnections.slice(0, 5).map((conn, i) => {
                const p1 = particles[conn.from]
                const p2 = particles[conn.to]
                if (!p1 || !p2) return null

                return (
                  <motion.path
                    key={`data-${i}`}
                    d={`M${p1.x},${p1.y} L${p2.x},${p2.y}`}
                    stroke='#38BDF8'
                    strokeWidth={2}
                    strokeDasharray='6,6'
                    strokeLinecap='round'
                    fill='none'
                    animate={dataTransferControls}
                    style={{ pathLength: 0, opacity: 0.2 }}
                  />
                )
              })}
            </svg>

            {/* Particles */}
            {particles.map((particle, i) => (
              <motion.div
                key={`particle-${i}`}
                className='absolute rounded-full shadow-glow'
                style={{
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: particle.color,
                  boxShadow: `0 0 8px ${particle.color}`,
                  left: 0,
                  top: 0,
                  x: particle.x,
                  y: particle.y,
                }}
                animate={{
                  x: particle.targetX,
                  y: particle.targetY,
                  boxShadow: [
                    `0 0 5px ${particle.color}`,
                    `0 0 10px ${particle.color}`,
                    `0 0 5px ${particle.color}`,
                  ],
                }}
                transition={{
                  duration: particle.speed,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  },
                }}
              />
            ))}
          </motion.div>
        </div>
      )}

      {/* Content section */}
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column */}
            <motion.div
              className='space-y-8'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className='relative'>
                <motion.div
                  className='inline-flex items-center space-x-2 text-white/90 text-sm font-medium mb-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 px-4 py-2 rounded-full border border-blue-500/30 backdrop-blur-sm'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className='flex h-2 w-2 rounded-full bg-blue-500 animate-pulse'></span>
                  <span className='tracking-wider uppercase'>
                    Enterprise IoT Solutions
                  </span>
                </motion.div>
                <motion.h1
                  className='text-5xl lg:text-7xl font-bold leading-tight'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className='block text-white mb-2'>Transforming</span>
                  <span className='bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent'>
                    Industries with IoT
                  </span>
                </motion.h1>

                {/* Animated Gradient Blob */}
                {isClient && (
                  <>
                    <div className='absolute -z-10 top-0 left-0 w-72 h-72 bg-blue-600 rounded-full filter blur-[128px] opacity-20 animate-pulse'></div>
                    <div
                      className='absolute -z-10 bottom-0 right-0 w-72 h-72 bg-indigo-600 rounded-full filter blur-[128px] opacity-20 animate-pulse'
                      style={{ animationDelay: '1s' }}
                    ></div>
                  </>
                )}
              </div>

              <motion.p
                className='text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Seamlessly connect devices, analyze real-time data, and automate
                processes with our cutting-edge IoT ecosystem for the
                intelligent enterprise.
              </motion.p>

              <motion.div
                className='flex flex-wrap gap-6 items-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <CTAButton href='/contact' variant='primary' size='lg' darkBg>
                  <span className='flex items-center'>
                    <span>Schedule a Demo</span>
                    <svg
                      className='ml-2 w-5 h-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </span>
                </CTAButton>

                <CTAButton
                  href='/services'
                  variant='secondary'
                  size='lg'
                  darkBg
                >
                  <span className='flex items-center'>
                    <span>Explore Solutions</span>
                    <svg
                      className='ml-2 w-5 h-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </span>
                </CTAButton>
              </motion.div>

              <motion.div
                className='grid grid-cols-2 gap-4 max-w-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className='backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400/70 transition-all group'
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className='mb-2'>{stat.icon}</div>
                    <div
                      className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}
                    >
                      {stat.number}
                    </div>
                    <div className='text-white/80 text-sm uppercase tracking-wider'>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - IoT Device Visualization */}
            <motion.div
              className='relative lg:block hidden'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Connected Devices Visualization */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <svg width='400' height='400' viewBox='0 0 400 400'>
                  {/* Outer rings */}
                  <circle
                    cx='200'
                    cy='200'
                    r='150'
                    fill='none'
                    stroke='rgba(59, 130, 246, 0.2)'
                    strokeWidth='1'
                  />
                  <circle
                    cx='200'
                    cy='200'
                    r='100'
                    fill='none'
                    stroke='rgba(59, 130, 246, 0.3)'
                    strokeWidth='1'
                  />
                  <circle
                    cx='200'
                    cy='200'
                    r='50'
                    fill='none'
                    stroke='rgba(59, 130, 246, 0.4)'
                    strokeWidth='1'
                  />

                  {/* Animated rings */}
                  <motion.circle
                    cx='200'
                    cy='200'
                    r='150'
                    fill='none'
                    stroke='rgba(59, 130, 246, 0.5)'
                    strokeWidth='2'
                    strokeDasharray='942.5'
                    animate={{
                      strokeDashoffset: [942.5, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  <motion.circle
                    cx='200'
                    cy='200'
                    r='100'
                    fill='none'
                    stroke='rgba(99, 102, 241, 0.5)'
                    strokeWidth='2'
                    strokeDasharray='628.3'
                    animate={{
                      strokeDashoffset: [628.3, 0],
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 45,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Central hub */}
                  <motion.circle
                    cx='200'
                    cy='200'
                    r='15'
                    fill='rgba(59, 130, 246, 0.8)'
                    animate={{
                      r: [15, 18, 15],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </svg>
              </div>

              <div className='grid grid-cols-1 gap-6 transform rotate-3'>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                  >
                    <Link
                      href={feature.link}
                      className='feature-card backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-lg border border-blue-500/30 hover:border-blue-400/70 group block relative overflow-hidden'
                    >
                      {/* Animated gradient background on hover */}
                      <div
                        className='absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10'
                        style={{
                          backgroundImage: `linear-gradient(to right, ${feature.color})`,
                        }}
                      ></div>

                      <div className='flex items-start space-x-4'>
                        <div className='transform group-hover:scale-110 transition-transform'>
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className='text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors'>
                            {feature.title}
                          </h3>
                          <p className='text-white/80 text-sm mb-4'>
                            {feature.description}
                          </p>
                          <div className='flex flex-wrap gap-2'>
                            {feature.benefits.map((benefit, i) => (
                              <span
                                key={i}
                                className='text-xs bg-blue-500/10 text-white/90 px-2 py-1 rounded group-hover:bg-blue-500/20 transition-colors'
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Animated arrow on hover */}
                      <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity'>
                        <svg
                          className='w-5 h-5 text-blue-400'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className='flex flex-col items-center'>
          <span className='text-white/50 text-sm tracking-wider uppercase'>
            Scroll
          </span>
          <div className='w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent animate-pulse' />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
