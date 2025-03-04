'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const analyticsCapabilities = [
  {
    title: 'Predictive Analytics',
    description:
      'Anticipate equipment failures, forecast demand patterns, and optimize operations with advanced predictive models.',
    icon: '📊',
    color: 'from-[#0984E3] to-[#00B894]',
    features: [
      'Machine learning-based anomaly detection',
      'Time-series forecasting with 95%+ accuracy',
      'Preventive maintenance scheduling',
      'Automated alert thresholds',
    ],
    visualization: 'predictive',
  },
  {
    title: 'Real-time Processing',
    description:
      'Process and analyze millions of data points per second with our distributed stream processing architecture.',
    icon: '⚡',
    color: 'from-[#6C5CE7] to-[#FD79A8]',
    features: [
      'Sub-10ms processing latency',
      'Horizontal scaling to billions of events',
      'Edge-to-cloud processing pipeline',
      'Complex event processing',
    ],
    visualization: 'realtime',
  },
  {
    title: 'AI-Powered Insights',
    description:
      'Transform raw IoT data into actionable business intelligence with our AI-driven analytics platform.',
    icon: '🧠',
    color: 'from-[#FF7675] to-[#20BF6B]',
    features: [
      'Natural language query interface',
      'Automated insight generation',
      'Computer vision for visual inspection',
      'Reinforcement learning for optimization',
    ],
    visualization: 'ai',
  },
]

// Predefined curve values to replace random values
const curveOffsets = [
  { y: 10, offset: 8 },
  { y: 15, offset: 2 },
  { y: 20, offset: -6 },
  { y: 25, offset: 2 },
  { y: 30, offset: 1 },
  { y: 35, offset: -3 },
  { y: 40, offset: 5 },
  { y: 45, offset: -2 },
  { y: 50, offset: 4 },
  { y: 55, offset: -1 },
  { y: 60, offset: 3 },
  { y: 65, offset: -4 },
  { y: 70, offset: 2 },
  { y: 75, offset: -3 },
  { y: 80, offset: 1 },
]

const IoTAnalyticsSection = () => {
  const [activeCapability, setActiveCapability] = useState(0)
  const [animationProgress, setAnimationProgress] = useState(0)

  // Animation for the visualization
  const startAnimation = () => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 0.01
      setAnimationProgress(progress)
      if (progress >= 1) {
        clearInterval(interval)
        setTimeout(() => {
          setAnimationProgress(0)
          startAnimation()
        }, 1000)
      }
    }, 50)
    return () => clearInterval(interval)
  }

  return (
    <section className='py-20 bg-[#2D3436] relative overflow-hidden'>
      {/* Background Animation */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-grid-pattern opacity-10' />

        {/* Data Flow Animation */}
        <svg className='absolute inset-0 w-full h-full' style={{ zIndex: 0 }}>
          <defs>
            <linearGradient
              id='analyticsGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#0984E3' />
              <stop offset='100%' stopColor='#00B894' />
            </linearGradient>
          </defs>

          {/* Data Flow Lines */}
          {Array.from({ length: 15 }).map((_, i) => {
            const { y, offset } = curveOffsets[i] || {
              y: 10 + i * 5,
              offset: 0,
            }
            return (
              <motion.path
                key={i}
                d={`M 0,${y} Q 50,${y + offset} 100,${y}`}
                stroke='url(#analyticsGradient)'
                strokeWidth='1'
                strokeDasharray='5,5'
                initial={{ pathLength: 0, opacity: 0.3 }}
                animate={{
                  pathLength: [0, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  pathLength: 1,
                  strokeDashoffset: 0,
                  vectorEffect: 'non-scaling-stroke',
                }}
              />
            )
          })}
        </svg>
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
            className='inline-flex items-center space-x-2 text-white text-sm font-medium mb-4 bg-white/10 px-4 py-2 rounded-full border border-white/20'
          >
            <span className='flex h-2 w-2 rounded-full bg-[#00B894] animate-pulse'></span>
            <span className='tracking-wider uppercase'>Advanced Analytics</span>
          </motion.div>
          <motion.h2
            className='text-4xl font-bold mb-6 bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            IoT Analytics & Artificial Intelligence
          </motion.h2>
          <motion.p
            className='text-xl text-white/80'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Transform raw IoT data into actionable insights with our advanced
            analytics and AI capabilities
          </motion.p>
        </motion.div>

        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column - Analytics Capabilities */}
            <motion.div
              className='space-y-6'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {analyticsCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl border cursor-pointer transition-all ${
                    activeCapability === index
                      ? 'bg-white/10 border-white/30 shadow-lg'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveCapability(index)}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className='flex items-start'>
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${capability.color} flex items-center justify-center text-white text-2xl mr-4 flex-shrink-0`}
                    >
                      {capability.icon}
                    </div>
                    <div>
                      <h3 className='font-bold text-xl text-white mb-2'>
                        {capability.title}
                      </h3>
                      <p className='text-white/70 mb-4'>
                        {capability.description}
                      </p>

                      {activeCapability === index && (
                        <motion.div
                          className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-4'
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          {capability.features.map((feature, i) => (
                            <div key={i} className='flex items-start'>
                              <svg
                                className='h-5 w-5 text-[#00B894] mr-2 mt-0.5 flex-shrink-0'
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
                                {feature}
                              </span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column - Visualization */}
            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onViewportEnter={() => {
                startAnimation()
                return () => {}
              }}
            >
              <div className='bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 aspect-square'>
                {/* Visualization based on active capability */}
                <div className='relative w-full h-full p-6'>
                  {activeCapability === 0 && (
                    <div className='w-full h-full flex flex-col'>
                      <div className='text-white/80 text-sm mb-4'>
                        Predictive Maintenance Model
                      </div>

                      {/* Predictive Analytics Visualization */}
                      <div className='flex-1 relative'>
                        {/* Time Series Chart */}
                        <svg className='w-full h-full' viewBox='0 0 100 60'>
                          {/* Grid Lines */}
                          {[...Array(6)].map((_, i) => (
                            <line
                              key={`h-${i}`}
                              x1='0'
                              y1={i * 10}
                              x2='100'
                              y2={i * 10}
                              stroke='rgba(255,255,255,0.1)'
                              strokeWidth='0.5'
                            />
                          ))}
                          {[...Array(11)].map((_, i) => (
                            <line
                              key={`v-${i}`}
                              x1={i * 10}
                              y1='0'
                              x2={i * 10}
                              y2='60'
                              stroke='rgba(255,255,255,0.1)'
                              strokeWidth='0.5'
                            />
                          ))}

                          {/* Historical Data Line */}
                          <motion.path
                            d='M0,30 C10,35 20,25 30,28 C40,31 50,20 60,25'
                            fill='none'
                            stroke='#0984E3'
                            strokeWidth='2'
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2 }}
                          />

                          {/* Prediction Line (dashed) */}
                          <motion.path
                            d='M60,25 C70,30 80,15 90,10 C100,5'
                            fill='none'
                            stroke='#00B894'
                            strokeWidth='2'
                            strokeDasharray='4,4'
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: animationProgress }}
                            transition={{ duration: 0.1 }}
                          />

                          {/* Threshold Line */}
                          <line
                            x1='0'
                            y1='45'
                            x2='100'
                            y2='45'
                            stroke='#FF7675'
                            strokeWidth='1.5'
                            strokeDasharray='5,3'
                          />

                          {/* Alert Point */}
                          <motion.circle
                            cx='85'
                            cy='10'
                            r='2.5'
                            fill='#FF7675'
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.5, 1] }}
                            transition={{ duration: 0.5, delay: 2 }}
                          />

                          {/* Alert Pulse */}
                          <motion.circle
                            cx='85'
                            cy='10'
                            r='2.5'
                            fill='none'
                            stroke='#FF7675'
                            strokeWidth='1'
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 3, opacity: 0 }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 2,
                            }}
                          />
                        </svg>

                        {/* Legend */}
                        <div className='absolute bottom-0 left-0 right-0 flex justify-center space-x-6 text-xs text-white/70'>
                          <div className='flex items-center'>
                            <div className='w-3 h-3 bg-[#0984E3] mr-2'></div>
                            <span>Historical Data</span>
                          </div>
                          <div className='flex items-center'>
                            <div className='w-3 h-3 bg-[#00B894] mr-2'></div>
                            <span>Prediction</span>
                          </div>
                          <div className='flex items-center'>
                            <div className='w-3 h-3 bg-[#FF7675] mr-2'></div>
                            <span>Alert Threshold</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeCapability === 1 && (
                    <div className='w-full h-full flex flex-col'>
                      <div className='text-white/80 text-sm mb-4'>
                        Real-time Data Processing
                      </div>

                      {/* Real-time Processing Visualization */}
                      <div className='flex-1 relative'>
                        <div className='absolute inset-0 flex items-center justify-center'>
                          {/* Central Processing Hub */}
                          <motion.div
                            className='w-24 h-24 rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#FD79A8] flex items-center justify-center z-10'
                            animate={{
                              boxShadow: [
                                '0 0 0 0px rgba(108, 92, 231, 0.2)',
                                '0 0 0 20px rgba(108, 92, 231, 0)',
                                '0 0 0 0px rgba(108, 92, 231, 0)',
                              ],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                            }}
                          >
                            <div className='text-white text-xl font-bold'>
                              IoT Hub
                            </div>
                          </motion.div>

                          {/* Data Streams */}
                          {[...Array(8)].map((_, i) => {
                            const angle = (i * Math.PI) / 4
                            const x1 = Math.cos(angle) * 60
                            const y1 = Math.sin(angle) * 60
                            const x2 = Math.cos(angle) * 120
                            const y2 = Math.sin(angle) * 120

                            return (
                              <motion.div
                                key={i}
                                className='absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-white'
                                style={{
                                  x: x1,
                                  y: y1,
                                  marginTop: -6,
                                  marginLeft: -6,
                                }}
                                animate={{
                                  x: [x2, x1],
                                  y: [y2, y1],
                                  opacity: [0, 1, 0],
                                  scale: [0.5, 1, 0.5],
                                }}
                                transition={{
                                  duration: 1 + i * 0.2,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                }}
                              />
                            )
                          })}

                          {/* Processing Indicators */}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className='absolute top-1/2 left-1/2 rounded-full border-4 border-white/30'
                              style={{
                                width: (i + 1) * 60,
                                height: (i + 1) * 60,
                                marginTop: -(i + 1) * 30,
                                marginLeft: -(i + 1) * 30,
                              }}
                              animate={{
                                rotate: 360,
                                borderColor: [
                                  'rgba(255,255,255,0.1)',
                                  'rgba(255,255,255,0.3)',
                                  'rgba(255,255,255,0.1)',
                                ],
                              }}
                              transition={{
                                duration: 10 / (i + 1),
                                repeat: Infinity,
                                ease: 'linear',
                              }}
                            />
                          ))}
                        </div>

                        {/* Metrics */}
                        <div className='absolute bottom-0 left-0 right-0 flex justify-between text-xs text-white/70'>
                          <div className='bg-white/10 rounded-lg px-3 py-1'>
                            <span className='text-[#6C5CE7] font-bold'>
                              8.2M
                            </span>{' '}
                            events/sec
                          </div>
                          <div className='bg-white/10 rounded-lg px-3 py-1'>
                            <span className='text-[#FD79A8] font-bold'>
                              5.3ms
                            </span>{' '}
                            latency
                          </div>
                          <div className='bg-white/10 rounded-lg px-3 py-1'>
                            <span className='text-[#00B894] font-bold'>
                              99.99%
                            </span>{' '}
                            uptime
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeCapability === 2 && (
                    <div className='w-full h-full flex flex-col'>
                      <div className='text-white/80 text-sm mb-4'>
                        AI-Powered Insights
                      </div>

                      {/* AI Visualization */}
                      <div className='flex-1 relative'>
                        {/* Neural Network Visualization */}
                        <svg className='w-full h-full' viewBox='0 0 100 60'>
                          {/* Nodes */}
                          {[...Array(4)].map((_, i) => (
                            <g key={`layer-${i}`}>
                              {[...Array(i === 0 || i === 3 ? 3 : 5)].map(
                                (_, j) => {
                                  const x = 20 + i * 20
                                  const y =
                                    i === 0 || i === 3
                                      ? 20 + j * 10
                                      : 10 + j * 10

                                  return (
                                    <motion.circle
                                      key={`node-${i}-${j}`}
                                      cx={x}
                                      cy={y}
                                      r='2'
                                      fill={
                                        i === 0
                                          ? '#0984E3'
                                          : i === 3
                                          ? '#00B894'
                                          : '#FD79A8'
                                      }
                                      animate={{
                                        r: [2, 3, 2],
                                        opacity: [0.7, 1, 0.7],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3 + j * 0.1,
                                      }}
                                    />
                                  )
                                }
                              )}
                            </g>
                          ))}

                          {/* Connections */}
                          {[...Array(3)]
                            .map((_, layerIndex) => {
                              const sourceCount = layerIndex === 0 ? 3 : 5
                              const targetCount = layerIndex === 2 ? 3 : 5

                              return [...Array(sourceCount)].map(
                                (_, sourceIndex) => {
                                  const sourceX = 20 + layerIndex * 20
                                  const sourceY =
                                    layerIndex === 0
                                      ? 20 + sourceIndex * 10
                                      : 10 + sourceIndex * 10

                                  return [...Array(targetCount)].map(
                                    (_, targetIndex) => {
                                      const targetX = 20 + (layerIndex + 1) * 20
                                      const targetY =
                                        layerIndex === 2
                                          ? 20 + targetIndex * 10
                                          : 10 + targetIndex * 10

                                      // Only draw some connections to avoid clutter
                                      if (
                                        (sourceIndex + targetIndex) % 2 ===
                                        0
                                      ) {
                                        return (
                                          <motion.line
                                            key={`conn-${layerIndex}-${sourceIndex}-${targetIndex}`}
                                            x1={sourceX}
                                            y1={sourceY}
                                            x2={targetX}
                                            y2={targetY}
                                            stroke='rgba(255,255,255,0.2)'
                                            strokeWidth='0.5'
                                            initial={{ pathLength: 0 }}
                                            animate={{
                                              pathLength: [0, 1],
                                              stroke: [
                                                'rgba(255,255,255,0.1)',
                                                'rgba(255,255,255,0.3)',
                                                'rgba(255,255,255,0.1)',
                                              ],
                                            }}
                                            transition={{
                                              duration: 2,
                                              repeat: Infinity,
                                              delay:
                                                layerIndex * 0.3 +
                                                sourceIndex * 0.1 +
                                                targetIndex * 0.05,
                                            }}
                                          />
                                        )
                                      }
                                      return null
                                    }
                                  )
                                }
                              )
                            })
                            .flat()
                            .flat()
                            .filter(Boolean)}

                          {/* Data Flow */}
                          {[...Array(3)].map((_, i) => {
                            const y = 20 + i * 10
                            return (
                              <motion.circle
                                key={`flow-${i}`}
                                cx='20'
                                cy={y}
                                r='1.5'
                                fill='#0984E3'
                                animate={{
                                  cx: [20, 40, 60, 80],
                                  fill: [
                                    '#0984E3',
                                    '#FD79A8',
                                    '#FD79A8',
                                    '#00B894',
                                  ],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  delay: i * 0.5,
                                }}
                              />
                            )
                          })}
                        </svg>

                        {/* AI Insights */}
                        <div className='absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 space-y-3'>
                          {[
                            'Anomaly detected in sensor #247',
                            'Efficiency can be improved by 23%',
                            'Maintenance required in 48 hours',
                          ].map((insight, i) => (
                            <motion.div
                              key={i}
                              className='bg-white/10 rounded-lg p-2 text-xs text-white'
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 1 + i * 0.5,
                              }}
                            >
                              {insight}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Analytics Platform Features */}
          <motion.div
            className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                title: 'Scalable Data Pipeline',
                description:
                  'Process petabytes of IoT data with our cloud-native data ingestion and processing pipeline',
                icon: '🔄',
              },
              {
                title: 'Custom ML Models',
                description:
                  'Deploy your own machine learning models or leverage our pre-built industry-specific models',
                icon: '🧩',
              },
              {
                title: 'Interactive Dashboards',
                description:
                  'Visualize IoT insights with customizable dashboards and real-time monitoring',
                icon: '📱',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className='text-3xl mb-4'>{feature.icon}</div>
                <h3 className='text-lg font-bold text-white mb-2'>
                  {feature.title}
                </h3>
                <p className='text-white/70 text-sm'>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IoTAnalyticsSection
