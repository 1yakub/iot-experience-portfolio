'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const securityFeatures = [
  {
    title: 'End-to-End Encryption',
    description:
      'Secure data transmission with military-grade encryption protocols at every point in the IoT ecosystem.',
    icon: '🔒',
    details: [
      'AES-256 encryption for data at rest',
      'TLS 1.3 for data in transit',
      'Hardware security modules (HSM) integration',
      'Quantum-resistant encryption options',
    ],
  },
  {
    title: 'Zero Trust Architecture',
    description:
      'Implement continuous verification and least privilege access for all devices, users, and data flows.',
    icon: '🛡️',
    details: [
      'Device identity verification',
      'Continuous authentication',
      'Micro-segmentation',
      'Just-in-time access controls',
    ],
  },
  {
    title: 'Threat Intelligence',
    description:
      'Proactively identify and mitigate security threats with AI-powered monitoring and analytics.',
    icon: '🔍',
    details: [
      'Real-time anomaly detection',
      'Behavioral analysis',
      'Automated threat response',
      'Global threat intelligence feeds',
    ],
  },
  {
    title: 'Compliance & Governance',
    description:
      'Meet industry regulations and standards with comprehensive security policies and controls.',
    icon: '📋',
    details: [
      'GDPR, HIPAA, CCPA compliance',
      'ISO 27001 certification',
      'Automated compliance reporting',
      'Security policy enforcement',
    ],
  },
]

const IoTSecuritySection = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [threatIndicators, setThreatIndicators] = useState<
    Array<{ id: number; angle: number; distance: number; x: number; y: number }>
  >([])

  useEffect(() => {
    setIsClient(true)

    // Generate threat indicators on client-side only
    const newThreatIndicators = Array.from({ length: 5 }).map((_, i) => {
      const angle = i * 72 * (Math.PI / 180)
      const distance = 200
      const x = Math.cos(angle) * distance
      const y = Math.sin(angle) * distance

      return {
        id: i,
        angle,
        distance,
        x,
        y,
      }
    })

    setThreatIndicators(newThreatIndicators)
  }, [])

  return (
    <section className='py-20 bg-gradient-to-b from-[#1A202C] to-[#2D3748] relative overflow-hidden'>
      {/* Background Security Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: '30px 30px',
          }}
        />
      </div>

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
            className='inline-flex items-center space-x-2 text-white text-sm font-medium mb-4 bg-red-500/20 px-4 py-2 rounded-full border border-red-500/30'
          >
            <span className='flex h-2 w-2 rounded-full bg-red-500 animate-pulse'></span>
            <span className='tracking-wider uppercase'>
              Enterprise-Grade Security
            </span>
          </motion.div>
          <motion.h2
            className='text-4xl font-bold mb-6 text-white'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Protecting Your IoT Ecosystem
          </motion.h2>
          <motion.p
            className='text-xl text-white/80'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Comprehensive security solutions designed to protect your IoT
            devices, data, and infrastructure from evolving threats
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column - Security Visualization */}
          <motion.div
            className='relative order-2 lg:order-1'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='relative aspect-square max-w-lg mx-auto'>
              {/* Central Shield */}
              <motion.div
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center z-20'
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{
                  scale: [0.8, 1, 0.8],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className='w-32 h-32 bg-[#1A202C] rounded-full flex items-center justify-center'>
                  <svg
                    className='w-16 h-16 text-white'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <motion.path
                      d='M9 12L11 14L15 10'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Orbiting Security Elements - Only render on client side */}
              {isClient &&
                [...Array(3)].map((_, i) => {
                  const radius = 120 + i * 40
                  const duration = 20 - i * 3
                  const delay = i * 2
                  const size = 16 - i * 2

                  return (
                    <motion.div
                      key={i}
                      className='absolute top-1/2 left-1/2 rounded-full border-2 border-white/10'
                      style={{
                        width: radius * 2,
                        height: radius * 2,
                        marginLeft: -radius,
                        marginTop: -radius,
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: delay,
                      }}
                    >
                      {/* Security Nodes */}
                      {[...Array(i + 3)].map((_, j) => {
                        const angle = j * (360 / (i + 3)) * (Math.PI / 180)
                        const x = Math.cos(angle) * radius
                        const y = Math.sin(angle) * radius

                        return (
                          <motion.div
                            key={`node-${i}-${j}`}
                            className='absolute rounded-full bg-white flex items-center justify-center'
                            style={{
                              width: size,
                              height: size,
                              left: radius,
                              top: radius,
                              marginLeft: -size / 2,
                              marginTop: -size / 2,
                              transform: `translate(${x}px, ${y}px)`,
                            }}
                            animate={{
                              scale: [1, 1.5, 1],
                              backgroundColor: [
                                'rgba(255,255,255,0.3)',
                                'rgba(255,255,255,0.8)',
                                'rgba(255,255,255,0.3)',
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.5 + j * 0.7,
                            }}
                          >
                            {j % 4 === 0 && (
                              <svg
                                className='w-2/3 h-2/3 text-[#1A202C]'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                              >
                                <path d='M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z' />
                              </svg>
                            )}
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  )
                })}

              {/* Threat Indicators - Only render on client side */}
              {isClient &&
                threatIndicators.map((threat) => (
                  <motion.div
                    key={`threat-${threat.id}`}
                    className='absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full'
                    style={{
                      x: threat.x,
                      y: threat.y,
                      marginLeft: -8,
                      marginTop: -8,
                    }}
                    animate={{
                      x: [threat.x, 0],
                      y: [threat.y, 0],
                      opacity: [1, 0],
                      scale: [1, 0.5],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      repeatDelay: 3 + Math.random() * 5,
                    }}
                  />
                ))}

              {/* Pulse Effect - Only render on client side */}
              {isClient &&
                [...Array(3)].map((_, i) => (
                  <motion.div
                    key={`pulse-${i}`}
                    className='absolute top-1/2 left-1/2 rounded-full border-2 border-red-500/30'
                    style={{
                      width: 80,
                      height: 80,
                      marginLeft: -40,
                      marginTop: -40,
                    }}
                    initial={{ scale: 0.5, opacity: 0.7 }}
                    animate={{
                      scale: 5,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: 'easeOut',
                    }}
                  />
                ))}
            </div>
          </motion.div>

          {/* Right Column - Security Features */}
          <motion.div
            className='space-y-6 order-1 lg:order-2'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border cursor-pointer transition-all ${
                  activeFeature === index
                    ? 'bg-white/10 border-white/30 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className='flex items-start'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center text-white text-2xl mr-4 flex-shrink-0'>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className='font-bold text-xl text-white mb-2'>
                      {feature.title}
                    </h3>
                    <p className='text-white/70 mb-4'>{feature.description}</p>

                    {activeFeature === index && (
                      <motion.div
                        className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-4'
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.details.map((detail, i) => (
                          <div key={i} className='flex items-start'>
                            <svg
                              className='h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0'
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
                            <span className='text-white/80 text-sm'>
                              {detail}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Security Certification Badges */}
            <motion.div
              className='flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-white/10'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {['ISO 27001', 'GDPR', 'SOC 2', 'HIPAA'].map((cert, i) => (
                <div
                  key={i}
                  className='px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-white/70 text-xs font-medium flex items-center'
                >
                  <svg
                    className='w-4 h-4 mr-2 text-green-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                  {cert} Compliant
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Security Approach */}
        <motion.div
          className='mt-20 max-w-5xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className='text-2xl font-bold text-white text-center mb-10'>
            Our Security Approach
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              {
                title: 'Secure by Design',
                description:
                  'Security built into every layer of our IoT platform from hardware to cloud',
                icon: '🔧',
              },
              {
                title: 'Continuous Monitoring',
                description:
                  '24/7 security operations center with automated threat detection and response',
                icon: '👁️',
              },
              {
                title: 'Regular Audits',
                description:
                  'Comprehensive security assessments and penetration testing by third-party experts',
                icon: '📊',
              },
            ].map((approach, index) => (
              <motion.div
                key={index}
                className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className='text-3xl mb-4 flex justify-center'>
                  {approach.icon}
                </div>
                <h3 className='text-lg font-bold text-white mb-2'>
                  {approach.title}
                </h3>
                <p className='text-white/70 text-sm'>{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            className='px-8 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Security Assessment
          </motion.button>
          <p className='mt-4 text-white/50 text-sm'>
            Comprehensive security audit for your IoT infrastructure
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default IoTSecuritySection
