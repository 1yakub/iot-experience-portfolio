'use client'

import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// Interface for connection lines
interface ConnectionLine {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
  duration: number
  delay: number
}

const connectivityOptions = [
  {
    title: '5G & LTE',
    description:
      'High-speed cellular connectivity for mobile and remote IoT deployments with wide coverage.',
    icon: '📶',
    color: 'from-blue-500 to-indigo-600',
    features: [
      'Up to 10 Gbps data rates',
      'Ultra-low latency (1-10ms)',
      'Massive device connectivity',
      'Network slicing for IoT',
    ],
    range: 'Wide Area',
    power: 'Medium-High',
    bandwidth: 'High',
  },
  {
    title: 'LoRaWAN',
    description:
      'Long Range Wide Area Network protocol designed for low-power, long-range IoT applications.',
    icon: '🔋',
    color: 'from-purple-500 to-pink-500',
    features: [
      '10+ km range in rural areas',
      '10-year battery life potential',
      'Secure bi-directional communication',
      'Public and private network options',
    ],
    range: 'Very Long',
    power: 'Very Low',
    bandwidth: 'Low',
  },
  {
    title: 'Wi-Fi 6',
    description:
      'Latest Wi-Fi standard offering improved performance in dense IoT environments.',
    icon: '📡',
    color: 'from-green-500 to-teal-500',
    features: [
      '9.6 Gbps maximum data rate',
      'Improved multi-device handling',
      'Better battery efficiency',
      'Backward compatibility',
    ],
    range: 'Medium',
    power: 'Medium',
    bandwidth: 'Very High',
  },
  {
    title: 'Bluetooth 5.2',
    description:
      'Enhanced short-range wireless technology ideal for consumer and industrial IoT applications.',
    icon: '🔷',
    color: 'from-blue-400 to-blue-600',
    features: [
      '2x speed (up to 50 Mbps)',
      '4x range (up to 400m)',
      '8x broadcasting capacity',
      'Direction finding capability',
    ],
    range: 'Short-Medium',
    power: 'Low',
    bandwidth: 'Medium',
  },
  {
    title: 'Zigbee & Thread',
    description:
      'Mesh networking protocols designed specifically for IoT device communication.',
    icon: '🕸️',
    color: 'from-yellow-500 to-orange-500',
    features: [
      'Self-healing mesh networks',
      'AES-128 encryption',
      'Low power consumption',
      'High reliability with redundant paths',
    ],
    range: 'Short',
    power: 'Very Low',
    bandwidth: 'Low',
  },
  {
    title: 'Satellite IoT',
    description:
      'Global connectivity solution for remote locations without terrestrial network coverage.',
    icon: '🛰️',
    color: 'from-gray-600 to-gray-800',
    features: [
      'Global coverage (oceans, deserts, mountains)',
      'No terrestrial infrastructure needed',
      'Resilient disaster communication',
      'Increasingly affordable options',
    ],
    range: 'Global',
    power: 'High',
    bandwidth: 'Low-Medium',
  },
]

const IoTConnectivitySection = () => {
  const [activeOption, setActiveOption] = useState(0)
  const [connectionLines, setConnectionLines] = useState<ConnectionLine[]>([])
  const isClient = useRef(false)

  // Generate connection lines only on the client side
  useEffect(() => {
    isClient.current = true

    // Generate random connection lines
    const lines: ConnectionLine[] = []
    for (let i = 0; i < 15; i++) {
      lines.push({
        id: i,
        startX: Math.random() * 100,
        startY: Math.random() * 100,
        endX: Math.random() * 100,
        endY: Math.random() * 100,
        duration: 3 + Math.random() * 5,
        delay: Math.random() * 5,
      })
    }

    setConnectionLines(lines)
  }, [])

  return (
    <section className='py-20 bg-gradient-to-b from-[#111827] to-[#1F2937] relative overflow-hidden'>
      {/* Background Network Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <pattern
              id='grid'
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M 40 0 L 0 0 0 40'
                fill='none'
                stroke='white'
                strokeWidth='0.5'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#grid)' />
        </svg>
      </div>

      {/* Animated Connection Lines */}
      <div className='absolute inset-0 overflow-hidden'>
        {isClient.current &&
          connectionLines.map((line) => {
            return (
              <motion.div
                key={line.id}
                className='absolute bg-gradient-to-r from-blue-500/30 to-purple-500/30 h-px'
                style={{
                  left: `${line.startX}%`,
                  top: `${line.startY}%`,
                  width: '0%',
                  transform: `rotate(${
                    Math.atan2(
                      line.endY - line.startY,
                      line.endX - line.startX
                    ) *
                    (180 / Math.PI)
                  }deg)`,
                  transformOrigin: 'left center',
                }}
                animate={{
                  width: [
                    `0%`,
                    `${Math.sqrt(
                      Math.pow(line.endX - line.startX, 2) +
                        Math.pow(line.endY - line.startY, 2)
                    )}%`,
                  ],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: line.duration,
                  repeat: Infinity,
                  delay: line.delay,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
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
            className='inline-flex items-center space-x-2 text-white text-sm font-medium mb-4 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30'
          >
            <span className='flex h-2 w-2 rounded-full bg-blue-500 animate-pulse'></span>
            <span className='tracking-wider uppercase'>
              Seamless Connectivity
            </span>
          </motion.div>
          <motion.h2
            className='text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect Your IoT Devices Anywhere
          </motion.h2>
          <motion.p
            className='text-xl text-white/80'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Choose from multiple connectivity options to ensure your IoT devices
            stay connected in any environment
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
          {/* Left Column - Connectivity Options */}
          <motion.div
            className='lg:col-span-5 space-y-4'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {connectivityOptions.map((option, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  activeOption === index
                    ? 'bg-white/10 border-white/30 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                onClick={() => setActiveOption(index)}
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className='flex items-center'>
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center text-white text-xl mr-4 flex-shrink-0`}
                  >
                    {option.icon}
                  </div>
                  <div>
                    <h3 className='font-bold text-white'>{option.title}</h3>
                    <p className='text-white/60 text-sm line-clamp-1'>
                      {option.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Detailed View */}
          <motion.div
            className='lg:col-span-7'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 p-8'>
              <div className='flex items-center mb-6'>
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${connectivityOptions[activeOption].color} flex items-center justify-center text-white text-3xl mr-6`}
                >
                  {connectivityOptions[activeOption].icon}
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-white mb-1'>
                    {connectivityOptions[activeOption].title}
                  </h3>
                  <p className='text-white/80'>
                    {connectivityOptions[activeOption].description}
                  </p>
                </div>
              </div>

              {/* Key Metrics */}
              <div className='grid grid-cols-3 gap-4 mb-8'>
                <div className='bg-white/5 rounded-lg p-4 text-center'>
                  <div className='text-sm text-white/60 mb-1'>Range</div>
                  <div className='text-lg font-semibold text-white'>
                    {connectivityOptions[activeOption].range}
                  </div>
                </div>
                <div className='bg-white/5 rounded-lg p-4 text-center'>
                  <div className='text-sm text-white/60 mb-1'>Power Usage</div>
                  <div className='text-lg font-semibold text-white'>
                    {connectivityOptions[activeOption].power}
                  </div>
                </div>
                <div className='bg-white/5 rounded-lg p-4 text-center'>
                  <div className='text-sm text-white/60 mb-1'>Bandwidth</div>
                  <div className='text-lg font-semibold text-white'>
                    {connectivityOptions[activeOption].bandwidth}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className='text-lg font-semibold text-white mb-4'>
                  Key Features
                </h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                  {connectivityOptions[activeOption].features.map(
                    (feature, i) => (
                      <div key={i} className='flex items-start'>
                        <svg
                          className='h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0'
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
                        <span className='text-white/80'>{feature}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Connectivity Visualization */}
              <div className='mt-8 relative h-48 rounded-lg bg-gradient-to-b from-black/30 to-black/10 overflow-hidden'>
                <div className='absolute inset-0'>
                  {/* Central Device */}
                  <motion.div
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${connectivityOptions[activeOption].color} flex items-center justify-center text-white text-xl z-20`}
                    animate={{
                      boxShadow: [
                        '0 0 0 0px rgba(59, 130, 246, 0.2)',
                        '0 0 0 10px rgba(59, 130, 246, 0)',
                        '0 0 0 0px rgba(59, 130, 246, 0)',
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                  >
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
                      />
                    </svg>
                  </motion.div>

                  {/* Connection Points - Using fixed positions instead of random */}
                  {isClient.current &&
                    [...Array(8)].map((_, i) => {
                      const angle = i * 45 * (Math.PI / 180)
                      const distance = 80
                      const x = Math.cos(angle) * distance
                      const y = Math.sin(angle) * distance

                      return (
                        <motion.div
                          key={i}
                          className='absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-white/50'
                          style={{
                            marginLeft: -6,
                            marginTop: -6,
                            x: x,
                            y: y,
                          }}
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      )
                    })}

                  {/* Connection Lines - Using fixed positions instead of random */}
                  {isClient.current &&
                    [...Array(8)].map((_, i) => {
                      const angle = i * 45 * (Math.PI / 180)
                      const distance = 80
                      const x = Math.cos(angle) * distance
                      const y = Math.sin(angle) * distance

                      return (
                        <motion.div
                          key={`line-${i}`}
                          className='absolute top-1/2 left-1/2 bg-gradient-to-r from-blue-400/80 to-purple-500/80 h-0.5'
                          style={{
                            width: distance,
                            transformOrigin: 'left center',
                            rotate: `${angle * (180 / Math.PI)}deg`,
                          }}
                          animate={{
                            opacity: [0, 0.8, 0],
                            scaleX: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      )
                    })}
                </div>

                {/* Protocol Name */}
                <div className='absolute bottom-4 left-0 right-0 text-center'>
                  <span className='inline-block px-3 py-1 bg-black/30 rounded-full text-white/90 text-sm'>
                    {connectivityOptions[activeOption].title} Protocol
                  </span>
                </div>
              </div>
            </div>

            {/* Use Case */}
            <motion.div
              className='mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h4 className='text-lg font-semibold text-white mb-3'>
                Ideal Use Cases
              </h4>
              <div className='flex flex-wrap gap-2'>
                {(() => {
                  const option = connectivityOptions[activeOption]
                  let useCases: string[] = []

                  if (option.title === '5G & LTE') {
                    useCases = [
                      'Connected vehicles',
                      'Smart cities',
                      'Industrial automation',
                      'Remote healthcare',
                    ]
                  } else if (option.title === 'LoRaWAN') {
                    useCases = [
                      'Smart agriculture',
                      'Environmental monitoring',
                      'Smart metering',
                      'Asset tracking',
                    ]
                  } else if (option.title === 'Wi-Fi 6') {
                    useCases = [
                      'Smart homes',
                      'Office automation',
                      'Retail analytics',
                      'HD video surveillance',
                    ]
                  } else if (option.title === 'Bluetooth 5.2') {
                    useCases = [
                      'Wearables',
                      'Indoor positioning',
                      'Smart appliances',
                      'Health devices',
                    ]
                  } else if (option.title === 'Zigbee & Thread') {
                    useCases = [
                      'Home automation',
                      'Smart lighting',
                      'HVAC control',
                      'Security systems',
                    ]
                  } else if (option.title === 'Satellite IoT') {
                    useCases = [
                      'Maritime tracking',
                      'Remote oil & gas',
                      'Wilderness monitoring',
                      'Emergency response',
                    ]
                  }

                  return useCases.map((useCase, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm'
                    >
                      {useCase}
                    </span>
                  ))
                })()}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Multi-Protocol Support */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className='text-2xl font-bold text-white mb-6'>
            Multi-Protocol Support
          </h3>
          <p className='text-white/70 max-w-3xl mx-auto mb-8'>
            Our IoT platform supports multiple connectivity protocols
            simultaneously, allowing you to choose the best option for each use
            case while managing all devices through a single interface.
          </p>

          <motion.button
            className='px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Connectivity Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default IoTConnectivitySection
