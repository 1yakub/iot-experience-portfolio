'use client'

import Link from 'next/link'
import { motion, TargetAndTransition, Transition, Variants } from 'framer-motion'
import CTAButton from '../shared/CTAButton'
import { useEffect, useState, useCallback, useMemo } from 'react'

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
}

interface WindowSize {
  width: number
  height: number
}

interface Stat {
  number: string
  label: string
  icon: string
}

interface Feature {
  title: string
  description: string
  icon: string
  link: string
  benefits: readonly string[]
}

interface ParticleAnimation {
  initial: { x: number; y: number; scale: number }
  animate: TargetAndTransition
  transition: Transition
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
} as const;

const PARTICLE_COUNT = 6;
const PARTICLE_MIN_DURATION = 5;
const PARTICLE_MAX_DURATION = 10;
const PARTICLE_DELAY_INCREMENT = 0.5;
const CONTAINER_ANIMATION_DURATION = 1;

const DEFAULT_WINDOW_SIZE = {
  width: 1000,
  height: 1000,
} as const;

const stats: readonly Stat[] = [
  { number: "500+", label: "Projects Completed", icon: "🚀" },
  { number: "50+", label: "Happy Clients", icon: "🌟" },
] as const;

const features: readonly Feature[] = [
  {
    title: "Smart Home Automation",
    description: "Transform your living space with intelligent automation and connected devices.",
    icon: "🏠",
    link: "/services#smart-home",
    benefits: ["Energy Efficiency", "Remote Control", "Smart Security"]
  },
  {
    title: "Industrial IoT",
    description: "Optimize manufacturing processes with real-time data and analytics.",
    icon: "🏭",
    link: "/services#industrial",
    benefits: ["Process Automation", "Predictive Maintenance", "Real-time Monitoring"]
  },
  {
    title: "Smart City Solutions",
    description: "Build connected communities with intelligent urban infrastructure.",
    icon: "🌆",
    link: "/services#smart-city",
    benefits: ["Traffic Management", "Waste Management", "Public Safety"]
  },
] as const;

const getRandomPosition = (max: number): number => {
  return Math.random() * max;
};

const generateParticles = (count: number, width: number, height: number): Particle[] => {
  if (typeof window === 'undefined') return [];
  
  return Array.from({ length: count }, () => ({
    x: getRandomPosition(width),
    y: getRandomPosition(height),
    targetX: getRandomPosition(width),
    targetY: getRandomPosition(height),
  }));
};

const HeroSection: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [windowSize, setWindowSize] = useState<WindowSize>(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : DEFAULT_WINDOW_SIZE.width,
    height: typeof window !== 'undefined' ? window.innerHeight : DEFAULT_WINDOW_SIZE.height,
  }));

  const handleResize = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const newSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    
    setWindowSize(newSize);
    setParticles(generateParticles(PARTICLE_COUNT, newSize.width, newSize.height));
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setParticles(generateParticles(PARTICLE_COUNT, windowSize.width, windowSize.height));
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const particleAnimations = useMemo<ParticleAnimation[]>(() => 
    particles.map((particle) => ({
      initial: { 
        x: particle.x,
        y: particle.y,
        scale: 0
      },
      animate: { 
        x: particle.targetX,
        y: particle.targetY,
        scale: [0, 1, 0]
      } as const,
      transition: {
        duration: PARTICLE_MIN_DURATION + Math.random() * (PARTICLE_MAX_DURATION - PARTICLE_MIN_DURATION),
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      } as const
    })), [particles]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#2D3436]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <motion.div 
        className="absolute inset-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: CONTAINER_ANIMATION_DURATION }}
      >
        {particles.map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="floating-particle w-4 h-4 rounded-full bg-gradient-to-r from-[#0984E3] to-[#00B894] absolute"
            initial={particleAnimations[i].initial}
            animate={particleAnimations[i].animate}
            transition={{
              ...particleAnimations[i].transition,
              delay: i * PARTICLE_DELAY_INCREMENT
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.div 
                  className="inline-flex items-center space-x-2 text-white/80 text-sm font-medium mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="flex h-2 w-2 rounded-full bg-[#00B894] animate-pulse"></span>
                  <span className="tracking-wider uppercase">Welcome to IoT-X</span>
                </motion.div>
                <motion.h1 
                  className="text-5xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="block text-white mb-2">
                    Transforming the
                  </span>
                  <span className="bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent">
                    Future with IoT
                  </span>
                </motion.h1>
                <div className="absolute -z-10 top-0 left-0 w-72 h-72 bg-[#0984E3] rounded-full filter blur-[128px] opacity-20"></div>
              </div>

              <motion.p 
                className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Revolutionizing industries through intelligent connectivity, real-time analytics, and automated solutions.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-6 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <CTAButton 
                  href="/contact" 
                  variant="primary"
                  size="lg"
                  darkBg
                >
                  Schedule a Demo
                </CTAButton>
                
                <CTAButton 
                  href="/services" 
                  variant="secondary"
                  size="lg"
                  darkBg
                >
                  Explore Solutions
                </CTAButton>
              </motion.div>

              <motion.div 
                className="grid grid-cols-2 gap-4 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="backdrop-blur-sm bg-white/5 rounded-lg p-6 border-2 border-[#2D3436] hover:border-[#0984E3] transition-all group"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              className="relative lg:block hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="grid grid-cols-1 gap-6 transform rotate-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                  >
                    <Link
                      href={feature.link}
                      className="feature-card backdrop-blur-sm bg-white/5 p-6 rounded-lg border-2 border-[#2D3436] hover:border-[#0984E3] group block"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                          <p className="text-white/80 text-sm mb-4">{feature.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {feature.benefits.map((benefit, i) => (
                              <span key={i} className="text-xs bg-white/10 text-white/90 px-2 py-1 rounded">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/50 text-sm tracking-wider uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection 