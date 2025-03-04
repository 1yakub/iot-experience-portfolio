'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const IoTDashboardPreview = () => {
  // Simulated data for dashboard
  const [temperatureData, setTemperatureData] = useState([
    21, 22, 23, 22, 24, 25, 24, 23, 22, 21, 22, 23,
  ])
  const [humidityData, setHumidityData] = useState([
    45, 46, 48, 50, 52, 53, 51, 49, 47, 45, 44, 46,
  ])
  const [energyData, setEnergyData] = useState([
    30, 42, 65, 70, 55, 40, 38, 50, 56, 48, 42, 38,
  ])
  const [deviceStatus, setDeviceStatus] = useState([
    {
      id: 1,
      name: 'Smart Thermostat',
      status: 'Online',
      value: '23°C',
      icon: '🌡️',
    },
    {
      id: 2,
      name: 'Security Camera',
      status: 'Online',
      value: 'Recording',
      icon: '📹',
    },
    {
      id: 3,
      name: 'Smart Lock',
      status: 'Online',
      value: 'Locked',
      icon: '🔒',
    },
    {
      id: 4,
      name: 'Air Purifier',
      status: 'Online',
      value: 'Active',
      icon: '💨',
    },
    {
      id: 5,
      name: 'Motion Sensor',
      status: 'Online',
      value: 'No motion',
      icon: '📡',
    },
    {
      id: 6,
      name: 'Smart Lighting',
      status: 'Online',
      value: '70%',
      icon: '💡',
    },
  ])
  const [activeAlerts, setActiveAlerts] = useState([
    {
      id: 1,
      severity: 'Low',
      message: 'Battery low on motion sensor',
      time: '10 min ago',
    },
    {
      id: 2,
      severity: 'Medium',
      message: 'Unusual energy consumption',
      time: '25 min ago',
    },
  ])
  const [currentTime, setCurrentTime] = useState('')

  // Update time
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString())

      // Simulate data changes
      if (Math.random() > 0.7) {
        const newTemp = [...temperatureData]
        newTemp.shift()
        newTemp.push(Math.floor(20 + Math.random() * 6))
        setTemperatureData(newTemp)

        const newHumidity = [...humidityData]
        newHumidity.shift()
        newHumidity.push(Math.floor(44 + Math.random() * 10))
        setHumidityData(newHumidity)

        const newEnergy = [...energyData]
        newEnergy.shift()
        newEnergy.push(Math.floor(30 + Math.random() * 40))
        setEnergyData(newEnergy)
      }

      // Randomly update device status
      if (Math.random() > 0.8) {
        const newDevices = [...deviceStatus]
        const randomIndex = Math.floor(Math.random() * newDevices.length)
        if (newDevices[randomIndex].name === 'Motion Sensor') {
          newDevices[randomIndex].value =
            Math.random() > 0.5 ? 'Motion detected' : 'No motion'
        } else if (newDevices[randomIndex].name === 'Smart Lighting') {
          newDevices[randomIndex].value = `${Math.floor(
            30 + Math.random() * 70
          )}%`
        } else if (newDevices[randomIndex].name === 'Smart Thermostat') {
          newDevices[randomIndex].value = `${Math.floor(
            20 + Math.random() * 6
          )}°C`
        }
        setDeviceStatus(newDevices)
      }

      // Randomly add/remove alerts
      if (Math.random() > 0.9) {
        const alertMessages = [
          'Motion detected in living room',
          'Front door unlocked',
          'Temperature above threshold',
          'Smoke detected in kitchen',
          'Water leak detected',
          'Internet connection unstable',
        ]
        const severities = ['Low', 'Medium', 'High']

        if (activeAlerts.length < 4) {
          // Add alert
          setActiveAlerts([
            ...activeAlerts,
            {
              id: Date.now(),
              severity:
                severities[Math.floor(Math.random() * severities.length)],
              message:
                alertMessages[Math.floor(Math.random() * alertMessages.length)],
              time: 'Just now',
            },
          ])
        } else {
          // Remove alert
          const newAlerts = [...activeAlerts]
          newAlerts.shift()
          setActiveAlerts(newAlerts)
        }
      }
    }, 2000)

    return () => clearInterval(timer)
  }, [temperatureData, humidityData, energyData, deviceStatus, activeAlerts])

  return (
    <section className='py-20 bg-gradient-to-b from-[#1E293B] to-[#0F172A] text-white relative overflow-hidden'>
      {/* Background Pattern */}
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
            className='inline-flex items-center space-x-2 text-white text-sm font-medium mb-4 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30'
          >
            <span className='flex h-2 w-2 rounded-full bg-blue-500 animate-pulse'></span>
            <span className='tracking-wider uppercase'>
              Real-time Monitoring
            </span>
          </motion.div>
          <motion.h2
            className='text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Powerful IoT Dashboard
          </motion.h2>
          <motion.p
            className='text-xl text-white/80'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Monitor and control all your IoT devices from a single, intuitive
            interface with real-time data visualization
          </motion.p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          className='max-w-6xl mx-auto bg-[#1A1F35]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Dashboard Header */}
          <div className='bg-[#111827] border-b border-white/10 p-4 flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
              <div className='w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <div>
                <h3 className='font-bold text-xl'>IoT Control Center</h3>
                <p className='text-sm text-white/70'>Smart Home Dashboard</p>
              </div>
            </div>

            <div className='flex items-center space-x-6'>
              <div className='text-white/70 text-sm'>
                <span className='font-medium'>{currentTime}</span>
              </div>
              <div className='flex space-x-2'>
                <button className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                    />
                  </svg>
                </button>
                <button className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </button>
                <button className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h7'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className='grid grid-cols-12 gap-6 p-6'>
            {/* Main Charts Section */}
            <div className='col-span-12 lg:col-span-8 space-y-6'>
              {/* Temperature Chart */}
              <div className='bg-[#111827]/50 p-6 rounded-xl border border-white/10'>
                <div className='flex justify-between items-center mb-6'>
                  <h4 className='font-medium text-white'>
                    Temperature Monitoring
                  </h4>
                  <div className='flex items-center space-x-2'>
                    <span className='text-cyan-400 font-bold text-xl'>
                      {temperatureData[temperatureData.length - 1]}°C
                    </span>
                    <span className='px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full'>
                      {temperatureData[temperatureData.length - 1] >
                      temperatureData[temperatureData.length - 2]
                        ? '+'
                        : ''}
                      {temperatureData[temperatureData.length - 1] -
                        temperatureData[temperatureData.length - 2]}
                      °C
                    </span>
                  </div>
                </div>
                <div className='h-48 flex items-end space-x-1'>
                  {temperatureData.map((temp, i) => (
                    <div
                      key={i}
                      className='flex-1 flex flex-col items-center group'
                    >
                      <div className='w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t relative'>
                        <motion.div
                          className='absolute inset-0'
                          initial={{ height: 0 }}
                          animate={{ height: `${(temp / 30) * 100}%` }}
                          transition={{ duration: 0.5 }}
                        ></motion.div>
                        <div className='opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-[#111827] px-2 py-1 rounded text-xs font-medium transition-opacity'>
                          {temp}°C
                        </div>
                      </div>
                      <span className='text-xs mt-2 text-white/50'>
                        {i * 10}m
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Energy Consumption */}
              <div className='bg-[#111827]/50 p-6 rounded-xl border border-white/10'>
                <div className='flex justify-between items-center mb-6'>
                  <h4 className='font-medium text-white'>Energy Consumption</h4>
                  <div className='flex items-center space-x-2'>
                    <span className='text-purple-400 font-bold text-xl'>
                      {energyData[energyData.length - 1]} kWh
                    </span>
                    <span
                      className={`px-2 py-1 ${
                        energyData[energyData.length - 1] >
                        energyData[energyData.length - 2]
                          ? 'bg-red-400/20 text-red-400'
                          : 'bg-green-400/20 text-green-400'
                      } text-xs rounded-full`}
                    >
                      {energyData[energyData.length - 1] >
                      energyData[energyData.length - 2]
                        ? '+'
                        : ''}
                      {energyData[energyData.length - 1] -
                        energyData[energyData.length - 2]}{' '}
                      kWh
                    </span>
                  </div>
                </div>
                <div className='h-48 relative'>
                  <svg className='w-full h-full' viewBox='0 0 120 48'>
                    <defs>
                      <linearGradient
                        id='energyGradient'
                        x1='0%'
                        y1='0%'
                        x2='0%'
                        y2='100%'
                      >
                        <stop offset='0%' stopColor='rgba(168, 85, 247, 0.5)' />
                        <stop offset='100%' stopColor='rgba(168, 85, 247, 0)' />
                      </linearGradient>
                    </defs>

                    {/* Grid Lines */}
                    {[...Array(5)].map((_, i) => (
                      <line
                        key={`h-${i}`}
                        x1='0'
                        y1={i * 12}
                        x2='120'
                        y2={i * 12}
                        stroke='rgba(255,255,255,0.1)'
                        strokeWidth='1'
                      />
                    ))}

                    {/* Energy Line */}
                    <motion.path
                      d={`M 0,${48 - (energyData[0] / 100) * 48} ${energyData
                        .map(
                          (value, i) => `L ${i * 10},${48 - (value / 100) * 48}`
                        )
                        .join(' ')}`}
                      fill='none'
                      stroke='#A855F7'
                      strokeWidth='2'
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5 }}
                    />

                    {/* Area Fill */}
                    <motion.path
                      d={`M 0,${48 - (energyData[0] / 100) * 48} ${energyData
                        .map(
                          (value, i) => `L ${i * 10},${48 - (value / 100) * 48}`
                        )
                        .join(' ')} L 120,48 L 0,48 Z`}
                      fill='url(#energyGradient)'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />

                    {/* Data Points */}
                    {energyData.map((value, i) => (
                      <motion.circle
                        key={i}
                        cx={i * 10}
                        cy={48 - (value / 100) * 48}
                        r='3'
                        fill='#A855F7'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className='col-span-12 lg:col-span-4 space-y-6'>
              {/* Device Status */}
              <div className='bg-[#111827]/50 p-6 rounded-xl border border-white/10'>
                <h4 className='font-medium text-white mb-4'>
                  Connected Devices
                </h4>
                <div className='space-y-3 max-h-[300px] overflow-y-auto pr-2'>
                  {deviceStatus.map((device) => (
                    <motion.div
                      key={device.id}
                      className='flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5'
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className='flex items-center space-x-3'>
                        <div className='w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-lg'>
                          {device.icon}
                        </div>
                        <div>
                          <h5 className='text-sm font-medium text-white'>
                            {device.name}
                          </h5>
                          <div className='flex items-center space-x-2'>
                            <span className='flex h-2 w-2 rounded-full bg-green-400'></span>
                            <span className='text-xs text-white/60'>
                              {device.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='text-sm font-medium text-white/80'>
                        {device.value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Alerts */}
              <div className='bg-[#111827]/50 p-6 rounded-xl border border-white/10'>
                <h4 className='font-medium text-white mb-4'>Active Alerts</h4>
                <div className='space-y-3'>
                  {activeAlerts.length > 0 ? (
                    activeAlerts.map((alert) => (
                      <motion.div
                        key={alert.id}
                        className='p-3 bg-white/5 rounded-lg border border-white/5'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className='flex items-start justify-between'>
                          <div className='flex items-start space-x-3'>
                            <div
                              className={`mt-0.5 h-2 w-2 rounded-full ${
                                alert.severity === 'High'
                                  ? 'bg-red-500'
                                  : alert.severity === 'Medium'
                                  ? 'bg-yellow-500'
                                  : 'bg-blue-500'
                              }`}
                            ></div>
                            <div>
                              <h5 className='text-sm font-medium text-white'>
                                {alert.message}
                              </h5>
                              <p className='text-xs text-white/60'>
                                {alert.time}
                              </p>
                            </div>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              alert.severity === 'High'
                                ? 'bg-red-500/20 text-red-400'
                                : alert.severity === 'Medium'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-blue-500/20 text-blue-400'
                            }`}
                          >
                            {alert.severity}
                          </span>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className='text-center py-6 text-white/50'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-10 w-10 mx-auto mb-2 text-white/30'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        />
                      </svg>
                      <p className='text-sm'>No active alerts</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Humidity */}
              <div className='bg-[#111827]/50 p-6 rounded-xl border border-white/10'>
                <div className='flex justify-between items-center mb-4'>
                  <h4 className='font-medium text-white'>Humidity</h4>
                  <span className='text-blue-400 font-bold'>
                    {humidityData[humidityData.length - 1]}%
                  </span>
                </div>
                <div className='relative h-4 bg-white/10 rounded-full overflow-hidden'>
                  <motion.div
                    className='absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full'
                    initial={{ width: '0%' }}
                    animate={{
                      width: `${humidityData[humidityData.length - 1]}%`,
                    }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
                <div className='flex justify-between mt-2 text-xs text-white/50'>
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Footer */}
          <div className='bg-[#111827] border-t border-white/10 p-4 flex justify-between items-center'>
            <div className='text-white/50 text-sm'>
              Powered by{' '}
              <span className='text-blue-400 font-medium'>IoT Experience</span>
            </div>
            <div className='flex space-x-4'>
              <button className='px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors'>
                View Full Dashboard
              </button>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              title: 'Real-time Monitoring',
              description:
                'Track device status, sensor readings, and system performance with live data updates',
              icon: '📊',
            },
            {
              title: 'Intelligent Alerts',
              description:
                'Receive instant notifications about critical events and anomalies in your IoT ecosystem',
              icon: '🔔',
            },
            {
              title: 'Custom Dashboards',
              description:
                'Create personalized views with the metrics and controls most important to your operations',
              icon: '🎛️',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className='bg-[#111827]/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(17, 24, 39, 0.7)' }}
            >
              <div className='text-3xl mb-4 flex justify-center'>
                {feature.icon}
              </div>
              <h3 className='text-lg font-bold text-white mb-2'>
                {feature.title}
              </h3>
              <p className='text-white/70 text-sm'>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default IoTDashboardPreview
